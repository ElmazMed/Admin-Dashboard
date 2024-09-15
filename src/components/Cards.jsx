import { FaChartColumn } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import Search from "./Search";

export default function Cards() {
  return (
    <>
      <section
        className="bg-sky-500 sm:h-96 sm:p-8 p-4 flex flex-col gap-16"
        style={{ height: "40rem" }}
      >
        <Search />
        <div className="cards flex flex-wrap gap-4 justify-between items-center ">
          <div className="card bg-white shadow-md p-4 rounded-md sm:w-72 w-full">
            <div className="card-body">
              <div className="flex justify-between mb-5">
                <div>
                  <h5 className="uppercase text-gray-500">Traffic</h5>
                  <span>350,896</span>
                </div>
                <div className="rounded-full w-12 h-12 p-2 bg-red-600 flex items-center justify-center">
                  <FaChartColumn className="text-white text-lg" />
                </div>
              </div>

              <p className="flex gap-2 text-gray-500">
                <span className="flex items-center text-green-500">
                  <FaArrowUp />
                  3.48%
                </span>{" "}
                Since last month
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-md p-4 rounded-md sm:w-72 w-full">
            <div className="card-body">
              <div className="flex justify-between mb-5">
                <div>
                  <h5 className="uppercase text-gray-500">New users</h5>
                  <span>2,356</span>
                </div>
                <div className="rounded-full w-12 h-12 p-2 bg-orange-500 flex items-center justify-center">
                  <FaChartPie className="text-white text-lg" />
                </div>
              </div>

              <p className="flex gap-2 text-gray-500">
                <span className="flex items-center text-red-500">
                  <FaArrowDown />
                  3.48%
                </span>{" "}
                Since last week
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-md p-4 rounded-md sm:w-72 w-full">
            <div className="card-body">
              <div className="flex justify-between mb-5">
                <div>
                  <h5 className="uppercase text-gray-500">Sales</h5>
                  <span>929</span>
                </div>
                <div className="rounded-full w-12 h-12 p-2 bg-yellow-400 flex items-center justify-center">
                  <FaUsers className="text-white text-lg" />
                </div>
              </div>

              <p className="flex gap-2 text-gray-500">
                <span className="flex items-center text-red-500">
                  <FaArrowDown />
                  1.10%
                </span>{" "}
                Since yesterday
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-md p-4 rounded-md sm:w-72 w-full">
            <div className="card-body">
              <div className="flex justify-between mb-5">
                <div>
                  <h5 className="uppercase text-gray-500">Performance</h5>
                  <span>49,15%</span>
                </div>
                <div className="rounded-full w-12 h-12 p-2 bg-cyan-400 flex items-center justify-center">
                  <FaPercentage className="text-white text-lg" />
                </div>
              </div>

              <p className="flex gap-2 text-gray-500">
                <span className="flex items-center text-green-500">
                  <FaArrowUp />
                  12%
                </span>{" "}
                Since last month
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
