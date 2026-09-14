import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { memo } from "react";
import type {StatCardProps} from '../../types/dashboard'


const StatCard = ({
  title,
  value,
  change,
  changeType,
}: StatCardProps) => {
  const isPositive = changeType === "positive";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            {value}
          </h2>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 text-sm">
        {isPositive ? (
          <ArrowUpRight className="h-4 w-4 text-emerald-500" />
        ) : (
          <ArrowDownRight className="h-4 w-4 text-red-500" />
        )}

        <span
          className={
            isPositive
              ? "font-medium text-emerald-500"
              : "font-medium text-red-500"
          }
        >
          {change}
        </span>

        <span className="text-slate-400">
          from last month
        </span>
      </div>
    </div>
  );
};

export default memo(StatCard);