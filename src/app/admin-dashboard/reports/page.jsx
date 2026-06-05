"use client";

import { BarChart3, TrendingUp, Download } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    {
      title: "User Growth Report",
      description: "Monthly user growth statistics",
      date: "2024-06-02",
      icon: TrendingUp,
    },
    {
      title: "Revenue Report",
      description: "Platform revenue and earnings",
      date: "2024-06-01",
      icon: BarChart3,
    },
    {
      title: "User Engagement",
      description: "Daily active users and engagement metrics",
      date: "2024-05-31",
      icon: BarChart3,
    },
  ];

  return (
    <div className="dash-pad">
      <div className="mb-8">
        <h1 className="dash-h1">Reports</h1>
        <p className="dash-sub">View and manage platform reports</p>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => {
          const Icon = report.icon;
          return (
            <div key={index} className="dash-card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <button className="p-2 rounded-lg hover:bg-dashboard-bd transition-colors text-dashboard-tx2">
                  <Download className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-lg font-bold text-dashboard-tx mb-1">
                {report.title}
              </h3>
              <p className="text-sm text-dashboard-tx2 mb-4">{report.description}</p>
              <p className="text-xs text-dashboard-tx2">{report.date}</p>
            </div>
          );
        })}
      </div>

      {/* Generate New Report */}
      <div className="mt-8 dash-card">
        <h2 className="text-lg font-bold text-dashboard-tx mb-6">Generate New Report</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-dashboard-tx mb-2">
              Report Type
            </label>
            <select className="w-full px-4 py-2 bg-dashboard-sf border border-dashboard-bd rounded-lg text-dashboard-tx outline-none focus:border-blue-500 transition-colors">
              <option>User Growth</option>
              <option>Revenue</option>
              <option>Engagement</option>
              <option>Tasks Completion</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-dashboard-tx mb-2">
                Start Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 bg-dashboard-sf border border-dashboard-bd rounded-lg text-dashboard-tx outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dashboard-tx mb-2">
                End Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 bg-dashboard-sf border border-dashboard-bd rounded-lg text-dashboard-tx outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          <button className="btn dash-btn bg-gradient-to-br from-blue-500 to-blue-600 text-white w-full">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}
