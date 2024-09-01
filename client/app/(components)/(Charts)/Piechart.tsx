"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
  { branch: "DSAI", placed: 275, fill: "var(--color-DSAI)" },
  { branch: "CSE", placed: 200, fill: "var(--color-CSE)" },
  { branch: "ECE", placed: 187, fill: "var(--color-ECE)" },
]

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
} satisfies ChartConfig

const Piechart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
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
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this months
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total placed for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default Piechart