import { memo } from "react";

import StatCard from "../../components/common/StatCard";
import RevenueChart from "../../components/common/RevenueChart";
import UserChart from "../../components/common/UserChart";
import UserDistributionChart from "../../components/common/UserDistributionChart";
import { dashboardStats } from "../../data/dashboardData";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
          />
        ))}
      </div>
       {/* Charts */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <RevenueChart />
        <UserChart />
      </div>

      {/* Distribution */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <UserDistributionChart />

        {/* We can put Recent Activity here */}
      </div>
    </div>
  );
};

export default memo(Dashboard);