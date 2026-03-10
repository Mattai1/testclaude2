"use client";

import { Apple, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { MochaLogo } from "./mocha-logo";

export function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-32 px-6">
      <div
        className={cn(
          "max-w-4xl mx-auto text-center opacity-0",
          isInView && "animate-mocha-scale-in"
        )}
      >
        <div className="relative rounded-3xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 border border-black/[0.06] px-8 py-16 md:px-16 md:py-24 overflow-hidden">
          {/* Decorative spinning gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.06),transparent_60%)] animate-mocha-spin-slow pointer-events-none" />

          <div className="relative">
            <MochaLogo className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Ready for liftoff?
            </h2>
            <p className="text-lg text-black/50 max-w-md mx-auto mb-10">
              Join thousands of developers building the future with Mocha.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2.5 bg-black text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-black/85 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-black/10 animate-mocha-pulse-glow"
              >
                <Apple className="w-4 h-4" />
                Download for MacOS
              </a>
              <a
                href="#docs"
                className="inline-flex items-center gap-2 text-black/60 hover:text-black font-medium text-sm px-7 py-3.5 rounded-full hover:bg-black/5 transition-all duration-200 group"
              >
                Read the docs
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
