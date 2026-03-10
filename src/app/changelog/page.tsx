"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ────────────────────────────────────────────────────────────────────

type BadgeType = "API" | "Product" | "Beta" | "Breaking";

interface Release {
  id: string;
  date: string;
  title: string;
  summary: string;
  badges: BadgeType[];
  changes: string[];
}

const releases: Release[] = [
  {
    id: "mar-2026",
    date: "March 2026",
    title: "Stablecoin issuing beta",
    summary:
      "Stripe now lets businesses issue stablecoin-backed cards and move money globally 24/7 — no bank cutoff times, no FX markups. The first major step toward programmable money rails built on Stripe infrastructure.",
    badges: ["Beta", "Product"],
    changes: [
      "Issue stablecoin-backed Visa cards to employees and contractors globally",
      "24/7 global transfers with real-time settlement, no bank holidays",
      "USDC and USDB support with automatic conversion on spend",
      "Dashboard support for stablecoin balances, transfers, and card issuance",
      "New /v1/issuing/cards?currency=usdc API endpoints in public beta",
    ],
  },
  {
    id: "feb-2026",
    date: "February 2026",
    title: "Agentic commerce APIs",
    summary:
      "Stripe launched APIs that let AI agents autonomously initiate and complete payment flows on behalf of users. Build products where AI handles subscription management, invoice approval, and procurement — with full human oversight controls.",
    badges: ["API", "Beta"],
    changes: [
      "New /v1/agents resource for creating delegated payment sessions",
      "Spend controls and approval workflows for agent-initiated transactions",
      "Webhook events for agent actions: agent.action.created, agent.action.approved",
      "Support for Claude, OpenAI, and Gemini agent contexts out of the box",
      "Sandbox environment for testing agent payment flows without real money",
    ],
  },
  {
    id: "jan-2026",
    date: "January 2026",
    title: "Adaptive Pricing",
    summary:
      "Adaptive Pricing automatically converts your prices to the buyer&apos;s local currency using real-time exchange rates. No code changes required — Stripe handles the conversion, display, and settlement seamlessly.",
    badges: ["Product", "API"],
    changes: [
      "Automatic local currency pricing in 30+ currencies at checkout",
      "Smart rounding rules to present locally natural price points (e.g. $9.99 → £7.99)",
      "Price Lock feature freezes rates for up to 30 minutes per session",
      "Revenue reporting in both settlement and presentment currencies",
      "Works with Payment Links, Checkout, and custom integrations via the API",
    ],
  },
  {
    id: "dec-2025",
    date: "December 2025",
    title: "Sessions 2025 announcements",
    summary:
      "At Stripe Sessions 2025, we announced a sweeping set of product updates across the entire platform — from a rebuilt Connect experience to Billing 3.0 and new Terminal hardware for in-person commerce.",
    badges: ["Product"],
    changes: [
      "Connect revamp: new embedded onboarding components, faster KYC approval times",
      "Billing 3.0: flexible pricing models, improved dunning engine, native A/B testing",
      "Stripe Reader S700 and Reader M2 available in 40+ new countries",
      "Financial Connections now supports open banking in EU and UK via PSD2",
      "Stripe Tax now handles VAT OSS filing for EU-based businesses automatically",
    ],
  },
  {
    id: "nov-2025",
    date: "November 2025",
    title: "Radar 3.0",
    summary:
      "Radar 3.0 introduces a next-generation ML fraud detection model retrained on hundreds of billions of data points, a rebuilt custom rules engine, and a new dispute management workflow — all designed to minimize fraud without blocking good customers.",
    badges: ["Product", "API"],
    changes: [
      "New ML model delivers 30% improvement in fraud detection with 15% fewer false positives",
      "Custom rules engine v2: conditional logic, regex support, and rule A/B testing",
      "Dispute Intelligence: AI-generated rebuttal letters with evidence recommendations",
      "Risk score now available as a webhook event field and in the Dashboard UI",
      "Early Fraud Warning integration with Visa and Mastercard for real-time alerts",
    ],
  },
];

const badgeStyles: Record<BadgeType, React.CSSProperties> = {
  API: { background: "#635bff15", color: "#635bff", borderColor: "#635bff30" },
  Product: { background: "#e8fce9", color: "#1a7f37", borderColor: "#b4e5b8" },
  Beta: { background: "#fff4e0", color: "#b45309", borderColor: "#fcd27b" },
  Breaking: { background: "#fef2f2", color: "#b91c1c", borderColor: "#fca5a5" },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function Badge({ type }: { type: BadgeType }) {
  return (
    <span
      className="inline-flex items-center text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full border"
      style={badgeStyles[type]}
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
            "w-3 h-3 rounded-full border-2 border-white ring-2 flex-shrink-0 mt-1 transition-all duration-500"
          )}
          style={
            isInView
              ? index === 0
                ? {
                    background: "#635bff",
                    boxShadow: "0 0 0 4px rgba(99,91,255,0.15)",
                  }
                : { background: "#0a2540", boxShadow: "0 0 0 4px rgba(10,37,64,0.08)" }
              : { background: "#e7ecf1", boxShadow: "0 0 0 4px rgba(231,236,241,0.5)" }
          }
        />
        {/* Vertical line */}
        {!isLast && (
          <div
            className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-px"
            style={{ background: "#e7ecf1" }}
          />
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
            className="text-sm font-semibold font-mono px-3 py-1 rounded-full border"
            style={
              index === 0
                ? {
                    background: "#635bff",
                    color: "white",
                    borderColor: "#635bff",
                  }
                : {
                    background: "#f6f9fc",
                    color: "#425466",
                    borderColor: "#e7ecf1",
                  }
            }
          >
            {release.date}
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {release.badges.map((b) => (
              <Badge key={b} type={b} />
            ))}
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-semibold tracking-tight mb-3"
          style={{ color: "#0a2540" }}
        >
          {release.title}
        </h2>

        {/* Summary */}
        <p
          className="text-base leading-relaxed mb-6 max-w-2xl"
          style={{ color: "#425466" }}
        >
          {release.summary}
        </p>

        {/* Change list */}
        <ul className="space-y-2.5">
          {release.changes.map((change) => (
            <li
              key={change}
              className="flex items-start gap-3 text-sm"
              style={{ color: "#425466" }}
            >
              <Check
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                strokeWidth={2.5}
                style={{ color: "#635bff" }}
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
      <div className="flex items-center gap-2.5 text-sm" style={{ color: "#425466" }}>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: "#e8fce9" }}
        >
          <Check className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "#1a7f37" }} />
        </div>
        You&apos;re subscribed — we&apos;ll notify you on new releases.
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
        className="flex-1 h-9 px-3.5 text-sm bg-white border rounded-lg outline-none placeholder:text-[#8c9eb1] transition-all"
        style={{ borderColor: "#e7ecf1", color: "#0a2540" }}
        onFocus={(e) => (e.target.style.borderColor = "#635bff")}
        onBlur={(e) => (e.target.style.borderColor = "#e7ecf1")}
      />
      <button
        type="submit"
        className="h-9 px-4 text-white text-sm font-semibold rounded-lg flex items-center gap-1.5 flex-shrink-0 transition-all duration-[150ms]"
        style={{
          background: "#635bff",
          transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)",
        }}
      >
        Subscribe
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}

function Hero() {
  return (
    <section
      className="relative pt-32 pb-16 px-6 overflow-hidden"
      style={{ background: "#f6f9fc" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 mocha-grid-dots opacity-40 pointer-events-none" />
      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.07),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left: heading */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 animate-mocha-hero-badge"
              style={{
                borderColor: "#635bff30",
                background: "#635bff10",
                color: "#635bff",
              }}
            >
              What&apos;s new
            </div>
            <h1
              className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] animate-mocha-hero-title stagger-2"
              style={{ color: "#0a2540" }}
            >
              Stripe Changelog
            </h1>
            <p
              className="mt-4 text-lg max-w-lg animate-mocha-fade-in-up stagger-4"
              style={{ color: "#425466" }}
            >
              What&apos;s new in Stripe&apos;s APIs and products.
            </p>
          </div>

          {/* Right: subscribe */}
          <div className="animate-mocha-fade-in-up stagger-5 flex-shrink-0">
            <p
              className="text-xs font-medium mb-2.5 uppercase tracking-wide"
              style={{ color: "#8c9eb1" }}
            >
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
    <div className="min-h-screen bg-white" style={{ color: "#0a2540" }}>
      <Navbar />
      <Hero />

      {/* Timeline */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Thin top divider */}
          <div className="h-px mb-16" style={{ background: "#e7ecf1" }} />

          {releases.map((release, i) => (
            <ReleaseEntry
              key={release.id}
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
