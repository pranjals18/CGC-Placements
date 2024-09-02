"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { branch: "DSAI", placed: 275, fill: "var(--color-DSAI)" },
  { branch: "CSE", placed: 200, fill: "var(--color-CSE)" },
  { branch: "ECE", placed: 187, fill: "var(--color-ECE)" },
];

const chartConfig = {
  placed: {
    label: "Placed",
  },
  DSAI: {
    label: "DSAI",
    color: "hsl(var(--chart-1))",
  },
  CSE: {
    label: "CSE",
    color: "hsl(var(--chart-2))",
  },
  ECE: {
    label: "ECE",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const Piechart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Analysis</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="placed"
              nameKey="branch"
              innerRadius={75}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-wrap items-center justify-center gap-y-3">
          <div className="w-full px-6 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#3C50E0]"></span>
              <p className="flex w-full gap-3 text-sm font-medium text-black dark:text-white">
                <span> DSAI </span>
                <span> 32.5% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
              <p className="flex w-full gap-3 text-sm font-medium text-black dark:text-white">
                <span> CSE </span>
                <span> 47.5% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
              <p className="flex w-full gap-3 text-sm font-medium text-black dark:text-white">
                <span> ECE </span>
                <span> 25% </span>
              </p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Piechart;
