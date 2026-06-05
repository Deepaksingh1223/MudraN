"use client";

import { GiPlantRoots, GiEmerald, GiCrown, GiCrystalBall, GiDiamondRing, GiSprout, GiFairyWand, GiFlowerEmblem } from "react-icons/gi";
import { FaBolt, FaBullseye, FaCheckCircle, FaGift, FaChartLine, FaUsers, FaLeaf, FaSeedling } from "react-icons/fa";
import { MdRocketLaunch, MdTimeline, MdSpeed, MdStar, MdEmojiEvents, MdMilitaryTech, MdWorkspacePremium } from "react-icons/md";
import { IoDiamond, IoTrophy } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";

export default function MdrTokenPage({ onGo, onToast }) {
  const tiers = [
    { name: "Seed", icon: <FaSeedling />, color: "#8b5cf6", level: 0, required: 0 },
    { name: "Growth", icon: <GiPlantRoots />, color: "#3b82f6", level: 1, required: 2000 },
    { name: "Emerald", icon: <GiEmerald />, color: "#10b981", level: 2, required: 4000, current: true },
    { name: "Impera", icon: <GiCrown />, color: "#fbbf24", level: 3, required: 6000 },
    { name: "Elite", icon: <GiCrystalBall />, color: "#ef4444", level: 4, required: 10000 },
    { name: "Legend", icon: <IoDiamond />, color: "#ff00ff", level: 5, required: 15000 }
  ];

  const benefits = [
    { icon: <FaBolt />, text: "1.5x task rewards", color: "#10b981" },
    { icon: <FaBullseye />, text: "Priority task access", color: "#10b981" },
    { icon: <FaCheckCircle />, text: "Faster approvals (4h)", color: "#10b981" },
    { icon: <FaGift />, text: "Exclusive campaigns", color: "#10b981" },
    { icon: <FaChartLine />, text: "2,000 pts/mo limit", color: "#10b981" },
    { icon: <FaUsers />, text: "Higher referral %", color: "#10b981" }
  ];

  const currentPoints = 4820;
  const nextTier = tiers[3]; // Impera tier
  const pointsNeeded = nextTier.required - currentPoints;
  const progressPercentage = (currentPoints / nextTier.required) * 100;

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">VIP Status</span>
      </div>

      <div className="dash-h1">
        <MdWorkspacePremium style={{ marginRight: "12px", color: "#fbbf24" }} />
        VIP Status
      </div>

      <div >
        {/* Current Tier Card */}
        <div className="dash-vi-wallet-card" style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "11px", color: "rgba(0,201,110,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "6px" }}>
            <MdStar style={{ marginRight: "4px", fontSize: "10px" }} />
            CURRENT TIER
          </div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 800, color: "var(--vi-green)", display: "flex", alignItems: "center", gap: "8px" }}>
            <GiEmerald style={{ fontSize: "28px" }} />
            Emerald
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "14px" }}>
            <MdTimeline style={{ marginRight: "4px", fontSize: "10px" }} />
            Tier 3 of 6 · {pointsNeeded} pts to Impera tier
          </div>
          <div style={{ height: "8px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${Math.min(progressPercentage, 100)}%`, background: "linear-gradient(90deg,var(--vi-green),var(--vi-green-mid))", borderRadius: "4px" }}></div>
          </div>
        </div>

        {/* VIP Tiers Grid */}
        <div className="dash-vi-vip-grid" style={{ marginBottom: "16px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "12px" }}>
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`vi-vip-level ${tier.current ? 'current' : ''}`}
              style={{ 
                textAlign: "center", 
                padding: "12px", 
                borderRadius: "12px",
                background: tier.current ? "rgba(16, 185, 129, 0.1)" : "transparent",
                border: tier.current ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid rgba(255,255,255,0.05)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: currentPoints >= tier.required ? 1 : 0.5
              }}
              onClick={() => onToast?.({
                type: "info",
                message: `${tier.name} tier: Requires ${tier.required.toLocaleString()}+ points | Current: ${currentPoints.toLocaleString()} points`
              })}
            >
              <div className="flex justify-center items-center text-3xl mb-2" style={{ color: tier.color }}>
                {tier.icon}
              </div>
              <div className="dash-vi-vip-name" style={{ fontSize: "12px", fontWeight: 600 }}>
                {tier.name}
              </div>
              {tier.required > 0 && (
                <div style={{ fontSize: "10px", color: "var(--vi-text3)", marginTop: "4px" }}>
                  {tier.required.toLocaleString()} pts
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Card */}
        <div className="dash-vi-card">
          <div className="dash-vi-card-header">
            <div className="dash-vi-card-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <GiEmerald style={{ fontSize: "20px", color: "#10b981" }} />
              Emerald Benefits
            </div>
          </div>
          <div className="dash-vi-card-body">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "8px" }}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  style={{ 
                    padding: "10px 12px", 
                    background: "var(--vi-green-glow)", 
                    border: "1px solid rgba(0,201,110,0.2)", 
                    borderRadius: "9px", 
                    fontSize: "12px", 
                    color: "var(--vi-text2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span style={{ color: benefit.color, fontSize: "14px" }}>{benefit.icon}</span>
                  {benefit.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Tier Progress */}
        <div className="dash-vi-card" style={{ marginTop: "16px" }}>
          <div className="dash-vi-card-header">
            <div className="dash-vi-card-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MdRocketLaunch style={{ fontSize: "20px", color: "#fbbf24" }} />
              Next Tier: {nextTier.name}
            </div>
          </div>
          <div className="dash-vi-card-body">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "12px" }}>
              <span>Current: {currentPoints.toLocaleString()} pts</span>
              <span>Target: {nextTier.required.toLocaleString()} pts</span>
            </div>
            <div style={{ height: "8px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", overflow: "hidden", marginBottom: "12px" }}>
              <div style={{ height: "100%", width: `${Math.min(progressPercentage, 100)}%`, background: "linear-gradient(90deg, #10b981, #fbbf24)", borderRadius: "4px" }}></div>
            </div>
            <div style={{ fontSize: "11px", color: "var(--vi-text3)", textAlign: "center" }}>
              <MdSpeed style={{ marginRight: "4px", display: "inline-block" }} />
              {pointsNeeded.toLocaleString()} more points needed to reach {nextTier.name} tier
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
