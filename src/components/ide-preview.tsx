"use client";

import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function IDEPreview() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full max-w-5xl mx-auto px-6 opacity-0",
        isInView && "animate-mocha-ide-entrance"
      )}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-black/10 bg-[#1e1e1e]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] transition-opacity hover:opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] transition-opacity hover:opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] transition-opacity hover:opacity-80" />
          </div>
          <span className="text-white/40 text-xs ml-2 font-mono">
            mocha — page.tsx
          </span>
        </div>

        {/* Editor area */}
        <div className="flex min-h-[340px] md:min-h-[420px]">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-48 bg-[#252526] border-r border-white/5 py-3 px-3 gap-1">
            <div className="text-white/40 text-[11px] uppercase tracking-wider mb-2 px-1">
              Explorer
            </div>
            <div className="text-white/60 text-xs px-1 py-1 rounded bg-white/5">
              src/
            </div>
            <div className="text-white/50 text-xs pl-4 py-0.5 hover:text-white/70 transition-colors cursor-pointer">
              app/
            </div>
            <div className="text-white/50 text-xs pl-6 py-0.5 hover:text-white/70 transition-colors cursor-pointer">
              api/
            </div>
            <div className="text-white/70 text-xs pl-6 py-0.5 bg-white/5 rounded">
              page.tsx
            </div>
            <div className="text-white/50 text-xs pl-6 py-0.5 hover:text-white/70 transition-colors cursor-pointer">
              layout.tsx
            </div>
            <div className="text-white/50 text-xs pl-6 py-0.5 hover:text-white/70 transition-colors cursor-pointer">
              globals.css
            </div>
            <div className="text-white/50 text-xs pl-4 py-0.5 hover:text-white/70 transition-colors cursor-pointer">
              components/
            </div>
            <div className="text-white/50 text-xs pl-4 py-0.5 hover:text-white/70 transition-colors cursor-pointer">
              lib/
            </div>
          </div>

          {/* Code */}
          <div className="flex-1 p-4 font-mono text-xs leading-relaxed overflow-hidden">
            <code className="block">
              <span className="text-[#c586c0]">&#39;use client&#39;</span>
              <span className="text-white/30">;</span>
            </code>
            <code className="block mt-2">
              <span className="text-[#c586c0]">import</span>
              <span className="text-white/80"> {"{"} </span>
              <span className="text-[#9cdcfe]">useState</span>
              <span className="text-white/80"> {"}"} </span>
              <span className="text-[#c586c0]">from</span>
              <span className="text-[#ce9178]"> &#39;react&#39;</span>
              <span className="text-white/30">;</span>
            </code>
            <code className="block">
              <span className="text-[#c586c0]">import</span>
              <span className="text-white/80"> {"{"} </span>
              <span className="text-[#9cdcfe]">SearchForm</span>
              <span className="text-white/80"> {"}"} </span>
              <span className="text-[#c586c0]">from</span>
              <span className="text-[#ce9178]"> &#39;@/components/SearchForm&#39;</span>
              <span className="text-white/30">;</span>
            </code>
            <code className="block">
              <span className="text-[#c586c0]">import</span>
              <span className="text-white/80"> {"{"} </span>
              <span className="text-[#4ec9b0]">Results</span>
              <span className="text-white/80"> {"}"} </span>
              <span className="text-[#c586c0]">from</span>
              <span className="text-[#ce9178]"> &#39;@/components/Results&#39;</span>
              <span className="text-white/30">;</span>
            </code>
            <code className="block">
              <span className="text-[#c586c0]">import</span>
              <span className="text-white/80"> {"{"} </span>
              <span className="text-[#4ec9b0]">Coffee</span>
              <span className="text-white/80"> {"}"} </span>
              <span className="text-[#c586c0]">from</span>
              <span className="text-[#ce9178]"> &#39;lucide-react&#39;</span>
              <span className="text-white/30">;</span>
            </code>
            <code className="block mt-3">
              <span className="text-[#569cd6]">export default function</span>
              <span className="text-[#dcdcaa]"> Home</span>
              <span className="text-white/80">() {"{"}</span>
            </code>
            <code className="block">
              <span className="text-white/40">{"  "}</span>
              <span className="text-[#569cd6]">const</span>
              <span className="text-white/80"> [</span>
              <span className="text-[#9cdcfe]">query</span>
              <span className="text-white/80">, </span>
              <span className="text-[#9cdcfe]">setQuery</span>
              <span className="text-white/80">] = </span>
              <span className="text-[#dcdcaa]">useState</span>
              <span className="text-white/80">(</span>
              <span className="text-[#ce9178]">&#39;&#39;</span>
              <span className="text-white/80">);</span>
            </code>
            <code className="block mt-2">
              <span className="text-white/40">{"  "}</span>
              <span className="text-[#569cd6]">return</span>
              <span className="text-white/80"> (</span>
            </code>
            <code className="block">
              <span className="text-white/40">{"    "}</span>
              <span className="text-[#808080]">&lt;</span>
              <span className="text-[#569cd6]">main</span>
              <span className="text-[#9cdcfe]"> className</span>
              <span className="text-white/80">=</span>
              <span className="text-[#ce9178]">&quot;flex flex-col items-center&quot;</span>
              <span className="text-[#808080]">&gt;</span>
            </code>
            {/* Blinking cursor */}
            <code className="block">
              <span className="text-white/40">{"      "}</span>
              <span className="inline-block w-[7px] h-[14px] bg-white/60 animate-mocha-cursor-blink" />
            </code>
          </div>
        </div>

        {/* Play button overlay */}
        <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2">
          <button className="flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 text-sm font-medium group">
            <Play className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
            Play intro
          </button>
        </div>
      </div>
    </div>
  );
}
