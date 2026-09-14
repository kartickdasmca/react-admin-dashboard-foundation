import { memo } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { userDistributionData } from "../../data/dashboardData";

const COLORS = ["#f97316", "#6366f1", "#10b981"];

const UserDistributionChart = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          User Distribution
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Users by device type
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={userDistributionData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={110}
              paddingAngle={3}
              label={({ name, percent }) =>
                `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
              }
            >
              {userDistributionData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={
                    COLORS[
                      userDistributionData.indexOf(entry)
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [`${value}%`, "Users"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(UserDistributionChart);