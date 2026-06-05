"use client";

import { FaTrophy, FaMoneyBillWave, FaCreditCard, FaCrown, FaBolt, FaShoppingCart } from "react-icons/fa";
import { GiToken, GiUpgrade } from "react-icons/gi";
import { MdPayment, MdDiscount } from "react-icons/md";
import { SiVeltt } from "react-icons/si";
import { IoMdRocket } from "react-icons/io";

export default function RewardsPage({ onGo, onToast }) {
  const handleRedeem = (rewardName, minPoints, requiredPoints) => {
    const currentPoints = 4820;
    
    if (currentPoints < minPoints) {
      onToast?.({
        type: "error",
        message: `Insufficient points! You need at least ${minPoints} points to redeem ${rewardName}.`
      });
      return;
    }
    
    onToast?.({
      type: "success",
      message: `Redeemed ${rewardName} successfully!`
    });
    
    // You can add additional logic here like API calls
    console.log(`Redeeming ${rewardName} with ${requiredPoints} points`);
  };

  const handleViewDetails = () => {
    onToast?.({
      type: "info",
      message: "VIP upgrade details: 2,000 points = 1 tier up (Bronze → Silver → Gold → Emerald → Diamond)"
    });
  };

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">Redeem Rewards</span>
      </div>
      <div className="dash-h1">
        <FaMoneyBillWave style={{ marginRight: "12px", color: "#fbbf24" }} />
        Balance: 4,820 pts · Redeem for tokens, USDT & more
      </div>

      <div >
        <div className="dash-vi-redeem-grid">
          {/* Velt Impera Token */}
          <div className="dash-vi-redeem-card text-center">
            <div className="dash-vi-redeem-icon">
              <GiToken style={{ fontSize: "32px", color: "#8b5cf6" }} />
            </div>
            <div className="dash-vi-redeem-name">
              <GiToken style={{ marginRight: "6px", fontSize: "14px" }} />
              Velt Impera Token
            </div>
            <div className="dash-vi-redeem-pts">Min 500 pts required</div>
            <div className="dash-vi-redeem-rate">100 pts = 1 VIMP</div>
            <button 
              className="dash-vi-btn dash-vi-btn-primary" 
              style={{ width: "100%" }}
              onClick={() => handleRedeem("Velt Impera Token", 500, 500)}
            >
              <GiToken style={{ marginRight: "6px" }} />
              Redeem Now
            </button>
          </div>

          {/* USDT Payout */}
          <div className="dash-vi-redeem-card text-center">
            <div className="dash-vi-redeem-icon">
              <FaMoneyBillWave style={{ fontSize: "32px", color: "#10b981" }} />
            </div>
            <div className="dash-vi-redeem-name">
              <FaMoneyBillWave style={{ marginRight: "6px", fontSize: "14px" }} />
              USDT Payout
            </div>
            <div className="dash-vi-redeem-pts">Min 1,000 pts required</div>
            <div className="dash-vi-redeem-rate">100 pts = $1.00</div>
            <button 
              className="dash-vi-btn dash-vi-btn-primary" 
              style={{ width: "100%" }}
              onClick={() => handleRedeem("USDT Payout", 1000, 1000)}
            >
              <FaMoneyBillWave style={{ marginRight: "6px" }} />
              Redeem Now
            </button>
          </div>

          {/* Debit Card Discount */}
          <div className="dash-vi-redeem-card text-center">
            <div className="dash-vi-redeem-icon">
              <FaCreditCard style={{ fontSize: "32px", color: "#ef4444" }} />
            </div>
            <div className="dash-vi-redeem-name">
              <FaCreditCard style={{ marginRight: "6px", fontSize: "14px" }} />
              Debit Card Discount
            </div>
            <div className="dash-vi-redeem-pts">Min 200 pts required</div>
            <div className="dash-vi-redeem-rate">200 pts = 10% off</div>
            <button 
              className="dash-vi-btn dash-vi-btn-primary" 
              style={{ width: "100%" }}
              onClick={() => handleRedeem("Debit Card Discount", 200, 200)}
            >
              <MdDiscount style={{ marginRight: "6px" }} />
              Redeem Now
            </button>
          </div>

          {/* VIP Upgrade */}
          <div className="dash-vi-redeem-card text-center">
            <div className="dash-vi-redeem-icon">
              <FaCrown style={{ fontSize: "32px", color: "#fbbf24" }} />
            </div>
            <div className="dash-vi-redeem-name">
              <FaCrown style={{ marginRight: "6px", fontSize: "14px" }} />
              VIP Upgrade
            </div>
            <div className="dash-vi-redeem-pts">Min 2,000 pts required</div>
            <div className="dash-vi-redeem-rate">2,000 pts = 1 tier up</div>
            <button 
              className="dash-vi-btn dash-vi-btn-ghost" 
              style={{ width: "100%", border: "1px solid var(--vi-border)" }}
              onClick={handleViewDetails}
            >
              <GiUpgrade style={{ marginRight: "6px" }} />
              View Details
            </button>
          </div>

          {/* Staking Booster */}
          <div className="dash-vi-redeem-card text-center">
            <div className="dash-vi-redeem-icon">
              <FaBolt style={{ fontSize: "32px", color: "#eab308" }} />
            </div>
            <div className="dash-vi-redeem-name">
              <FaBolt style={{ marginRight: "6px", fontSize: "14px" }} />
              Staking Booster
            </div>
            <div className="dash-vi-redeem-pts">Min 300 pts required</div>
            <div className="dash-vi-redeem-rate">300 pts = 2x boost / 7d</div>
            <button 
              className="dash-vi-btn dash-vi-btn-primary" 
              style={{ width: "100%" }}
              onClick={() => handleRedeem("Staking Booster", 300, 300)}
            >
              <IoMdRocket style={{ marginRight: "6px" }} />
              Redeem Now
            </button>
          </div>

          {/* Marketplace Credits */}
          <div className="dash-vi-redeem-card text-center">
            <div className="dash-vi-redeem-icon">
              <FaShoppingCart style={{ fontSize: "32px", color: "#3b82f6" }} />
            </div>
            <div className="dash-vi-redeem-name">
              <FaShoppingCart style={{ marginRight: "6px", fontSize: "14px" }} />
              Marketplace Credits
            </div>
            <div className="dash-vi-redeem-pts">Min 150 pts required</div>
            <div className="dash-vi-redeem-rate">100 pts = $0.80 credit</div>
            <button 
              className="dash-vi-btn dash-vi-btn-primary" 
              style={{ width: "100%" }}
              onClick={() => handleRedeem("Marketplace Credits", 150, 150)}
            >
              <MdPayment style={{ marginRight: "6px" }} />
              Redeem Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
