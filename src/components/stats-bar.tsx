"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  {
    value: "135+",
    label: "Currencies and payment methods",
  },
  {
    value: "99.999%",
    label: "Historical uptime",
  },
  {
    value: "200M+",
    label: "Active subscriptions managed",
  },
  {
    value: "500M+",
    label: "Daily API requests",
  },
];

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"];

export function StatsBar() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-[#0a2540] py-16 px-6">
      <div
        ref={ref}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              "flex flex-col items-center text-center opacity-0",
              "md:border-r md:border-[rgba(255,255,255,0.1)] last:border-r-0",
              "md:px-8",
              isInView && `animate-mocha-fade-in-up ${staggerClasses[index]}`
            )}
          >
            <span
              className="text-white font-bold leading-none mb-2"
              style={{ fontSize: "clamp(36px,4vw,48px)" }}
            >
              {stat.value}
            </span>
            <span className="text-[#adbdcc] text-sm leading-snug max-w-[140px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
