"use client";

import { useState } from "react";
import { 
  FaUsers, FaNetworkWired, FaMoneyBillWave, FaPercent, 
  FaWhatsapp, FaTelegram, FaQrcode, FaCopy, FaLink,
  FaUserPlus, FaCrown, FaSeedling, FaChartLine
} from "react-icons/fa";
import { MdEmojiEvents, MdVerified, MdContentCopy } from "react-icons/md";
import { GiPlantRoots, GiEmerald } from "react-icons/gi";
import { IoShareSocial, IoCopyOutline } from "react-icons/io5";

export default function SupportPage({ onGo, onToast }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  const referralLink = "https://MUDRA.com/ref/RAHULK2024";

  const stats = [
    { label: "Direct Referrals", value: "5", icon: <FaUserPlus />, color: "#3b82f6" },
    { label: "Network Size", value: "18", icon: <FaNetworkWired />, color: "#10b981" },
    { label: "Ref. Earnings", value: "340", icon: <FaMoneyBillWave />, color: "#fbbf24" },
    { label: "Commission Rate", value: "10%", icon: <FaPercent />, color: "#ef4444" }
  ];

  const referrals = [
    { name: "Aman Nair", initials: "AN", tier: "Seed", type: "Direct", points: "+42 pts earned", icon: <FaSeedling />, color: "#8b5cf6" },
    { name: "Deepa K.", initials: "DK", tier: "Growth", type: "Direct", points: "+88 pts earned", icon: <GiPlantRoots />, color: "#3b82f6" },
    { name: "Suresh G.", initials: "SG", tier: "Emerald", type: "Direct", points: "+140 pts earned", icon: <GiEmerald />, color: "#10b981" }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    onToast?.({
      type: "success",
      message: "Referral link copied to clipboard!"
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = (platform) => {
    const text = `Join me on Velt Impera and earn rewards! Use my referral link: ${referralLink}`;
    const encodedText = encodeURIComponent(text);
    
    let url = "";
    if (platform === "whatsapp") {
      url = `https://wa.me/?text=${encodedText}`;
    } else if (platform === "telegram") {
      url = `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent("Join me on Velt Impera!")}`;
    }
    
    window.open(url, "_blank");
    onToast?.({
      type: "info",
      message: `Opening ${platform} to share...`
    });
  };

  const handleQRCode = () => {
    onToast?.({
      type: "info",
      message: "QR Code feature coming soon! Scan to share your referral link."
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">Referrals</span>
      </div>

      <div className="dash-h1">
        <FaUsers style={{ marginRight: "12px", color: "#10b981" }} />
        Referral Program
      </div>

      <div >
        {/* Stats Grid */}
        <div className="dash-vi-stats-grid" style={{ gridTemplateColumns: "repeat(4,1fr)", marginBottom: "14px" }}>
          {stats.map((stat, index) => (
            <div key={index} className="dash-vi-stat-card">
              <div className="dash-vi-stat-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: stat.color }}>{stat.icon}</span>
                {stat.label}
              </div>
              <div className="dash-vi-stat-value">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Referral Link Card */}
        <div className="dash-vi-card" style={{ marginBottom: "12px" }}>
          <div className="dash-vi-card-header">
            <div className="dash-vi-card-title" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaLink style={{ color: "#10b981" }} />
              Your Referral Link
            </div>
          </div>
          <div className="dash-vi-card-body">
            <div className="dash-vi-ref-link" style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <FaLink style={{ color: "var(--vi-green)", fontSize: "16px", flexShrink: 0 }} />
              <span className="dash-vi-ref-url" style={{ flex: 1, fontSize: "12px", wordBreak: "break-all" }}>{referralLink}</span>
              <button 
                className="dash-vi-btn dash-vi-btn-ghost" 
                style={{ flexShrink: 0, padding: "5px 10px", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px" }}
                onClick={handleCopyLink}
              >
                {copied ? <MdVerified /> : <IoCopyOutline />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <button 
                className="dash-vi-btn dash-vi-btn-ghost" 
                style={{ flex: 1, fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}
                onClick={() => handleShare("whatsapp")}
              >
                <FaWhatsapp style={{ color: "#25d366" }} />
                Share WhatsApp
              </button>
              <button 
                className="dash-vi-btn dash-vi-btn-ghost" 
                style={{ flex: 1, fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}
                onClick={() => handleShare("telegram")}
              >
                <FaTelegram style={{ color: "#0088cc" }} />
                Share Telegram
              </button>
              <button 
                className="dash-vi-btn dash-vi-btn-primary" 
                style={{ flex: 1, fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}
                onClick={handleQRCode}
              >
                <FaQrcode />
                QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Referral Network Card */}
        <div className="dash-vi-card">
          <div className="dash-vi-card-header">
            <div className="dash-vi-card-title" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaNetworkWired style={{ color: "#10b981" }} />
              Referral Network
            </div>
          </div>
          <div className="dash-vi-card-body" style={{ padding: "0 16px" }}>
            {referrals.map((ref, index) => (
              <div key={index} className="dash-vi-lb-item" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderBottom: index < referrals.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div className="dash-vi-lb-av" style={{ 
                  width: "32px", 
                  height: "32px", 
                  borderRadius: "50%", 
                  background: `${ref.color}20`, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  fontWeight: 600,
                  color: ref.color
                }}>
                  {ref.icon}
                </div>
                <div className="dash-vi-lb-name" style={{ flex: 1 }}>
                  {ref.name} 
                  <span style={{ fontSize: "10px", color: "var(--vi-text3)", display: "block" }}>
                    {ref.tier} · {ref.type}
                  </span>
                </div>
                <div className="dash-vi-lb-pts" style={{ fontSize: "11px", color: "var(--vi-green)" }}>
                  {ref.points}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="dash-vi-card" style={{ marginTop: "12px" }}>
          <div className="dash-vi-card-header">
            <div className="dash-vi-card-title" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaChartLine style={{ color: "#fbbf24" }} />
              Frequently Asked Questions
            </div>
          </div>
          <div className="dash-vi-card-body">
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: index < faqs.length - 1 ? "12px" : 0 }}>
                <div 
                  onClick={() => toggleFaq(index)}
                  style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "8px 0",
                    borderBottom: openFaq === index ? "none" : "1px solid rgba(255,255,255,0.05)"
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 500 }} className="dash-faq-class">{faq.question}</span>
                  <span style={{ fontSize: "16px", color: "var(--vi-green)" }}>
                    {openFaq === index ? "−" : "+"}
                  </span>
                </div>
                {openFaq === index && (
                  <div style={{ 
                    padding: "8px 0 12px 0", 
                    fontSize: "12px", 
                    color: "var(--gr)",
                    lineHeight: "1.5"
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How do I earn referral points?",
    answer: "You earn 10% of all points earned by your direct referrals. When they complete tasks and earn points, you automatically receive 10% as referral bonus."
  },
  {
    question: "When do referral bonuses get credited?",
    answer: "Referral bonuses are credited instantly when your referral completes a task and earns points. You can see your referral earnings in real-time."
  },
  {
    question: "Is there a limit to referral earnings?",
    answer: "No, there's no upper limit! The more active referrals you have, the more you earn. Higher VIP tiers also get increased referral percentages."
  },
  {
    question: "How do I track my referral performance?",
    answer: "You can track all your referral activities in the Referral Network section above. It shows each referral's tier, earnings, and total points contributed."
  }
];
