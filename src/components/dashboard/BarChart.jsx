import React, { useContext } from "react";
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
import { ThemeContext } from "../ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const { theme } = useContext(ThemeContext);
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
    maintainAspectRatio: false,
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
        ticks: {
          color: theme === "light" ? "#5A5A5A" : "#FFFFFF",
        },
      },
      y: {
        ticks: {
          color: theme === "light" ? "#5A5A5A" : "#FFFFFF",
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
      <div className="bg-white dark:bg-blue-950 h-chart-h shadow-md sm:p-8 p-4 rounded-md">
        <div>
          <span className="uppercase text-sm dark:text-white text-gray-500">
            Performance
          </span>
          <h2 className="text-black dark:text-white text-xl mb-16">
            Total orders
          </h2>
        </div>
        <div className="relative w-full h-[350px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
}
