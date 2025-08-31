"use client";

import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

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

export const description = "A radial chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--chart-1)" },
  { browser: "safari", visitors: 200, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 187, fill: "var(--chart-3)" },
  { browser: "edge", visitors: 173, fill: "var(--chart-4)" },
  { browser: "other", visitors: 90, fill: "var(--chart-5)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function DoughnutChart() {
  const totalVisitors = chartData.reduce((acc, d) => acc + d.visitors, 0);
  return (
    <Card className="w-96 flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart</CardTitle>
        <CardDescription>January - June 2025 <hr /></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-wrap gap-3 mt-6">
          {chartData.map((item) => {
            const percent = ((item.visitors / totalVisitors) * 100).toFixed(1);
            return (
              <div key={item.browser} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.fill }}></span>
                <span className="text-sm">
                  {item.browser}:{" "}
                  <span className="font-semibold">{percent}%</span>
                </span>
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
