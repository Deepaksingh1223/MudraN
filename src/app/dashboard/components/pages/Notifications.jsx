"use client";

import { useState, useEffect } from "react";
import { 
  FaCheckCircle, FaPlusCircle, FaGift, FaChartLine, 
  FaTrophy, FaBell, FaRobot, FaWhatsapp, FaGoogle,
  FaUserPlus, FaArrowUp, FaEye
} from "react-icons/fa";
import { MdNotifications, MdPending, MdVerified, MdInfo } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";

export default function CardsPage({ onGo, onToast }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Task Approved",
      message: "Your Google Search task has been verified. +20 pts credited.",
      time: "2 min ago",
      read: false,
      icon: <FaCheckCircle />,
      color: "#10b981"
    },
    {
      id: 2,
      type: "info",
      title: "New Task Available",
      message: "WhatsApp Status Campaign task is now live. 30 pts reward.",
      time: "15 min ago",
      read: false,
      icon: <FaPlusCircle />,
      color: "#3b82f6"
    },
    {
      id: 3,
      type: "success",
      title: "Referral Bonus",
      message: "Suresh G. completed his first task. +14 pts commission for you.",
      time: "1 hr ago",
      read: false,
      icon: <FaUserPlus />,
      color: "#8b5cf6"
    },
    {
      id: 4,
      type: "warning",
      title: "VIP Progress",
      message: "You're 680 pts away from Impera tier. Complete 4 more tasks to unlock!",
      time: "3 hrs ago",
      read: false,
      icon: <GiProgression />,
      color: "#fbbf24"
    },
    {
      id: 5,
      type: "success",
      title: "Weekly Leaderboard",
      message: "You moved up to Rank 8! Top 5 earns bonus rewards this Sunday.",
      time: "1 day ago",
      read: false,
      icon: <FaTrophy />,
      color: "#ef4444"
    },
    {
      id: 6,
      type: "info",
      title: "System Update",
      message: "Task verification now takes 5–30 min with new AI engine.",
      time: "2 days ago",
      read: true,
      icon: <FaRobot />,
      color: "#6b7280"
    }
  ]);

  const [filter, setFilter] = useState("all");
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const count = notifications.filter(n => !n.read).length;
    setUnreadCount(count);
  }, [notifications]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
    onToast?.({
      type: "info",
      message: "Notification marked as read"
    });
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    onToast?.({
      type: "success",
      message: "All notifications marked as read"
    });
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
    onToast?.({
      type: "success",
      message: "Notification removed"
    });
  };

  const getFilteredNotifications = () => {
    if (filter === "unread") {
      return notifications.filter(n => !n.read);
    }
    return notifications;
  };

  const getTimeIcon = (time) => {
    if (time.includes("min")) return <IoTimeOutline style={{ fontSize: "10px" }} />;
    if (time.includes("hr")) return <IoTimeOutline style={{ fontSize: "10px" }} />;
    return <IoTimeOutline style={{ fontSize: "10px" }} />;
  };

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">Notifications</span>
      </div>

      <div className="dash-h1" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <MdNotifications style={{ fontSize: "24px", color: "#fbbf24" }} />
          Notifications
          {unreadCount > 0 && (
            <span style={{ 
              background: "#ef4444", 
              color: "white", 
              fontSize: "12px", 
              padding: "2px 8px", 
              borderRadius: "12px",
              fontWeight: 600
            }}>
              {unreadCount} new
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            style={{
              background: "transparent",
              border: "1px solid var(--vi-border)",
              padding: "4px 12px",
              borderRadius: "6px",
              fontSize: "11px",
              cursor: "pointer",
              color: "var(--vi-text2)"
            }}
          >
            Mark all as read
          </button>
        )}
      </div>
 

      <div >
        <div className="dash-vi-card">
          <div className="dash-vi-card-body" style={{ padding: "8px 16px" }}>
            {getFilteredNotifications().length === 0 ? (
              <div style={{ 
                textAlign: "center", 
                padding: "40px 20px",
                color: "var(--vi-text3)"
              }}>
                <FaBell style={{ fontSize: "48px", marginBottom: "12px", opacity: 0.3 }} />
                <div>No notifications to show</div>
                <div style={{ fontSize: "12px", marginTop: "8px" }}>Check back later for updates</div>
              </div>
            ) : (
              getFilteredNotifications().map((notif) => (
                <div 
                  key={notif.id} 
                  className={`vi-notif-item ${!notif.read ? 'unread' : ''}`}
                  style={{ 
                    display: "flex", 
                    gap: "30px", 
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    opacity: notif.read ? 0.7 : 1,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onClick={() => !notif.read && markAsRead(notif.id)}
                >
                  <div className="dash-vi-notif-dot" style={{ position: "relative" }}>
                    {!notif.read && (
                      <div style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "8px",
                        height: "8px",
                        background: "#3b82f6",
                        borderRadius: "50%"
                      }}></div>
                    )}
                    <div style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: `${notif.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: notif.color
                    }}>
                      {notif.icon}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="dash-vi-notif-text" style={{ fontSize: "13px", lineHeight: "1.4" }}>
                      <strong>{notif.title}</strong> — {notif.message}
                    </div>
                    <div className="dash-vi-notif-time" style={{ 
                      fontSize: "10px", 
                      color: "var(--vi-text3)", 
                      marginTop: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}>
                      {getTimeIcon(notif.time)}
                      {notif.time}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notif.id);
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--vi-text3)",
                      cursor: "pointer",
                      fontSize: "12px",
                      padding: "4px"
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
