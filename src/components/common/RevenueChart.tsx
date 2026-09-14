import { memo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { revenueData } from "../../data/dashboardData";

const RevenueChart = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Revenue Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Monthly revenue performance
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            <Tooltip
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Revenue",
              ]}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(RevenueChart);