"use client";

import { Apple } from "lucide-react";
import { Particles } from "./particles";
import { FloatingIcons } from "./floating-icons";
import { MochaLogo } from "./mocha-logo";

export function Hero() {
  return (
    <section className="relative pt-28 pb-8 overflow-hidden">
      {/* Grid dots background */}
      <div className="absolute inset-0 mocha-grid-dots pointer-events-none" />

      {/* Particles canvas */}
      <Particles />

      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Floating icons row - plays immediately via CSS */}
        <div className="animate-mocha-fade-in stagger-1">
          <FloatingIcons />
        </div>

        {/* Brand badge */}
        <div className="flex items-center gap-2.5 mt-6 mb-6 px-4 py-2 rounded-full bg-black/[0.03] border border-black/[0.06] animate-mocha-hero-badge stagger-3">
          <MochaLogo className="w-5 h-5" />
          <span className="text-sm text-black/60 font-medium tracking-tight">
            Mocha
          </span>
        </div>

        {/* Main heading - staggered line reveal */}
        <h1 className="max-w-4xl">
          <span className="block text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[1.05] animate-mocha-hero-title stagger-4">
            Experience liftoff
          </span>
          <span className="block text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[1.05] animate-mocha-hero-title stagger-5">
            with the{" "}
            <span className="mocha-text-shimmer">next&#8209;generation</span>
          </span>
          <span className="block text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[1.05] animate-mocha-hero-title stagger-6">
            IDE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-black/50 max-w-lg leading-relaxed animate-mocha-fade-in-up stagger-7">
          The agentic development platform that evolves your IDE into the
          agent&#8209;first era.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-10 animate-mocha-fade-in-up stagger-8">
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 bg-black text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-black/85 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-black/10 animate-mocha-pulse-glow"
          >
            <Apple className="w-4 h-4" />
            Download for MacOS
          </a>
          <a
            href="#use-cases"
            className="inline-flex items-center gap-2 border border-black/15 text-black font-medium text-sm px-7 py-3.5 rounded-full hover:bg-black/5 hover:border-black/25 active:scale-[0.97] transition-all duration-200"
          >
            Explore use cases
          </a>
        </div>
      </div>
    </section>
  );
}
