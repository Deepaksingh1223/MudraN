"use client";

import { useRef, useState } from "react";

export default function CardsPage({ onGo, onToast }) {
  const fileInputRef = useRef(null);
  const [showTaskDetail, setShowTaskDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [activeCategory, setActiveCategory] = useState("Google");

  const categories = [
    { name: "Google", icon: "🔍", count: 4 },
    { name: "YouTube", icon: "📺", count: 3 },
    { name: "Instagram", icon: "📸", count: 5 },
    { name: "WhatsApp", icon: "💬", count: 2 },
    { name: "X / Twitter", icon: "𝕏", count: 3 },
    { name: "LinkedIn", icon: "👔", count: 2 },
    { name: "Telegram", icon: "✈️", count: 4 },
    { name: "Discord", icon: "💬", count: 2 },
    { name: "Facebook", icon: "📘", count: 3 },
    { name: "Survey", icon: "📝", count: 6 },
  ];

  const [tasks] = useState([
    { 
      id: 1, 
      title: "Search 'Velt Impera Debit Card' & find hidden code", 
      platform: "Google", 
      points: 20, 
      time: "~3 min", 
      difficulty: "Easy", 
      progress: 43,
      stepsCompleted: 3,
      totalSteps: 7,
      steps: [
        "Open Google (google.com)",
        'Search keyword: "Velt Impera Debit Card"',
        "Find Velt Impera official website in results",
        "Open the target page (Debit Card page)",
        "Read the full article on the page",
        "Find the hidden verification code on the page",
        "Submit the code below with screenshot proof"
      ]
    },
    { 
      id: 2, 
      title: "Watch 'Velt Impera Staking' video for 3 min & like", 
      platform: "YouTube", 
      points: 15, 
      time: "~5 min", 
      difficulty: "Easy", 
      progress: 0,
      stepsCompleted: 0,
      totalSteps: 7,
      steps: [
        "Open YouTube",
        'Search for "Velt Impera Staking"',
        "Watch video for 3 minutes",
        "Click like button",
        "Subscribe to channel",
        "Take screenshot as proof",
        "Submit screenshot"
      ]
    },
    { 
      id: 3, 
      title: "Follow @MUDRA, like 3 posts & share story", 
      platform: "Instagram", 
      points: 25, 
      time: "~4 min", 
      difficulty: "Easy", 
      progress: 40,
      stepsCompleted: 3,
      totalSteps: 7,
      steps: [
        "Open Instagram",
        "Search @MUDRA",
        "Follow the account",
        "Like 3 posts",
        "Share story",
        "Take screenshot",
        "Submit proof"
      ]
    },
    { 
      id: 4, 
      title: "Upload Velt Impera banner as WhatsApp Status for 24h", 
      platform: "WhatsApp", 
      points: 30, 
      time: "~24 hrs", 
      difficulty: "Medium", 
      progress: 0,
      stepsCompleted: 0,
      totalSteps: 7,
      steps: [
        "Download banner image",
        "Open WhatsApp",
        "Go to Status",
        "Upload banner as status",
        "Keep status for 24 hours",
        "Take screenshot after 24h",
        "Submit proof"
      ]
    },
    { 
      id: 5, 
      title: "Share Velt Impera post and connect with 3 members", 
      platform: "LinkedIn", 
      points: 35, 
      time: "~6 min", 
      difficulty: "Medium", 
      progress: 0,
      stepsCompleted: 0,
      totalSteps: 6,
      steps: [
        "Open LinkedIn",
        "Find Velt Impera post",
        "Share the post",
        "Connect with 3 members",
        "Take screenshots",
        "Submit proof"
      ]
    },
    { 
      id: 6, 
      title: "Join Velt Impera Discord & post intro in #general", 
      platform: "Discord", 
      points: 40, 
      time: "~5 min", 
      difficulty: "Medium", 
      progress: 0,
      stepsCompleted: 0,
      totalSteps: 6,
      steps: [
        "Join Discord server",
        "Read #rules channel",
        "Post introduction in #general",
        "React to welcome message",
        "Take screenshots",
        "Submit proof"
      ]
    },
  ]);

  const handleStartTask = (task) => {
    setSelectedTask(task);
    setShowTaskDetail(true);
    setVerificationCode("");
    setUploadedFile(null);
    if (onToast) onToast(`Started: ${task.title}`);
  };

  const handleBackToTasks = () => {
    setShowTaskDetail(false);
    setSelectedTask(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      if (onToast) onToast(`File ${file.name} uploaded successfully`);
    }
  };

  const handleSubmitTask = () => {
    if (!verificationCode) {
      if (onToast) onToast("Please enter the verification code");
      return;
    }
    if (!uploadedFile) {
      if (onToast) onToast("Please upload a screenshot");
      return;
    }
    if (onToast) onToast("Task submitted for verification! Results in 5-30 minutes");
    handleBackToTasks();
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty === "Easy") return { background: "rgba(80, 200, 120, 0.1)", color: "#2e7d32", borderColor: "rgba(80, 200, 120, 0.2)" };
    if (difficulty === "Medium") return { background: "rgba(220, 50, 50, 0.1)", color: "#c03030", borderColor: "rgba(220, 50, 50, 0.2)" };
    return { background: "rgba(255, 165, 0, 0.1)", color: "#e68a00", borderColor: "rgba(255, 165, 0, 0.2)" };
  };

  const getPlatformIconBg = (platform) => {
    const colors = {
      Google: "rgba(66,133,244,0.1)",
      YouTube: "rgba(255,0,0,0.1)",
      Instagram: "rgba(193,53,132,0.1)",
      WhatsApp: "rgba(37,211,102,0.1)",
      LinkedIn: "rgba(0,120,255,0.1)",
      Discord: "rgba(88,101,242,0.1)"
    };
    return colors[platform] || "rgba(100,100,100,0.1)";
  };

  const getPlatformIcon = (platform) => {
    const icons = {
      Google: "🔍",
      YouTube: "📺",
      Instagram: "📸",
      WhatsApp: "💬",
      LinkedIn: "👔",
      Discord: "💬"
    };
    return icons[platform] || "📱";
  };

  return (
    <div className="dash-pg dash-is-active" id="pg-home">
      <div className="dash-pad">
        <div className="dash-g2">
          <div className="dash-card">
            <div className="dash-ch">
              <div>
                <div className="dash-ct flexing-div">Task Center</div>
                <div className="dash-cs">12 tasks available · Earn up to 300 pts today</div>
              </div>
              <span className="dash-cl" onClick={() => onToast && onToast("Filters applied")}>Filter</span>
            </div>
          </div>
        </div>

        {/* Task List Section - Hide when showTaskDetail is true */}
        {!showTaskDetail && (
          <div >
            {/* Search Growth Engine Card */}
            <div className="dash-vi-sge-card">
              <div className="dash-vi-sge-badge">SEARCH GROWTH ENGINE™</div>
              <div className="dash-vi-sge-title">Turn Real Searches Into Organic Visibility</div>
              <div className="dash-vi-sge-sub">Complete search tasks to earn premium rewards while helping Velt Impera grow organically.</div>
              <div className="dash-vi-sge-keyword">
                <div>
                  <div className="dash-vi-sge-kw-label">Active Keyword</div>
                  <div className="dash-vi-sge-kw-text">"Velt Impera Debit Card"</div>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <div className="dash-vi-sge-kw-label">Reward</div>
                  <div className="dash-vi-sge-kw-text" style={{ fontSize: "16px" }}>20 pts</div>
                </div>
              </div>
              <div className="dash-vi-sge-steps">
                <div className="dash-vi-sge-step"><div className="dash-vi-sge-step-num">1</div><div className="dash-vi-sge-step-txt">Search</div></div>
                <div className="dash-vi-sge-step"><div className="dash-vi-sge-step-num">2</div><div className="dash-vi-sge-step-txt">Find site</div></div>
                <div className="dash-vi-sge-step"><div className="dash-vi-sge-step-num">3</div><div className="dash-vi-sge-step-txt">Read</div></div>
                <div className="dash-vi-sge-step"><div className="dash-vi-sge-step-num">4</div><div className="dash-vi-sge-step-txt">Get code</div></div>
                <div className="dash-vi-sge-step"><div className="dash-vi-sge-step-num">5</div><div className="dash-vi-sge-step-txt">Submit</div></div>
              </div>
              <button 
                className="dash-vi-btn dash-vi-btn-primary" 
                style={{ background: "var(--vi-green)", color: "#000", fontSize: "13px", padding: "9px 20px" }}
                onClick={() => handleStartTask(tasks[0])}
              >
                Start Search Task →
              </button>
            </div>

            {/* Browse by Platform */}
            <div className="dash-vi-section-title">Browse by Platform</div>
            <div className="dash-vi-cat-grid">
              {categories.map((cat) => (
                <div 
                  key={cat.name}
                  className={`vi-cat-card ${activeCategory === cat.name ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <div className="dash-vi-cat-icon">{cat.icon}</div>
                  <div className="dash-vi-cat-name">{cat.name}</div>
                  <div className="dash-vi-cat-count">{cat.count} tasks</div>
                </div>
              ))}
            </div>

            {/* Available Tasks */}
            <div className="dash-vi-section-title">Available Tasks</div>
            <div className="dash-vi-task-grid">
              {tasks.map((task) => (
                <div key={task.id} className="dash-vi-task-card">
                  <div className="dash-vi-task-platform">
                    <div className="dash-vi-plat-icon" style={{ background: getPlatformIconBg(task.platform) }}>
                      {getPlatformIcon(task.platform)}
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--tx3)" }}>{task.platform}</div>
                      <div className="dash-vi-plat-name">Search Task</div>
                    </div>
                  </div>
                  <div className="dash-vi-task-title">{task.title}</div>
                  <div className="dash-vi-task-meta">
                    <span className="dash-vi-tag dash-vi-tag-pts">+{task.points} pts</span>
                    <span className="dash-vi-tag dash-vi-tag-time">{task.time}</span>
                    <span className="dash-vi-tag dash-vi-tag-diff" style={getDifficultyColor(task.difficulty)}>{task.difficulty}</span>
                  </div>
                  <div className="dash-vi-task-progress-bar">
                    <div className="dash-vi-task-progress-fill" style={{ width: `${task.progress}%` }}></div>
                  </div>
                  <div className="dash-vi-task-actions">
                    <button className="dash-vi-btn dash-vi-btn-primary" onClick={() => handleStartTask(task)}>
                      {task.progress > 0 ? "Resume" : "Start Task"}
                    </button>
                    <button className="dash-vi-btn dash-vi-btn-ghost" onClick={() => handleStartTask(task)}>Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Task Detail Section - Exact HTML structure from your image */}
        {showTaskDetail && selectedTask && (
          <div id="page-taskdetail" className="dash-vi-page dash-active">
            <div className="dash-vi-topbar">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className="dash-vi-icon-btn" onClick={handleBackToTasks} style={{ cursor: "pointer" }}>
                  <i className="ti ti-arrow-left" style={{ fontSize: "15px" }} aria-hidden="true"></i>
                </div>
                <div>
                  <div className="dash-vi-page-title">Task Details</div>
                  <div className="dash-vi-page-sub">{selectedTask.platform} Search · Search Growth Engine™</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="dash-vi-tag dash-vi-tag-pts" style={{ fontSize: "12px", padding: "5px 12px" }}>+{selectedTask.points} Points</span>
                <span className="dash-vi-tag dash-vi-tag-time" style={{ fontSize: "12px", padding: "5px 12px" }}>{selectedTask.time}</span>
              </div>
            </div>
            <div >
              <div className="dash-vi-two-col" style={{ alignItems: "start" }}>
                <div>
                  <div className="dash-vi-card" style={{ marginBottom: "12px" }}>
                    <div className="dash-vi-card-header">
                      <div className="dash-vi-card-title">Instructions</div>
                      <div className="dash-vi-status dash-vi-status-pending">In Progress</div>
                    </div>
                    <div className="dash-vi-card-body" style={{ padding: "14px 16px" }}>
                      <ol className="dash-vi-steps-list">
                        {selectedTask.steps.map((step, index) => (
                          <li key={index} className={`vi-step ${index < selectedTask.stepsCompleted ? "done" : ""}`}>
                            <div className="dash-vi-step-text">
                              <strong>Step {index + 1}</strong> — {step}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="dash-vi-card">
                    <div className="dash-vi-card-header">
                      <div className="dash-vi-card-title">Task Progress</div>
                      <div style={{ fontSize: "12px", fontWeight: "700", color: "var(--vi-green)" }}>
                        {selectedTask.stepsCompleted} / {selectedTask.totalSteps} Steps
                      </div>
                    </div>
                    <div className="dash-vi-card-body">
                      <div style={{ height: "8px", background: "var(--vi-surface2)", borderRadius: "4px", overflow: "hidden", marginBottom: "8px" }}>
                        <div style={{ 
                          height: "100%", 
                          width: `${(selectedTask.stepsCompleted / selectedTask.totalSteps) * 100}%`, 
                          background: "linear-gradient(90deg, var(--vi-green), var(--vi-green-mid))", 
                          borderRadius: "4px" 
                        }}></div>
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--vi-text3)" }}>
                        {Math.round((selectedTask.stepsCompleted / selectedTask.totalSteps) * 100)}% complete · Est. {Math.max(1, Math.round((selectedTask.totalSteps - selectedTask.stepsCompleted) * 0.5))} min remaining
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="dash-vi-card">
                    <div className="dash-vi-card-header">
                      <div className="dash-vi-card-title">Submit Proof</div>
                    </div>
                    <div className="dash-vi-card-body">
                      <label className="dash-vi-label">Hidden Code Found on Page</label>
                      <input 
                        className="dash-vi-input" 
                        type="text" 
                        placeholder="Enter the hidden verification code..." 
                        style={{ marginBottom: "12px", width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--vi-border-hard)" }}
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                      />

                      <label className="dash-vi-label">Upload Screenshot</label>
                      <div 
                        style={{ border: "2px dashed var(--vi-border-hard)", borderRadius: "10px", padding: "24px", textAlign: "center", cursor: "pointer", marginBottom: "12px", background: "var(--vi-green-glow)" }}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input 
                          ref={fileInputRef}
                          type="file" 
                          accept="image/png,image/jpeg,image/jpg" 
                          style={{ display: "none" }}
                          onChange={handleFileUpload}
                        />
                        <i className="ti ti-cloud-upload" style={{ fontSize: "24px", color: "var(--vi-green)", display: "block", marginBottom: "6px" }} aria-hidden="true"></i>
                        <div style={{ fontSize: "12px", color: "var(--vi-text2)", fontWeight: "500" }}>
                          {uploadedFile ? uploadedFile.name : "Click to upload screenshot"}
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--vi-text3)", marginTop: "2px" }}>PNG, JPG up to 5MB</div>
                      </div>

                      <button 
                        className="dash-vi-btn dash-vi-btn-primary" 
                        style={{ width: "100%", padding: "11px", fontSize: "13px" }}
                        onClick={handleSubmitTask}
                      >
                        Submit Task for Verification
                      </button>
                      <div style={{ fontSize: "11px", color: "var(--vi-text3)", textAlign: "center", marginTop: "8px" }}>
                        AI verification · Results in 5–30 min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
