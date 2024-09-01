"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ReactApexChart with ssr: false
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 60,
  },
};

const LineChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const series = [
    {
      name: "Average CTC",
      data: [6, 7, 7.3, 8, 11.52, 9.54],
    },
    {
      name: "Highest CTC",
      data: [10, 11, 25, 25, 35, 46],
    },
  ];

  return (
    <div className="w-full">
      <div className="gap-4">
        <div className=" h-[455px] col-span-12 xl:col-span-8 px-5 pb-5 pt-7.5 dark:bg-boxdark sm:px-7.5">
          <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex w-full flex-wrap gap-3 sm:gap-5 mt-5">
              <div className="flex w-1/4">
                <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#3C50E0]">
                  <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#3C50E0] "></span>
                </span>
                <div className="w-full">
                  <p className="font-semibold text-[#3C50E0]">
                    Average CTC (LPA)
                  </p>
                </div>
              </div>
              <div className="flex w-1/4">
                <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#80CAEE]">
                  <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#80CAEE]"></span>
                </span>
                <div className="w-full">
                  <p className="font-semibold text-[#80CAEE]">
                    Highest CTC (LPA)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {isClient && (
              <div id="chartOne" className="-ml-5">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="area"
                  height={350}
                  width={"100%"}
                />
              </div>
            )}
          </div>
        </div>

        {/* More widgets/components can go here */}
      </div>
    </div>
  );
};

export default LineChart;
