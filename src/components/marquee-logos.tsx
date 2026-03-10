"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const logos = [
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Meta",
  "Netflix",
  "Stripe",
  "Vercel",
  "Figma",
  "Linear",
  "Notion",
  "Slack",
];

export function MarqueeLogos() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 border-y border-black/5 opacity-0",
        isInView && "animate-mocha-fade-in"
      )}
    >
      <p className="text-center text-xs text-black/30 uppercase tracking-widest mb-8">
        Trusted by teams at
      </p>
      <div className="mocha-marquee-container">
        <div className="mocha-marquee">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
            >
              <span className="text-lg font-medium text-black/20 whitespace-nowrap select-none hover:text-black/40 transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
