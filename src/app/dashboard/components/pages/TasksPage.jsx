"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { 
  IoFlash, 
  IoWallet, 
  IoTrendingUp, 
  IoStar, 
  IoGift, 
  IoTime, 
  IoCheckmarkCircle, 
  IoInfinite, 
  IoPeople 
} from "react-icons/io5";
import { MdEmojiEvents, MdMilitaryTech, MdVerified, MdPending } from "react-icons/md";
import { FaChartLine, FaCoins, FaGem } from "react-icons/fa";
import { GiDiamondRing, GiProgression } from "react-icons/gi";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function TasksPage({ onGo, onToast }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Sample earnings data for the last 7 days
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const earnings = [120, 85, 145, 95, 180, 220, 175];
    const cumulativeEarnings = [120, 205, 350, 445, 625, 845, 1020];

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Daily Earnings',
          data: earnings,
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: 'rgb(34, 197, 94)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          yAxisID: 'y',
        },
        {
          label: 'Cumulative Points',
          data: cumulativeEarnings,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.05)',
          borderWidth: 2,
          borderDash: [5, 5],
          tension: 0.4,
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: false,
          yAxisID: 'y1',
        }
      ]
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: {
            size: 11,
            weight: '500'
          },
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#e5e5e5',
        borderColor: 'rgba(34, 197, 94, 0.3)',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + ' pts';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Daily Points',
          color: 'var(--vi-text2)',
          font: {
            size: 10,
            weight: '500'
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          stepSize: 50,
          callback: function(value) {
            return value + ' pts';
          },
          font: {
            size: 10
          }
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Cumulative Points',
          color: 'var(--vi-text2)',
          font: {
            size: 10,
            weight: '500'
          }
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 250,
          callback: function(value) {
            return value + ' pts';
          },
          font: {
            size: 10
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            weight: '500'
          }
        }
      }
    },
    elements: {
      line: {
        borderJoin: 'round',
      },
      point: {
        hoverBorderWidth: 3,
      }
    }
  };

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">Rewards Wallet</span> 
      </div>

      <div >
        <div className="dash-vi-wallet-card">
          <div className="dash-vi-wallet-vip">
            <IoFlash style={{ marginRight: "6px", color: "#ffd700" }} />
            EMERALD
            <FaGem style={{ marginLeft: "6px", color: "#50c878" }} />
          </div>
          <div className="dash-vi-wallet-label">
            <IoWallet style={{ marginRight: "6px" }} />
            TOTAL REWARD POINTS
          </div>
          <div className="dash-vi-wallet-balance">4,820</div>
          <div className="dash-vi-wallet-pts">
            <FaCoins style={{ marginRight: "4px" }} />
            ≈ $48.20 USDT value · Updated just now
          </div>
          <div className="dash-vi-wallet-row">
            <div className="dash-vi-wallet-mini">
              <div className="dash-vi-wallet-mini-label">
                <MdPending style={{ marginRight: "4px", fontSize: "12px" }} />
                Pending
              </div>
              <div className="dash-vi-wallet-mini-val">215</div>
            </div>
            <div className="dash-vi-wallet-mini">
              <div className="dash-vi-wallet-mini-label">
                <MdVerified style={{ marginRight: "4px", fontSize: "12px", color: "#22c55e" }} />
                Approved
              </div>
              <div className="dash-vi-wallet-mini-val">4,605</div>
            </div>
            <div className="dash-vi-wallet-mini">
              <div className="dash-vi-wallet-mini-label">
                <IoInfinite style={{ marginRight: "4px", fontSize: "12px" }} />
                Lifetime
              </div>
              <div className="dash-vi-wallet-mini-val">8,340</div>
            </div>
            <div className="dash-vi-wallet-mini">
              <div className="dash-vi-wallet-mini-label">
                <IoPeople style={{ marginRight: "4px", fontSize: "12px" }} />
                Referrals
              </div>
              <div className="dash-vi-wallet-mini-val">340</div>
            </div>
          </div>
        </div>

        <div className="dash-vi-stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="dash-vi-stat-card">
            <div className="dash-vi-stat-label">
              <IoTrendingUp style={{ marginRight: "6px", color: "#10b981" }} />
              Bonus Earnings
            </div>
            <div className="dash-vi-stat-value">520</div>
            <div className="dash-vi-stat-change">
              <IoStar style={{ marginRight: "4px", fontSize: "10px", color: "#fbbf24" }} />
              VIP bonus points
            </div>
          </div>
          <div className="dash-vi-stat-card">
            <div className="dash-vi-stat-label">
              <GiDiamondRing style={{ marginRight: "6px", color: "#8b5cf6" }} />
              Staking Bonus
            </div>
            <div className="dash-vi-stat-value">180</div>
            <div className="dash-vi-stat-change">
              <MdMilitaryTech style={{ marginRight: "4px", fontSize: "10px" }} />
              Emerald tier perk
            </div>
          </div>
          <div className="dash-vi-stat-card">
            <div className="dash-vi-stat-label">
              <IoGift style={{ marginRight: "6px", color: "#ef4444" }} />
              Redeemed
            </div>
            <div className="dash-vi-stat-value">3,520</div>
            <div className="dash-vi-stat-change" style={{ color: "var(--vi-text3)" }}>
              <IoTime style={{ marginRight: "4px", fontSize: "10px" }} />
              All time
            </div>
          </div>
        </div>

        <div className="dash-vi-card">
          <div className="dash-vi-card-header">
            <div className="dash-vi-card-title">
              <FaChartLine style={{ marginRight: "8px", color: "#3b82f6" }} />
              Earnings History
            </div>
          </div>
          <div style={{ padding: "20px", height: "380px" }}>
            {chartData ? (
              <Line data={chartData} options={options} />
            ) : (
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "100%",
                color: "var(--vi-text3)"
              }}>
                Loading chart data...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
