"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ────────────────────────────────────────────────────────────────────

type BadgeType = "Feature" | "Performance" | "Fix" | "Breaking";

interface Release {
  version: string;
  date: string;
  title: string;
  summary: string;
  badges: BadgeType[];
  changes: string[];
}

const releases: Release[] = [
  {
    version: "v1.4.0",
    date: "March 2026",
    title: "The Speed Release",
    summary:
      "A foundational performance overhaul. Cold start is 40% faster, completions now stream token-by-token, and the new agent marketplace makes it trivial to extend Mocha's capabilities.",
    badges: ["Performance", "Feature"],
    changes: [
      "40% faster cold start — Mocha opens in under 200ms on Apple Silicon",
      "Streaming completions — see AI output token by token, no more waiting",
      "Agent marketplace — browse, install, and manage AI agents from the community",
      "Improved Git diff view with syntax highlighting and inline AI explanations",
      "Background indexing improvements reduce initial project scan time by 60%",
    ],
  },
  {
    version: "v1.3.0",
    date: "February 2026",
    title: "Agents Everywhere",
    summary:
      "Agentic tasks now span multiple files and pull requests. Mocha can operate in the background while you focus on other work, and a new task history panel keeps a full audit trail.",
    badges: ["Feature"],
    changes: [
      "Multi-file agent tasks — delegate changes that span your entire project",
      "Autonomous PR descriptions — agent writes detailed, accurate PR summaries",
      "Background indexing runs silently without interrupting active editing",
      "Task history panel with full replay of agent decisions and diffs",
      "Improved context window utilisation for large monorepos",
    ],
  },
  {
    version: "v1.2.0",
    date: "January 2026",
    title: "Plugin SDK",
    summary:
      "We opened up Mocha to the community. The public plugin API landed with 200 plugins on day one, plus theme support and deep keybinding customization.",
    badges: ["Feature"],
    changes: [
      "Public plugin API — build and publish your own Mocha extensions",
      "200+ community plugins available at launch via the plugin registry",
      "Theme support — custom color schemes with full dark-mode control",
      "Keybinding customization — map any action to any key combination",
    ],
  },
  {
    version: "v1.1.0",
    date: "December 2025",
    title: "Context Boost",
    summary:
      "Doubled the context window to 200k tokens and added project-wide refactoring. Mocha can now reason about your whole codebase in a single pass.",
    badges: ["Feature", "Performance"],
    changes: [
      "200k token context window — full project awareness in one pass",
      "Project-wide refactoring — rename, restructure, and migrate safely",
      "Inline docs generation — add JSDoc/docstring annotations automatically",
      "Performance: editor scroll latency reduced by 35% on large files",
    ],
  },
  {
    version: "v1.0.0",
    date: "November 2025",
    title: "Launch",
    summary:
      "The first public release of Mocha. Core AI completions, a beautiful macOS-native UI, integrated terminal, and file tree — everything you need to start shipping faster today.",
    badges: ["Feature"],
    changes: [
      "Core AI completions with context-aware suggestions across all major languages",
      "macOS-native design with full Apple Silicon optimization",
      "Integrated file tree with AI-aware navigation",
      "Built-in terminal with command history and AI error explanations",
      "Git integration with visual diff and AI-generated commit messages",
    ],
  },
];

const badgeStyles: Record<BadgeType, string> = {
  Feature: "bg-indigo-50 text-indigo-600 border-indigo-100",
  Performance: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Fix: "bg-amber-50 text-amber-700 border-amber-100",
  Breaking: "bg-red-50 text-red-700 border-red-100",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function Badge({ type }: { type: BadgeType }) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full border",
        badgeStyles[type]
      )}
    >
      {type}
    </span>
  );
}

function ReleaseEntry({
  release,
  index,
  isLast,
}: {
  release: Release;
  index: number;
  isLast: boolean;
}) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="relative flex gap-8 md:gap-12">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0 w-[1px] relative">
        {/* Dot */}
        <div
          className={cn(
            "w-3 h-3 rounded-full border-2 border-white ring-2 flex-shrink-0 mt-1 transition-all duration-500",
            isInView
              ? index === 0
                ? "bg-indigo-500 ring-indigo-200"
                : "bg-black ring-black/10"
              : "bg-black/10 ring-black/5"
          )}
        />
        {/* Vertical line */}
        {!isLast && (
          <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/[0.06]" />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "pb-16 flex-1 min-w-0 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className={cn(
              "text-sm font-semibold font-mono px-3 py-1 rounded-full border",
              index === 0
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-black/[0.04] text-black/70 border-black/[0.08]"
            )}
          >
            {release.version}
          </span>
          <span className="text-sm text-black/35">{release.date}</span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {release.badges.map((b) => (
              <Badge key={b} type={b} />
            ))}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">
          {release.title}
          {release.version === "v1.0.0" && (
            <span className="ml-2 text-2xl">🚀</span>
          )}
        </h2>

        {/* Summary */}
        <p className="text-base text-black/50 leading-relaxed mb-6 max-w-2xl">
          {release.summary}
        </p>

        {/* Change list */}
        <ul className="space-y-2.5">
          {release.changes.map((change) => (
            <li key={change} className="flex items-start gap-3 text-sm text-black/60">
              <Check
                className="w-4 h-4 text-black/25 flex-shrink-0 mt-0.5"
                strokeWidth={2.5}
              />
              <span className="leading-snug">{change}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2.5 text-sm text-black/60">
        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={2.5} />
        </div>
        You're subscribed — we'll let you know when something ships.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-sm">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="flex-1 h-9 px-3.5 text-sm bg-white border border-black/10 rounded-lg outline-none focus:border-black/25 focus:ring-2 focus:ring-black/5 placeholder:text-black/30 transition-all"
      />
      <button
        type="submit"
        className="h-9 px-4 bg-black text-white text-sm font-medium rounded-lg hover:bg-black/85 active:scale-[0.97] transition-all duration-200 flex items-center gap-1.5 flex-shrink-0"
      >
        Subscribe
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 mocha-grid-dots opacity-50 pointer-events-none" />
      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left: heading */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-6 animate-mocha-hero-badge">
              What's new
            </div>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] animate-mocha-hero-title stagger-2">
              Changelog
            </h1>
            <p className="mt-4 text-lg text-black/45 max-w-lg animate-mocha-fade-in-up stagger-4">
              What's new in Mocha — updated regularly.
            </p>
          </div>

          {/* Right: subscribe */}
          <div className="animate-mocha-fade-in-up stagger-5 flex-shrink-0">
            <p className="text-xs font-medium text-black/40 mb-2.5 uppercase tracking-wide">
              Get release notes
            </p>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Thin top divider */}
          <div className="h-px bg-black/[0.06] mb-16" />

          {releases.map((release, i) => (
            <ReleaseEntry
              key={release.version}
              release={release}
              index={i}
              isLast={i === releases.length - 1}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
