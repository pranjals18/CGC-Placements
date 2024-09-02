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
      <h1 className="text-2xl font-bold mb-1 mt-2 text-gray-600 border-b">
        Statistics
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        <div
          className={`rounded-md flex flex-col gap-2 justify-end p-4 transition-all duration-300 h-32 bg-white hover:shadow-xl hover:pb-6 hover:pl-5 cursor-pointer ${
            expand ? "w-[calc(100%)]" : "w-[calc(100%)]" 
          }`}
        >
          <h1 className="text-3xl font-bold">35</h1>
          <h3 className="text-lg text-gray-400">Total Companies</h3>
        </div>

        <div
          className={`rounded-md flex flex-col gap-2 justify-end p-4 transition-all duration-300 h-32 bg-white hover:shadow-xl hover:pb-6 hover:pl-5 cursor-pointer ${
            expand ? "w-[calc(100%)]" : "w-[calc(100%)]"
          }`}
        >
          <h1 className="text-3xl font-bold">30</h1>
          <h3 className="text-lg text-gray-400">Eligible Companies</h3>
        </div>

        <div
          className={`rounded-md flex flex-col gap-2 justify-end p-4 transition-all duration-300 h-32 bg-white hover:shadow-xl hover:pb-6 hover:pl-5 cursor-pointer ${
            expand ? "w-[calc(100%)]" : "w-[calc(100%)]"
          }`}
        >
          <h1 className="text-3xl font-bold">20</h1>
          <h3 className="text-lg text-gray-400">Applied Companies</h3>
        </div>

        <div
          className={`rounded-md flex flex-col gap-2 justify-end p-4 transition-all duration-300 h-32 bg-white hover:shadow-xl hover:pb-6 hover:pl-5 cursor-pointer ${
            expand ? "w-[calc(100%)]" : "w-[calc(100%)]"
          }`}
        >
          <h1 className="text-3xl font-bold">8</h1>
          <h3 className="text-lg text-gray-400">In Progress</h3>
        </div>
      </div>


      <h1 className="text-2xl font-bold mt-6 text-gray-600 border-b">
        Analytics
      </h1>

      <div className="flex max-lg:flex-col gap-4">
        <div className="mt-1 lg:w-2/3 transition-all duration-300 hover:shadow-xl shadow-black rounded-lg bg-white border border-gray-100">
          <LineChart />
        </div>
        <div className="mt-1 lg:w-1/3 transition-all duration-300 hover:shadow-xl shadow-black rounded-lg bg-white border border-gray-100">
          <Piechart />
        </div>
      </div>


      <h1 className="text-2xl font-bold mt-6 text-gray-600 border-b">
        Recent Companies
      </h1>

      <div className="mt-1 rounded-lg overflow-hidden transition-all duration-300 bg-white border border-gray-100 hover:shadow-xl">
        <TableComponent />
      </div>
    </div>
  );
};

export default Dashboard;
