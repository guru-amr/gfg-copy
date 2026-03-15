import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/resources", label: "Resources" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(18, 18, 18, 0.85)"
          : "#1A1A1A",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(47, 141, 70, 0.25)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.4), 0 1px 0 rgba(47,141,70,0.15)"
          : "0 2px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <div
              className="animate-gfg-pulse"
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "linear-gradient(135deg, #2F8D46 0%, #1e6b34 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 0 rgba(47,141,70,0.4)",
                transition: "transform 0.2s ease",
              }}
            >
              <Code2 style={{ width: 20, height: 20, color: "#fff" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#fff",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}
                className="group-hover:text-[#2F8D46]"
              >
                GFG Campus Club
              </span>
              <span style={{ fontSize: 10, color: "#6b7280" }}>Code. Learn. Build.</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    position: "relative",
                    padding: "8px 14px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: active ? 600 : 400,
                    color: active ? "#2F8D46" : "#d1d5db",
                    background: active ? "rgba(47,141,70,0.12)" : "transparent",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  className="nav-link-hover"
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLAnchorElement).style.textShadow = "0 0 12px rgba(47,141,70,0.6)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#d1d5db";
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.textShadow = "none";
                    }
                  }}
                >
                  {l.label}
                  {/* Active underline bar */}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "60%",
                        height: 2,
                        borderRadius: 999,
                        background: "linear-gradient(90deg, #2F8D46, #5bc47b)",
                        animation: "slide-up-fade 0.3s ease both",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 animate-cta-glow"
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              background: "linear-gradient(135deg, #2F8D46, #1e7a38)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.2s ease",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #3aa357, #247a3a)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #2F8D46, #1e7a38)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            🚀 Join Club
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
              padding: 8,
            }}
            className="md:hidden"
          >
            {open ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(18,18,18,0.98)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(47,141,70,0.2)",
            paddingBottom: 16,
            animation: "slide-up-fade 0.25s ease both",
          }}
        >
          {navLinks.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 24px",
                  fontSize: 14,
                  color: active ? "#2F8D46" : "#d1d5db",
                  background: active ? "rgba(47,141,70,0.08)" : "transparent",
                  textDecoration: "none",
                  borderLeft: active ? "3px solid #2F8D46" : "3px solid transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <div style={{ padding: "12px 24px 0" }}>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "10px 16px",
                borderRadius: 8,
                background: "linear-gradient(135deg, #2F8D46, #1e7a38)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              🚀 Join Club
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
