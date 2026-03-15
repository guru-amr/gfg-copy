import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  ArrowRight, Users, Calendar, Code, Flame, BookOpen, Trophy, Rocket, Target,
  Brain, Zap, Globe, ChevronRight, Star, TrendingUp, Award
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/* ── Intersection-observer counter ─────────────────────────────────────── */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

/* ── Typewriter hook ──────────────────────────────────────────────────── */
const WORDS = ["Code.", "Learn.", "Build.", "Win."];
function useTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 120);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 70);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return displayed;
}

/* ── Floating particles background ──────────────────────────────────────── */
const PARTICLES = [
  { size: 4,  top: "15%", left: "8%",  delay: "0s",    dur: "8s",   anim: "float-particle" },
  { size: 6,  top: "45%", left: "5%",  delay: "1.2s",  dur: "10s",  anim: "float-particle-2" },
  { size: 3,  top: "70%", left: "12%", delay: "2.5s",  dur: "7s",   anim: "float-particle-3" },
  { size: 5,  top: "25%", left: "20%", delay: "0.8s",  dur: "9s",   anim: "float-particle" },
  { size: 4,  top: "80%", left: "25%", delay: "3s",    dur: "11s",  anim: "float-particle-2" },
  { size: 7,  top: "10%", left: "40%", delay: "1.5s",  dur: "8.5s", anim: "float-particle-3" },
  { size: 3,  top: "60%", left: "55%", delay: "2s",    dur: "9.5s", anim: "float-particle" },
  { size: 5,  top: "35%", left: "70%", delay: "0.5s",  dur: "10s",  anim: "float-particle-2" },
  { size: 4,  top: "75%", left: "75%", delay: "1.8s",  dur: "7.5s", anim: "float-particle-3" },
  { size: 6,  top: "20%", left: "85%", delay: "3.2s",  dur: "11s",  anim: "float-particle" },
  { size: 3,  top: "55%", left: "90%", delay: "0.3s",  dur: "8s",   anim: "float-particle-2" },
  { size: 5,  top: "88%", left: "50%", delay: "2.8s",  dur: "9s",   anim: "float-particle-3" },
];

/* ── Data ─────────────────────────────────────────────────────────────── */
const stats = [
  { label: "Members",        value: 500,   icon: Users,    suffix: "+" },
  { label: "Events Hosted",  value: 48,    icon: Calendar, suffix: "" },
  { label: "Problems Solved",value: 12000, icon: Code,     suffix: "+" },
  { label: "Active Streaks", value: 156,   icon: Flame,    suffix: "" },
];

const events = [
  {
    title: "Spring Hackathon 2026",
    date: "Mar 28-29",
    tag: "Hackathon",
    tagColor: "#f59e0b",
    desc: "48-hour coding marathon. Build innovative solutions and win prizes worth $5000.",
    img: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBoYWNrYXRob24lMjBldmVudCUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzQxNjE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "DSA Bootcamp Week",
    date: "Apr 5-11",
    tag: "Workshop",
    tagColor: "#2F8D46",
    desc: "Intensive week-long bootcamp covering trees, graphs, DP, and advanced algorithms.",
    img: "https://images.unsplash.com/photo-1634464660153-468d44306ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3Nob3AlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzM0MTYxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Web Dev Masterclass",
    date: "Apr 15",
    tag: "Webinar",
    tagColor: "#6366f1",
    desc: "Deep dive into React, Next.js, and modern full-stack development practices.",
    img: "https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzMzMjUwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const reasons = [
  { icon: Brain,   title: "Structured Learning",   desc: "Curated roadmaps and mentorship from senior students and industry experts." },
  { icon: Trophy,  title: "Compete & Win",          desc: "Participate in coding contests, hackathons, and win exciting prizes." },
  { icon: Users,   title: "Peer Community",         desc: "Connect with 500+ like-minded coders. Study groups, pair programming, and more." },
  { icon: Rocket,  title: "Career Growth",          desc: "Mock interviews, resume reviews, and direct referrals from alumni network." },
  { icon: Globe,   title: "Open Source",            desc: "Contribute to real open-source projects and build your GitHub profile." },
  { icon: Target,  title: "Placement Prep",         desc: "Focused DSA practice, system design sessions, and aptitude training." },
];

const testimonials = [
  { name: "Priya S.", role: "3rd Year CSE", text: "Got my dream internship after mock interviews here. The DSA sessions were 🔥", avatar: "PS" },
  { name: "Arjun K.", role: "2nd Year IT",  text: "Hackathon experience transformed how I work in teams. Best club decision ever!", avatar: "AK" },
  { name: "Sneha M.", role: "4th Year CSE", text: "Resources here + placement prep = placed at top MNC. Community is everything.", avatar: "SM" },
];

/* ── Component ─────────────────────────────────────────────────────────── */
export function HomePage() {
  const typeword = useTypewriter();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", background: "#0f1210", overflow: "hidden" }}>
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(47,141,70,0.15) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(47,141,70,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            opacity: 0.8,
          }}
        />

        {/* Radial glow blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "-10%", left: "-5%",
            width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(47,141,70,0.18) 0%, transparent 65%)",
          }} />
          <div style={{
            position: "absolute", bottom: "-15%", right: "-5%",
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(47,141,70,0.12) 0%, transparent 65%)",
          }} />
        </div>

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "#2F8D46",
              boxShadow: `0 0 ${p.size * 2}px rgba(47,141,70,0.8)`,
              opacity: 0,
              animationName: p.anim,
              animationDuration: p.dur,
              animationDelay: p.delay,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationFillMode: "both",
            }}
          />
        ))}

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div style={{ maxWidth: 680 }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(47,141,70,0.12)",
                border: "1px solid rgba(47,141,70,0.35)",
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 24,
                animation: "slide-up-fade 0.5s ease both",
              }}
            >
              <Zap style={{ width: 14, height: 14, color: "#2F8D46" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#2F8D46" }}>
                Open for new members — Spring 2026
              </span>
            </div>

            {/* Headline with typewriter */}
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
                lineHeight: 1.1,
                color: "#fff",
                marginBottom: 16,
                animation: "slide-up-fade 0.6s 0.1s ease both",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  minWidth: "6ch",
                  borderRight: "3px solid #2F8D46",
                  paddingRight: 4,
                  animation: "blink-cursor 0.85s step-end infinite",
                  color: "#2F8D46",
                }}
              >
                {typeword}
              </span>
              <br />
              <span
                className="animate-gradient-sweep"
                style={{ fontWeight: 900 }}
              >
                GFG Campus Club
              </span>
            </h1>

            <p
              style={{
                color: "#9ca3af",
                fontSize: 17,
                lineHeight: 1.75,
                marginBottom: 32,
                maxWidth: 520,
                animation: "slide-up-fade 0.6s 0.2s ease both",
              }}
            >
              Join the most active coding community on campus. Master data structures,
              build real projects, compete in hackathons, and accelerate your tech career.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                animation: "slide-up-fade 0.6s 0.3s ease both",
              }}
            >
              <Link
                to="/contact"
                className="animate-cta-glow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #2F8D46, #1e6b34)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0) scale(1)";
                }}
              >
                Join the Club <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link
                to="/events"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#e5e7eb",
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontWeight: 500,
                  fontSize: 15,
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.04)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                View Events <ChevronRight style={{ width: 16, height: 16 }} />
              </Link>
            </div>

            {/* Social proof micro-display */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 32,
                animation: "slide-up-fade 0.6s 0.45s ease both",
              }}
            >
              {/* Avatar stack */}
              <div style={{ display: "flex" }}>
                {["A","B","C","D"].map((ch, i) => (
                  <div
                    key={ch}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: `hsl(${140 + i * 20}, 60%, 35%)`,
                      border: "2px solid #0f1210",
                      marginLeft: i === 0 ? 0 : -8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {ch}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2 }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} style={{ width: 13, height: 13, color: "#fbbf24", fill: "#fbbf24" }} />
                  ))}
                </div>
                <span style={{ fontSize: 12, color: "#6b7280" }}>
                  Joined by <strong style={{ color: "#d1d5db" }}>500+</strong> students
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", marginTop: -36, zIndex: 10 }}>
        <div className="max-w-5xl mx-auto px-4">
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              border: "1px solid rgba(47,141,70,0.2)",
              boxShadow: "0 0 0 1px rgba(47,141,70,0.1), 0 20px 60px rgba(0,0,0,0.15), 0 0 40px rgba(47,141,70,0.08)",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              overflow: "hidden",
            }}
            className="grid-cols-2 md:grid-cols-4"
          >
            {stats.map((s, idx) => {
              const { count, ref } = useCountUp(s.value);
              return (
                <div
                  key={s.label}
                  ref={ref}
                  style={{
                    padding: "28px 20px",
                    textAlign: "center",
                    borderRight: idx < stats.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    transition: "background 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#f8fffe"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, rgba(47,141,70,0.12), rgba(47,141,70,0.05))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 10px",
                    }}
                  >
                    <s.icon style={{ width: 22, height: 22, color: "#2F8D46" }} />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 800,
                      fontSize: 30,
                      color: "#1A1A1A",
                      lineHeight: 1,
                    }}
                  >
                    {count.toLocaleString()}{s.suffix}
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4, fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Events ──────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2F8D46", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
                What's Coming
              </span>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 28, margin: 0 }}>
                Featured Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="hidden sm:inline-flex items-center gap-1"
              style={{ fontSize: 14, fontWeight: 600, color: "#2F8D46", textDecoration: "none" }}
            >
              View all events <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-cols-1 md:grid-cols-3">
            {events.map((e, i) => (
              <div
                key={e.title}
                style={{
                  borderRadius: 16,
                  border: "1px solid #f0f0f0",
                  overflow: "hidden",
                  background: "#fff",
                  transition: "all 0.35s cubic-bezier(0.34,1.1,0.64,1)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  animation: `slide-up-fade 0.6s ${i * 0.12}s ease both`,
                  cursor: "pointer",
                }}
                onMouseEnter={(el) => {
                  (el.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                  (el.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.12), 0 0 30px rgba(47,141,70,0.08)";
                  (el.currentTarget as HTMLDivElement).style.borderColor = "rgba(47,141,70,0.25)";
                }}
                onMouseLeave={(el) => {
                  (el.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (el.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                  (el.currentTarget as HTMLDivElement).style.borderColor = "#f0f0f0";
                }}
              >
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <ImageWithFallback
                    src={e.img}
                    alt={e.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    className="group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
                  <div style={{ position: "absolute", top: 12, left: 12 }}>
                    <span style={{
                      background: e.tagColor,
                      color: "#fff",
                      padding: "4px 12px",
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}>
                      {e.tag}
                    </span>
                  </div>
                  <div style={{ position: "absolute", top: 12, right: 12 }}>
                    <span style={{
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(8px)",
                      padding: "4px 10px",
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#1A1A1A",
                    }}>
                      {e.date}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "20px 20px 20px" }}>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#1A1A1A" }}>
                    {e.title}
                  </h3>
                  <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>{e.desc}</p>
                  <Link
                    to="/events"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#2F8D46",
                      fontSize: 13,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Register Now <ArrowRight style={{ width: 13, height: 13 }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join  ────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #f8fffe 0%, #f0f9f3 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#2F8D46", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
              Benefits
            </span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 32, margin: "0 0 12px" }}>
              Why Join Us?
            </h2>
            <p style={{ color: "#6b7280", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>
              Everything you need to level up your coding skills and kickstart your tech career.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "28px 24px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.3s cubic-bezier(0.34,1.1,0.64,1)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  animation: `slide-up-fade 0.5s ${i * 0.08}s ease both`,
                }}
                onMouseEnter={(el) => {
                  const div = el.currentTarget as HTMLDivElement;
                  div.style.transform = "translateY(-6px)";
                  div.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1), 0 0 20px rgba(47,141,70,0.08)";
                  div.style.borderColor = "rgba(47,141,70,0.3)";
                  div.style.borderLeft = "4px solid #2F8D46";
                  // Bounce the icon
                  const icon = div.querySelector(".why-icon") as HTMLElement | null;
                  if (icon) icon.style.animation = "icon-bounce 0.5s ease both";
                }}
                onMouseLeave={(el) => {
                  const div = el.currentTarget as HTMLDivElement;
                  div.style.transform = "translateY(0)";
                  div.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  div.style.borderColor = "rgba(0,0,0,0.06)";
                  div.style.borderLeft = "1px solid rgba(0,0,0,0.06)";
                  const icon = div.querySelector(".why-icon") as HTMLElement | null;
                  if (icon) icon.style.animation = "none";
                }}
              >
                {/* Background decoration */}
                <div style={{
                  position: "absolute", top: -20, right: -20,
                  width: 80, height: 80, borderRadius: "50%",
                  background: "rgba(47,141,70,0.04)",
                }} />

                <div
                  className="why-icon"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, rgba(47,141,70,0.15), rgba(47,141,70,0.06))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    border: "1px solid rgba(47,141,70,0.15)",
                  }}
                >
                  <r.icon style={{ width: 22, height: 22, color: "#2F8D46" }} />
                </div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#1A1A1A" }}>
                  {r.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#2F8D46", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
              Stories
            </span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", margin: 0 }}>
              What Students Say
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-cols-1 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "24px",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                  animation: `slide-up-fade 0.5s ${i * 0.1}s ease both`,
                }}
                onMouseEnter={(el) => {
                  const div = el.currentTarget as HTMLDivElement;
                  div.style.background = "rgba(255,255,255,0.07)";
                  div.style.borderColor = "rgba(47,141,70,0.3)";
                  div.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(el) => {
                  const div = el.currentTarget as HTMLDivElement;
                  div.style.background = "rgba(255,255,255,0.04)";
                  div.style.borderColor = "rgba(255,255,255,0.08)";
                  div.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", marginBottom: 8 }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} style={{ width: 14, height: 14, color: "#fbbf24", fill: "#fbbf24" }} />
                  ))}
                </div>
                <p style={{ color: "#d1d5db", fontSize: 14, lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg, #2F8D46, #1e6b34)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 700, color: "#fff",
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#6b7280" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #0f1a13 0%, #1a2d1e 50%, #0f1a13 100%)", position: "relative", overflow: "hidden" }}>
        {/* Decorative ring */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600, height: 600, borderRadius: "50%",
          border: "1px solid rgba(47,141,70,0.1)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 400, height: 400, borderRadius: "50%",
          border: "1px solid rgba(47,141,70,0.15)",
          pointerEvents: "none",
        }} />

        <div className="max-w-3xl mx-auto px-4 text-center" style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 18,
              background: "linear-gradient(135deg, #2F8D46, #1e6b34)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 30px rgba(47,141,70,0.4)",
            }}>
              <TrendingUp style={{ width: 30, height: 30, color: "#fff" }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#fff", marginBottom: 16 }}>
            Ready to Start Your Coding Journey?
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 16, marginBottom: 36 }}>
            Join <strong style={{ color: "#2F8D46" }}>500+</strong> students who are already part of the GFG Campus Club family.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link
              to="/contact"
              className="animate-cta-glow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, #2F8D46, #1e7a38)",
                color: "#fff",
                padding: "16px 36px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px) scale(1.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0) scale(1)";
              }}
            >
              🚀 Join Now — It's Free <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
            <Link
              to="/resources"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#e5e7eb",
                padding: "16px 28px",
                borderRadius: 12,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                background: "rgba(255,255,255,0.05)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <BookOpen style={{ width: 16, height: 16 }} /> Explore Resources
            </Link>
          </div>
          {/* Trust badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 36, flexWrap: "wrap" }}>
            {[
              { icon: Award, text: "Free to Join" },
              { icon: Users, text: "500+ Members" },
              { icon: Trophy, text: "Top Placements" },
            ].map((b) => (
              <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b7280", fontSize: 13 }}>
                <b.icon style={{ width: 14, height: 14, color: "#2F8D46" }} />
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
