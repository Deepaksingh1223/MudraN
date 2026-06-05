"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/constants/authContext";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

export default function AdminSidebar({ sidebarOpen, onNavigate }) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const isActive = (path) => {
    if (path === "/admin-dashboard" && pathname === "/admin-dashboard")
      return true;
    if (path !== "/admin-dashboard" && pathname.startsWith(path)) return true;
    return false;
  };

  const linkClass = (path) =>
    `dash-ni ${isActive(path) ? "dash-is-active" : ""}`;

  const handleLogout = () => {
    logout();
    router.push("/Admin");
  };

  return (
    <nav
      className={`
        dash-sb dash-vi-sidebar
        max-[900px]:fixed max-[900px]:left-0 max-[900px]:top-0 max-[900px]:h-screen max-[900px]:-translate-x-full
        ${sidebarOpen ? "max-[900px]:translate-x-0 dash-is-open" : ""}
      `}
    >
      <div className="dash-logo-row dash-vi-logo-wrap flex shrink-0 items-center gap-2 border-b border-dashboard-bd px-3.5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
            A
          </div>
          <div>
            <div className="text-sm font-bold text-dashboard-tx">Admin</div>
            <div className="text-xs text-dashboard-tx2">Control Panel</div>
          </div>
        </div>
      </div>

      <div className="dash-nav flex-1 overflow-y-auto px-1.5 py-2 [&::-webkit-scrollbar]:w-0">
        <span className="dash-nav-sec block px-2 pb-1 pt-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-dashboard-tx3">
          Main
        </span>

        <Link
          className={linkClass("/admin-dashboard")}
          href="/admin-dashboard"
          onClick={onNavigate}
        >
          <LayoutDashboard
            className="mr-2 h-4 w-4"
            aria-hidden="true"
          />
          Dashboard
        </Link>

        <span className="dash-nav-sec block px-2 pb-1 pt-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-dashboard-tx3">
          Management
        </span>

        <Link
          className={linkClass("/admin-dashboard/users")}
          href="/admin-dashboard/users"
          onClick={onNavigate}
        >
          <Users className="mr-2 h-4 w-4" aria-hidden="true" />
          Users
        </Link>

        <Link
          className={linkClass("/admin-dashboard/reports")}
          href="/admin-dashboard/reports"
          onClick={onNavigate}
        >
          <BarChart3 className="mr-2 h-4 w-4" aria-hidden="true" />
          Reports
        </Link>

        <span className="dash-nav-sec block px-2 pb-1 pt-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-dashboard-tx3">
          System
        </span>

        <Link
          className={linkClass("/admin-dashboard/settings")}
          href="/admin-dashboard/settings"
          onClick={onNavigate}
        >
          <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
          Settings
        </Link>
      </div>

      <div className="dash-sb-foot border-t border-dashboard-bd p-3">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Logout
        </button>
      </div>
    </nav>
  );
}
