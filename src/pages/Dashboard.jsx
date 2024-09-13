import React from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PageVisit from "../components/PageVisit";
import SocialTraffic from "../components/SocialTraffic";

export default function Dashboard() {
  return (
    <>
      <div className="container -mt-20 px-8">
        <div className="flex">
          <div className="w-2/3 pr-4">
            <LineChart />
          </div>
          <div className="w-1/3 pl-4">
            <BarChart />
          </div>
        </div>
        <div className="flex mt-7">
          <div className="w-2/3 pr-4">
            <PageVisit />
          </div>
          <div className="w-1/3 pl-4">
            <SocialTraffic />
          </div>
        </div>
      </div>
    </>
  );
}
