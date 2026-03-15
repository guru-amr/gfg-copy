import { Link } from "react-router";
import { Code2, Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#2F8D46] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "15px" }}>
                GFG Campus Club
              </span>
            </div>
            <p className="text-gray-400 mb-4" style={{ fontSize: "13px", lineHeight: "1.6" }}>
              A community of passionate coders building, learning, and growing together on campus.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#2F8D46]/20 hover:text-[#2F8D46] flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600 }}>Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Events", "Resources", "Leaderboard", "Blog", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="text-gray-400 hover:text-[#2F8D46] transition-colors"
                  style={{ fontSize: "13px" }}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600 }}>Resources</h4>
            <div className="flex flex-col gap-2">
              {["DSA Practice", "Web Dev Path", "Competitive Programming", "System Design", "Interview Prep"].map((l) => (
                <a key={l} href="#" className="text-gray-400 hover:text-[#2F8D46] transition-colors" style={{ fontSize: "13px" }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Official Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600 }}>Official</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "GeeksforGeeks", url: "#" },
                { label: "Discord Server", url: "#" },
                { label: "GitHub Org", url: "#" },
                { label: "LinkedIn Group", url: "#" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  className="text-gray-400 hover:text-[#2F8D46] transition-colors inline-flex items-center gap-1"
                  style={{ fontSize: "13px" }}
                >
                  {l.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500" style={{ fontSize: "12px" }}>
            &copy; 2026 GFG Campus Club. All rights reserved.
          </p>
          <p className="text-gray-500" style={{ fontSize: "12px" }}>
            Made with <span className="text-[#2F8D46]">&#9829;</span> by Campus Club Team
          </p>
        </div>
      </div>
    </footer>
  );
}
