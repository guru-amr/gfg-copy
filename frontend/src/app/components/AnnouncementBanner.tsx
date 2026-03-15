import { useState } from "react";
import { X, Megaphone } from "lucide-react";

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-[#2F8D46] text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2" style={{ fontSize: "13px" }}>
        <Megaphone className="w-4 h-4 shrink-0" />
        <span>
          <strong>Spring Hackathon 2026</strong> registrations are now open! Limited seats available.
        </span>
        <a href="#" className="underline hover:no-underline ml-1 shrink-0" style={{ fontWeight: 600 }}>Register Now</a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
