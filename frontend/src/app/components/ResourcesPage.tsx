import { useState } from "react";
import {
  Search, BookOpen, Code, Globe, Server, Brain, Clock, ArrowRight,
  ChevronRight, Play, Star, BarChart3
} from "lucide-react";

const categories = [
  { label: "All", icon: BookOpen },
  { label: "DSA", icon: Code },
  { label: "Web Dev", icon: Globe },
  { label: "CP", icon: BarChart3 },
  { label: "System Design", icon: Server },
  { label: "Aptitude", icon: Brain },
];

const resources = [
  { id: 1, title: "Arrays & Strings Mastery", category: "DSA", difficulty: "Easy", time: "2h", desc: "Complete guide to array manipulation, two-pointer, and sliding window techniques." },
  { id: 2, title: "Binary Trees Deep Dive", category: "DSA", difficulty: "Medium", time: "4h", desc: "Traversals, BST operations, balanced trees, and tree DP problems." },
  { id: 3, title: "Dynamic Programming Patterns", category: "DSA", difficulty: "Hard", time: "8h", desc: "All DP patterns: knapsack, LCS, matrix chain, digit DP, bitmask DP." },
  { id: 4, title: "React + Next.js Fullstack", category: "Web Dev", difficulty: "Medium", time: "6h", desc: "Build a production-ready app with React, Next.js, Tailwind, and Prisma." },
  { id: 5, title: "REST API Design", category: "Web Dev", difficulty: "Easy", time: "3h", desc: "Design clean RESTful APIs with Express.js, validation, and error handling." },
  { id: 6, title: "Graph Algorithms", category: "CP", difficulty: "Hard", time: "6h", desc: "BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, MST, and flow algorithms." },
  { id: 7, title: "System Design Fundamentals", category: "System Design", difficulty: "Medium", time: "5h", desc: "Load balancing, caching, databases, microservices, and CAP theorem." },
  { id: 8, title: "Quantitative Aptitude", category: "Aptitude", difficulty: "Easy", time: "3h", desc: "Number system, percentages, probability, permutations & combinations." },
  { id: 9, title: "Segment Trees & BIT", category: "CP", difficulty: "Hard", time: "4h", desc: "Range queries, lazy propagation, and persistent segment trees." },
];

const paths = [
  { title: "SDE Preparation Path", steps: 12, duration: "8 weeks", desc: "Complete roadmap for software engineer interviews at top tech companies.", color: "#2F8D46" },
  { title: "Frontend Dev Path", steps: 10, duration: "6 weeks", desc: "From HTML/CSS to React, TypeScript, and production deployment.", color: "#3B82F6" },
  { title: "CP Mastery Path", steps: 15, duration: "10 weeks", desc: "From beginner to expert competitive programmer. Rating 0 to 2000+.", color: "#8B5CF6" },
  { title: "Backend Engineering Path", steps: 11, duration: "7 weeks", desc: "Node.js, databases, APIs, authentication, and cloud deployment.", color: "#F59E0B" },
];

const problems = [
  { id: 1, title: "Two Sum", difficulty: "Easy", topic: "Arrays", acceptance: "78%", solved: true },
  { id: 2, title: "Longest Substring Without Repeating", difficulty: "Medium", topic: "Strings", acceptance: "54%", solved: true },
  { id: 3, title: "Merge K Sorted Lists", difficulty: "Hard", topic: "Linked Lists", acceptance: "42%", solved: false },
  { id: 4, title: "Valid Parentheses", difficulty: "Easy", topic: "Stack", acceptance: "82%", solved: true },
  { id: 5, title: "LRU Cache", difficulty: "Medium", topic: "Design", acceptance: "48%", solved: false },
  { id: 6, title: "Median of Two Sorted Arrays", difficulty: "Hard", topic: "Binary Search", acceptance: "35%", solved: false },
  { id: 7, title: "Maximum Subarray", difficulty: "Medium", topic: "DP", acceptance: "65%", solved: true },
  { id: 8, title: "Course Schedule", difficulty: "Medium", topic: "Graphs", acceptance: "51%", solved: false },
];

const diffColor: Record<string, string> = {
  Easy: "#2F8D46",
  Medium: "#F59E0B",
  Hard: "#EF4444",
};

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    const matchCat = activeCategory === "All" || r.category === activeCategory;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "28px" }}>
            Learning Resources
          </h1>
          <p className="text-gray-500 mb-6" style={{ fontSize: "14px" }}>
            Curated tutorials, roadmaps, and practice problems to level up your skills.
          </p>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources, topics, problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-[#2F8D46]/20 outline-none transition-all"
              style={{ fontSize: "14px" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.label}
              onClick={() => setActiveCategory(c.label)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeCategory === c.label
                  ? "bg-[#2F8D46] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
              style={{ fontSize: "13px", fontWeight: 500 }}
            >
              <c.icon className="w-4 h-4" />
              {c.label}
            </button>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#2F8D46]/10 flex items-center justify-center">
                  {r.category === "DSA" && <Code className="w-5 h-5 text-[#2F8D46]" />}
                  {r.category === "Web Dev" && <Globe className="w-5 h-5 text-[#2F8D46]" />}
                  {r.category === "CP" && <BarChart3 className="w-5 h-5 text-[#2F8D46]" />}
                  {r.category === "System Design" && <Server className="w-5 h-5 text-[#2F8D46]" />}
                  {r.category === "Aptitude" && <Brain className="w-5 h-5 text-[#2F8D46]" />}
                </div>
                <span
                  className="px-2 py-0.5 rounded-full"
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: diffColor[r.difficulty],
                    backgroundColor: diffColor[r.difficulty] + "15",
                  }}
                >
                  {r.difficulty}
                </span>
              </div>
              <h3 className="mb-1.5" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "15px" }}>{r.title}</h3>
              <p className="text-gray-500 mb-4" style={{ fontSize: "12px", lineHeight: 1.6 }}>{r.desc}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-gray-400" style={{ fontSize: "12px" }}>
                  <Clock className="w-3.5 h-3.5" /> {r.time}
                </span>
                <button
                  className="inline-flex items-center gap-1 text-[#2F8D46] group-hover:gap-2 transition-all"
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  Start Learning <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Paths */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[#2F8D46] block mb-1" style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Roadmaps
              </span>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "22px" }}>
                Recommended Learning Paths
              </h2>
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {paths.map((p) => (
              <div
                key={p.title}
                className="min-w-[300px] bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 snap-start shrink-0"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: p.color + "15" }}>
                  <Play className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <h3 className="mb-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "16px" }}>{p.title}</h3>
                <p className="text-gray-500 mb-3" style={{ fontSize: "12px", lineHeight: 1.6 }}>{p.desc}</p>
                <div className="flex items-center gap-3 text-gray-400 mb-4" style={{ fontSize: "12px" }}>
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> {p.steps} modules</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {p.duration}</span>
                </div>
                <button
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border-2 hover:text-white transition-colors"
                  style={{ fontSize: "12px", fontWeight: 600, borderColor: p.color, color: p.color }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = p.color; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = p.color; }}
                >
                  Start Path <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Problems Table */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[#2F8D46] block mb-1" style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Practice
              </span>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "22px" }}>
                Popular Problems
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>#</th>
                    <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Title</th>
                    <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Topic</th>
                    <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Difficulty</th>
                    <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Acceptance</th>
                    <th className="text-left px-5 py-3 text-gray-500" style={{ fontSize: "12px", fontWeight: 600 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {problems.map((p) => (
                    <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                      <td className="px-5 py-3 text-gray-400" style={{ fontSize: "13px" }}>{p.id}</td>
                      <td className="px-5 py-3" style={{ fontSize: "13px", fontWeight: 500 }}>{p.title}</td>
                      <td className="px-5 py-3">
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded" style={{ fontSize: "11px" }}>{p.topic}</span>
                      </td>
                      <td className="px-5 py-3">
                        <span style={{ fontSize: "12px", fontWeight: 600, color: diffColor[p.difficulty] }}>{p.difficulty}</span>
                      </td>
                      <td className="px-5 py-3 text-gray-500" style={{ fontSize: "13px" }}>{p.acceptance}</td>
                      <td className="px-5 py-3">
                        {p.solved ? (
                          <span className="inline-flex items-center gap-1 text-[#2F8D46]" style={{ fontSize: "12px", fontWeight: 600 }}>
                            <div className="w-2 h-2 rounded-full bg-[#2F8D46]" /> Solved
                          </span>
                        ) : (
                          <span className="text-gray-400" style={{ fontSize: "12px" }}>Unsolved</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
