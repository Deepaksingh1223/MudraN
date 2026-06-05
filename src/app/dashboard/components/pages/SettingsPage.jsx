"use client";

import { useState } from "react";
import { 
  FaUser, FaEnvelope, FaWallet, FaShieldAlt, FaCalendarAlt, 
  FaFlag, FaTasks, FaCheckCircle, FaStar, FaUsers,
  FaEdit, FaCopy, FaCheck, FaArrowUp, FaGem
} from "react-icons/fa";
import { MdVerified, MdEmojiEvents, MdLocationOn, MdDateRange } from "react-icons/md";
import { GiEmerald, GiCrown, GiProgression } from "react-icons/gi";
import { IoCopyOutline } from "react-icons/io5";

export default function SettingsPage({ onGo, onToast }) {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    wallet: "0x8f3a...b29e",
    kyc: "Verified",
    memberSince: "Jan 2024",
    country: "India"
  });

  const stats = [
    { label: "Tasks Done", value: "183", icon: <FaTasks />, color: "#3b82f6" },
    { label: "Approval Rate", value: "96%", icon: <FaCheckCircle />, color: "#10b981" },
    { label: "Total Points", value: "4,820", icon: <FaStar />, color: "#fbbf24" },
    { label: "Referrals", value: "5", icon: <FaUsers />, color: "#8b5cf6" }
  ];

  const handleCopyWallet = () => {
    const fullWallet = "0x8f3a7b2c9d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8g";
    navigator.clipboard.writeText(fullWallet);
    setCopied(true);
    onToast?.({
      type: "success",
      message: "Wallet address copied to clipboard!"
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
    onToast?.({
      type: "info",
      message: "Edit profile feature coming soon!"
    });
  };

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">Profile</span>
      </div>

      <div className="dash-h1">
        <FaUser style={{ marginRight: "12px", color: "#10b981" }} />
        Profile
      </div>

      <div >
        <div className="dash-vi-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {/* Profile Information Card */}
          <div className="dash-vi-card">
            <div className="dash-vi-card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="dash-vi-card-title" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FaUser style={{ fontSize: "16px" }} />
                Profile Information
              </div>
              <div 
                className="dash-vi-card-action" 
                style={{ cursor: "pointer", color: "var(--vi-green)", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}
                onClick={handleEditProfile}
              >
                <FaEdit style={{ fontSize: "11px" }} />
                Edit
              </div>
            </div>
            <div className="dash-vi-card-body">
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "14px", 
                marginBottom: "16px", 
                paddingBottom: "16px", 
                borderBottom: "1px solid var(--vi-border)" 
              }}>
                <div style={{ 
                  width: "54px", 
                  height: "54px", 
                  borderRadius: "50%", 
                  background: "linear-gradient(135deg,var(--vi-green),#009e55)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontFamily: "'Syne', sans-serif", 
                  fontWeight: 800, 
                  fontSize: "20px", 
                  color: "#000"
                }}>
                  RK
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "16px", color: "var(--tx3)", display: "flex", alignItems: "center", gap: "6px" }}>
                    {profile.name}
                    <MdVerified style={{ color: "#3b82f6", fontSize: "14px" }} />
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--vi-text3)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <FaEnvelope style={{ fontSize: "10px" }} />
                    {profile.email}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--vi-green)", marginTop: "2px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <GiEmerald style={{ fontSize: "12px" }} />
                    ⚡ Emerald Tier
                  </div>
                </div>
              </div>
              
              <table className="dash-vi-table" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ color: "var(--vi-text3)", padding: "8px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaWallet style={{ fontSize: "12px" }} />
                      Wallet
                    </td>
                    <td style={{ fontFamily: "monospace", fontSize: "11px", padding: "8px 0" }}>
                      {profile.wallet}
                      <button
                        onClick={handleCopyWallet}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "var(--vi-text3)",
                          cursor: "pointer",
                          marginLeft: "8px",
                          fontSize: "12px"
                        }}
                      >
                        {copied ? <FaCheck style={{ color: "#10b981" }} /> : <IoCopyOutline />}
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "var(--vi-text3)", padding: "8px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaShieldAlt style={{ fontSize: "12px" }} />
                      KYC Status
                    </td>
                    <td style={{ padding: "8px 0" }}>
                      <span className="dash-vi-status dash-vi-status-approved" style={{ display: "flex", alignItems: "center", gap: "4px", width: "fit-content" }}>
                        <MdVerified style={{ fontSize: "12px" }} />
                        {profile.kyc}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "var(--vi-text3)", padding: "8px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaCalendarAlt style={{ fontSize: "12px" }} />
                      Member Since
                    </td>
                    <td style={{ padding: "8px 0", display: "flex", alignItems: "center", gap: "4px" }}>
                      <MdDateRange style={{ fontSize: "12px" }} />
                      {profile.memberSince}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "var(--vi-text3)", padding: "8px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaFlag style={{ fontSize: "12px" }} />
                      Country
                    </td>
                    <td style={{ padding: "8px 0", display: "flex", alignItems: "center", gap: "4px" }}>
                      {profile.country} 🇮🇳
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="dash-vi-card">
            <div className="dash-vi-card-header">
              <div className="dash-vi-card-title" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <GiProgression style={{ fontSize: "16px" }} />
                Statistics
              </div>
            </div>
            <div className="dash-vi-card-body">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {stats.map((stat, index) => (
                  <div key={index} style={{ background: "var(var(--sf))", borderRadius: "9px", padding: "10px", textAlign: "center", border:"1px solid var(--bd)" }}>
                    <div style={{ fontSize: "11px", color: "var(--vi-text3)", marginBottom: "3px", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                      <span style={{ color: stat.color }}>{stat.icon}</span>
                      {stat.label}
                    </div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "22px", fontWeight: 700, color: "var(--tx3)" }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="dash-vi-card" style={{ marginTop: "16px" }}>
          <div className="dash-vi-card-header">
            <div className="dash-vi-card-title" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaArrowUp style={{ fontSize: "16px", color: "#fbbf24" }} />
              Recent Activity
            </div>
          </div>
          <div className="dash-vi-card-body">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px",color: "var(--vi-green)" }}  >
                  <FaTasks style={{ color: "#3b82f6" }} />
                  Completed Google Search Task
                </span>
                <span style={{ color: "var(--vi-green)" }}>+20 pts</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px",color: "var(--vi-green)" }}>
                  <FaUsers style={{ color: "#8b5cf6" }} />
                  Referral Bonus from Suresh G.
                </span>
                <span style={{ color: "var(--vi-green)" }}>+14 pts</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px",color: "var(--vi-green)" }}>
                  <FaGem style={{ color: "#10b981" }} />
                  Reached Emerald Tier
                </span>
                <span style={{ color: "var(--vi-green)" }}>Unlocked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
