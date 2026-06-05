"use client";

import { useState } from "react";

export default function LinkedInTask() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  // Tasks data with progress
  const [tasks, setTasks] = useState({
    li1: { title: "Follow MUDRA Financial on LinkedIn", description: "Follow our LinkedIn company page", points: 10, progress: 100, status: "done", type: "follow", stepsDone: 1, totalSteps: 1 },
    li2: { title: "Like: Company Milestone Post", description: "Like our 10,000 users milestone post", points: 5, progress: 0, status: "new", type: "like", stepsDone: 0, totalSteps: 1 },
    li3: { title: "Share: FinTech Insight Article", description: "Share our Web3 payments article", points: 15, progress: 0, status: "new", type: "share", stepsDone: 0, totalSteps: 2 },
    li4: { title: "Comment: Industry Discussion", description: "Comment on our Future of Finance post", points: 8, progress: 0, status: "new", type: "comment", stepsDone: 0, totalSteps: 2 }
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
      case "like":
        return <i className="ti ti-heart text-[15px] text-white" aria-hidden="true"></i>;
      case "share":
        return <i className="ti ti-share-2 text-[15px] text-white" aria-hidden="true"></i>;
      case "comment":
        return <i className="ti ti-message-circle text-[15px] text-white" aria-hidden="true"></i>;
      default:
        return <i className="ti ti-heart text-[15px] text-white" aria-hidden="true"></i>;
    }
  };

  // Render detail view
  const renderDetailView = () => {
    if (!showDetail || !selectedTask) return null;
    
    return (
      <div id="li-detail" style={{display: "block", marginTop: "20px"}}>
        <div className="flex items-center gap-[9px] mb-[12px] flex-wrap">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-transparent text-white" onClick={closeSoc}>
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
                  {selectedTask.type === "follow" && "Search and follow MUDRA Financial on LinkedIn"}
                  {selectedTask.type === "like" && "Find the milestone post and click Like button"}
                  {selectedTask.type === "share" && "Open the FinTech Insight article"}
                  {selectedTask.type === "comment" && "Open the Future of Finance post"}
                </div>
                {selectedTask.stepsDone === 0 && (
                  <button 
                    className="mt-2 px-3 py-1.5 text-[11px] rounded-md font-semibold text-white"
                    style={{background: '#0077B5'}}
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
            
            {/* Step 2 - For share and comment types */}
            {(selectedTask.type === "share" || selectedTask.type === "comment") && selectedTask.totalSteps >= 2 && (
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
                    {selectedTask.type === "share" && "Click Share button and add a thoughtful caption"}
                    {selectedTask.type === "comment" && "Write a meaningful comment (minimum 15 words)"}
                  </div>
                  {selectedTask.stepsDone === 1 && (
                    <button 
                      className="mt-2 px-3 py-1.5 text-[11px] rounded-md font-semibold text-white"
                      style={{background: '#0077B5'}}
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
                  background:"#0077B5",
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
                <span className="dash-fv">LinkedIn</span>
              </div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Task Type</span>
                <span className="dash-fv" style={{textTransform:"capitalize"}}>
                  {selectedTask.type === "follow" ? "Follow" : selectedTask.type === "like" ? "Like" : selectedTask.type === "share" ? "Share" : "Comment"}
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
                Complete each step in order on LinkedIn. Click <strong style={{color:"var(--tx)"}}>Claim Reward</strong> after completing all steps to verify and receive your points instantly.
              </div>
              <div style={{background:"#0077B5", opacity:"0.1", borderRadius:"8px", padding:"10px", marginTop:"9px", display:"flex", alignItems:"center", gap:"8px"}}>
                <i className="ti ti-star" style={{fontSize:"19px", color:"#0077B5"}} aria-hidden="true"></i>
                <div>
                  <div style={{fontSize:"12px", fontWeight:"600", color:"#0077B5"}}>+{selectedTask.points} MDR Points</div>
                  <div style={{fontSize:"10px"}} className="dash-td">Credited on completion</div>
                </div>
              </div>
            </div>
            
            {selectedTask.stepsDone === selectedTask.totalSteps && (
              <button 
                className="w-full px-4 py-2 rounded-md font-semibold text-white"
                onClick={claimReward}
                style={{background: '#0077B5', border:'none'}}
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
    <div className="dash-pg dash-is-active" id="pg-li">
      <div className="dash-pad">
        <div className="dash-bc">
          <span onClick={() => go('home')}>Dashboard</span>
          <span>›</span>
          <span onClick={() => go('tasks')}>Loyalty Tasks</span>
          <span>›</span>
          <span className="dash-cur">LinkedIn</span>
        </div>
        
        <div style={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div className="flex items-center gap-[10px]">
            <div style={{width:"42px", height:"42px", borderRadius:"10px", background:"#0077B5", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:"700", color:"#fff"}}>in</div>
            <div>
              <div className="dash-h1">LinkedIn Tasks</div>
              <div className="dash-sub">Follow page and engage with posts</div>
            </div>
          </div>
          <span className="dash-pill dash-pn">{completedCount} / {totalTasks} Completed</span>
        </div>
        
        <div className="dash-bar h-1.5">
          <div className="dash-bf" style={{width:`${completedPercentage}%`, background:"#0077B5"}}></div>
        </div>
        
        <div id="li-list" style={{display:"flex", flexDirection:"column", gap:"8px"}}> 
          <div className={`tr ${tasks.li1.status === "done" ? "dn2" : ""}`} id="srli1">
            <div className="dash-tico bg-[#0077B5]">
              <i className="ti ti-user-plus text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Follow MUDRA Financial on LinkedIn</div>
              <div className="dash-td">Follow our LinkedIn company page</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbli1" style={{width:`${tasks.li1.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spli1">{tasks.li1.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.li1.points} pts</div>
              <span className="dash-pill dash-pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 2 - Like: Company Milestone Post (New) */}
          <div className={`tr ${tasks.li2.status === "done" ? "dn2" : ""}`} id="srli2">
            <div className="dash-tico bg-[#0077B5]">
              <i className="ti ti-heart text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Like: Company Milestone Post</div>
              <div className="dash-td">Like our 10,000 users milestone post</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbli2" style={{width:`${tasks.li2.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spli2">{tasks.li2.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.li2.points} pts</div>
              {tasks.li2.status === "new" && (
                <>
                  <span className="dash-pill dash-pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="mt-1 px-2 py-1 text-xs rounded-md font-semibold text-white" style={{background:'#0077B5'}} onClick={() => openSoc('li2','li')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 3 - Share: FinTech Insight Article (New) */}
          <div className={`tr ${tasks.li3.status === "done" ? "dn2" : ""}`} id="srli3">
            <div className="dash-tico bg-[#0077B5]">
              <i className="ti ti-share-2 text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Share: FinTech Insight Article</div>
              <div className="dash-td">Share our Web3 payments article</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbli3" style={{width:`${tasks.li3.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spli3">{tasks.li3.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.li3.points} pts</div>
              {tasks.li3.status === "new" && (
                <>
                  <span className="dash-pill dash-pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="mt-1 px-2 py-1 text-xs rounded-md font-semibold text-white" style={{background:'#0077B5'}} onClick={() => openSoc('li3','li')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 4 - Comment: Industry Discussion (New) */}
          <div className={`tr ${tasks.li4.status === "done" ? "dn2" : ""}`} id="srli4">
            <div className="dash-tico bg-[#0077B5]">
              <i className="ti ti-message-circle text-[15px] text-white" aria-hidden="true"></i>
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Comment: Industry Discussion</div>
              <div className="dash-td">Comment on our Future of Finance post</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbli4" style={{width:`${tasks.li4.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spli4">{tasks.li4.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">+{tasks.li4.points} pts</div>
              {tasks.li4.status === "new" && (
                <>
                  <span className="dash-pill dash-pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="mt-1 px-2 py-1 text-xs rounded-md font-semibold text-white" style={{background:'#0077B5'}} onClick={() => openSoc('li4','li')}>Start Task</button>
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
