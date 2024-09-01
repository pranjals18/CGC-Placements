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

        <div className="mt-4 rounded-lg overflow-hidden bg-white">
          <h1 className="text-2xl font-bold p-4">Eligible Jobs</h1>
          <TableComponent />
        </div>

        <div className="mt-4 rounded-lg overflow-hidden bg-white">
          <h1 className="text-2xl font-bold p-4">Non Eligible Jobs</h1>
          <TableComponent />
        </div>
    </div>
  );
};

export default Dashboard;
