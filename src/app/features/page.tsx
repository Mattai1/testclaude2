"use client";

import { useState } from "react";
import {
  Zap,
  Puzzle,
  Globe,
  Bot,
  BarChart2,
  RefreshCw,
  Brain,
  GitBranch,
  Terminal,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ────────────────────────────────────────────────────────────────────

const bigFeatures = [
  {
    id: "ai-codegen",
    badge: "AI Code Generation",
    headline: "Write code at the speed of thought.",
    description:
      "Mocha's AI model understands your entire project — not just the open file. It predicts what you need next and delivers it inline, in natural language, or as multi-file diffs.",
    subFeatures: [
      "Context-aware completion",
      "Multi-file edits",
      "Natural language to code",
      "Inline refactoring",
    ],
    visual: (
      <div className="rounded-xl bg-black/[0.03] border border-black/[0.06] font-mono text-[13px] leading-relaxed p-5 space-y-1.5 select-none">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-3 rounded-full bg-red-400/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <span className="w-3 h-3 rounded-full bg-green-400/60" />
          <span className="ml-2 text-xs text-black/30">editor.tsx</span>
        </div>
        <p>
          <span className="text-purple-500">async function</span>{" "}
          <span className="text-blue-600">fetchUser</span>
          <span className="text-black/60">(id: string) {"{"}</span>
        </p>
        <p className="pl-4 text-black/50">{"// ← Mocha auto-completes below"}</p>
        <p className="pl-4">
          <span className="text-purple-500">const</span>{" "}
          <span className="text-black/70">res</span>{" "}
          <span className="text-black/50">= await</span>{" "}
          <span className="text-blue-600">fetch</span>
          <span className="text-black/60">(`/api/users/${"{id}"}`)</span>
        </p>
        <p className="pl-4">
          <span className="text-purple-500">if</span>{" "}
          <span className="text-black/60">(!res.ok)</span>{" "}
          <span className="text-purple-500">throw new</span>{" "}
          <span className="text-blue-600">Error</span>
          <span className="text-black/60">(res.statusText)</span>
        </p>
        <p className="pl-4">
          <span className="text-purple-500">return</span>{" "}
          <span className="text-black/60">res.json()</span>
        </p>
        <p className="text-black/60">{"}"}</p>
        <div className="mt-3 px-3 py-2 rounded-lg bg-indigo-50 border border-indigo-100 text-xs text-indigo-600">
          ✦ Mocha generated 4 lines from context
        </div>
      </div>
    ),
  },
  {
    id: "agentic",
    badge: "Agentic Workflows",
    headline: "Delegate entire tasks to your AI agent.",
    description:
      "Stop writing code line by line. Describe what you want at a high level, and Mocha's agent plans, executes, tests, and iterates — autonomously — until the job is done.",
    subFeatures: [
      "Task decomposition",
      "Autonomous debugging",
      "Test generation",
      "PR descriptions",
    ],
    visual: (
      <div className="rounded-xl bg-black/[0.03] border border-black/[0.06] text-[13px] p-5 space-y-3 select-none">
        <div className="flex items-center gap-2 mb-1">
          <Bot className="w-4 h-4 text-indigo-500" strokeWidth={1.5} />
          <span className="text-xs font-medium text-black/50">Mocha Agent</span>
          <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Running</span>
        </div>
        {[
          { done: true, text: "Analyze failing test suite" },
          { done: true, text: "Identify root cause in auth middleware" },
          { done: true, text: "Apply fix across 3 files" },
          { done: false, text: "Re-run tests to verify fix…" },
        ].map((step) => (
          <div key={step.text} className="flex items-start gap-2.5">
            <div
              className={cn(
                "mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center",
                step.done
                  ? "bg-green-100 text-green-600"
                  : "bg-black/5 text-black/20 animate-pulse"
              )}
            >
              {step.done ? (
                <CheckCircle2 className="w-3 h-3" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
              )}
            </div>
            <span className={cn("leading-tight", step.done ? "text-black/60" : "text-black/80 font-medium")}>
              {step.text}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "ide",
    badge: "Deep IDE Integration",
    headline: "Feels native. Works everywhere.",
    description:
      "Mocha is built from the ground up for macOS. Every AI feature is woven into the editor's fabric — not bolted on as an afterthought. Git, the terminal, the file tree: all AI-aware.",
    subFeatures: [
      "File tree awareness",
      "Git integration",
      "Terminal access",
      "Extensions support",
    ],
    visual: (
      <div className="rounded-xl bg-black/[0.03] border border-black/[0.06] text-[13px] overflow-hidden select-none">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.06]">
          <span className="w-3 h-3 rounded-full bg-red-400/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <span className="w-3 h-3 rounded-full bg-green-400/60" />
          <span className="ml-3 text-xs text-black/30">mocha-workspace</span>
        </div>
        <div className="flex">
          {/* Sidebar */}
          <div className="w-36 border-r border-black/[0.06] p-3 space-y-1 font-mono">
            {[
              { name: "src/", indent: 0, open: true },
              { name: "app/", indent: 1, open: true },
              { name: "page.tsx", indent: 2, active: true },
              { name: "layout.tsx", indent: 2 },
              { name: "components/", indent: 1 },
              { name: "public/", indent: 0 },
            ].map((f) => (
              <div
                key={f.name}
                style={{ paddingLeft: f.indent * 12 }}
                className={cn(
                  "text-xs truncate py-0.5 rounded",
                  f.active
                    ? "text-indigo-600 font-medium bg-indigo-50 px-1"
                    : "text-black/40"
                )}
              >
                {f.name}
              </div>
            ))}
          </div>
          {/* Editor area */}
          <div className="flex-1 p-3 font-mono space-y-1">
            <p className="text-black/20 text-xs">1</p>
            <p className="text-xs">
              <span className="text-purple-500">import</span>{" "}
              <span className="text-black/50">{"{ Navbar }"}</span>
            </p>
            <p className="text-xs text-black/40">2</p>
            <p className="text-xs text-black/40">3  export default function…</p>
            <div className="mt-2 px-2 py-1.5 rounded-md bg-indigo-50 border border-indigo-100 text-xs text-indigo-600">
              ✦ 2 AI suggestions ready
            </div>
          </div>
        </div>
        {/* Terminal strip */}
        <div className="border-t border-black/[0.06] bg-black/[0.02] px-4 py-2 font-mono text-xs text-black/40">
          <span className="text-green-600">$</span> pnpm dev&nbsp;
          <span className="text-black/30">— ready on :3000</span>
        </div>
      </div>
    ),
  },
  {
    id: "security",
    badge: "Privacy & Security",
    headline: "Your code never leaves your machine.",
    description:
      "With Mocha's local inference option, AI runs entirely on your hardware. Zero telemetry, zero training on your code. SOC 2 Type II certified for teams who need enterprise-grade assurance.",
    subFeatures: [
      "Local inference option",
      "SOC 2 compliant",
      "No training on your code",
      "Encrypted at rest",
    ],
    visual: (
      <div className="rounded-xl bg-black/[0.03] border border-black/[0.06] p-5 space-y-4 select-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Shield className="w-5 h-5 text-green-600" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-medium">All systems secure</p>
            <p className="text-xs text-black/40">Last audit: March 2026</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: "Data transmission", status: "Local only", ok: true },
            { label: "Model training", status: "Opted out", ok: true },
            { label: "Encryption", status: "AES-256", ok: true },
            { label: "SOC 2 Type II", status: "Certified", ok: true },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between py-1.5 border-b border-black/[0.04] last:border-0">
              <span className="text-xs text-black/50">{row.label}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const smallFeatures = [
  {
    icon: Zap,
    title: "Instant startup",
    description: "Opens in under 200ms, even on massive monorepos.",
  },
  {
    icon: Puzzle,
    title: "Plugin ecosystem",
    description: "500+ community plugins for every workflow and language.",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "First-class support for 40+ programming languages.",
  },
  {
    icon: Bot,
    title: "Agent marketplace",
    description: "Browse and install specialized AI agents in one click.",
  },
  {
    icon: BarChart2,
    title: "Usage analytics",
    description: "Understand your coding patterns and velocity over time.",
  },
  {
    icon: RefreshCw,
    title: "Sync everywhere",
    description: "Settings, keybindings, and themes sync across all your devices.",
  },
];

const stats = [
  { value: "200ms", label: "Startup time" },
  { value: "40+", label: "Languages" },
  { value: "500+", label: "Plugins" },
  { value: "10x", label: "Faster shipping" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function FeatureTile({
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
  return (
    <div
      className={cn(
        "group rounded-2xl border border-black/[0.06] bg-white p-6 opacity-0",
        "hover:border-black/10 hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-1",
        "transition-all duration-300",
        isInView && `animate-mocha-fade-in-up stagger-${index + 1}`
      )}
    >
      <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-indigo-500/10">
        <Icon
          className="w-5 h-5 text-black/50 transition-colors duration-300 group-hover:text-indigo-500"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-base font-medium text-black mb-1.5">{title}</h3>
      <p className="text-sm text-black/45 leading-relaxed">{description}</p>
    </div>
  );
}

function BigFeatureSection({
  feature,
  index,
}: {
  feature: (typeof bigFeatures)[0];
  index: number;
}) {
  const { ref, isInView } = useInView();
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
        isReversed && "lg:[&>*:first-child]:order-2"
      )}
    >
      {/* Text side */}
      <div
        className={cn(
          "opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-4">
          {feature.badge}
        </span>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-4">
          {feature.headline}
        </h2>
        <p className="text-base text-black/50 leading-relaxed mb-8">
          {feature.description}
        </p>
        <ul className="space-y-2.5">
          {feature.subFeatures.map((sf) => (
            <li key={sf} className="flex items-center gap-3 text-sm text-black/65">
              <CheckCircle2
                className="w-4 h-4 text-indigo-500 flex-shrink-0"
                strokeWidth={2}
              />
              {sf}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual side */}
      <div
        className={cn(
          "opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-2"
        )}
      >
        {feature.visual}
      </div>
    </div>
  );
}

function StatsBar() {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className="border-y border-black/[0.06] py-12 px-6 bg-black/[0.01]"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "text-center opacity-0",
              isInView && `animate-mocha-fade-in-up stagger-${i + 1}`
            )}
          >
            <p className="text-4xl md:text-5xl font-medium tracking-tight mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-black/40">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmallFeaturesGrid() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className={cn(
              "text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-3 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-1"
            )}
          >
            Built-in extras
          </p>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-medium tracking-tight opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            And so much more
          </h2>
          <p
            className={cn(
              "mt-4 text-base text-black/45 max-w-md mx-auto opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-3"
            )}
          >
            Every detail you'd expect — and plenty you wouldn't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {smallFeatures.map((feature, i) => (
            <FeatureTile
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

function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28 px-6">
      <div
        className={cn(
          "max-w-3xl mx-auto text-center opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
          Start building today
        </h2>
        <p className="text-base text-black/45 mb-8 max-w-md mx-auto">
          Join thousands of developers who ship faster with Mocha.
        </p>
        <a
          href="/pricing"
          className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-black/85 active:scale-[0.97] transition-all duration-200"
        >
          See pricing
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 mocha-grid-dots opacity-60 pointer-events-none" />
      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.07),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-6 animate-mocha-hero-badge">
          Product
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08] animate-mocha-hero-title stagger-2">
          Everything you need
          <br />
          <span className="mocha-text-shimmer">to build faster</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-black/50 max-w-xl mx-auto leading-relaxed animate-mocha-fade-in-up stagger-4">
          One AI-native IDE with every tool a modern developer needs — from intelligent completions to full agentic workflows.
        </p>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />

      {/* Stats bar */}
      <StatsBar />

      {/* Big feature sections */}
      <div className="py-20 md:py-28 px-6 space-y-28 md:space-y-40">
        <div className="max-w-6xl mx-auto space-y-28 md:space-y-40">
          {bigFeatures.map((feature, i) => (
            <BigFeatureSection key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>

      {/* Small feature grid */}
      <SmallFeaturesGrid />

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  );
}
