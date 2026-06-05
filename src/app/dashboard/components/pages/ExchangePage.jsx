"use client";

import { useMemo, useState } from "react";
import { MdEmojiEvents, MdMilitaryTech, MdVerified, MdPending } from "react-icons/md";
import { IoFlash, IoWallet, IoInfinite, IoPeople } from "react-icons/io5";
import { FaGem, FaCoins } from "react-icons/fa";

export default function ExchangePage({ onGo, onToast }) {
  const [sendAmount, setSendAmount] = useState(0.42);

  const rate = 67842;
  const platformFeePct = 0.003;

  const receive = useMemo(() => {
    const v = Number(sendAmount) || 0;
    return v * rate;
  }, [sendAmount]);

  const networkFee = useMemo(() => 2.40, []);
  const platformFee = useMemo(() => {
    const v = Number(sendAmount) || 0;
    return v * rate * platformFeePct;
  }, [sendAmount]);

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">Task History</span>
      </div>
      <div className="dash-h1">Task History</div>
      
      <div>
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
        <div className="dash-vi-card">
          <div className="dash-vi-card-body" style={{ padding: 0 }}>
            <table className="dash-vi-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Platform</th>
                  <th>Date</th>
                  <th>Points</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Search — Debit Card</td>
                  <td>🔍 Google</td>
                  <td>Today</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+20</td>
                  <td><span className="dash-vi-status dash-vi-status-approved">Approved</span></td>
                </tr>
                <tr>
                  <td>YouTube Watch &amp; Like Task</td>
                  <td>📺 YouTube</td>
                  <td>Today</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+15</td>
                  <td><span className="dash-vi-status dash-vi-status-pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Instagram Follow Campaign</td>
                  <td>📸 Instagram</td>
                  <td>Yesterday</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+25</td>
                  <td><span className="dash-vi-status dash-vi-status-approved">Approved</span></td>
                </tr>
                <tr>
                  <td>WhatsApp Status 24h Task</td>
                  <td>💬 WhatsApp</td>
                  <td>2 days ago</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+30</td>
                  <td><span className="dash-vi-status dash-vi-status-approved">Approved</span></td>
                </tr>
                <tr>
                  <td>X Retweet Campaign</td>
                  <td>🐦 X/Twitter</td>
                  <td>3 days ago</td>
                  <td style={{ color: "#c03030", fontWeight: 700 }}>0</td>
                  <td><span className="dash-vi-status dash-vi-status-rejected">Rejected</span></td>
                </tr>
                <tr>
                  <td>Telegram Group Join Task</td>
                  <td>✈️ Telegram</td>
                  <td>4 days ago</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+18</td>
                  <td><span className="dash-vi-status dash-vi-status-approved">Approved</span></td>
                </tr>
                <tr>
                  <td>Survey — Product Feedback</td>
                  <td>📋 Survey</td>
                  <td>5 days ago</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+50</td>
                  <td><span className="dash-vi-status dash-vi-status-approved">Approved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
