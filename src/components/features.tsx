"use client";

import { Zap, Brain, Shield, GitBranch, Terminal, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { useMousePosition } from "@/hooks/use-mouse-position";

const features = [
  {
    icon: Brain,
    title: "Agentic AI",
    description:
      "Built-in AI that understands your entire codebase, suggests changes, and executes multi-step tasks autonomously.",
  },
  {
    icon: Terminal,
    title: "Integrated Terminal",
    description:
      "Run commands, debug, and manage your project without leaving the editor. Full terminal emulation built in.",
  },
  {
    icon: GitBranch,
    title: "Git Native",
    description:
      "Visual diff, merge conflict resolution, and branch management with AI-assisted commit messages.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Instant file switching, sub-millisecond syntax highlighting, and zero-lag typing at any scale.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "End-to-end encryption, local-first architecture, and enterprise-grade access controls.",
  },
  {
    icon: Layers,
    title: "Extensible",
    description:
      "Plugin system with thousands of extensions. Build your own with our SDK and share with the community.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
  isInView,
}: {
  icon: typeof Zap;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}) {
  const { handleMouseMove } = useMousePosition();

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "mocha-card-spotlight group rounded-2xl border border-black/[0.06] bg-white p-6 opacity-0",
        "hover:border-black/10 hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-1",
        "transition-all duration-300",
        isInView && `animate-mocha-fade-in-up stagger-${index + 1}`
      )}
    >
      <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-indigo-500/10">
        <Icon
          className="w-5 h-5 text-black/60 transition-colors duration-300 group-hover:text-indigo-500"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-base font-medium text-black mb-2">{title}</h3>
      <p className="text-sm text-black/50 leading-relaxed">{description}</p>
    </div>
  );
}

export function Features() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-32 px-6" id="product">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-sm font-medium text-indigo-500 tracking-wide uppercase mb-3 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-1"
            )}
          >
            Features
          </p>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-medium tracking-tight opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            Everything you need to build
          </h2>
          <p
            className={cn(
              "mt-4 text-lg text-black/50 max-w-lg mx-auto opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-3"
            )}
          >
            A complete development environment designed for the AI era.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
