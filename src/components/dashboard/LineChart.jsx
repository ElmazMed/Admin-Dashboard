import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "",
        data: [0, 20, 10, 30, 20, 40, 30, 50, 40, 60],
        fill: false,
        backgroundColor: "transparent",
        borderColor: "#5e72e4",
        pointBorderColor: "transparent",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#dbdbdb",
        },
        border: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },

      y: {
        border: {
          display: false,
        },
        grid: {
          offset: true,
          display: false,
        },
        ticks: {
          color: "#dbdbdb",
          callback: (value) => "$" + value + "K",
        },
      },
    },
  };
  return (
    <>
      <div className="bg-blue-950 sm:p-8 h-chart-h p-4 rounded-md">
        <div className="flex justify-between mb-10">
          <div>
            <span className="uppercase text-sm text-gray-300">overview</span>
            <h2 className="text-white text-xl">Sales value</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="text-white text-sm bg-indigo-500 px-4 h-10 rounded-md"
            >
              Month
            </button>
            <button
              type="button"
              className="text-indigo-500 text-sm bg-white px-4 h-10 rounded-md"
            >
              Week
            </button>
          </div>
        </div>
        <div className="relative w-full h-[370px]">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
}
