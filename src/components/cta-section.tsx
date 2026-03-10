"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-[#0a2540] py-24 px-6 overflow-hidden">
      {/* Mesh gradient background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-left teal blob */}
        <div
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, #0e9eff 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Bottom-right purple blob */}
        <div
          className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle at center, #635bff 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        {/* Center subtle green accent */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #059669 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={cn(
          "relative z-10 max-w-2xl mx-auto text-center opacity-0",
          isInView && "animate-mocha-fade-in-up"
        )}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Ready to start building?
        </h2>
        <p className="text-[#adbdcc] text-lg leading-relaxed mb-10">
          Join millions of businesses using Stripe to grow their revenue.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#"
            className={cn(
              "inline-flex items-center justify-center",
              "bg-[#635bff] text-white font-semibold text-sm",
              "px-8 py-3.5 rounded-full",
              "shadow-[0_6px_12px_-2px_rgba(50,50,93,.25),_0_3px_7px_-3px_rgba(0,0,0,.3)]",
              "hover:bg-white hover:text-[#0a2540]",
              "transition-all duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)]"
            )}
          >
            Start now →
          </a>
          <a
            href="#"
            className={cn(
              "inline-flex items-center justify-center",
              "text-white font-semibold text-sm",
              "px-8 py-3.5 rounded-full",
              "hover:underline underline-offset-4",
              "transition-all duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)]"
            )}
          >
            Contact sales
          </a>
        </div>

        {/* Fine print */}
        <p className="text-[#8c9eb1] text-xs tracking-wide">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>
      </div>
    </section>
  );
}
