import React from "react";
import LineChart from "../components/dashboard/LineChart";
import BarChart from "../components/dashboard/BarChart";
import PageVisit from "../components/dashboard/PageVisit";
import SocialTraffic from "../components/dashboard/SocialTraffic";

export default function Dashboard() {
  return (
    <>
      <div className="container sm:-mt-20 -mt-14 sm:px-8 px-4">
        <div className="flex flex-wrap">
          <div className="sm:w-2/3 w-full sm:pr-4 mb-7 sm:mb-0">
            <LineChart />
          </div>
          <div className="sm:w-1/3 w-full sm:pl-4">
            <BarChart />
          </div>
        </div>
        <div className="flex flex-wrap mt-7">
          <div className="sm:w-2/3 w-full sm:pr-4 mb-7 sm:mb-0">
            <PageVisit />
          </div>
          <div className="sm:w-1/3 w-full sm:pl-4">
            <SocialTraffic />
          </div>
        </div>
      </div>
    </>
  );
}
