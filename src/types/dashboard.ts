export interface DashboardStat {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
}

export interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
}