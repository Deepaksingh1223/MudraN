"use client";

import { useState } from "react";

export default function TwitterTask() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  // Tasks data with progress
  const [tasks, setTasks] = useState({
    tw1: { title: "Follow @MUDRAFinance", description: "Follow official MUDRA X account", points: 8, progress: 100, status: "done", type: "follow", stepsDone: 1, totalSteps: 1 },
    tw2: { title: "Retweet: Platform Launch Tweet", description: "Retweet our platform launch", points: 10, progress: 100, status: "done", type: "retweet", stepsDone: 1, totalSteps: 1 },
    tw3: { title: "Reply: Introduce Yourself", description: "Reply to our community intro tweet", points: 7, progress: 25, status: "progress", type: "reply", stepsDone: 1, totalSteps: 4 },
    tw4: { title: "Retweet: Velt Impera Tweet", description: "Retweet the Velt Impera listing", points: 10, progress: 0, status: "new", type: "retweet", stepsDone: 0, totalSteps: 1 },
    tw5: { title: "Like: Crypto Exchange Thread", description: "Like our thread on crypto conversion", points: 5, progress: 0, status: "new", type: "like", stepsDone: 0, totalSteps: 1 }
  });

  const [completedCount, setCompletedCount] = useState(() => {
    return Object.values(tasks).filter(t => t.status === "done").length;
  });

  const totalTasks = Object.keys(tasks).length;
  const completedPercentage = (completedCount / totalTasks) * 100;

  const go = (page) => {
    window.location.href = `/${page}`;
  };

  const openSoc = (taskId, platform) => {
    const task = tasks[taskId];
    if (task) {
      setSelectedTask({
        id: taskId,
        ...task
      });
      setShowDetail(true);
    }
  };

  const closeSoc = () => {
    setShowDetail(false);
    setSelectedTask(null);
  };

  const completeStep = (stepIndex) => {
    if (!selectedTask) return;
    
    const newStepsDone = stepIndex + 1;
    const newProgress = (newStepsDone / selectedTask.totalSteps) * 100;
    let newStatus = selectedTask.status;
    
    if (newStepsDone === selectedTask.totalSteps) {
      newStatus = "done";
    } else if (newStepsDone > 0) {
      newStatus = "progress";
    }
    
    // Update tasks state
    setTasks(prev => ({
      ...prev,
      [selectedTask.id]: {
        ...prev[selectedTask.id],
        stepsDone: newStepsDone,
        progress: newProgress,
        status: newStatus
      }
    }));
    
    // Update selected task
    setSelectedTask(prev => ({
      ...prev,
      stepsDone: newStepsDone,
      progress: newProgress,
      status: newStatus
    }));
    
    // Update completed count
    if (newStepsDone === selectedTask.totalSteps && selectedTask.status !== "done") {
      setCompletedCount(prev => prev + 1);
    }
  };

  const claimReward = () => {
    if (selectedTask && selectedTask.stepsDone === selectedTask.totalSteps) {
      alert(`🎉 Congratulations! You earned +${selectedTask.points} points!`);
      closeSoc();
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case "follow":
        return <i className="ti ti-user-plus text-[15px] text-white" aria-hidden="true"></i>;
      case "retweet":
        return <i className="ti ti-repeat text-[15px] text-white" aria-hidden="true"></i>;
      case "reply":
        return <i className="ti ti-arrow-back-up text-[15px] text-white" aria-hidden="true"></i>;
      case "like":
        return <i className="ti ti-heart text-[15px] text-white" aria-hidden="true"></i>;
      default:
        return <i className="ti ti-heart text-[15px] text-white" aria-hidden="true"></i>;
    }
  };

  // Render detail view
  const renderDetailView = () => {
    if (!showDetail || !selectedTask) return null;
    
    return (
      <div id="tw-detail" style={{display: "block", marginTop: "20px"}}>
        <div className="flex items-center gap-[9px] mb-[12px] flex-wrap">
          <button className="btn dash-btn-muted dashboard-btn dash-bsm" onClick={closeSoc}>
            <i className="ti ti-arrow-left"></i>Back
          </button>
          <div style={{fontSize:"13px", fontWeight:"600", color:"var(--tx)", flex:1, minWidth:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
            {selectedTask.title}
          </div>
          <div className="dash-pts" style={{flexShrink:0}}>+{selectedTask.points} pts</div>
        </div>
        
        <div style={{
          display:"grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap:"12px"
        }}>
          <div className="dash-card">
            <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"10px"}}>Task Steps</div>
            
            {/* Step 1 */}
            <div className="dash-step-i" style={{display:"flex", alignItems:"flex-start", gap:"10px", marginBottom: "15px"}}>
              <div style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: selectedTask.stepsDone > 0 ? "var(--gr)" : (selectedTask.stepsDone === 0 ? "var(--glt)" : "var(--bg3)"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                {selectedTask.stepsDone > 0 ? (
                  <i className="ti ti-check" style={{fontSize:"12px", color:"#fff"}}></i>
                ) : (
                  <span style={{fontSize:"11px", color: selectedTask.stepsDone === 0 ? "#fff" : "var(--tx3)"}}>1</span>
                )}
              </div>
              <div style={{flex: 1}}>
                <div style={{
                  fontSize: "13px",
                  fontWeight: selectedTask.stepsDone === 0 ? "600" : "normal",
                  color: selectedTask.stepsDone > 0 ? "var(--tx2)" : "var(--tx)"
                }}>
                  {selectedTask.type === "follow" && "Search and follow @MUDRAFinance on X/Twitter"}
                  {selectedTask.type === "retweet" && "Find the tweet and click Retweet button"}
                  {selectedTask.type === "reply" && "Open the community intro tweet"}
                  {selectedTask.type === "like" && "Find the thread and click Like button"}
                </div>
                {selectedTask.stepsDone === 0 && (
                  <button 
                    className="btn dash-btn-fill dash-bsm" 
                    style={{marginTop: "8px", fontSize: "11px", background: "#1DA1F2"}}
                    onClick={() => completeStep(0)}
                  >
                    Complete Step 1
                  </button>
                )}
                {selectedTask.stepsDone > 0 && (
                  <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                    ✓ Step completed
                  </div>
                )}
              </div>
            </div>
            
            {/* Step 2 - For reply type */}
            {selectedTask.type === "reply" && selectedTask.totalSteps >= 2 && (
              <div className="dash-step-i" style={{display:"flex", alignItems:"flex-start", gap:"10px", marginBottom: "15px"}}>
                <div style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: selectedTask.stepsDone > 1 ? "var(--gr)" : (selectedTask.stepsDone === 1 ? "var(--glt)" : "var(--bg3)"),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {selectedTask.stepsDone > 1 ? (
                    <i className="ti ti-check" style={{fontSize:"12px", color:"#fff"}}></i>
                  ) : (
                    <span style={{fontSize:"11px", color: selectedTask.stepsDone === 1 ? "#fff" : "var(--tx3)"}}>2</span>
                  )}
                </div>
                <div style={{flex: 1}}>
                  <div style={{
                    fontSize: "13px",
                    fontWeight: selectedTask.stepsDone === 1 ? "600" : "normal",
                    color: selectedTask.stepsDone > 1 ? "var(--tx2)" : "var(--tx)"
                  }}>
                    Write a thoughtful reply (minimum 10 words)
                  </div>
                  {selectedTask.stepsDone === 1 && (
                    <button 
                      className="btn dash-btn-fill dash-bsm" 
                      style={{marginTop: "8px", fontSize: "11px", background: "#1DA1F2"}}
                      onClick={() => completeStep(1)}
                    >
                      Complete Step 2
                    </button>
                  )}
                  {selectedTask.stepsDone > 1 && (
                    <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                      ✓ Step completed
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Step 3 - For reply type */}
            {selectedTask.type === "reply" && selectedTask.totalSteps >= 3 && (
              <div className="dash-step-i" style={{display:"flex", alignItems:"flex-start", gap:"10px", marginBottom: "15px"}}>
                <div style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: selectedTask.stepsDone > 2 ? "var(--gr)" : (selectedTask.stepsDone === 2 ? "var(--glt)" : "var(--bg3)"),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {selectedTask.stepsDone > 2 ? (
                    <i className="ti ti-check" style={{fontSize:"12px", color:"#fff"}}></i>
                  ) : (
                    <span style={{fontSize:"11px", color: selectedTask.stepsDone === 2 ? "#fff" : "var(--tx3)"}}>3</span>
                  )}
                </div>
                <div style={{flex: 1}}>
                  <div style={{
                    fontSize: "13px",
                    fontWeight: selectedTask.stepsDone === 2 ? "600" : "normal",
                    color: selectedTask.stepsDone > 2 ? "var(--tx2)" : "var(--tx)"
                  }}>
                    Include relevant hashtags (#MUDRA #Crypto)
                  </div>
                  {selectedTask.stepsDone === 2 && (
                    <button 
                      className="btn dash-btn-fill dash-bsm" 
                      style={{marginTop: "8px", fontSize: "11px", background: "#1DA1F2"}}
                      onClick={() => completeStep(2)}
                    >
                      Complete Step 3
                    </button>
                  )}
                  {selectedTask.stepsDone > 2 && (
                    <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                      ✓ Step completed
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Step 4 - For reply type */}
            {selectedTask.type === "reply" && selectedTask.totalSteps >= 4 && (
              <div className="dash-step-i" style={{display:"flex", alignItems:"flex-start", gap:"10px", marginBottom: "15px"}}>
                <div style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: selectedTask.stepsDone > 3 ? "var(--gr)" : (selectedTask.stepsDone === 3 ? "var(--glt)" : "var(--bg3)"),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {selectedTask.stepsDone > 3 ? (
                    <i className="ti ti-check" style={{fontSize:"12px", color:"#fff"}}></i>
                  ) : (
                    <span style={{fontSize:"11px", color: selectedTask.stepsDone === 3 ? "#fff" : "var(--tx3)"}}>4</span>
                  )}
                </div>
                <div style={{flex: 1}}>
                  <div style={{
                    fontSize: "13px",
                    fontWeight: selectedTask.stepsDone === 3 ? "600" : "normal",
                    color: selectedTask.stepsDone > 3 ? "var(--tx2)" : "var(--tx)"
                  }}>
                    Click Reply to submit your response
                  </div>
                  {selectedTask.stepsDone === 3 && (
                    <button 
                      className="btn dash-btn-fill dash-bsm" 
                      style={{marginTop: "8px", fontSize: "11px", background: "#1DA1F2"}}
                      onClick={() => completeStep(3)}
                    >
                      Complete Step 4
                    </button>
                  )}
                  {selectedTask.stepsDone > 3 && (
                    <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                      ✓ Step completed
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Completion Message */}
            {selectedTask.stepsDone === selectedTask.totalSteps && (
              <div style={{marginTop:"12px"}}>
                <div style={{background:"var(--grbg)", border:"1px solid var(--grd)", borderRadius:"9px", padding:"13px", textAlign:"center"}}>
                  <i className="ti ti-circle-check" style={{fontSize:"26px", color:"var(--gr)", display:"block", marginBottom:"5px"}} aria-hidden="true"></i>
                  <div style={{fontSize:"13px", fontWeight:"600", color:"var(--gr)"}}>Task Completed!</div>
                  <div style={{fontSize:"11px", color:"var(--tx3)", marginTop:"2px"}}>+{selectedTask.points} points are ready to claim!</div>
                </div>
              </div>
            )}
          </div>
          
          <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <div className="dash-card">
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>Your Progress</div>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:"7px", flexWrap:"wrap", gap:"5px"}}>
                <div style={{fontSize:"24px", fontWeight:"800", color:"var(--glt)"}}>
                  {Math.floor((selectedTask.stepsDone / selectedTask.totalSteps) * 100)}%
                </div>
                <div style={{fontSize:"11px", color:"var(--tx3)"}}>
                  Step {selectedTask.stepsDone} of {selectedTask.totalSteps}
                </div>
              </div>
              <div className="dash-bar mb-2.5 h-[7px]">
                <div style={{
                  height:"100%",
                  borderRadius:"3px",
                  width: `${(selectedTask.stepsDone / selectedTask.totalSteps) * 100}%`,
                  background:"#1DA1F2",
                  transition:"width .4s"
                }}></div>
              </div>
              <div className="dash-g2" style={{gap:"7px", display:"flex", justifyContent:"space-between"}}>
                <div className="dash-mst">
                  <div className="dash-mv" style={{color:"var(--gr)"}}>{selectedTask.stepsDone}</div>
                  <div className="dash-ml flex-text-icon">Steps Done</div>
                </div>
                <div className="dash-mst">
                  <div className="dash-mv" style={{color:"var(--am)"}}>{selectedTask.totalSteps - selectedTask.stepsDone}</div>
                  <div className="dash-ml flex-text-icon">Remaining</div>
                </div>
              </div>
            </div>
            
            <div className="dash-card">
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>Task Info</div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Platform</span>
                <span className="dash-fv">X / Twitter</span>
              </div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Task Type</span>
                <span className="dash-fv" style={{textTransform:"capitalize"}}>
                  {selectedTask.type === "follow" ? "Follow" : selectedTask.type === "retweet" ? "Retweet" : selectedTask.type === "reply" ? "Reply" : "Like"}
                </span>
              </div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Reward</span>
                <span className="dash-fv" style={{color:"var(--glt)", fontWeight:"700"}}>+{selectedTask.points} pts</span>
              </div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Status</span>
                <span className={`pill ${selectedTask.stepsDone === selectedTask.totalSteps ? "pd" : "pp"}`}>
                  {selectedTask.stepsDone === selectedTask.totalSteps ? "Ready to Claim" : "In Progress"}
                </span>
              </div>
            </div>
            
            <div className="dash-card">
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"7px"}}>How It Works</div>
              <div style={{fontSize:"12px", color:"var(--tx2)", lineHeight:"1.65"}}>
                Complete each step in order on X/Twitter. Click <strong style={{color:"var(--tx)"}}>Claim Reward</strong> after completing all steps to verify and receive your points instantly.
              </div>
              <div style={{background:"#1DA1F2", opacity:"0.1", borderRadius:"8px", padding:"10px", marginTop:"9px", display:"flex", alignItems:"center", gap:"8px"}}>
                <i className="ti ti-star" style={{fontSize:"19px", color:"#1DA1F2"}} aria-hidden="true"></i>
                <div>
                  <div style={{fontSize:"12px", fontWeight:"600", color:"#1DA1F2"}}>+{selectedTask.points} MDR Points</div>
                  <div style={{fontSize:"10px"}} className="dash-td">Credited on completion</div>
                </div>
              </div>
            </div>
            
            {selectedTask.stepsDone === selectedTask.totalSteps && (
              <button 
                className="btn dash-btn-fill dash-bfw" 
                onClick={claimReward}
                style={{
                  width:"100%", 
                  padding:"10px",
                  background:"#1DA1F2",
                  border:"none"
                }}
              >
                <i className="ti ti-gift"></i>
                Claim Reward
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dash-pg dash-is-active" id="pg-tw">
      <div className="dash-pad">
        <div className="dash-bc">
          <span onClick={() => go('home')}>Dashboard</span>
          <span>›</span>
          <span onClick={() => go('tasks')}>Loyalty Tasks</span>
          <span>›</span>
          <span className="dash-cur">X / Twitter</span>
        </div>
        
        <div style={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div className="flex items-center gap-[10px]">
            <div style={{width:"42px", height:"42px", borderRadius:"10px", background:"#1DA1F2", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"17px", fontWeight:"700", color:"#fff"}}>𝕏</div>
            <div>
              <div className="dash-h1">X / Twitter Tasks</div>
              <div className="dash-sub">Follow, retweet and reply to earn points</div>
            </div>
          </div>
          <span className="dash-pill dash-pn">{completedCount} / {totalTasks} Completed</span>
        </div>
        
        <div className="dash-bar h-1.5">
          <div className="dash-bf" style={{width:`${completedPercentage}%`, background:"#1DA1F2"}}></div>
        </div>
        
        <div id="tw-list" style={{display:"flex", flexDirection:"column", gap:"8px"}}> 
          <div className={`tr ${tasks.tw1.status === "done" ? "dn2" : ""}`} id="srtw1">
            <div className="dash-tico bg-[#1DA1F2]">
              <i className="ti ti-user-plus text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Follow @MUDRAFinance</div>
              <div className="dash-td">Follow official MUDRA X account</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbtw1" style={{width:`${tasks.tw1.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="sptw1">{tasks.tw1.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.tw1.points} pts</div>
              <span className="dash-pill dash-pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 2 - Retweet: Platform Launch Tweet (Done) */}
          <div className={`tr ${tasks.tw2.status === "done" ? "dn2" : ""}`} id="srtw2">
            <div className="dash-tico bg-[#1DA1F2]">
              <i className="ti ti-repeat text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Retweet: Platform Launch Tweet</div>
              <div className="dash-td">Retweet our platform launch</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbtw2" style={{width:`${tasks.tw2.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="sptw2">{tasks.tw2.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.tw2.points} pts</div>
              <span className="dash-pill dash-pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 3 - Reply: Introduce Yourself (In Progress) */}
          <div className={`tr ${tasks.tw3.status === "progress" ? "act" : ""} ${tasks.tw3.status === "done" ? "dn2" : ""}`} id="srtw3">
            <div className="dash-tico bg-[#1DA1F2]">
              <i className="ti ti-arrow-back-up text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Reply: Introduce Yourself</div>
              <div className="dash-td">Reply to our community intro tweet</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbtw3" style={{width:`${tasks.tw3.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="sptw3">{tasks.tw3.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.tw3.points} pts</div>
              {tasks.tw3.status === "progress" && (
                <>
                  <span className="dash-pill dash-pp"><i className="ti ti-clock"></i>Progress</span>
                  <button className="btn dash-btn-outline dash-bxs copy-btn mt-[3px] text-[11px]" onClick={() => openSoc('tw3','tw')}>Continue</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 4 - Retweet: Velt Impera Tweet (New) */}
          <div className={`tr ${tasks.tw4.status === "done" ? "dn2" : ""}`} id="srtw4">
            <div className="dash-tico bg-[#1DA1F2]">
              <i className="ti ti-repeat text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Retweet: Velt Impera Tweet</div>
              <div className="dash-td">Retweet the Velt Impera listing</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbtw4" style={{width:`${tasks.tw4.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="sptw4">{tasks.tw4.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.tw4.points} pts</div>
              {tasks.tw4.status === "new" && (
                <>
                  <span className="dash-pill dash-pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn dash-btn-fill dash-bxs mt-[3px] text-[11px]" onClick={() => openSoc('tw4','tw')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 5 - Like: Crypto Exchange Thread (New) */}
          <div className={`tr ${tasks.tw5.status === "done" ? "dn2" : ""}`} id="srtw5">
            <div className="dash-tico bg-[#1DA1F2]">
              <i className="ti ti-heart text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Like: Crypto Exchange Thread</div>
              <div className="dash-td">Like our thread on crypto conversion</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbtw5" style={{width:`${tasks.tw5.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="sptw5">{tasks.tw5.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.tw5.points} pts</div>
              {tasks.tw5.status === "new" && (
                <>
                  <span className="dash-pill dash-pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn dash-btn-fill dash-bxs mt-[3px] text-[11px]" onClick={() => openSoc('tw5','tw')}>Start Task</button>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Render detail view */}
        {renderDetailView()}
      </div>
    </div>
  );
}
