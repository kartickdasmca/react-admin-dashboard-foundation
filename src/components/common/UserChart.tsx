import { memo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { userData } from "../../data/dashboardData";

const UserChart = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          User Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Monthly active users
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={userData}
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
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Tooltip
              formatter={(value) => [
                Number(value).toLocaleString(),
                "Users",
              ]}
            />

            <Bar
              dataKey="users"
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
              barSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(UserChart);