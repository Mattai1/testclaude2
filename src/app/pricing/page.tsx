"use client";

import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Types ─────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────

const includedFeatures = [
  "No setup fees",
  "100+ payment methods",
  "Fraud protection with Radar",
  "Powerful dashboard",
  "24/7 support",
  "Global payments",
  "Developer-friendly APIs",
  "Automatic updates",
];

const addons = [
  {
    name: "Radar",
    description: "Fraud detection powered by machine learning",
    price: "0.05¢",
    unit: "per transaction",
  },
  {
    name: "Billing",
    description: "Subscription and recurring revenue management",
    price: "0.5% + 25¢",
    unit: "per invoice",
  },
  {
    name: "Tax",
    description: "Automatic sales tax calculation and filing",
    price: "0.5%",
    unit: "of tax calculated",
  },
  {
    name: "Terminal",
    description: "In-person payments with Stripe hardware",
    price: "$0.10 + 2.7% + 5¢",
    unit: "per in-person charge",
  },
  {
    name: "Identity",
    description: "Identity verification powered by Stripe",
    price: "$1.50",
    unit: "per verification",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What payment methods are supported?",
    answer:
      "Stripe supports 100+ payment methods including all major credit and debit cards (Visa, Mastercard, American Express, Discover), digital wallets (Apple Pay, Google Pay), bank debits (ACH, SEPA), buy-now-pay-later (Klarna, Afterpay), and many regional methods across 195+ countries.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. Stripe has no setup fees, no monthly fees, and no hidden fees. You only pay when you earn money. Our integrated pricing means everything you need to get started is included — there's nothing extra to configure or pay for upfront.",
  },
  {
    question: "How does billing work?",
    answer:
      "Stripe automatically deducts processing fees from your payouts. You receive a daily payout of your previous day's revenue, minus Stripe's per-transaction fee. You can view a full breakdown of all fees in your Stripe Dashboard under the Balance section.",
  },
  {
    question: "What currencies do you support?",
    answer:
      "Stripe supports 135+ currencies. You can charge customers in their local currency and receive payouts in your own currency. Stripe handles all foreign exchange conversions automatically, with transparent conversion rates displayed in your dashboard.",
  },
  {
    question: "Do you offer discounts?",
    answer:
      "Yes. Stripe offers custom pricing for businesses processing large volumes of payments. Contact our sales team if your business processes more than $1 million in annual payment volume to discuss volume discounts, interchange pricing, and multi-product discounts.",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e7ecf1]">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-[#0a2540] group-hover:text-[#425466] transition-colors duration-200">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-[#8c9eb1] flex-shrink-0 ml-4 transition-transform duration-300",
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
        <p className="text-sm text-[#425466] leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const heroRef = useInView();
  const cardsRef = useInView();
  const featuresRef = useInView();
  const addonsRef = useInView();
  const faqRef = useInView();
  const ctaRef = useInView();

  void faqOpen;
  void setFaqOpen;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef.ref}
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: "#f6f9fc" }}
      >
        <div className="absolute inset-0 mocha-grid-dots opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,#f6f9fc_100%)] pointer-events-none" />

        <div
          className={cn(
            "relative max-w-3xl mx-auto text-center opacity-0",
            heroRef.isInView && "animate-mocha-hero-title"
          )}
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 border border-[#e7ecf1] rounded-full px-3.5 py-1.5 mb-6 opacity-0 bg-white",
              heroRef.isInView && "animate-mocha-hero-badge stagger-1"
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#635bff]" />
            <span className="text-xs text-[#8c9eb1] tracking-wide uppercase font-medium">
              Pricing
            </span>
          </div>

          <h1 className="text-[42px] md:text-[56px] font-semibold tracking-tight leading-[1.08] text-[#0a2540] mb-4">
            Simple, transparent pricing{" "}
            <span className="text-[#635bff]">for every business</span>
          </h1>
          <p className="text-lg text-[#425466] leading-relaxed max-w-xl mx-auto">
            Only pay for what you use. No setup fees, monthly fees, or hidden
            fees.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────────── */}
      <section className="px-6 pb-24 bg-white">
        <div
          ref={cardsRef.ref}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 -mt-8"
        >
          {/* Integrated */}
          <div
            className={cn(
              "relative flex flex-col rounded-2xl p-8 border border-[#e7ecf1] bg-white opacity-0",
              "shadow-[0_6px_12px_-2px_rgba(50,50,93,0.08),0_3px_7px_-3px_rgba(0,0,0,0.12)]",
              cardsRef.isInView && "animate-mocha-fade-in-up stagger-1"
            )}
          >
            <div className="mb-5">
              <h2 className="text-base font-semibold text-[#0a2540] mb-1">
                Integrated
              </h2>
              <p className="text-sm text-[#8c9eb1] leading-snug">
                Everything you need to get started.
              </p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-[#0a2540]">
                  2.9%
                </span>
                <span className="text-[#8c9eb1] text-sm">+ 30¢</span>
              </div>
              <p className="text-xs text-[#8c9eb1] mt-1">
                per successful card charge
              </p>
            </div>
            <a
              href="https://dashboard.stripe.com/register"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all duration-[150ms] mb-8 border border-[#e7ecf1] text-[#0a2540] hover:bg-[#f6f9fc]"
              style={{ transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)" }}
            >
              Start now
            </a>
            <ul className="space-y-3 mt-auto">
              {[
                "No setup or monthly fees",
                "Unified dashboard",
                "Developer APIs & SDKs",
                "Basic fraud protection",
                "24/7 chat support",
                "Global card acquiring",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#f6f9fc] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-[#635bff]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#425466]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customized — featured */}
          <div
            className={cn(
              "relative flex flex-col rounded-2xl p-8 border-2 border-[#635bff] bg-white opacity-0",
              "shadow-[0_6px_12px_-2px_rgba(99,91,255,0.18),0_3px_7px_-3px_rgba(0,0,0,0.12)]",
              cardsRef.isInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span
                className="inline-flex items-center gap-1.5 text-white text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
                style={{ background: "#635bff" }}
              >
                <span className="w-1 h-1 rounded-full bg-white/60" />
                Most popular
              </span>
            </div>

            <div className="mb-5">
              <h2 className="text-base font-semibold text-[#0a2540] mb-1">
                Customized
              </h2>
              <p className="text-sm text-[#8c9eb1] leading-snug">
                Discounts for high-volume businesses.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold tracking-tight text-[#0a2540]">
                Custom
              </span>
              <p className="text-xs text-[#8c9eb1] mt-1">
                Pricing based on your volume
              </p>
            </div>
            <a
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-[150ms] mb-8"
              style={{
                background: "#635bff",
                transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)",
              }}
            >
              Contact sales
            </a>
            <ul className="space-y-3 mt-auto">
              {[
                "Everything in Integrated",
                "Volume discounts",
                "Interchange-plus pricing",
                "Dedicated account manager",
                "Custom contract terms",
                "Priority support SLA",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#635bff]/10 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-[#635bff]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#425466]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Managed Payments */}
          <div
            className={cn(
              "relative flex flex-col rounded-2xl p-8 border border-[#e7ecf1] bg-white opacity-0",
              "shadow-[0_6px_12px_-2px_rgba(50,50,93,0.08),0_3px_7px_-3px_rgba(0,0,0,0.12)]",
              cardsRef.isInView && "animate-mocha-fade-in-up stagger-3"
            )}
          >
            <div className="mb-5">
              <h2 className="text-base font-semibold text-[#0a2540] mb-1">
                Managed Payments
              </h2>
              <p className="text-sm text-[#8c9eb1] leading-snug">
                Merchant of record solution.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold tracking-tight text-[#0a2540]">
                Custom
              </span>
              <p className="text-xs text-[#8c9eb1] mt-1">
                Full compliance offloaded to Stripe
              </p>
            </div>
            <a
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all duration-[150ms] mb-8 border border-[#e7ecf1] text-[#0a2540] hover:bg-[#f6f9fc]"
              style={{ transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)" }}
            >
              Talk to sales
            </a>
            <ul className="space-y-3 mt-auto">
              {[
                "Stripe as merchant of record",
                "Global tax compliance",
                "Chargeback handling",
                "Regulatory liability shifted",
                "Embedded checkout UI",
                "Dedicated onboarding",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#f6f9fc] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-[#635bff]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#425466]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── What's Included Feature Grid ─────────────────────────────── */}
      <section className="px-6 pb-24" style={{ background: "#f6f9fc" }}>
        <div
          ref={featuresRef.ref}
          className={cn(
            "max-w-5xl mx-auto opacity-0",
            featuresRef.isInView && "animate-mocha-fade-in-up"
          )}
        >
          <div className="text-center pt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0a2540] mb-3">
              Everything included, out of the box
            </h2>
            <p className="text-sm text-[#8c9eb1]">
              No add-on bundles. No feature gating. Just straightforward pricing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {includedFeatures.map((feature, i) => (
              <div
                key={feature}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl border border-[#e7ecf1] bg-white opacity-0",
                  featuresRef.isInView && `animate-mocha-fade-in-up stagger-${Math.min(i + 1, 8)}`
                )}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#635bff15" }}
                >
                  <Check className="w-3.5 h-3.5" style={{ color: "#635bff" }} strokeWidth={2.5} />
                </div>
                <span className="text-sm font-medium text-[#0a2540]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Add-ons ───────────────────────────────────────────── */}
      <section className="px-6 pb-28 bg-white">
        <div
          ref={addonsRef.ref}
          className={cn(
            "max-w-5xl mx-auto opacity-0",
            addonsRef.isInView && "animate-mocha-fade-in-up"
          )}
        >
          <div className="text-center pt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0a2540] mb-3">
              Stripe product add-ons
            </h2>
            <p className="text-sm text-[#8c9eb1]">
              Extend Stripe with powerful products. Only pay for what you activate.
            </p>
          </div>

          <div className="divide-y divide-[#e7ecf1] border border-[#e7ecf1] rounded-2xl overflow-hidden">
            {addons.map((addon, i) => (
              <div
                key={addon.name}
                className={cn(
                  "flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 bg-white hover:bg-[#f6f9fc] transition-colors duration-200 opacity-0",
                  addonsRef.isInView && `animate-mocha-fade-in-up stagger-${Math.min(i + 1, 8)}`
                )}
              >
                <div className="mb-3 sm:mb-0">
                  <h3 className="text-sm font-semibold text-[#0a2540] mb-0.5">
                    {addon.name}
                  </h3>
                  <p className="text-sm text-[#8c9eb1]">{addon.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-base font-bold text-[#0a2540]">
                    {addon.price}
                  </span>
                  <p className="text-xs text-[#8c9eb1]">{addon.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="px-6 pb-28" style={{ background: "#f6f9fc" }}>
        <div
          ref={faqRef.ref}
          className={cn(
            "max-w-2xl mx-auto opacity-0 pt-20",
            faqRef.isInView && "animate-mocha-fade-in-up"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0a2540] mb-3">
              Frequently asked questions
            </h2>
            <p className="text-sm text-[#8c9eb1]">
              Have more questions?{" "}
              <a
                href="/contact"
                className="text-[#635bff] hover:underline underline-offset-2 transition-colors"
              >
                Contact our team
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
      <section className="px-6 pb-28 bg-white">
        <div
          ref={ctaRef.ref}
          className={cn(
            "max-w-3xl mx-auto rounded-2xl border border-[#e7ecf1] px-8 py-16 text-center opacity-0",
            ctaRef.isInView && "animate-mocha-fade-in-up"
          )}
          style={{ background: "#0a2540" }}
        >
          <h2 className="relative text-[28px] md:text-[36px] font-semibold tracking-tight text-white leading-tight mb-4">
            Start building with Stripe today
          </h2>
          <p className="relative text-base text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
            Join millions of businesses of all sizes — from startups to Fortune
            500 companies — that use Stripe to accept payments online and in
            person.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://dashboard.stripe.com/register"
              className="inline-flex items-center gap-2 text-[#0a2540] text-sm font-semibold px-7 py-3 rounded-full transition-all duration-[150ms] active:scale-[0.97] bg-white hover:bg-white/90"
              style={{ transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)" }}
            >
              Start for free
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-sm font-medium px-7 py-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-[150ms]"
              style={{ transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)" }}
            >
              Contact sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
