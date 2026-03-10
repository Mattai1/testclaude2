"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function Statement() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p
          className={cn(
            "text-3xl md:text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.15] opacity-0",
            isInView && "animate-mocha-hero-title"
          )}
        >
          Mocha is our agentic development platform, evolving the IDE into
          the <span className="mocha-text-shimmer">agent&#8209;first</span>{" "}
          era.
        </p>
      </div>
    </section>
  );
}
