import type { DashboardStat } from "../types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    id: "total-users",
    title: "Total Users",
    value: "12,480",
    change: "+12.5%",
    changeType: "positive",
  },
  {
    id: "total-revenue",
    title: "Total Revenue",
    value: "$84,320",
    change: "+8.2%",
    changeType: "positive",
  },
  {
    id: "active-users",
    title: "Active Users",
    value: "8,920",
    change: "+5.7%",
    changeType: "positive",
  },
  {
    id: "page-views",
    title: "Page Views",
    value: "6,878",
    change: "+10.4%",
    changeType: "positive",
  },
];

export const revenueData = [
  { month: "Jan", revenue: 8200 },
  { month: "Feb", revenue: 10500 },
  { month: "Mar", revenue: 9800 },
  { month: "Apr", revenue: 12400 },
  { month: "May", revenue: 14200 },
  { month: "Jun", revenue: 15800 },
  { month: "Jul", revenue: 17100 },
  { month: "Aug", revenue: 18400 },
];

export const userData = [
  { month: "Jan", users: 4200 },
  { month: "Feb", users: 5100 },
  { month: "Mar", users: 5800 },
  { month: "Apr", users: 6300 },
  { month: "May", users: 7100 },
  { month: "Jun", users: 7900 },
  { month: "Jul", users: 8500 },
  { month: "Aug", users: 8920 },
];

export const userDistributionData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 38 },
  { name: "Tablet", value: 17 },
];