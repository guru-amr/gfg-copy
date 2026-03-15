import { useState } from "react";
import {
  Clock, User, ArrowRight, TrendingUp, Search, Mail, ChevronRight,
  Share2, Twitter, Linkedin, Copy, BookOpen, Tag
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const blogs = [
  {
    id: 1, title: "How I Cracked Google SDE Interview — A Complete Guide",
    category: "Interview", author: "Aarav Patel", authorAvatar: "AP",
    readTime: "12 min", date: "Mar 10, 2026", featured: true,
    img: "https://images.unsplash.com/photo-1565489030990-e211075fe11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmxvZyUyMGFydGljbGUlMjB3cml0aW5nfGVufDF8fHx8MTc3MzQxNjE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "A detailed walkthrough of my 6-month preparation journey, resources used, and tips for each interview round.",
  },
  {
    id: 2, title: "Understanding Dynamic Programming: A Visual Guide",
    category: "DSA", author: "Priya Sharma", authorAvatar: "PS",
    readTime: "8 min", date: "Mar 8, 2026", featured: false,
    img: "https://images.unsplash.com/photo-1667511695484-9d7a1c721c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc3RydWN0dXJlcyUyMGFsZ29yaXRobXMlMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3MzQxNjE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Break down complex DP problems with visual diagrams and step-by-step explanations.",
  },
  {
    id: 3, title: "Building a Real-time Chat App with React & WebSockets",
    category: "Web Dev", author: "Rohan Gupta", authorAvatar: "RG",
    readTime: "15 min", date: "Mar 5, 2026", featured: false,
    img: "https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzMzMjUwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Build a feature-rich chat application using React, Socket.io, and Node.js from scratch.",
  },
  {
    id: 4, title: "CP Tips: How to Improve Your Codeforces Rating",
    category: "CP", author: "Sneha Verma", authorAvatar: "SV",
    readTime: "6 min", date: "Mar 1, 2026", featured: false,
    img: "https://images.unsplash.com/photo-1632679090212-612ac1f4d76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvbnRlc3QlMjBjb21wZXRpdGl2ZXxlbnwxfHx8fDE3NzM0MTYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Practical strategies for improving your competitive programming rating consistently.",
  },
  {
    id: 5, title: "System Design: Designing a URL Shortener",
    category: "System Design", author: "Karthik Iyer", authorAvatar: "KI",
    readTime: "10 min", date: "Feb 26, 2026", featured: false,
    img: "https://images.unsplash.com/photo-1634464660153-468d44306ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3Nob3AlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzM0MTYxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Complete system design breakdown of a URL shortener with scalability considerations.",
  },
  {
    id: 6, title: "Open Source Contributions: A Beginner's Guide",
    category: "Career", author: "Ananya Singh", authorAvatar: "AS",
    readTime: "7 min", date: "Feb 22, 2026", featured: false,
    img: "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM0MTYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Step-by-step guide to making your first open source contribution and building your profile.",
  },
];

const trendingTopics = ["Dynamic Programming", "React Hooks", "System Design", "Graph Theory", "TypeScript", "Docker", "CI/CD"];
const topContributors = [
  { name: "Aarav Patel", posts: 24, avatar: "AP" },
  { name: "Priya Sharma", posts: 18, avatar: "PS" },
  { name: "Rohan Gupta", posts: 15, avatar: "RG" },
];

export function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogs)[0] | null>(null);
  const [search, setSearch] = useState("");
  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured && b.title.toLowerCase().includes(search.toLowerCase()));

  if (selectedBlog) {
    return <BlogArticle blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      {/* Featured Hero */}
      {featured && (
        <div
          className="relative bg-[#1A1A1A] cursor-pointer group"
          onClick={() => setSelectedBlog(featured)}
        >
          <div className="absolute inset-0">
            <ImageWithFallback src={featured.img} alt={featured.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <span className="inline-block bg-[#2F8D46] text-white px-3 py-1 rounded-full mb-4" style={{ fontSize: "11px", fontWeight: 600 }}>
              FEATURED ARTICLE
            </span>
            <h1 className="text-white max-w-2xl mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", lineHeight: 1.2 }}>
              {featured.title}
            </h1>
            <p className="text-gray-400 max-w-xl mb-5" style={{ fontSize: "14px", lineHeight: 1.7 }}>{featured.excerpt}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2F8D46] text-white flex items-center justify-center" style={{ fontSize: "11px", fontWeight: 600 }}>
                  {featured.authorAvatar}
                </div>
                <span className="text-gray-300" style={{ fontSize: "13px" }}>{featured.author}</span>
              </div>
              <span className="text-gray-500" style={{ fontSize: "12px" }}>{featured.date}</span>
              <span className="flex items-center gap-1 text-gray-500" style={{ fontSize: "12px" }}>
                <Clock className="w-3.5 h-3.5" /> {featured.readTime}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Grid */}
          <div className="lg:col-span-2">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:border-[#2F8D46] focus:ring-1 focus:ring-[#2F8D46] outline-none"
                style={{ fontSize: "13px" }}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {rest.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedBlog(b)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#1A1A1A] px-2.5 py-0.5 rounded-full" style={{ fontSize: "10px", fontWeight: 600 }}>
                        {b.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "15px", lineHeight: 1.4 }}>
                      {b.title}
                    </h3>
                    <p className="text-gray-500 mb-3 line-clamp-2" style={{ fontSize: "12px", lineHeight: 1.6 }}>{b.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2F8D46]/10 text-[#2F8D46] flex items-center justify-center" style={{ fontSize: "9px", fontWeight: 600 }}>
                          {b.authorAvatar}
                        </div>
                        <span className="text-gray-500" style={{ fontSize: "11px" }}>{b.author}</span>
                      </div>
                      <span className="flex items-center gap-1 text-gray-400" style={{ fontSize: "11px" }}>
                        <Clock className="w-3 h-3" /> {b.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending */}
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="flex items-center gap-2 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "15px" }}>
                <TrendingUp className="w-4 h-4 text-[#2F8D46]" />
                Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((t) => (
                  <span key={t} className="bg-gray-50 hover:bg-[#2F8D46]/10 hover:text-[#2F8D46] text-gray-600 px-3 py-1.5 rounded-lg cursor-pointer transition-colors" style={{ fontSize: "12px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="flex items-center gap-2 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "15px" }}>
                <User className="w-4 h-4 text-[#2F8D46]" />
                Top Contributors
              </h3>
              <div className="space-y-3">
                {topContributors.map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2F8D46]/10 text-[#2F8D46] flex items-center justify-center" style={{ fontSize: "11px", fontWeight: 600 }}>
                      {c.avatar}
                    </div>
                    <div className="flex-1">
                      <div style={{ fontSize: "13px", fontWeight: 500 }}>{c.name}</div>
                      <div className="text-gray-400" style={{ fontSize: "11px" }}>{c.posts} articles</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#2F8D46] to-[#1a6b30] rounded-xl p-6 text-white">
              <Mail className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="mb-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "16px" }}>
                Weekly Newsletter
              </h3>
              <p className="text-white/70 mb-4" style={{ fontSize: "12px" }}>
                Get curated articles, event updates, and coding tips every Friday.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 outline-none mb-3"
                style={{ fontSize: "13px" }}
              />
              <button className="w-full bg-white text-[#2F8D46] py-2.5 rounded-lg hover:bg-gray-100 transition-colors" style={{ fontWeight: 600, fontSize: "13px" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogArticle({ blog, onBack }: { blog: (typeof blogs)[0]; onBack: () => void }) {
  const toc = [
    "Introduction",
    "Preparation Strategy",
    "Key Resources Used",
    "Mock Interview Tips",
    "Final Thoughts",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-64 md:h-80">
        <ImageWithFallback src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-8">
          <button onClick={onBack} className="text-white/70 hover:text-white mb-3 inline-flex items-center gap-1" style={{ fontSize: "13px" }}>
            <ChevronRight className="w-4 h-4 rotate-180" /> Back to Blog
          </button>
          <span className="inline-block bg-[#2F8D46] text-white px-3 py-1 rounded-full mb-3" style={{ fontSize: "11px", fontWeight: 600 }}>
            {blog.category}
          </span>
          <h1 className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.3rem, 3vw, 2rem)", lineHeight: 1.2 }}>
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#2F8D46] text-white flex items-center justify-center" style={{ fontSize: "12px", fontWeight: 600 }}>
              {blog.authorAvatar}
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 500 }}>{blog.author}</div>
              <div className="text-gray-400" style={{ fontSize: "12px" }}>{blog.date}</div>
            </div>
          </div>
          <span className="flex items-center gap-1 text-gray-400" style={{ fontSize: "13px" }}>
            <Clock className="w-4 h-4" /> {blog.readTime} read
          </span>
          <div className="flex gap-2 ml-auto">
            {[Twitter, Linkedin, Copy].map((Icon, i) => (
              <button key={i} className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4 text-gray-500" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* TOC Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <h4 className="mb-3 text-gray-400" style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Table of Contents
              </h4>
              <div className="space-y-2">
                {toc.map((t, i) => (
                  <div
                    key={t}
                    className={`pl-3 border-l-2 transition-colors cursor-pointer ${
                      i === 0 ? "border-[#2F8D46] text-[#2F8D46]" : "border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-400"
                    }`}
                    style={{ fontSize: "12px" }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="prose max-w-none">
              <p className="text-gray-600 mb-6" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                {blog.excerpt}
              </p>

              <h2 className="mt-8 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "20px" }}>
                Introduction
              </h2>
              <p className="text-gray-600 mb-4" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                The journey to cracking a top tech company interview is unique for everyone, but certain patterns
                and strategies tend to work consistently. In this article, I'll share my complete 6-month preparation
                roadmap that helped me land an offer at Google.
              </p>

              <h2 className="mt-8 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "20px" }}>
                Preparation Strategy
              </h2>
              <p className="text-gray-600 mb-4" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                My preparation was divided into three phases: foundation building (2 months), intensive practice
                (3 months), and mock interviews (1 month). Here's a breakdown of each phase.
              </p>

              {/* Code Block */}
              <div className="bg-[#1e1e1e] rounded-xl p-5 my-6 overflow-x-auto">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-gray-500 ml-2" style={{ fontSize: "11px" }}>solution.py</span>
                </div>
                <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#e5e5e5", lineHeight: 1.6 }}>
{`def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`}
                </pre>
              </div>

              <h2 className="mt-8 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "20px" }}>
                Key Resources Used
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                <li>GeeksforGeeks — For topic-wise problem practice</li>
                <li>LeetCode — For interview-style problems</li>
                <li>System Design Primer — For system design rounds</li>
                <li>"Cracking the Coding Interview" book</li>
              </ul>

              <h2 className="mt-8 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "20px" }}>
                Final Thoughts
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                Consistency is key. Even 2 hours of focused practice daily is better than 10 hours of sporadic
                effort. Stay motivated, track your progress, and don't hesitate to ask for help from the community.
              </p>
            </article>

            {/* Share */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
              <Share2 className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400" style={{ fontSize: "13px" }}>Share this article:</span>
              {[Twitter, Linkedin, Copy].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-lg bg-gray-50 hover:bg-[#2F8D46]/10 hover:text-[#2F8D46] flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
