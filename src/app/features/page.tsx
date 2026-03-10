"use client";

import {
  CreditCard,
  RefreshCw,
  Shield,
  Globe,
  BarChart2,
  Zap,
  Lock,
  CheckCircle2,
  ArrowRight,
  Server,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ────────────────────────────────────────────────────────────────────

const bigFeatures = [
  {
    id: "payments",
    badge: "Payments",
    headline: "The world's most powerful payments platform.",
    description:
      "Stripe's payments product combines best-in-class authorization rates with the broadest support for payment methods, adaptive UIs, and smart fraud prevention — all in one integration.",
    subFeatures: [
      "Auth optimization with ML",
      "100+ payment methods",
      "Adaptive pricing for local currencies",
      "Smart retries for failed charges",
    ],
    visual: (
      <div className="rounded-xl border border-[#e7ecf1] font-mono text-[13px] leading-relaxed p-5 space-y-3 select-none bg-white shadow-[0_6px_12px_-2px_rgba(50,50,93,0.1)]">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-3 rounded-full bg-red-400/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <span className="w-3 h-3 rounded-full bg-green-400/60" />
          <span className="ml-2 text-xs" style={{ color: "#8c9eb1" }}>
            payment_intent.js
          </span>
        </div>
        <p>
          <span style={{ color: "#635bff" }}>const</span>{" "}
          <span style={{ color: "#0a2540" }}>intent</span>{" "}
          <span style={{ color: "#8c9eb1" }}>=</span>{" "}
          <span style={{ color: "#425466" }}>await</span>{" "}
          <span style={{ color: "#0a2540" }}>stripe</span>
          <span style={{ color: "#8c9eb1" }}>.</span>
          <span style={{ color: "#635bff" }}>paymentIntents</span>
          <span style={{ color: "#8c9eb1" }}>.</span>
          <span style={{ color: "#0a2540" }}>create</span>
          <span style={{ color: "#8c9eb1" }}>{"({"}</span>
        </p>
        <p className="pl-4">
          <span style={{ color: "#8c9eb1" }}>amount:</span>{" "}
          <span style={{ color: "#635bff" }}>2000</span>
          <span style={{ color: "#8c9eb1" }}>,</span>
        </p>
        <p className="pl-4">
          <span style={{ color: "#8c9eb1" }}>currency:</span>{" "}
          <span style={{ color: "#0a2540" }}>&apos;usd&apos;</span>
          <span style={{ color: "#8c9eb1" }}>,</span>
        </p>
        <p className="pl-4">
          <span style={{ color: "#8c9eb1" }}>
            automatic_payment_methods:
          </span>{" "}
          <span style={{ color: "#8c9eb1" }}>{"{ enabled:"}</span>{" "}
          <span style={{ color: "#635bff" }}>true</span>{" "}
          <span style={{ color: "#8c9eb1" }}>{"}"}</span>
        </p>
        <p>
          <span style={{ color: "#8c9eb1" }}>{"})"}</span>
        </p>
        <div
          className="mt-3 px-3 py-2 rounded-lg text-xs"
          style={{
            background: "#635bff10",
            border: "1px solid #635bff30",
            color: "#635bff",
          }}
        >
          ✓ Payment created · 98.7% auth rate
        </div>
      </div>
    ),
  },
  {
    id: "billing",
    badge: "Billing",
    headline: "Any revenue model, zero complexity.",
    description:
      "Stripe Billing handles any pricing model — flat rate, usage-based, tiered, per-seat — with smart dunning, proration, revenue recognition, and automatic tax collection built in.",
    subFeatures: [
      "Usage-based billing",
      "Flat-rate and tiered pricing",
      "Smart dunning & retries",
      "Revenue recognition (ASC 606)",
    ],
    visual: (
      <div
        className="rounded-xl border border-[#e7ecf1] p-5 space-y-4 select-none bg-white shadow-[0_6px_12px_-2px_rgba(50,50,93,0.1)]"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold" style={{ color: "#0a2540" }}>
            Subscription Overview
          </span>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-medium"
            style={{ background: "#e8fce9", color: "#1a7f37" }}
          >
            Active
          </span>
        </div>
        {[
          { label: "MRR", value: "$12,480" },
          { label: "Active subscribers", value: "1,247" },
          { label: "Churn rate", value: "1.8%" },
          { label: "Next renewal", value: "Apr 1, 2026" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-2 border-b"
            style={{ borderColor: "#e7ecf1" }}
          >
            <span className="text-xs" style={{ color: "#8c9eb1" }}>
              {row.label}
            </span>
            <span className="text-sm font-medium" style={{ color: "#0a2540" }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "radar",
    badge: "Radar",
    headline: "Stop fraud before it costs you.",
    description:
      "Radar uses machine learning trained on hundreds of billions of data points from across the Stripe network to block fraudulent payments — without blocking legitimate customers.",
    subFeatures: [
      "ML fraud detection at scale",
      "Custom rules engine",
      "3D Secure orchestration",
      "Chargeback protection",
    ],
    visual: (
      <div className="rounded-xl border border-[#e7ecf1] p-5 space-y-4 select-none bg-white shadow-[0_6px_12px_-2px_rgba(50,50,93,0.1)]">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "#e8fce9" }}
          >
            <Shield className="w-5 h-5" style={{ color: "#1a7f37" }} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: "#0a2540" }}>
              Radar protection active
            </p>
            <p className="text-xs" style={{ color: "#8c9eb1" }}>
              Updated March 2026
            </p>
          </div>
        </div>
        {[
          { label: "Fraud rate", value: "0.04%", ok: true },
          { label: "Blocked today", value: "23 attempts", ok: true },
          { label: "False positives", value: "< 0.1%", ok: true },
          { label: "3D Secure", value: "Enabled", ok: true },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-1.5 border-b last:border-0"
            style={{ borderColor: "#e7ecf1" }}
          >
            <span className="text-xs" style={{ color: "#8c9eb1" }}>
              {row.label}
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: "#e8fce9", color: "#1a7f37" }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "connect",
    badge: "Connect",
    headline: "Build the next Shopify or DoorDash.",
    description:
      "Stripe Connect powers multi-party payment platforms. Onboard merchants globally, route payments between parties, manage compliance, and pay out to bank accounts in 135+ currencies.",
    subFeatures: [
      "Multi-party payments",
      "Custom onboarding flows",
      "Global payouts in 135+ currencies",
      "Embedded financial UIs",
    ],
    visual: (
      <div className="rounded-xl border border-[#e7ecf1] p-5 space-y-3 select-none bg-white shadow-[0_6px_12px_-2px_rgba(50,50,93,0.1)]">
        <p className="text-xs font-medium uppercase tracking-wide mb-3" style={{ color: "#8c9eb1" }}>
          Payment flow
        </p>
        {[
          { from: "Customer", amount: "$100.00", arrow: true },
          { from: "Platform fee", amount: "−$5.00", arrow: false, muted: true },
          { from: "Connected account", amount: "$95.00", arrow: true, highlight: true },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                style={{
                  background: row.highlight ? "#635bff" : "#f6f9fc",
                  color: row.highlight ? "white" : "#8c9eb1",
                }}
              >
                {i + 1}
              </div>
              <span
                className="text-sm"
                style={{ color: row.muted ? "#8c9eb1" : "#0a2540" }}
              >
                {row.from}
              </span>
            </div>
            <span
              className="text-sm font-semibold"
              style={{ color: row.muted ? "#8c9eb1" : "#0a2540" }}
            >
              {row.amount}
            </span>
          </div>
        ))}
        <div
          className="mt-3 px-3 py-2 rounded-lg text-xs"
          style={{
            background: "#635bff10",
            border: "1px solid #635bff30",
            color: "#635bff",
          }}
        >
          Payout scheduled · T+2 business days
        </div>
      </div>
    ),
  },
];

const smallFeatures = [
  {
    icon: Zap,
    title: "99.999% uptime",
    description:
      "Enterprise-grade reliability with redundant infrastructure across multiple regions.",
  },
  {
    icon: Lock,
    title: "PCI compliant",
    description:
      "Stripe is a certified PCI Level 1 service provider — the highest level of certification.",
  },
  {
    icon: Globe,
    title: "135+ currencies",
    description:
      "Accept and pay out in 135+ currencies to customers and partners around the world.",
  },
  {
    icon: CreditCard,
    title: "100+ payment methods",
    description:
      "Cards, bank debits, wallets, BNPL, and local payment methods in a single integration.",
  },
  {
    icon: Shield,
    title: "ML fraud detection",
    description:
      "Radar's models are trained on hundreds of billions of data points across the Stripe network.",
  },
  {
    icon: BarChart2,
    title: "Real-time reporting",
    description:
      "Full visibility into revenue, refunds, disputes, and payouts from a unified dashboard.",
  },
];

const stats = [
  { value: "500M+", label: "API requests daily" },
  { value: "10K+", label: "Requests per second" },
  { value: "99.999%", label: "Uptime" },
  { value: "135+", label: "Currencies" },
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
        "group rounded-2xl border bg-white p-6 opacity-0",
        "hover:-translate-y-1",
        "transition-all duration-300",
        isInView && `animate-mocha-fade-in-up stagger-${index + 1}`
      )}
      style={{
        borderColor: "#e7ecf1",
        boxShadow: "0 2px 8px rgba(50,50,93,0.04)",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
        style={{ background: "#635bff10" }}
      >
        <Icon
          className="w-5 h-5 transition-colors duration-300"
          strokeWidth={1.5}
          style={{ color: "#635bff" }}
        />
      </div>
      <h3 className="text-base font-semibold mb-1.5" style={{ color: "#0a2540" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#425466" }}>
        {description}
      </p>
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
        className={cn("opacity-0", isInView && "animate-mocha-fade-in-up stagger-1")}
      >
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#635bff" }}
        >
          {feature.badge}
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4"
          style={{ color: "#0a2540" }}
        >
          {feature.headline}
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#425466" }}>
          {feature.description}
        </p>
        <ul className="space-y-2.5">
          {feature.subFeatures.map((sf) => (
            <li
              key={sf}
              className="flex items-center gap-3 text-sm"
              style={{ color: "#425466" }}
            >
              <CheckCircle2
                className="w-4 h-4 flex-shrink-0"
                strokeWidth={2}
                style={{ color: "#635bff" }}
              />
              {sf}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual side */}
      <div
        className={cn("opacity-0", isInView && "animate-mocha-fade-in-up stagger-2")}
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
      className="border-y py-12 px-6"
      style={{ borderColor: "#e7ecf1", background: "#f6f9fc" }}
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
            <p
              className="text-4xl md:text-5xl font-semibold tracking-tight mb-1"
              style={{ color: "#0a2540" }}
            >
              {stat.value}
            </p>
            <p className="text-sm" style={{ color: "#8c9eb1" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmallFeaturesGrid() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-6"
      style={{ background: "#f6f9fc" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className={cn(
              "text-xs font-semibold tracking-widest uppercase mb-3 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-1"
            )}
            style={{ color: "#635bff" }}
          >
            Infrastructure
          </p>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-semibold tracking-tight opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
            style={{ color: "#0a2540" }}
          >
            Built for scale and reliability
          </h2>
          <p
            className={cn(
              "mt-4 text-base max-w-md mx-auto opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-3"
            )}
            style={{ color: "#425466" }}
          >
            The foundations that power the world&apos;s most innovative
            businesses.
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
    <section ref={ref} className="py-20 md:py-28 px-6 bg-white">
      <div
        className={cn(
          "max-w-3xl mx-auto text-center opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
      >
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
          style={{ color: "#0a2540" }}
        >
          Start building for free
        </h2>
        <p
          className="text-base mb-8 max-w-md mx-auto"
          style={{ color: "#425466" }}
        >
          Join millions of businesses using Stripe to power their payments
          infrastructure. No setup fees, no monthly fees.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://dashboard.stripe.com/register"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all duration-[150ms] active:scale-[0.97]"
            style={{
              background: "#635bff",
              transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)",
            }}
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/docs"
            className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3 rounded-full border transition-all duration-[150ms]"
            style={{
              color: "#0a2540",
              borderColor: "#e7ecf1",
              transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)",
            }}
          >
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden" style={{ background: "#0a2540" }}>
      <div className="absolute inset-0 mocha-grid-dots opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.3),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 animate-mocha-hero-badge"
          style={{
            borderColor: "rgba(99,91,255,0.4)",
            background: "rgba(99,91,255,0.15)",
            color: "#a29dff",
          }}
        >
          <Server className="w-3.5 h-3.5" />
          Product
        </div>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] animate-mocha-hero-title stagger-2 text-white"
        >
          A complete suite of
          <br />
          <span style={{ color: "#635bff" }}>financial APIs</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl max-w-xl mx-auto leading-relaxed animate-mocha-fade-in-up stagger-4"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Payments, billing, fraud prevention, identity, tax, and more — unified
          in a single platform built for developers.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 animate-mocha-fade-in-up stagger-5">
          <a
            href="https://dashboard.stripe.com/register"
            className="inline-flex items-center gap-2 text-[#0a2540] text-sm font-semibold px-6 py-3 rounded-full bg-white hover:bg-white/90 transition-all duration-[150ms]"
            style={{ transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)" }}
          >
            Start for free
          </a>
          <a
            href="/docs"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border transition-all duration-[150ms]"
            style={{
              color: "rgba(255,255,255,0.8)",
              borderColor: "rgba(255,255,255,0.2)",
              transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)",
            }}
          >
            View docs
            <TrendingUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: "#0a2540" }}>
      <Navbar />
      <Hero />

      {/* Stats bar */}
      <StatsBar />

      {/* Big feature sections */}
      <div className="py-20 md:py-28 px-6 space-y-28 md:space-y-40 bg-white">
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
