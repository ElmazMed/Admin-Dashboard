import React from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

export default function Dashboard() {
  return (
    <>
      <div className="flex -mt-20 ">
        <div className="w-2/3">
          <LineChart />
        </div>
        <div className="w-2/5">
          <BarChart />
        </div>
      </div>
    </>
  );
}
