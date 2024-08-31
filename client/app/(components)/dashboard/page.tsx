"use client";

import { useExpandContext } from "@/app/(Context)/ExpandContext";
import React from "react";
import LineChart from "../(Charts)/LineChart";
import Piechart from "../(Charts)/Piechart";
import TableComponent from "../(Tables)/TableComponent";

const Dashboard = () => {
  const { expand } = useExpandContext();
  return (
    <div
      className={`p-7 bg-slate-200 transition-all duration-300 ${
        expand ? "ml-56" : "ml-20"
      }`}
    >
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        <div
          className={`rounded-md flex flex-col gap-2 justify-end p-6 transition-all duration-300 h-36 bg-white shadow-lg ${
            expand ? "w-[calc(100%)]" : "w-[calc(100%)]"
          }`}
        >
          <h1 className="text-3xl font-bold">35</h1>
          <h3 className="text-lg text-gray-400">Total Companies</h3>
        </div>
        <div
          className={`rounded-md flex flex-col gap-2 justify-end p-6 transition-all duration-300 h-36 bg-white shadow-lg ${
            expand ? "w-[calc(100%)]" : "w-[calc(100%)]"
          }`}
        >
          <h1 className="text-3xl font-bold">30</h1>
          <h3 className="text-lg text-gray-400">Eligible Companies</h3>
        </div>
        <div
          className={`rounded-md flex flex-col gap-2 justify-end p-6 transition-all duration-300 h-36 bg-white shadow-lg ${
            expand ? "w-[calc(100%)]" : "w-[calc(100%)]"
          }`}
        >
          <h1 className="text-3xl font-bold">20</h1>
          <h3 className="text-lg text-gray-400">Applied Companies</h3>
        </div>
        <div
          className={`rounded-md flex flex-col gap-2 justify-end p-6 transition-all duration-300 h-36 bg-white shadow-lg ${
            expand ? "w-[calc(100%)]" : "w-[calc(100%)]"
          }`}
        >
          <h1 className="text-3xl font-bold">8</h1>
          <h3 className="text-lg text-gray-400">In Progress</h3>
        </div>
      </div>
      <div className="flex max-lg:flex-col gap-4">
        <div className="mt-4 lg:w-2/3">
          <LineChart />
        </div>
        <div className="mt-4 lg:w-1/3">
          <Piechart />
        </div>
      </div>
        <div className="mt-4 rounded-lg overflow-hidden bg-white">
          <h1 className="text-2xl font-bold p-4">Recent Companies</h1>
          <TableComponent />
        </div>
    </div>
  );
};

export default Dashboard;
