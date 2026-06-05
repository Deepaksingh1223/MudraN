"use client";

import { FaCrown, FaMedal, FaTrophy, FaUserGraduate, FaUsers, FaSearch, FaCalendarAlt } from "react-icons/fa";
import { GiLaurelCrown, GiRank3 } from "react-icons/gi";
import { MdEmojiEvents, MdVerified } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

export default function TransactionsPage({ onGo, onToast }) {
  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">Leaderboard</span>
      </div>

      <div className="dash-h1">
        <FaTrophy style={{ marginRight: "12px", color: "#fbbf24", fontSize: "24px" }} />
        Leaderboard
      </div>

      <div >
        <div className="dash-vi-tabs">
          <div className="dash-vi-tab dash-active">
            <FaCrown style={{ marginRight: "6px", fontSize: "12px" }} />
            Top Earners
          </div>
          <div className="dash-vi-tab">
            <FaUsers style={{ marginRight: "6px", fontSize: "12px" }} />
            Top Referrers
          </div>
          <div className="dash-vi-tab">
            <FaSearch style={{ marginRight: "6px", fontSize: "12px" }} />
            Search Contrib.
          </div>
          <div className="dash-vi-tab">
            <FaCalendarAlt style={{ marginRight: "6px", fontSize: "12px" }} />
            Monthly
          </div>
        </div>
        
        <div className="dash-vi-card">
          <div className="dash-vi-card-body" style={{ padding: "8px 16px" }}>
            <div className="dash-vi-lb-item">
              <div className="dash-vi-lb-rank dash-gold">1</div>
              <div className="dash-vi-lb-av">AK</div>
              <div className="dash-vi-lb-name">
                Arjun K. 
                <span className="flex justify-center items-center" style={{ fontSize: "10px", color: "var(--vi-text3)" }}>
                  <GiLaurelCrown style={{ marginLeft: "4px", marginRight: "2px", fontSize: "10px" }} />
                  Legend
                </span>
              </div>
              <div className="dash-vi-lb-pts">18,420 pts</div>
            </div>
            
            <div className="dash-vi-lb-item">
              <div className="dash-vi-lb-rank dash-silver">2</div>
              <div className="dash-vi-lb-av">PS</div>
              <div className="dash-vi-lb-name">
                Priya S. 
                <span className="flex justify-center items-center" style={{ fontSize: "10px", color: "var(--vi-text3)" }}>
                  <FaMedal style={{ marginLeft: "4px", marginRight: "2px", fontSize: "10px" }} />
                  Elite
                </span>
              </div>
              <div className="dash-vi-lb-pts">16,890 pts</div>
            </div>
            
            <div className="dash-vi-lb-item">
              <div className="dash-vi-lb-rank dash-bronze">3</div>
              <div className="dash-vi-lb-av">MR</div>
              <div className="dash-vi-lb-name">
                Mohammed R. 
                <span className="flex justify-center items-center" style={{ fontSize: "10px", color: "var(--vi-text3)" }}>
                  <FaMedal style={{ marginLeft: "4px", marginRight: "2px", fontSize: "10px" }} />
                  Elite
                </span>
              </div>
              <div className="dash-vi-lb-pts">14,220 pts</div>
            </div>
            
            <div className="dash-vi-lb-item">
              <div className="dash-vi-lb-rank">4</div>
              <div className="dash-vi-lb-av">ST</div>
              <div className="dash-vi-lb-name">
                Sneha T. 
                <span className="flex justify-center items-center" style={{ fontSize: "10px", color: "var(--vi-text3)" }}>
                  <FaCrown style={{ marginLeft: "4px", marginRight: "2px", fontSize: "10px" }} />
                  Impera
                </span>
              </div>
              <div className="dash-vi-lb-pts">12,100 pts</div>
            </div>
            
            <div className="dash-vi-lb-item">
              <div className="dash-vi-lb-rank">5</div>
              <div className="dash-vi-lb-av">VN</div>
              <div className="dash-vi-lb-name">
                Vikram N. 
                <span className="flex justify-center items-center" style={{ fontSize: "10px", color: "var(--vi-text3)" }}>
                  <FaCrown style={{ marginLeft: "4px", marginRight: "2px", fontSize: "10px" }} />
                  Impera
                </span>
              </div>
              <div className="dash-vi-lb-pts">10,540 pts</div>
            </div>
            
            <div className="dash-vi-lb-item">
              <div className="dash-vi-lb-rank">6</div>
              <div className="dash-vi-lb-av">KP</div>
              <div className="dash-vi-lb-name">
                Kavita P. 
                <span className="flex justify-center items-center" style={{ fontSize: "10px", color: "var(--vi-text3)" }}>
                  <GiRank3 style={{ marginLeft: "4px", marginRight: "2px", fontSize: "10px" }} />
                  Emerald
                </span>
              </div>
              <div className="dash-vi-lb-pts">8,900 pts</div>
            </div>
            
            <div className="dash-vi-lb-item">
              <div className="dash-vi-lb-rank">7</div>
              <div className="dash-vi-lb-av">RA</div>
              <div className="dash-vi-lb-name">
                Rohit A. 
                <span className="flex justify-center items-center" style={{ fontSize: "10px", color: "var(--vi-text3)" }}>
                  <GiRank3 style={{ marginLeft: "4px", marginRight: "2px", fontSize: "10px" }} />
                  Emerald
                </span>
              </div>
              <div className="dash-vi-lb-pts">7,830 pts</div>
            </div>
            
            <div className="dash-vi-lb-item" style={{ background: "var(--vi-green-glow)", borderRadius: "8px", padding: "8px 10px", margin: "0 -4px" }}>
              <div className="dash-vi-lb-rank" style={{ color: "var(--vi-green)", fontWeight: 800 }}>8</div>
              <div className="dash-vi-lb-av" style={{ background: "var(--vi-green)", color: "#000" }}>RK</div>
              <div className="dash-vi-lb-name" style={{ fontWeight: 600 }}>
                Rahul K. 
                <span className="flex justify-center items-center" style={{ fontSize: "10px", color: "var(--vi-green)" }}>
                  <IoMdPerson style={{ marginLeft: "4px", marginRight: "2px", fontSize: "10px" }} />
                  You · Emerald
                </span>
              </div>
              <div className="dash-vi-lb-pts">4,820 pts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
