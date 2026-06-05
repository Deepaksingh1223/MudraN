"use client";

import { 
  FiCheck, 
  FiClock, 
  FiSparkles, 
  FiBell, 
  FiHeart, 
  FiPlay, 
  FiPause, 
  FiSkipForward,
  FiStar,
  FiChevronRight,
  FiHome
} from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

export default function YouTubeTasksPage({
  onGo,
  onToast,
  VIDS,
  videoState,
  curVid,
  elapsed,
  totalDur,
  playing,
  fmt,
  openVid,
  closeVid,
  togglePlay,
  skipFwd,
  seek,
  claimVid,
}) {
  const tasks = Object.values(VIDS);

  const getPct = (id) => {
    const p = videoState[id + "_p"];
    if (p !== undefined) return p;
    return VIDS[id]?.pr ?? 0;
  };

  const getStatus = (id) => {
    if (videoState[id] !== undefined) return videoState[id];
    return VIDS[id]?.st ?? "new";
  };

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>
          <FiHome size={14} style={{ marginRight: 4 }} /> Dashboard
        </span>
        <FiChevronRight size={12} />
        <span onClick={() => onGo("tasks")}>Loyalty Tasks</span>
        <FiChevronRight size={12} />
        <span className="dash-cur">YouTube</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 42, height: 42, borderRadius: 10, background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <FaYoutube size={22} color="white" />
          </div>
          <div>
            <div className="dash-h1">YouTube Tasks</div>
            <div className="dash-sub">Watch, like and subscribe to earn MDR points</div>
          </div>
        </div>
        <span className="dash-pill dash-pd">4 / 6 Completed</span>
      </div>

      <div className="dash-bar" style={{ height: 6 }}>
        <div className="dash-bf" style={{ width: "67%" }} />
      </div>

      {/* list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 6 }}>
        {tasks.map((v) => {
          const st = getStatus(v.id);
          const pr = getPct(v.id);
          const isWatched = v.type === undefined;
          const badgeCls = st === "done" ? "pd" : st === "progress" ? "pp" : "pn";
          const badgeText =
            st === "done" ? (
              <>
                <FiCheck size={12} /> Done
              </>
            ) : st === "progress" ? (
              <>
                <FiClock size={12} /> Progress
              </>
            ) : (
              <>
                <FiSparkles size={12} /> New
              </>
            );

          const action =
            isWatched && st !== "done" ? (
              <button
                className={"btn " + (st === "progress" ? "bo" : "bg") + " bxs"}
                style={{ marginTop: 3, fontSize: 11 }}
                onClick={() => openVid(v.id)}
              >
                {st === "progress" ? "Continue" : "Watch"}
              </button>
            ) : v.type ? (
              <button
                className="btn dash-btn-muted dashboard-btn dash-bxs"
                style={{ marginTop: 3, fontSize: 11 }}
                onClick={() => onToast("Task opened — complete on YouTube")}
              >
                Start
              </button>
            ) : null;

          const ico =
            !isWatched && v.type === "sub" ? (
              <FiBell size={15} color="#fff" />
            ) : !isWatched && v.type === "like" ? (
              <FiHeart size={15} color="#fff" />
            ) : (
              <FiPlay size={15} color="#fff" />
            );

          return (
            <div key={v.id} className={"tr " + (st === "done" ? "dn2" : st === "progress" ? "act" : "")}
              style={{ cursor: isWatched ? "pointer" : "default" }}
              onClick={() => {
                if (isWatched) openVid(v.id);
              }}
            >
              <div className="dash-tico" style={{ background: "#FF0000" }}>
                {ico}
              </div>
              <div className="dash-tb">
                <div className="dash-tt">{v.title}</div>
                <div className="dash-td">{v.desc}{v.dur ? " · " + fmt(v.dur) : ""}</div>
                <div className="dash-tpg">
                  <div className="dash-bar" style={{ flex: 1 }}>
                    <div className="dash-bf" style={{ width: pr + "%" }} />
                  </div>
                  <span className="dash-tpct">{pr}%</span>
                </div>
              </div>
              <div className="dash-tr-r">
                <div className="dash-pts">+{v.pts} pts</div>
                <span className={"pill " + badgeCls}>{badgeText}</span>
                {action}
              </div>
            </div>
          );
        })}
      </div>

      {/* player */}
      {curVid ? (
        <div style={{ marginTop: 14 }} className="dash-card">
          <div className="dash-bc" style={{ marginBottom: 10 }}>
            <span onClick={closeVid}>‹ Back to List</span>
            <span>•</span>
            <span className="dash-cur">{VIDS[curVid].title}</span>
          </div>

          <div className="dash-g2" style={{ alignItems: "start" }}>
            <div>
              <div className="dash-vid-wrap">
                <div
                  className="dash-vid-screen"
                  onClick={() => {
                    togglePlay();
                  }}
                >
                  <div className="dash-vid-init">
                    <div className="dash-play-big">
                      {playing ? <FiPause size={32} /> : <FiPlay size={32} />}
                    </div>
                  </div>
                </div>
              </div>

              <div className="dash-vc">
                <div className="dash-vc-btn" onClick={togglePlay} aria-label="Play/Pause">
                  {playing ? <FiPause size={16} /> : <FiPlay size={16} />}
                </div>
                <span className="dash-vct">{fmt(elapsed)}</span>
                <div
                  className="dash-vc-bar"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    seek(e.clientX, rect.left, rect.width);
                  }}
                >
                  <div className="dash-vc-prog" style={{ width: totalDur ? Math.round((elapsed / totalDur) * 100) + "%" : "0%" }} />
                </div>
                <span className="dash-vct">{fmt(totalDur)}</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 12.5, fontWeight: 500, color: "var(--tx)", marginBottom: 8 }}>Watch Progress</div>
              {totalDur > 0 ? (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "var(--glt)" }}>
                      {Math.round((elapsed / totalDur) * 100)}%
                    </div>
                    <div />
                  </div>
                  <div className="dash-bar" style={{ height: 7, marginBottom: 10 }}>
                    <div
                      className="dash-bf"
                      style={{
                        height: "100%",
                        borderRadius: 3,
                        width: Math.round((elapsed / totalDur) * 100) + "%",
                        background: "linear-gradient(90deg,var(--gold),var(--glt))",
                        transition: "width .5s linear",
                      }}
                    />
                  </div>
                </>
              ) : null}

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button className="dash-D-btn dash-btn-fill dash-bsm" onClick={togglePlay} style={{ width: "100%" }}>
                  {playing ? <FiPause size={14} /> : <FiPlay size={14} />} {playing ? "Pause" : "Play"}
                </button>
                <button className="btn dash-btn-muted dashboard-btn dash-bsm" onClick={skipFwd} style={{ width: "100%" }}>
                  <FiSkipForward size={14} /> +10s
                </button>
                <button
                  className="dash-D-btn dash-btn-fill dash-bfw  dashboard-btn"
                  onClick={claimVid}
                  style={{ background: "var(--grbg)", border: "1px solid var(--grd)", color: "var(--gr)" }}
                >
                  <FiStar size={14} /> Claim {VIDS[curVid].pts} Points!
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}