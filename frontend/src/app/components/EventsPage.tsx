import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, X, ArrowRight, Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const filters = ["All", "Upcoming", "Past", "Workshops", "Contests"];

const allEvents = [
  {
    id: 1, title: "Spring Hackathon 2026", date: "Mar 28-29, 2026", time: "9:00 AM", tags: ["Hackathon", "DSA", "Web Dev"], seats: 42, totalSeats: 200, status: "upcoming",
    type: "Contests",
    img: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBoYWNrYXRob24lMjBldmVudCUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzQxNjE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "48-hour coding marathon. Teams of 2-4 will build innovative solutions across themes like HealthTech, EdTech, and Sustainability.",
    speakers: ["Prof. Sharma", "Arjun Mehta (Google)"],
    location: "Main Auditorium, Block A",
  },
  {
    id: 2, title: "DSA Bootcamp Week", date: "Apr 5-11, 2026", time: "5:00 PM", tags: ["Workshop", "DSA"], seats: 15, totalSeats: 80, status: "upcoming",
    type: "Workshops",
    img: "https://images.unsplash.com/photo-1634464660153-468d44306ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3Nob3AlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzM0MTYxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "7-day intensive bootcamp: Arrays, Trees, Graphs, DP, and Greedy. Daily contests included.",
    speakers: ["Rahul Verma (SDE-2, Amazon)"],
    location: "Lab 301, CS Block",
  },
  {
    id: 3, title: "Web Dev Masterclass", date: "Apr 15, 2026", time: "3:00 PM", tags: ["Webinar", "Web Dev"], seats: 60, totalSeats: 150, status: "upcoming",
    type: "Workshops",
    img: "https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzMzMjUwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "React, Next.js, TailwindCSS deep-dive with live project building session.",
    speakers: ["Priya Singh (Frontend Lead, Flipkart)"],
    location: "Virtual (Google Meet)",
  },
  {
    id: 4, title: "CP Contest #12", date: "Apr 20, 2026", time: "8:00 PM", tags: ["Contest", "CP"], seats: 0, totalSeats: 100, status: "upcoming",
    type: "Contests",
    img: "https://images.unsplash.com/photo-1632679090212-612ac1f4d76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvbnRlc3QlMjBjb21wZXRpdGl2ZXxlbnwxfHx8fDE3NzM0MTYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "2-hour competitive programming contest. 6 problems of varying difficulty. Rating changes apply.",
    speakers: [],
    location: "Online (Codeforces)",
  },
  {
    id: 5, title: "Git & GitHub Workshop", date: "Feb 20, 2026", time: "4:00 PM", tags: ["Workshop", "Tools"], seats: 0, totalSeats: 60, status: "past",
    type: "Workshops",
    img: "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM0MTYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Hands-on workshop covering Git basics, branching, PRs, and open source contribution.",
    speakers: ["Neha Gupta (DevRel, GitHub)"],
    location: "Lab 201, CS Block",
  },
  {
    id: 6, title: "Winter Coding Contest", date: "Jan 15, 2026", time: "7:00 PM", tags: ["Contest", "CP", "DSA"], seats: 0, totalSeats: 120, status: "past",
    type: "Contests",
    img: "https://images.unsplash.com/photo-1667511695484-9d7a1c721c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc3RydWN0dXJlcyUyMGFsZ29yaXRobXMlMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3MzQxNjE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Inaugural coding contest with 150+ participants. Featured problems on graphs and DP.",
    speakers: [],
    location: "Online",
  },
];

function CountdownTimer() {
  const target = new Date("2026-03-28T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3">
      {Object.entries(timeLeft).map(([label, val]) => (
        <div key={label} className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-center min-w-[60px]">
          <div className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "22px" }}>
            {String(val).padStart(2, "0")}
          </div>
          <div className="text-white/60" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function EventsPage() {
  const [active, setActive] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<(typeof allEvents)[0] | null>(null);
  const [search, setSearch] = useState("");

  const filtered = allEvents.filter((e) => {
    const matchesFilter =
      active === "All" ||
      (active === "Upcoming" && e.status === "upcoming") ||
      (active === "Past" && e.status === "past") ||
      e.type === active;
    const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase()) || e.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      {/* Featured Banner */}
      <div className="relative bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBoYWNrYXRob24lMjBldmVudCUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzQxNjE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Featured"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="inline-block bg-[#2F8D46] text-white px-3 py-1 rounded-full mb-4" style={{ fontSize: "11px", fontWeight: 600 }}>
            FEATURED EVENT
          </span>
          <h1 className="text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            Spring Hackathon 2026
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6" style={{ fontSize: "13px" }}>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Mar 28-29, 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 9:00 AM</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Main Auditorium</span>
          </div>
          <CountdownTimer />
          <button
            className="mt-6 inline-flex items-center gap-2 bg-[#2F8D46] text-white px-6 py-3 rounded-lg hover:bg-[#247a3a] transition-all"
            style={{ fontWeight: 600, fontSize: "14px" }}
          >
            Register Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter + Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  active === f
                    ? "bg-[#2F8D46] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
                style={{ fontSize: "13px", fontWeight: 500 }}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 focus:border-[#2F8D46] focus:ring-1 focus:ring-[#2F8D46] outline-none transition-all"
              style={{ fontSize: "13px" }}
            />
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e) => (
            <div
              key={e.id}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedEvent(e)}
            >
              <div className="relative h-44 overflow-hidden">
                <ImageWithFallback src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {e.status === "past" && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white bg-black/60 px-3 py-1 rounded-full" style={{ fontSize: "12px", fontWeight: 600 }}>Event Ended</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {e.tags.map((t) => (
                    <span key={t} className="bg-white/90 backdrop-blur-sm text-[#1A1A1A] px-2 py-0.5 rounded-full" style={{ fontSize: "10px", fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-400 mb-2" style={{ fontSize: "12px" }}>
                  <Calendar className="w-3.5 h-3.5" /> {e.date}
                  <span className="mx-1">|</span>
                  <Clock className="w-3.5 h-3.5" /> {e.time}
                </div>
                <h3 className="mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "16px" }}>{e.title}</h3>
                <p className="text-gray-500 mb-4" style={{ fontSize: "13px", lineHeight: 1.5 }}>{e.desc}</p>
                {e.status === "upcoming" && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span style={{ fontSize: "12px" }}>
                        <span className={e.seats < 20 ? "text-red-500" : "text-[#2F8D46]"} style={{ fontWeight: 600 }}>{e.seats}</span>
                        <span className="text-gray-400"> / {e.totalSeats} seats</span>
                      </span>
                    </div>
                    <button
                      className="bg-[#2F8D46] text-white px-4 py-1.5 rounded-md hover:bg-[#247a3a] transition-colors"
                      style={{ fontSize: "12px", fontWeight: 600 }}
                      onClick={(ev) => { ev.stopPropagation(); setSelectedEvent(e); }}
                    >
                      Register Now
                    </button>
                  </div>
                )}
                {e.status === "upcoming" && (
                  <div className="mt-3">
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full transition-all"
                        style={{
                          width: `${((e.totalSeats - e.seats) / e.totalSeats) * 100}%`,
                          backgroundColor: e.seats < 20 ? "#ef4444" : "#2F8D46",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p style={{ fontSize: "15px" }}>No events found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48">
              <ImageWithFallback src={selectedEvent.img} alt={selectedEvent.title} className="w-full h-full object-cover rounded-t-2xl" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {selectedEvent.tags.map((t) => (
                  <span key={t} className="bg-[#2F8D46]/10 text-[#2F8D46] px-2.5 py-0.5 rounded-full" style={{ fontSize: "11px", fontWeight: 600 }}>
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "22px" }}>{selectedEvent.title}</h2>
              <div className="flex flex-wrap gap-4 text-gray-500 mb-4" style={{ fontSize: "13px" }}>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedEvent.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedEvent.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {selectedEvent.location}</span>
              </div>
              <p className="text-gray-600 mb-5" style={{ fontSize: "14px", lineHeight: 1.7 }}>{selectedEvent.desc}</p>

              {selectedEvent.speakers.length > 0 && (
                <div className="mb-5">
                  <h4 className="mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "14px" }}>Speakers</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.speakers.map((s) => (
                      <span key={s} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full" style={{ fontSize: "12px" }}>{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedEvent.status === "upcoming" && (
                <div className="border-t border-gray-100 pt-5">
                  <h4 className="mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "14px" }}>Quick Registration</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#2F8D46] focus:ring-1 focus:ring-[#2F8D46] outline-none"
                      style={{ fontSize: "13px" }}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#2F8D46] focus:ring-1 focus:ring-[#2F8D46] outline-none"
                      style={{ fontSize: "13px" }}
                    />
                    <button className="w-full bg-[#2F8D46] text-white py-2.5 rounded-lg hover:bg-[#247a3a] transition-colors" style={{ fontWeight: 600, fontSize: "14px" }}>
                      Register Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
