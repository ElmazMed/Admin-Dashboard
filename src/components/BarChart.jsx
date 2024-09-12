import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Dataset 1",
        data: [0, 10, 20, 30],
        backgroundColor: "#FF6384",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        stacked: true,
      },
    },
  };

  return (
    <div className="p-8">
      <div className="bg-white shadow-md w-full h-96 p-8 rounded-md">
        <span className="uppercase text-sm text-gray-500">Performance</span>
        <h2 className="text-black text-xl mb-12">Total orders</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
