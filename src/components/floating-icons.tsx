"use client";

import {
  Command,
  CircleCheck,
  Code2,
  ToggleRight,
  ArrowRightToLine,
  RefreshCw,
  Copy,
  Sparkles,
  Files,
  WandSparkles,
  LayoutGrid,
  Star,
} from "lucide-react";

const icons = [
  { Icon: Command, size: 80, delay: 0 },
  { Icon: CircleCheck, size: 72, delay: 0.3 },
  { Icon: Code2, size: 76, delay: 0.6 },
  { Icon: ToggleRight, size: 68, delay: 0.9 },
  { Icon: ArrowRightToLine, size: 64, delay: 1.2 },
  { Icon: RefreshCw, size: 68, delay: 1.5 },
  { Icon: Copy, size: 72, delay: 1.8 },
  { Icon: Sparkles, size: 76, delay: 2.1 },
  { Icon: Files, size: 80, delay: 2.4 },
  { Icon: WandSparkles, size: 72, delay: 2.7 },
  { Icon: LayoutGrid, size: 76, delay: 3.0 },
  { Icon: Star, size: 68, delay: 3.3 },
];

export function FloatingIcons() {
  return (
    <div className="w-full overflow-hidden py-8 md:py-12">
      <div className="flex items-center justify-center gap-3 md:gap-5 px-4">
        {icons.map(({ Icon, size, delay }, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-full bg-black/[0.03] flex items-center justify-center animate-mocha-float group"
            style={{
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            <div
              className="rounded-full bg-white flex items-center justify-center shadow-sm border border-black/[0.06] transition-all duration-300 group-hover:shadow-md group-hover:border-black/10 group-hover:scale-105"
              style={{
                width: size * 0.7,
                height: size * 0.7,
              }}
            >
              <Icon
                className="text-black/70 transition-colors duration-300 group-hover:text-black"
                style={{
                  width: size * 0.28,
                  height: size * 0.28,
                }}
                strokeWidth={1.5}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
