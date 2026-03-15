import { useState } from "react";
import { Brain, X, Send, Sparkles, ExternalLink } from "lucide-react";

const recommendations: Record<string, { title: string; difficulty: string; source: string }[]> = {
  arrays: [
    { title: "Two Sum", difficulty: "Easy", source: "LeetCode" },
    { title: "Maximum Subarray", difficulty: "Medium", source: "GFG" },
    { title: "Trapping Rain Water", difficulty: "Hard", source: "LeetCode" },
  ],
  trees: [
    { title: "Inorder Traversal", difficulty: "Easy", source: "GFG" },
    { title: "Lowest Common Ancestor", difficulty: "Medium", source: "LeetCode" },
    { title: "Serialize & Deserialize", difficulty: "Hard", source: "LeetCode" },
  ],
  graphs: [
    { title: "BFS of Graph", difficulty: "Easy", source: "GFG" },
    { title: "Number of Islands", difficulty: "Medium", source: "LeetCode" },
    { title: "Dijkstra's Algorithm", difficulty: "Hard", source: "GFG" },
  ],
  dp: [
    { title: "Climbing Stairs", difficulty: "Easy", source: "LeetCode" },
    { title: "Longest Common Subsequence", difficulty: "Medium", source: "GFG" },
    { title: "Edit Distance", difficulty: "Hard", source: "LeetCode" },
  ],
  default: [
    { title: "Reverse a String", difficulty: "Easy", source: "GFG" },
    { title: "Merge Intervals", difficulty: "Medium", source: "LeetCode" },
    { title: "Regular Expression Match", difficulty: "Hard", source: "LeetCode" },
  ],
};

const diffColor: Record<string, string> = {
  Easy: "#2F8D46",
  Medium: "#F59E0B",
  Hard: "#EF4444",
};

export function AIProblemRecommender() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<typeof recommendations.default | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!topic.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const key = Object.keys(recommendations).find((k) =>
        topic.toLowerCase().includes(k)
      );
      setResults(recommendations[key || "default"]);
      setLoading(false);
    }, 800);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        style={{ fontSize: "13px", fontWeight: 600 }}
      >
        <Sparkles className="w-4 h-4" />
        AI Recommender
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5" />
          <div>
            <div style={{ fontWeight: 600, fontSize: "14px" }}>AI Problem Recommender</div>
            <div className="text-white/70" style={{ fontSize: "11px" }}>Get personalized suggestions</div>
          </div>
        </div>
        <button onClick={() => setOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-gray-500 mb-3" style={{ fontSize: "12px" }}>
          Enter a topic you want to improve in:
        </p>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="e.g., arrays, trees, dp..."
            className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-500 outline-none"
            style={{ fontSize: "13px" }}
          />
          <button
            onClick={handleSearch}
            className="w-9 h-9 bg-purple-600 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {loading && (
          <div className="text-center py-6">
            <div className="w-8 h-8 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto" />
            <p className="text-gray-400 mt-2" style={{ fontSize: "12px" }}>Finding problems...</p>
          </div>
        )}

        {results && !loading && (
          <div className="space-y-2.5">
            <p className="text-gray-400" style={{ fontSize: "11px", fontWeight: 500 }}>
              <Sparkles className="w-3 h-3 inline mr-1" />
              Recommended for you:
            </p>
            {results.map((r) => (
              <div
                key={r.title}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 500 }}>{r.title}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span style={{ fontSize: "11px", fontWeight: 600, color: diffColor[r.difficulty] }}>
                      {r.difficulty}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-400" style={{ fontSize: "11px" }}>{r.source}</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </div>
            ))}
          </div>
        )}

        {/* Quick topics */}
        {!results && !loading && (
          <div>
            <p className="text-gray-400 mb-2" style={{ fontSize: "11px" }}>Quick picks:</p>
            <div className="flex flex-wrap gap-1.5">
              {["Arrays", "Trees", "Graphs", "DP"].map((t) => (
                <button
                  key={t}
                  onClick={() => { setTopic(t.toLowerCase()); }}
                  className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors"
                  style={{ fontSize: "11px", fontWeight: 500 }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
