import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import { Code2 } from "lucide-react";

/**
 * GFG Page Transition Overlay
 *
 * Every time the route changes this component renders a full-screen dark
 * overlay featuring the GFG Campus Club logo spinning in — then fades out,
 * revealing the new page. Total duration: ~900 ms.
 */
export function PageTransition() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    // Skip the very first mount (initial page load already shows content)
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    // Clear any pending timer from a rapid nav
    if (timerRef.current) clearTimeout(timerRef.current);

    setPhase("enter");
    setVisible(true);

    // After 550 ms start the exit animation
    timerRef.current = setTimeout(() => {
      setPhase("exit");
      // After exit animation (350 ms) unmount
      timerRef.current = setTimeout(() => setVisible(false), 350);
    }, 550);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        animation:
          phase === "enter"
            ? "gfg-overlay-enter 0.25s ease both"
            : "gfg-overlay-exit 0.35s ease both",
        pointerEvents: "none",
      }}
    >
      {/* Logo container with spin-in animation */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          animation:
            phase === "enter"
              ? "gfg-loader-in 0.45s cubic-bezier(0.34,1.56,0.64,1) both"
              : "gfg-loader-out 0.3s ease both",
        }}
      >
        {/* GFG Icon Box */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "linear-gradient(135deg, #2F8D46 0%, #1e6b34 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px rgba(47,141,70,0.5), 0 0 80px rgba(47,141,70,0.2)",
            animation: phase === "enter" ? "gfg-spin-once 0.6s cubic-bezier(0.34,1.56,0.64,1) both" : "none",
          }}
        >
          <Code2 style={{ width: 38, height: 38, color: "#fff" }} />
        </div>

        {/* Brand text */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            GFG Campus Club
          </div>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: "#2F8D46",
              letterSpacing: "0.15em",
              marginTop: 4,
              textTransform: "uppercase",
            }}
          >
            Code · Learn · Build
          </div>
        </div>

        {/* Animated green progress bar */}
        <div
          style={{
            width: 120,
            height: 3,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 999,
            overflow: "hidden",
            marginTop: 8,
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: 999,
              background: "linear-gradient(90deg, #2F8D46, #5bc47b)",
              animation: "gfg-loader-in 0.5s ease both",
              width: phase === "enter" ? "100%" : "0%",
              transition: "width 0.45s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}
