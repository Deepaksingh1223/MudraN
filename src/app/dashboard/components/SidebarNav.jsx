"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  ClipboardList,
  Repeat,
  Wallet,
  Gift,
  Gem,
  Award,
  Trophy,
  UserPlus,
  Bell,
  User,
  LifeBuoy,
} from "lucide-react";

export default function SidebarNav({ sidebarOpen, onNavigate }) {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/dashboard" && pathname === "/dashboard") return true;
    if (path !== "/dashboard" && pathname.startsWith(path)) return true;
    return false;
  };

  const linkClass = (path) =>
    `dash-ni ${isActive(path) ? "dash-is-active" : ""}`;

  return (
    <nav
      className={`
        dash-sb dash-vi-sidebar
        max-[900px]:fixed max-[900px]:left-0 max-[900px]:top-0 max-[900px]:h-screen max-[900px]:-translate-x-full
        ${sidebarOpen ? "max-[900px]:translate-x-0 dash-is-open" : ""}
      `}
    >
      <div className="dash-logo-row dash-vi-logo-wrap flex shrink-0 items-center gap-2 border-b border-dashboard-bd px-3.5 pt-4 pb-3">
        <Image
          className="Dashboard-img h-auto w-[150px]"
          alt="MDR Futuristics Crypto Card"
          width={150}
          height={150}
          src="/img/dashboard-logo.png"
          priority
        />
      </div>

      <div className="dash-nav flex-1 overflow-y-auto px-1.5 py-2 [&::-webkit-scrollbar]:w-0">
        <span className="dash-nav-sec block px-2 pb-1 pt-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-dashboard-tx3">
          Overview
        </span>

        <Link className={linkClass("/dashboard")} href="/dashboard" onClick={onNavigate}>
          <LayoutDashboard className="mr-2 h-4 w-4" aria-hidden="true" />
          Dashboard
        </Link>

        <Link className={linkClass("/dashboard/my-card")} href="/dashboard/my-card" onClick={onNavigate}>
          <CreditCard className="mr-2 h-4 w-4" aria-hidden="true" />
          Task Center <span className="dash-nb">12</span>
        </Link>

        <Link className={linkClass("/dashboard/payment")} href="/dashboard/payment" onClick={onNavigate}>
          <ClipboardList className="mr-2 h-4 w-4" aria-hidden="true" />
          My Tasks
        </Link>

        <Link className={linkClass("/dashboard/exchange")} href="/dashboard/exchange" onClick={onNavigate}>
          <Repeat className="mr-2 h-4 w-4" aria-hidden="true" />
          Task History
        </Link>

        <span className="dash-nav-sec block px-2 pb-1 pt-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-dashboard-tx3">
          REWARDS
        </span>

        <Link className={linkClass("/dashboard/tasks")} href="/dashboard/tasks" onClick={onNavigate}>
          <Wallet className="mr-2 h-4 w-4" aria-hidden="true" />
          Rewards Wallet
        </Link>

        <Link className={linkClass("/dashboard/rewards")} href="/dashboard/rewards" onClick={onNavigate}>
          <Gift className="mr-2 h-4 w-4" aria-hidden="true" />
          Redeem Rewards
        </Link>

        <Link className={linkClass("/dashboard/mdr-token")} href="/dashboard/mdr-token" onClick={onNavigate}>
          <Gem className="mr-2 h-4 w-4" aria-hidden="true" />
          VIP Status
        </Link>

        <Link className={linkClass("/dashboard/membership-plan")} href="/dashboard/membership-plan" onClick={onNavigate}>
          <Award className="mr-2 h-4 w-4" aria-hidden="true" />
          Achievements
        </Link>

        <Link className={linkClass("/dashboard/transaction")} href="/dashboard/transaction" onClick={onNavigate}>
          <Trophy className="mr-2 h-4 w-4" aria-hidden="true" />
          Leaderboard
        </Link>

        <span className="dash-nav-sec block px-2 pb-1 pt-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-dashboard-tx3">
          GROW
        </span>

        <Link className={linkClass("/dashboard/Referral")} href="/dashboard/Referral" onClick={onNavigate}>
          <UserPlus className="mr-2 h-4 w-4" aria-hidden="true" />
          Referrals
        </Link>

        <Link className={linkClass("/dashboard/Notifications")} href="/dashboard/Notifications" onClick={onNavigate}>
          <Bell className="mr-2 h-4 w-4" aria-hidden="true" />
          Notifications <span className="dash-nb">5</span>
        </Link>

        <Link className={linkClass("/dashboard/settings")} href="/dashboard/settings" onClick={onNavigate}>
          <User className="mr-2 h-4 w-4" aria-hidden="true" />
          Profile
        </Link>

        <Link className={linkClass("/dashboard/support")} href="/dashboard/support" onClick={onNavigate}>
          <LifeBuoy className="mr-2 h-4 w-4" aria-hidden="true" />
          Support
        </Link>
      </div>

      <div className="dash-sb-foot">
        <div className="dash-usr" role="presentation">
          <div className="dash-av">AK</div>
          <div>
            <div className="text-xs font-semibold text-dashboard-tx">Arjun Kapoor</div>
            <div className="text-[10px] text-dashboard-tx3">MUD-2847 · Gold</div>
          </div>
          <i
            className="ti ti-chevron-right ml-auto text-sm text-dashboard-tx3"
            aria-hidden="true"
          />
        </div>
      </div>
    </nav>
  );
}