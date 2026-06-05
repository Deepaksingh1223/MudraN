"use client";

import { Users, TrendingUp, Activity, DollarSign } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
      trend: "+12%",
    },
    {
      title: "Active Sessions",
      value: "456",
      icon: Activity,
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500",
      trend: "+8%",
    },
    {
      title: "Total Rewards",
      value: "$12,450",
      icon: DollarSign,
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
      trend: "+24%",
    },
    {
      title: "Platform Growth",
      value: "87%",
      icon: TrendingUp,
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500",
      trend: "+5%",
    },
  ];

  return (
    <div className="dash-pad">
      <div>
        <h1 className="dash-h1">Dashboard</h1>
        <p className="dash-sub">Welcome to your admin control panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="dash-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <span className="text-xs font-semibold text-green-500">
                  {stat.trend}
                </span>
              </div>
              <p className="text-dashboard-tx2 text-sm mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-dashboard-tx">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 dash-card">
        <h2 className="text-lg font-bold text-dashboard-tx mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-4 rounded-lg bg-dashboard-bg hover:bg-dashboard-bd transition-colors"
            >
              <div>
                <p className="font-semibold text-dashboard-tx">User Activity {item}</p>
                <p className="text-sm text-dashboard-tx2">Completed task: Social Media</p>
              </div>
              <span className="text-xs text-dashboard-tx2">2 hours ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
