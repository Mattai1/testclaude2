"use client";

import { useState } from "react";
import { Check, X, ChevronDown, Download } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Types ─────────────────────────────────────────────────────────────────

interface PricingTier {
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  description: string;
  cta: string;
  featured: boolean;
  features: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────

const tiers: PricingTier[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For solo developers exploring Mocha.",
    cta: "Get started free",
    featured: false,
    features: [
      "1 project",
      "50 AI completions/day",
      "Community support",
      "Basic IDE features",
      "Syntax highlighting",
      "Git integration",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "For professional developers who need unlimited power.",
    cta: "Get started",
    featured: true,
    features: [
      "Unlimited projects",
      "Unlimited AI completions",
      "Priority support",
      "All IDE features",
      "Advanced AI agents",
      "Custom keybindings",
      "Private repositories",
      "Early access features",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "For teams and organizations that need full control.",
    cta: "Contact sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "SSO & SAML",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "On-premise option",
      "Audit logs",
    ],
  },
];

const comparisonFeatures = [
  { label: "Projects", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "AI completions / day", free: "50", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "AI agents", free: false, pro: true, enterprise: true },
  { label: "Custom keybindings", free: false, pro: true, enterprise: true },
  { label: "Priority support", free: false, pro: true, enterprise: true },
  { label: "Team collaboration", free: false, pro: false, enterprise: true },
  { label: "SSO & SAML", free: false, pro: false, enterprise: true },
  { label: "SLA guarantee", free: false, pro: false, enterprise: true },
  { label: "Custom integrations", free: false, pro: false, enterprise: true },
  { label: "On-premise option", free: false, pro: false, enterprise: true },
];

const faqs: FAQItem[] = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, absolutely. You can cancel your subscription at any time directly from your account settings. There are no cancellation fees or lock-in periods. Your access continues until the end of the current billing cycle.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer:
      "Yes — every new account starts with a 14-day Pro trial, no credit card required. You get full access to all Pro features so you can decide if Mocha is right for you before committing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex), as well as PayPal. Enterprise customers can also arrange invoiced billing with NET-30 terms.",
  },
  {
    question: "How does the AI usage work?",
    answer:
      "Free plan users receive 50 AI completions per day. Pro and Enterprise plans have unlimited completions with no hard caps. AI agents (multi-step autonomous tasks) are available on Pro and above and run on our infrastructure without consuming your local resources.",
  },
  {
    question: "Do you offer student discounts?",
    answer:
      "Yes! Students and educators get 60% off the Pro plan. Apply through our education portal with a valid .edu email address or institution verification. The discount renews annually as long as you remain enrolled.",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function FeatureCell({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm text-black/70">{value}</span>;
  }
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black/5">
        <Check className="w-3 h-3 text-black" strokeWidth={2.5} />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-5 h-5">
      <X className="w-3.5 h-3.5 text-black/20" strokeWidth={2} />
    </span>
  );
}

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/8">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-black group-hover:text-black/70 transition-colors duration-200">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-black/40 flex-shrink-0 ml-4 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-64 pb-5 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-sm text-black/50 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const heroRef = useInView();
  const cardsRef = useInView();
  const tableRef = useInView();
  const faqRef = useInView();
  const ctaRef = useInView();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef.ref}
        className="relative pt-32 pb-20 px-6 overflow-hidden"
      >
        {/* dot-grid backdrop */}
        <div className="absolute inset-0 mocha-grid-dots opacity-60 pointer-events-none" />
        {/* radial fade to white */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,white_100%)] pointer-events-none" />

        <div
          className={cn(
            "relative max-w-3xl mx-auto text-center opacity-0",
            heroRef.isInView && "animate-mocha-hero-title"
          )}
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 border border-black/8 rounded-full px-3.5 py-1.5 mb-6 opacity-0",
              heroRef.isInView && "animate-mocha-hero-badge stagger-1"
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs text-black/50 tracking-wide uppercase font-medium">
              Pricing
            </span>
          </div>

          <h1 className="text-[42px] md:text-[56px] font-semibold tracking-tight leading-[1.08] text-black mb-4">
            Simple,{" "}
            <span className="mocha-text-shimmer">transparent</span>{" "}
            pricing
          </h1>
          <p className="text-lg text-black/45 leading-relaxed max-w-xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises — just
            the tools you need to build faster.
          </p>

          {/* Billing toggle */}
          <div
            className={cn(
              "inline-flex items-center gap-3 mt-10 p-1 bg-black/[0.04] rounded-full opacity-0",
              heroRef.isInView && "animate-mocha-fade-in stagger-3"
            )}
          >
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                !annual
                  ? "bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.10)]"
                  : "text-black/45 hover:text-black"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                annual
                  ? "bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.10)]"
                  : "text-black/45 hover:text-black"
              )}
            >
              Annual
              <span
                className={cn(
                  "text-[10px] font-semibold px-1.5 py-0.5 rounded-full transition-all duration-200",
                  annual
                    ? "bg-indigo-100 text-indigo-600"
                    : "bg-black/8 text-black/40"
                )}
              >
                −20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div
          ref={cardsRef.ref}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl p-8 opacity-0",
                tier.featured
                  ? "border-2 border-indigo-200 bg-white shadow-[0_8px_32px_rgba(99,102,241,0.08)]"
                  : "border border-black/8 bg-white/60",
                cardsRef.isInView && "animate-mocha-fade-in-up",
                i === 0 && "stagger-1",
                i === 1 && "stagger-2",
                i === 2 && "stagger-3"
              )}
            >
              {/* Most popular badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-black text-white text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-indigo-400" />
                    Most popular
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <h2 className="text-base font-semibold text-black mb-1">
                  {tier.name}
                </h2>
                <p className="text-sm text-black/40 leading-snug">
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                {tier.monthlyPrice === null ? (
                  <div>
                    <span className="text-4xl font-bold tracking-tight text-black">
                      Custom
                    </span>
                    <p className="text-sm text-black/40 mt-1">
                      Talk to our sales team
                    </p>
                  </div>
                ) : (
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-bold tracking-tight text-black">
                      $
                      {annual && tier.annualPrice !== null
                        ? tier.annualPrice
                        : tier.monthlyPrice}
                    </span>
                    <span className="text-sm text-black/35 pb-1.5">/ mo</span>
                  </div>
                )}
                {annual && tier.annualPrice !== null && tier.monthlyPrice !== 0 && (
                  <p className="text-xs text-indigo-500 mt-1 font-medium">
                    Billed annually · save $
                    {(tier.monthlyPrice! - tier.annualPrice) * 12}/yr
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#download"
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 mb-8",
                  tier.featured
                    ? "bg-black text-white hover:bg-black/85 animate-mocha-pulse-glow active:scale-[0.97]"
                    : tier.monthlyPrice === null
                    ? "border border-black/15 text-black hover:bg-black/[0.04]"
                    : "border border-black/10 text-black hover:bg-black/[0.04]"
                )}
              >
                {tier.cta}
              </a>

              {/* Feature list */}
              <ul className="space-y-3 mt-auto">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-black/5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-black/60">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature Comparison Table ─────────────────────────────────── */}
      <section className="px-6 pb-28 bg-white">
        <div
          ref={tableRef.ref}
          className={cn(
            "max-w-4xl mx-auto opacity-0",
            tableRef.isInView && "animate-mocha-fade-in-up"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-3">
              Compare plans
            </h2>
            <p className="text-sm text-black/40">
              A full breakdown of what&apos;s included in each tier.
            </p>
          </div>

          <div className="rounded-2xl border border-black/8 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 bg-black/[0.02] border-b border-black/6">
              <div className="px-6 py-4" />
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={cn(
                    "px-6 py-4 text-center",
                    tier.featured && "bg-indigo-50/50"
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      tier.featured ? "text-indigo-600" : "text-black/70"
                    )}
                  >
                    {tier.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {comparisonFeatures.map((feature, idx) => (
              <div
                key={feature.label}
                className={cn(
                  "grid grid-cols-4 border-b border-black/5 last:border-0",
                  idx % 2 === 0 ? "bg-white" : "bg-black/[0.015]"
                )}
              >
                <div className="px-6 py-4">
                  <span className="text-sm text-black/60">{feature.label}</span>
                </div>
                <div className="px-6 py-4 flex items-center justify-center">
                  <FeatureCell value={feature.free} />
                </div>
                <div className="px-6 py-4 flex items-center justify-center bg-indigo-50/30">
                  <FeatureCell value={feature.pro} />
                </div>
                <div className="px-6 py-4 flex items-center justify-center">
                  <FeatureCell value={feature.enterprise} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="px-6 pb-28">
        <div
          ref={faqRef.ref}
          className={cn(
            "max-w-2xl mx-auto opacity-0",
            faqRef.isInView && "animate-mocha-fade-in-up"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-3">
              Frequently asked questions
            </h2>
            <p className="text-sm text-black/40">
              Can&apos;t find your answer?{" "}
              <a
                href="#"
                className="text-black/60 underline underline-offset-2 hover:text-black transition-colors"
              >
                Chat with us
              </a>
              .
            </p>
          </div>

          <div>
            {faqs.map((item) => (
              <FAQAccordion key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────────────────── */}
      <section className="px-6 pb-28">
        <div
          ref={ctaRef.ref}
          className={cn(
            "max-w-3xl mx-auto rounded-2xl border border-black/8 bg-black/[0.02] px-8 py-16 text-center opacity-0",
            ctaRef.isInView && "animate-mocha-fade-in-up"
          )}
        >
          {/* Subtle dot grid inside CTA */}
          <div className="absolute inset-0 mocha-grid-dots opacity-30 rounded-2xl pointer-events-none" />

          <h2 className="relative text-[28px] md:text-[36px] font-semibold tracking-tight text-black leading-tight mb-4">
            Ready to experience{" "}
            <span className="mocha-text-shimmer">liftoff</span>?
          </h2>
          <p className="relative text-base text-black/45 mb-8 max-w-md mx-auto leading-relaxed">
            Join thousands of developers building faster with Mocha&apos;s
            agentic IDE. Start for free — no credit card required.
          </p>
          <a
            href="#download"
            className="relative inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-black/85 active:scale-[0.97] transition-all duration-200 animate-mocha-pulse-glow"
          >
            Download Mocha
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
