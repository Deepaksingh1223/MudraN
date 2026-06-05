"use client";

import { FiMenu, FiX, FiSun, FiMoon, FiUser } from "react-icons/fi";


export default function Topbar({
  onToggleDark,
  points,
  dark,
  sidebarOpen,
  onToggleSidebar,
}) {
  return (
    <header className="dash-topbar sticky top-0 z-20 flex h-[52px] shrink-0 items-center gap-2.5 border-b border-dashboard-bd bg-dashboard-sf px-4 transition-colors duration-200 max-[600px]:gap-2 max-[600px]:px-3">
      <div className="dash-ticker flex min-w-0 flex-1 gap-3 overflow-hidden">
        <div className="dash-tk flex items-center gap-1.5 whitespace-nowrap">
          <span className="dash-tk-s text-[10px] font-bold text-dashboard-tx3">BTC</span>
          <span className="dash-tk-p text-[11.5px] font-semibold text-dashboard-tx">$67,842</span>
          <span className="dash-chip dash-chip-up flex-text-icon rounded-full border px-1.5 py-0.5 text-[9px] font-bold bg-dashboard-grbg text-dashboard-gr border-dashboard-grd">
            +2.4%
          </span>
        </div>
        <div className="dash-tk flex items-center gap-1.5 whitespace-nowrap max-[600px]:hidden">
          <span className="dash-tk-s text-[10px] font-bold text-dashboard-tx3">ETH</span>
          <span className="dash-tk-p text-[11.5px] font-semibold text-dashboard-tx">$3,491</span>
          <span className="dash-chip dash-chip-up flex-text-icon rounded-full border px-1.5 py-0.5 text-[9px] font-bold bg-dashboard-grbg text-dashboard-gr border-dashboard-grd">
            +1.8%
          </span>
        </div>
        <div className="dash-tk flex items-center gap-1.5 whitespace-nowrap max-[900px]:hidden">
          <span className="dash-tk-s text-[10px] font-bold text-dashboard-tx3">Velt</span>
          <span className="dash-tk-p text-[11.5px] font-semibold text-dashboard-tx">$0.0009</span>
        </div>
      </div>

      <div className="dash-tb-r ml-auto flex shrink-0 items-center gap-[7px]">
        <div className="dash-tb-bal flex items-center gap-1 rounded-[7px] border border-dashboard-gbdr bg-dashboard-gdim px-2.5 py-1.5 text-[11px] font-bold text-dashboard-glt max-[600px]:hidden">
          <FiUser size={12} />
          MUDRA@gmail.com
        </div>
        <button
          type="button"
          className="dash-tbi flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-[7px] border border-dashboard-bd bg-dashboard-sf3 text-lg text-dashboard-tx transition-all duration-150 hover:bg-dashboard-sf2"
          onClick={onToggleDark}
          aria-label="Toggle theme"
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>
        <button
          type="button"
          className="dash-tbi dash-hamburger hidden h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-[7px] border border-dashboard-bd bg-dashboard-sf3 text-xl text-dashboard-tx transition-all duration-150 hover:bg-dashboard-sf2 max-[991px]:flex"
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        >
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
