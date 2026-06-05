"use client";

import { Menu, Bell, Settings } from "lucide-react";
import { useAuth } from "@/constants/authContext";

export default function AdminTopbar({
  onToggleSidebar,
  sidebarOpen,
}) {
  const { user } = useAuth();

  return (
    <div className="dash-topbar bg-dashboard-sf border-b border-dashboard-bd px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="hidden max-[900px]:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-dashboard-bd transition-colors"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-dashboard-tx" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-dashboard-tx">Admin Panel</h1>
          <p className="text-xs text-dashboard-tx2">Welcome back, {user?.name}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-dashboard-bd transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-dashboard-tx2" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-dashboard-bd transition-colors"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5 text-dashboard-tx2" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-dashboard-bd">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center font-bold text-white text-sm">
            {user?.name?.charAt(0) || "A"}
          </div>
          <div className="text-sm">
            <p className="font-semibold text-dashboard-tx">{user?.name}</p>
            <p className="text-xs text-dashboard-tx2">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
