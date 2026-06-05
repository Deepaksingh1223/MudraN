"use client";

export default function PaymentsPage({ onGo, onToast }) {
  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">My Task</span>
      </div>

      <div className="dash-h1">My Task</div>

      <div >
        <div className="dash-vi-tabs">
          <div className="dash-vi-tab dash-active">Available (12)</div>
          <div className="dash-vi-tab">In Progress (3)</div>
          <div className="dash-vi-tab">Submitted (2)</div>
          <div className="dash-vi-tab">Approved (178)</div>
          <div className="dash-vi-tab">Rejected (5)</div>
        </div>
        <div className="dash-vi-task-grid">
          <div className="dash-vi-task-card">
            <div className="dash-vi-task-platform">
              <div className="dash-vi-plat-icon" style={{ background: "rgba(66,133,244,0.1)" }}>🔍</div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--vi-text)" }}>Google</div>
                <div className="dash-vi-plat-name">Search Task</div>
              </div>
            </div>
            <div className="dash-vi-task-title">Search "Velt Impera Staking" keyword task</div>
            <div className="dash-vi-task-meta">
              <span className="dash-vi-tag dash-vi-tag-pts">+20 pts</span>
              <span className="dash-vi-status dash-vi-status-approved" style={{ fontSize: "10px" }}>Approved</span>
            </div>
            <div className="dash-vi-task-progress-bar">
              <div className="dash-vi-task-progress-fill" style={{ width: "100%" }}></div>
            </div>
            <div style={{ fontSize: "11px", color: "var(--vi-text3)" }}>Completed · 2 days ago</div>
          </div>
          
          <div className="dash-vi-task-card">
            <div className="dash-vi-task-platform">
              <div className="dash-vi-plat-icon" style={{ background: "rgba(255,0,0,0.1)" }}>📺</div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--vi-text)" }}>YouTube</div>
                <div className="dash-vi-plat-name">Watch Task</div>
              </div>
            </div>
            <div className="dash-vi-task-title">Watch Velt Impera promo &amp; answer question</div>
            <div className="dash-vi-task-meta">
              <span className="dash-vi-tag dash-vi-tag-pts">+15 pts</span>
              <span className="dash-vi-status dash-vi-status-pending">Submitted</span>
            </div>
            <div className="dash-vi-task-progress-bar">
              <div className="dash-vi-task-progress-fill" style={{ width: "100%" }}></div>
            </div>
            <div style={{ fontSize: "11px", color: "var(--vi-text3)" }}>Under verification · 20 min ago</div>
          </div>
          
          <div className="dash-vi-task-card">
            <div className="dash-vi-task-platform">
              <div className="dash-vi-plat-icon" style={{ background: "rgba(193,53,132,0.1)" }}>📸</div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--vi-text)" }}>Instagram</div>
                <div className="dash-vi-plat-name">Follow &amp; Like</div>
              </div>
            </div>
            <div className="dash-vi-task-title">Follow &amp; like 3 posts – in progress</div>
            <div className="dash-vi-task-meta">
              <span className="dash-vi-tag dash-vi-tag-pts">+25 pts</span>
              <span className="dash-vi-status dash-vi-status-pending" style={{ background: "rgba(0,120,255,0.08)", color: "#0060cc" }}>In Progress</span>
            </div>
            <div className="dash-vi-task-progress-bar">
              <div className="dash-vi-task-progress-fill" style={{ width: "60%" }}></div>
            </div>
            <div style={{ fontSize: "11px", color: "var(--vi-text3)" }}>60% done · Resume now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
