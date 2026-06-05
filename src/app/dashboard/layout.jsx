"use client";

import "../Dashboard.css"
import SidebarNav from "./components/SidebarNav";
import Topbar from "./components/Topbar";
import { useState } from "react";


export default function DashboardLayout({ children }) {
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div
      id="mudra-dashboard-root-react"
      data-dk={dark ? "1" : undefined}
      className="dash-dashboard-body min-h-screen"
    >
      <button
        type="button"
        className={"dash-overlay fixed inset-0 z-[25] bg-black/45 border-0 p-0 cursor-pointer" + (sidebarOpen ? " block" : " hidden")}
        aria-label="Close menu"
        onClick={closeSidebar}
      />
      <div className="dash-app flex min-h-screen relative">
        <SidebarNav sidebarOpen={sidebarOpen} onNavigate={closeSidebar} />
        <div className="dash-main flex flex-1 flex-col min-w-0 overflow-hidden bg-dashboard-sf">
          <Topbar
            dark={dark}
            onToggleDark={toggleDark}
            points="4,820 pts"
            sidebarOpen={sidebarOpen}
            onToggleSidebar={() => setSidebarOpen((open) => !open)}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
