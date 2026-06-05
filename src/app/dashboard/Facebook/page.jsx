"use client";

import { useState } from "react";
import { 
  FaHeart, 
  FaComment, 
  FaShareAlt, 
  FaCheck, 
  FaClock, 
  FaArrowLeft,
  FaGift,
  FaStar,
  FaFacebook,
  FaHome,
  FaChevronRight,
  FaInfoCircle
} from "react-icons/fa";
import { MdOutlineMessage, MdShare, MdNewReleases, MdStars } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GiSparkles } from "react-icons/gi";
import { RiSparklingLine } from "react-icons/ri";

export default function FacebookTask() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  // Tasks data with progress
  const [tasks, setTasks] = useState({
    fb1: { title: "Like: MUDRA Official Page", points: 5, progress: 100, status: "done", type: "like", stepsDone: 1, totalSteps: 1 },
    fb2: { title: "Like: Launch Announcement", points: 5, progress: 100, status: "done", type: "like", stepsDone: 1, totalSteps: 1 },
    fb3: { title: "Comment: Share Your Experience", points: 8, progress: 25, status: "progress", type: "comment", stepsDone: 1, totalSteps: 3 },
    fb4: { title: "Share: Referral Campaign Post", points: 10, progress: 0, status: "new", type: "share", stepsDone: 0, totalSteps: 2 },
    fb5: { title: "Share: Velt Impera Launch Post", points: 12, progress: 0, status: "new", type: "share", stepsDone: 0, totalSteps: 2 },
    fb6: { title: "Comment: Crypto Exchange Thread", points: 8, progress: 0, status: "new", type: "comment", stepsDone: 0, totalSteps: 3 }
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

  const getTaskIcon = (type) => {
    switch(type) {
      case 'like': return <FaHeart size={15} color="#fff" />;
      case 'comment': return <FaComment size={15} color="#fff" />;
      case 'share': return <FaShareAlt size={15} color="#fff" />;
      default: return <FaHeart size={15} color="#fff" />;
    }
  };

  const getStepDescription = (type, stepNum) => {
    if (type === "like") {
      return "Open the MUDRA Facebook page and click Like";
    } else if (type === "share") {
      if (stepNum === 1) return "Open the post and click Share button";
      return "Confirm share and add a comment (optional)";
    } else if (type === "comment") {
      if (stepNum === 1) return "Open the post and read the content";
      if (stepNum === 2) return "Write a meaningful comment (minimum 10 words)";
      return "Click Post to submit your comment";
    }
    return "";
  };

  // Safe check for selectedTask before rendering detail view
  const renderDetailView = () => {
    if (!showDetail || !selectedTask) return null;
    
    return (
      <div id="fb-detail" style={{display: "block", marginTop: "20px"}}>
        <div className="flex items-center gap-[9px] mb-[12px] flex-wrap">
          <button className="btn dash-btn-muted dashboard-btn dash-bsm" onClick={closeSoc}>
            <FaArrowLeft size={12} style={{ marginRight: 6 }} /> Back
          </button>
          <div style={{fontSize:"13px", fontWeight:"600", color:"var(--tx)", flex:1, minWidth:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
            {selectedTask.title}
          </div>
          <div className="dash-pts" style={{flexShrink:0}}>
            <FaStar size={11} style={{ marginRight: 4 }} /> +{selectedTask.points} pts
          </div>
        </div>
        
        <div style={{
          display:"grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap:"12px"
        }}>
          <div className="dash-card">
            <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"10px"}}>
              <FaInfoCircle size={11} style={{ marginRight: 6 }} /> Task Steps
            </div>
            
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
                  <FaCheck size={12} color="#fff" />
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
                  {getStepDescription(selectedTask.type, 1)}
                </div>
                {selectedTask.stepsDone === 0 && (
                  <button 
                    className="btn dash-btn-fill dash-bsm" 
                    style={{marginTop: "8px", fontSize: "11px"}}
                    onClick={() => completeStep(0)}
                  >
                    Complete Step 1
                  </button>
                )}
                {selectedTask.stepsDone > 0 && (
                  <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                    <FaCheck size={10} style={{ marginRight: 4 }} /> Step completed
                  </div>
                )}
              </div>
            </div>
            
            {/* Step 2 */}
            {selectedTask.totalSteps >= 2 && (
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
                    <FaCheck size={12} color="#fff" />
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
                    {getStepDescription(selectedTask.type, 2)}
                  </div>
                  {selectedTask.stepsDone === 1 && (
                    <button 
                      className="btn dash-btn-fill dash-bsm" 
                      style={{marginTop: "8px", fontSize: "11px"}}
                      onClick={() => completeStep(1)}
                    >
                      Complete Step 2
                    </button>
                  )}
                  {selectedTask.stepsDone > 1 && (
                    <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                      <FaCheck size={10} style={{ marginRight: 4 }} /> Step completed
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Step 3 */}
            {selectedTask.totalSteps >= 3 && (
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
                    <FaCheck size={12} color="#fff" />
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
                    {getStepDescription(selectedTask.type, 3)}
                  </div>
                  {selectedTask.stepsDone === 2 && (
                    <button 
                      className="btn dash-btn-fill dash-bsm" 
                      style={{marginTop: "8px", fontSize: "11px"}}
                      onClick={() => completeStep(2)}
                    >
                      Complete Step 3
                    </button>
                  )}
                  {selectedTask.stepsDone > 2 && (
                    <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                      <FaCheck size={10} style={{ marginRight: 4 }} /> Step completed
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Completion Message */}
            {selectedTask.stepsDone === selectedTask.totalSteps && (
              <div style={{marginTop:"12px"}}>
                <div style={{background:"var(--grbg)", border:"1px solid var(--grd)", borderRadius:"9px", padding:"13px", textAlign:"center"}}>
                  <IoMdCheckmarkCircle size={26} color="var(--gr)" style={{display:"block", margin:"0 auto 5px"}} />
                  <div style={{fontSize:"13px", fontWeight:"600", color:"var(--gr)"}}>Task Completed!</div>
                  <div style={{fontSize:"11px", color:"var(--tx3)", marginTop:"2px"}}>+{selectedTask.points} points are ready to claim!</div>
                </div>
              </div>
            )}
          </div>
          
          <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <div className="dash-card">
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>
                <FaClock size={11} style={{ marginRight: 6 }} /> Your Progress
              </div>
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
                  background:"linear-gradient(90deg,var(--gold),var(--glt))",
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
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>
                <FaInfoCircle size={11} style={{ marginRight: 6 }} /> Task Info
              </div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Platform</span>
                <span className="dash-fv">
                  <FaFacebook size={12} style={{ marginRight: 4, color: "#1877F2" }} /> Facebook
                </span>
              </div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Task Type</span>
                <span className="dash-fv" style={{textTransform:"capitalize"}}>{selectedTask.type}</span>
              </div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Reward</span>
                <span className="dash-fv" style={{color:"var(--glt)", fontWeight:"700"}}>
                  <FaStar size={11} style={{ marginRight: 4 }} /> +{selectedTask.points} pts
                </span>
              </div>
              <div className="dash-fr flex-text-icon" style={{display:"flex", justifyContent:"space-between"}}>
                <span className="dash-fk" style={{color:"var(--tx3)"}}>Status</span>
                <span className={`pill ${selectedTask.stepsDone === selectedTask.totalSteps ? "pd" : "pp"}`}>
                  {selectedTask.stepsDone === selectedTask.totalSteps ? "Ready to Claim" : "In Progress"}
                </span>
              </div>
            </div>
            
            <div className="dash-card">
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"7px"}}>
                <FaInfoCircle size={11} style={{ marginRight: 6 }} /> How It Works
              </div>
              <div style={{fontSize:"12px", color:"var(--tx2)", lineHeight:"1.65"}}>
                Complete each step in order on Facebook. Click <strong style={{color:"var(--tx)"}}>Claim Reward</strong> after completing all steps to verify and receive your points instantly.
              </div>
              <div style={{background:"var(--gdim)", border:"1px solid var(--gbdr)", borderRadius:"8px", padding:"10px", marginTop:"9px", display:"flex", alignItems:"center", gap:"8px"}}>
                <FaStar size={19} color="var(--glt)" />
                <div>
                  <div style={{fontSize:"12px", fontWeight:"600", color:"var(--glt)"}}>+{selectedTask.points} MDR Points</div>
                 <div style={{fontSize:"10px"}} className="dash-td">Credited on completion</div>
                </div>
              </div>
            </div>
            
            {selectedTask.stepsDone === selectedTask.totalSteps && (
              <button 
                className="btn dash-btn-fill dash-bfw" 
                onClick={claimReward}
                style={{width:"100%", padding:"10px"}}
              >
                <FaGift size={14} style={{ marginRight: 6 }} /> Claim Reward
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dash-pg dash-is-active" id="pg-fb">
      <div className="dash-pad">
        <div className="dash-bc">
          <span onClick={() => go('home')}>
            <FaHome size={12} style={{ marginRight: 4 }} /> Dashboard
          </span>
          <FaChevronRight size={10} style={{ margin: "0 4px" }} />
          <span onClick={() => go('tasks')}>Loyalty Tasks</span>
          <FaChevronRight size={10} style={{ margin: "0 4px" }} />
          <span className="dash-cur">Facebook</span>
        </div>
        
        <div style={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div className="flex items-center gap-[10px]">
            <div style={{width:"42px", height:"42px", borderRadius:"10px", background:"#1877F2", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", fontWeight:"700", color:"#fff"}}>
              <FaFacebook size={24} color="#fff" />
            </div>
            <div>
              <div className="dash-h1">Facebook Tasks</div>
              <div className="dash-sub">Like, comment and share to earn points</div>
            </div>
          </div>
          <span className="dash-pill dash-pn">{completedCount} / {totalTasks} Completed</span>
        </div>
        
        <div className="dash-bar h-1.5">
          <div className="dash-bf" style={{width:`${completedPercentage}%`}}></div>
        </div>
        
        <div id="fb-list" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
          {/* Task 1 */}
          <div className={`tr ${tasks.fb1.status === "done" ? "dn2" : ""}`} id="srfb1">
            <div className="dash-tico bg-[#1877F2]">
              <FaHeart size={15} color="#fff" />
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Like: MUDRA Official Page</div>
              <div className="dash-td">Like the MUDRA Facebook page</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbfb1" style={{width:`${tasks.fb1.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spfb1">{tasks.fb1.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">
                <FaStar size={11} style={{ marginRight: 4 }} /> +{tasks.fb1.points} pts
              </div>
              <span className="dash-pill dash-pd">
                <FaCheck size={11} style={{ marginRight: 4 }} /> Done
              </span>
            </div>
          </div>
          
          {/* Task 2 */}
          <div className={`tr ${tasks.fb2.status === "done" ? "dn2" : ""}`} id="srfb2">
            <div className="dash-tico bg-[#1877F2]">
              <FaHeart size={15} color="#fff" />
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Like: Launch Announcement</div>
              <div className="dash-td">Like our platform launch post</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbfb2" style={{width:`${tasks.fb2.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spfb2">{tasks.fb2.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">
                <FaStar size={11} style={{ marginRight: 4 }} /> +{tasks.fb2.points} pts
              </div>
              <span className="dash-pill dash-pd">
                <FaCheck size={11} style={{ marginRight: 4 }} /> Done
              </span>
            </div>
          </div>
          
          {/* Task 3 */}
          <div className={`tr ${tasks.fb3.status === "progress" ? "act" : ""} ${tasks.fb3.status === "done" ? "dn2" : ""}`} id="srfb3">
            <div className="dash-tico bg-[#1877F2]">
              <MdOutlineMessage size={15} color="#fff" />
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Comment: Share Your Experience</div>
              <div className="dash-td">Leave a comment on our community post</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbfb3" style={{width:`${tasks.fb3.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spfb3">{tasks.fb3.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">
                <FaStar size={11} style={{ marginRight: 4 }} /> +{tasks.fb3.points} pts
              </div>
              {tasks.fb3.status === "progress" && (
                <>
                  <span className="dash-pill dash-pp">
                    <FaClock size={11} style={{ marginRight: 4 }} /> Progress
                  </span>
                  <button className="btn dash-btn-outline dash-bxs copy-btn mt-[3px] text-[11px]" onClick={() => openSoc('fb3','fb')}>Continue</button>
                </>
              )}
              {tasks.fb3.status === "done" && (
                <span className="dash-pill dash-pd">
                  <FaCheck size={11} style={{ marginRight: 4 }} /> Done
                </span>
              )}
            </div>
          </div>
          
          {/* Task 4 */}
          <div className={`tr ${tasks.fb4.status === "done" ? "dn2" : ""}`} id="srfb4">
            <div className="dash-tico bg-[#1877F2]">
              <MdShare size={15} color="#fff" />
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Share: Referral Campaign Post</div>
              <div className="dash-td">Share the MUDRA referral post</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbfb4" style={{width:`${tasks.fb4.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spfb4">{tasks.fb4.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">
                <FaStar size={11} style={{ marginRight: 4 }} /> +{tasks.fb4.points} pts
              </div>
              {tasks.fb4.status === "new" && (
                <>
                  <span className="dash-pill dash-pn">
                    <MdStars size={11} style={{ marginRight: 4 }} /> New
                  </span>
                  <button className="btn dash-btn-fill dash-bxs mt-[3px] text-[11px]" onClick={() => openSoc('fb4','fb')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 5 */}
          <div className={`tr ${tasks.fb5.status === "done" ? "dn2" : ""}`} id="srfb5">
            <div className="dash-tico bg-[#1877F2]">
              <MdShare size={15} color="#fff" />
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Share: Velt Impera Launch Post</div>
              <div className="dash-td">Share the Velt Impera announcement</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbfb5" style={{width:`${tasks.fb5.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spfb5">{tasks.fb5.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">
                <FaStar size={11} style={{ marginRight: 4 }} /> +{tasks.fb5.points} pts
              </div>
              {tasks.fb5.status === "new" && (
                <>
                  <span className="dash-pill dash-pn">
                    <MdStars size={11} style={{ marginRight: 4 }} /> New
                  </span>
                  <button className="btn dash-btn-fill dash-bxs mt-[3px] text-[11px]" onClick={() => openSoc('fb5','fb')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 6 */}
          <div className={`tr ${tasks.fb6.status === "done" ? "dn2" : ""}`} id="srfb6">
            <div className="dash-tico bg-[#1877F2]">
              <MdOutlineMessage size={15} color="#fff" />
            </div>
            <div className="dash-tb">
              <div className="dash-tt">Comment: Crypto Exchange Thread</div>
              <div className="dash-td">Comment on the exchange features post</div>
              <div className="dash-tpg">
                <div className="dash-bar flex-1">
                  <div className="dash-bf" id="sbfb6" style={{width:`${tasks.fb6.progress}%`}}></div>
                </div>
                <span className="dash-tpct" id="spfb6">{tasks.fb6.progress}%</span>
              </div>
            </div>
            <div className="dash-tr-r">
              <div className="dash-pts">
                <FaStar size={11} style={{ marginRight: 4 }} /> +{tasks.fb6.points} pts
              </div>
              {tasks.fb6.status === "new" && (
                <>
                  <span className="dash-pill dash-pn">
                    <MdStars size={11} style={{ marginRight: 4 }} /> New
                  </span>
                  <button className="btn dash-btn-fill dash-bxs mt-[3px] text-[11px]" onClick={() => openSoc('fb6','fb')}>Start Task</button>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Render detail view only when showDetail is true and selectedTask exists */}
        {renderDetailView()}
      </div>
    </div>
  );
}