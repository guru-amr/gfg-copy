import { useState } from "react";
import {
  Trophy, Flame, Award, Star, Calendar, Code, Users, TrendingUp,
  GitCommit, Target, Zap, Shield, Heart, Medal
} from "lucide-react";

const leaderboard = [
  { rank: 1, name: "Aarav Patel", year: "3rd Year", solved: 847, events: 22, streak: 156, avatar: "AP" },
  { rank: 2, name: "Priya Sharma", year: "4th Year", solved: 812, events: 28, streak: 142, avatar: "PS" },
  { rank: 3, name: "Rohan Gupta", year: "3rd Year", solved: 789, events: 19, streak: 128, avatar: "RG" },
  { rank: 4, name: "Sneha Verma", year: "2nd Year", solved: 654, events: 15, streak: 98, avatar: "SV" },
  { rank: 5, name: "Karthik Iyer", year: "3rd Year", solved: 612, events: 21, streak: 87, avatar: "KI" },
  { rank: 6, name: "Ananya Singh", year: "2nd Year", solved: 589, events: 12, streak: 76, avatar: "AS" },
  { rank: 7, name: "Vikram Reddy", year: "4th Year", solved: 543, events: 24, streak: 65, avatar: "VR" },
  { rank: 8, name: "Meera Nair", year: "1st Year", solved: 412, events: 8, streak: 54, avatar: "MN" },
  { rank: 9, name: "Arjun Mehta", year: "2nd Year", solved: 387, events: 11, streak: 43, avatar: "AM" },
  { rank: 10, name: "Divya Kapoor", year: "3rd Year", solved: 356, events: 16, streak: 38, avatar: "DK" },
];

const badges = [
  { icon: GitCommit, title: "First Commit", desc: "Made first contribution", color: "#2F8D46" },
  { icon: Flame, title: "100-Day Streak", desc: "100 consecutive days", color: "#F59E0B" },
  { icon: Calendar, title: "Event Organizer", desc: "Organized 3+ events", color: "#8B5CF6" },
  { icon: Trophy, title: "Contest Winner", desc: "Won a coding contest", color: "#EF4444" },
  { icon: Star, title: "Top Contributor", desc: "Top 5 in leaderboard", color: "#3B82F6" },
  { icon: Shield, title: "Core Member", desc: "Active core team", color: "#EC4899" },
  { icon: Target, title: "Problem Crusher", desc: "Solved 500+ problems", color: "#14B8A6" },
  { icon: Heart, title: "Mentor", desc: "Mentored 10+ juniors", color: "#F97316" },
];

const activities = [
  { user: "Aarav Patel", action: "solved 5 problems on Trees", time: "2 hours ago", type: "solve" },
  { user: "Priya Sharma", action: "earned the 'Contest Winner' badge", time: "5 hours ago", type: "badge" },
  { user: "Sneha Verma", action: "registered for Spring Hackathon", time: "8 hours ago", type: "event" },
  { user: "Rohan Gupta", action: "hit a 128-day streak!", time: "1 day ago", type: "streak" },
  { user: "Meera Nair", action: "completed the DSA Bootcamp", time: "1 day ago", type: "complete" },
  { user: "Karthik Iyer", action: "submitted a PR to open-source project", time: "2 days ago", type: "code" },
];

function ContributionGraph() {
  const weeks = 20;
  const days = 7;
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      week.push(Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0);
    }
    data.push(week);
  }

  const intensities = ["#ebedf0", "#c6e48b", "#7bc96f", "#2F8D46", "#196127"];

  return (
    <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
      <div className="flex gap-[3px]">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((val, di) => (
              <div
                key={di}
                className="w-3 h-3 rounded-sm transition-all hover:ring-1 hover:ring-gray-400 cursor-pointer"
                style={{ backgroundColor: intensities[val] }}
                title={`${val} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 mt-2 justify-end">
        <span className="text-gray-400" style={{ fontSize: "10px" }}>Less</span>
        {intensities.map((c, i) => (
          <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
        ))}
        <span className="text-gray-400" style={{ fontSize: "10px" }}>More</span>
      </div>
    </div>
  );
}

const rankColors: Record<number, { bg: string; text: string; border: string }> = {
  1: { bg: "#FEF3C7", text: "#92400E", border: "#F59E0B" },
  2: { bg: "#F3F4F6", text: "#4B5563", border: "#9CA3AF" },
  3: { bg: "#FED7AA", text: "#9A3412", border: "#F97316" },
};

export function LeaderboardPage() {
  const [selectedMember] = useState(leaderboard[0]);

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "28px" }}>
            Community Leaderboard
          </h1>
          <p className="text-gray-500" style={{ fontSize: "14px" }}>
            Track your progress, earn badges, and climb the ranks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top 3 Podium */}
        <div className="flex flex-col sm:flex-row items-end justify-center gap-4 mb-10">
          {[leaderboard[1], leaderboard[0], leaderboard[2]].map((m, i) => {
            const order = [2, 1, 3][i];
            const heights = ["h-28", "h-36", "h-24"];
            const rc = rankColors[order];
            return (
              <div key={m.rank} className="flex flex-col items-center" style={{ order: i }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 ring-4"
                  style={{ backgroundColor: rc.bg, color: rc.text, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "18px", ringColor: rc.border }}
                >
                  {m.avatar}
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "14px" }}>{m.name}</span>
                <span className="text-gray-400" style={{ fontSize: "12px" }}>{m.solved} solved</span>
                <div
                  className={`${heights[i]} w-24 rounded-t-xl mt-3 flex items-start justify-center pt-3`}
                  style={{ backgroundColor: rc.border + "20", borderTop: `3px solid ${rc.border}` }}
                >
                  <div className="flex items-center gap-1" style={{ color: rc.text }}>
                    {order === 1 && <Trophy className="w-5 h-5" />}
                    {order === 2 && <Medal className="w-5 h-5" />}
                    {order === 3 && <Award className="w-5 h-5" />}
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "18px" }}>#{order}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Leaderboard Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Rank</th>
                      <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Member</th>
                      <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Year</th>
                      <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Solved</th>
                      <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Events</th>
                      <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Streak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((m) => {
                      const rc = rankColors[m.rank];
                      return (
                        <tr key={m.rank} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="px-5 py-3">
                            {rc ? (
                              <span
                                className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                                style={{ backgroundColor: rc.bg, color: rc.text, fontSize: "12px", fontWeight: 700 }}
                              >
                                {m.rank}
                              </span>
                            ) : (
                              <span className="text-gray-400 pl-2" style={{ fontSize: "13px" }}>{m.rank}</span>
                            )}
                          </td>
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2.5">
                              <div
                                className="w-8 h-8 rounded-full bg-[#2F8D46]/10 text-[#2F8D46] flex items-center justify-center shrink-0"
                                style={{ fontSize: "11px", fontWeight: 600 }}
                              >
                                {m.avatar}
                              </div>
                              <span style={{ fontSize: "13px", fontWeight: 500 }}>{m.name}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3 text-gray-500" style={{ fontSize: "13px" }}>{m.year}</td>
                          <td className="px-5 py-3" style={{ fontSize: "13px", fontWeight: 600 }}>{m.solved}</td>
                          <td className="px-5 py-3 text-gray-500" style={{ fontSize: "13px" }}>{m.events}</td>
                          <td className="px-5 py-3">
                            <span className="inline-flex items-center gap-1 text-orange-500" style={{ fontSize: "12px", fontWeight: 600 }}>
                              <Flame className="w-3.5 h-3.5" /> {m.streak}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Profile Card Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#2F8D46] text-white flex items-center justify-center mx-auto mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "20px" }}>
                  {selectedMember.avatar}
                </div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "16px" }}>{selectedMember.name}</h3>
                <p className="text-gray-400" style={{ fontSize: "13px" }}>{selectedMember.year} - CS Engineering</p>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-[#2F8D46]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "18px" }}>{selectedMember.solved}</div>
                  <div className="text-gray-400" style={{ fontSize: "10px" }}>Solved</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-[#2F8D46]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "18px" }}>{selectedMember.events}</div>
                  <div className="text-gray-400" style={{ fontSize: "10px" }}>Events</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-orange-500" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "18px" }}>{selectedMember.streak}</div>
                  <div className="text-gray-400" style={{ fontSize: "10px" }}>Streak</div>
                </div>
              </div>
              {/* Streak Widget */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-100">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "14px" }}>
                    {selectedMember.streak} Day Streak!
                  </span>
                </div>
                <p className="text-gray-500" style={{ fontSize: "11px" }}>Keep coding daily to maintain your streak.</p>
              </div>
            </div>

            {/* Contribution Graph */}
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "14px" }}>
                Contribution Graph
              </h4>
              <ContributionGraph />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-10">
          <h2 className="mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "22px" }}>
            Achievements & Badges
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {badges.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: b.color + "15" }}
                >
                  <b.icon className="w-6 h-6" style={{ color: b.color }} />
                </div>
                <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "13px" }}>{b.title}</h4>
                <p className="text-gray-400 mt-1" style={{ fontSize: "11px" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="mt-10">
          <h2 className="mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "22px" }}>
            Recent Activity
          </h2>
          <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50">
            {activities.map((a, i) => (
              <div key={i} className="px-5 py-4 flex items-center gap-3 hover:bg-gray-50/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#2F8D46]/10 flex items-center justify-center shrink-0">
                  {a.type === "solve" && <Code className="w-4 h-4 text-[#2F8D46]" />}
                  {a.type === "badge" && <Award className="w-4 h-4 text-[#F59E0B]" />}
                  {a.type === "event" && <Calendar className="w-4 h-4 text-[#8B5CF6]" />}
                  {a.type === "streak" && <Flame className="w-4 h-4 text-[#F97316]" />}
                  {a.type === "complete" && <Trophy className="w-4 h-4 text-[#2F8D46]" />}
                  {a.type === "code" && <TrendingUp className="w-4 h-4 text-[#3B82F6]" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: 600 }}>{a.user}</span>{" "}
                    <span className="text-gray-500">{a.action}</span>
                  </p>
                </div>
                <span className="text-gray-400 shrink-0" style={{ fontSize: "11px" }}>{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
