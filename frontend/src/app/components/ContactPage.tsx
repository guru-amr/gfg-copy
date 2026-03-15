import { useState } from "react";
import {
  Send, MessageCircle, Linkedin, Github, ExternalLink, MapPin, Mail, Phone,
  ChevronDown, X, Bot
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const coordinators = [
  { name: "Aarav Patel", role: "Club President", year: "3rd Year CS", avatar: "AP" },
  { name: "Priya Sharma", role: "Vice President", year: "4th Year CS", avatar: "PS" },
  { name: "Rohan Gupta", role: "Tech Lead", year: "3rd Year IT", avatar: "RG" },
  { name: "Sneha Verma", role: "Events Head", year: "2nd Year CS", avatar: "SV" },
];

const links = [
  { label: "GFG Official", url: "#", icon: ExternalLink, color: "#2F8D46" },
  { label: "LinkedIn Group", url: "#", icon: Linkedin, color: "#0077B5" },
  { label: "Discord Server", url: "#", icon: MessageCircle, color: "#5865F2" },
  { label: "GitHub Org", url: "#", icon: Github, color: "#1A1A1A" },
];

const queryTypes = ["General Inquiry", "Event Registration", "Technical Support", "Partnership", "Feedback", "Other"];

export function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", queryType: "", message: "" });
  const [chatOpen, setChatOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen relative">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "28px" }}>
            Contact & Support
          </h1>
          <p className="text-gray-500" style={{ fontSize: "14px" }}>
            Have a question? We'd love to hear from you. Reach out to the team!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h2 className="mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "20px" }}>
              Send us a Message
            </h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#2F8D46]/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-[#2F8D46]" />
                </div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "18px" }}>Message Sent!</h3>
                <p className="text-gray-500 mt-2" style={{ fontSize: "13px" }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1.5 text-gray-600" style={{ fontSize: "13px", fontWeight: 500 }}>Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-[#2F8D46]/20 outline-none transition-all"
                    style={{ fontSize: "13px" }}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-gray-600" style={{ fontSize: "13px", fontWeight: 500 }}>Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-[#2F8D46]/20 outline-none transition-all"
                    style={{ fontSize: "13px" }}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-gray-600" style={{ fontSize: "13px", fontWeight: 500 }}>Query Type</label>
                  <div className="relative">
                    <select
                      value={formData.queryType}
                      onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-[#2F8D46]/20 outline-none appearance-none transition-all"
                      style={{ fontSize: "13px" }}
                      required
                    >
                      <option value="">Select a category</option>
                      {queryTypes.map((q) => <option key={q} value={q}>{q}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1.5 text-gray-600" style={{ fontSize: "13px", fontWeight: 500 }}>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-[#2F8D46]/20 outline-none resize-none transition-all"
                    style={{ fontSize: "13px" }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2F8D46] text-white py-3 rounded-lg hover:bg-[#247a3a] transition-all hover:shadow-lg hover:shadow-[#2F8D46]/20 inline-flex items-center justify-center gap-2"
                  style={{ fontWeight: 600, fontSize: "14px" }}
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "16px" }}>
                Quick Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2F8D46]/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#2F8D46]" />
                  </div>
                  <div>
                    <div className="text-gray-400" style={{ fontSize: "11px" }}>Email</div>
                    <div style={{ fontSize: "13px", fontWeight: 500 }}>gfg.campusclub@college.edu</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2F8D46]/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#2F8D46]" />
                  </div>
                  <div>
                    <div className="text-gray-400" style={{ fontSize: "11px" }}>Phone</div>
                    <div style={{ fontSize: "13px", fontWeight: 500 }}>+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2F8D46]/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#2F8D46]" />
                  </div>
                  <div>
                    <div className="text-gray-400" style={{ fontSize: "11px" }}>Location</div>
                    <div style={{ fontSize: "13px", fontWeight: 500 }}>Room 302, CS Block, Main Campus</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-50" style={{
                  backgroundImage: "linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }} />
                <div className="relative text-center">
                  <MapPin className="w-8 h-8 text-[#2F8D46] mx-auto mb-2" />
                  <p className="text-gray-500" style={{ fontSize: "13px", fontWeight: 500 }}>CS Block, Main Campus</p>
                  <p className="text-gray-400" style={{ fontSize: "11px" }}>Click to open in Google Maps</p>
                </div>
              </div>
            </div>

            {/* Official Links */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "16px" }}>
                Official Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    className="flex items-center gap-2.5 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: l.color + "15" }}>
                      <l.icon className="w-4 h-4" style={{ color: l.color }} />
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: 500 }}>{l.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coordinators */}
        <div className="mt-10">
          <h2 className="mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "22px" }}>
            Club Coordinators
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coordinators.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2F8D46] to-[#1a6b30] text-white flex items-center justify-center mx-auto mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "18px" }}>
                  {c.avatar}
                </div>
                <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "15px" }}>{c.name}</h4>
                <p className="text-[#2F8D46]" style={{ fontSize: "12px", fontWeight: 500 }}>{c.role}</p>
                <p className="text-gray-400 mt-1" style={{ fontSize: "11px" }}>{c.year}</p>
                <div className="flex justify-center gap-2 mt-3">
                  <a href="#" className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-[#0077B5]/10 hover:text-[#0077B5] flex items-center justify-center transition-colors text-gray-400">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-900/10 hover:text-gray-900 flex items-center justify-center transition-colors text-gray-400">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#2F8D46] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px" }}>GFG Bot</div>
                  <div className="text-white/70" style={{ fontSize: "11px" }}>Online now</div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 h-48 overflow-y-auto space-y-3">
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-[#2F8D46]/10 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 text-[#2F8D46]" />
                </div>
                <div className="bg-gray-50 rounded-xl rounded-tl-sm px-3 py-2" style={{ fontSize: "13px" }}>
                  Hi there! How can I help you today? You can ask me about events, membership, or resources.
                </div>
              </div>
            </div>
            <div className="p-3 border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#2F8D46] outline-none"
                  style={{ fontSize: "13px" }}
                />
                <button className="w-9 h-9 bg-[#2F8D46] text-white rounded-lg flex items-center justify-center hover:bg-[#247a3a] transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 bg-[#2F8D46] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#247a3a] transition-all flex items-center justify-center"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
