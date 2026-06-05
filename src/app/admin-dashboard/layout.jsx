"use client";

import { useState } from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminTopbar from "./components/AdminTopbar";
import { ProtectAdminRoute } from "@/constants/protectedRoute";

export default function AdminDashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <ProtectAdminRoute>
      <div
        id="admin-dashboard-root"
        className="admin-dashboard-body min-h-screen bg-dashboard-bg"
      >
        <button
          type="button"
          className={
            "dash-overlay fixed inset-0 z-[25] bg-black/45 border-0 p-0 cursor-pointer " +
            (sidebarOpen ? " block" : " hidden")
          }
          aria-label="Close menu"
          onClick={closeSidebar}
        />
        <div className="dash-app flex min-h-screen relative">
          <AdminSidebar sidebarOpen={sidebarOpen} onNavigate={closeSidebar} />
          <div className="dash-main flex flex-1 flex-col min-w-0 overflow-hidden">
            <AdminTopbar
              onToggleSidebar={() => setSidebarOpen((open) => !open)}
              sidebarOpen={sidebarOpen}
            />
            <div className="flex-1 overflow-y-auto bg-dashboard-bg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </ProtectAdminRoute>
  );
}
