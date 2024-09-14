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
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29],
        backgroundColor: "#fb6340",
        maxBarThickness: 10,
        borderRadius: 10,
        borderSkipped: false,
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
        ticks: {
          beginAtZero: true,
          padding: 10,
          callback: function (value) {
            if (!(value % 10)) {
              return value;
            }
          },
        },

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
    <>
      <div
        className="bg-white shadow-md sm:p-8 p-4 rounded-md"
        style={{ height: "33rem" }}
      >
        <div>
          <span className="uppercase text-sm text-gray-500">Performance</span>
          <h2 className="text-black text-xl mb-16">Total orders</h2>
        </div>
        <div>
          <Bar
            data={data}
            options={options}
            height={437}
            width={408}
            style={{ height: "350px", width: "327px" }}
          />
        </div>
      </div>
    </>
  );
}
