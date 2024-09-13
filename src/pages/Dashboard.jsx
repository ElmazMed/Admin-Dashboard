import React from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

export default function Dashboard() {
  return (
    <>
      <div className="flex -mt-20 p-8 gap-7">
        <div className="w-4/5">
          <LineChart />
        </div>
        <div className="w-2/6">
          <BarChart />
        </div>
      </div>
    </>
  );
}
