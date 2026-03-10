"use client";

import {
  CreditCard,
  RefreshCw,
  Share2,
  LayoutGrid,
  Globe,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const solutions = [
  {
    icon: CreditCard,
    iconBg: "bg-[#635bff]/10",
    iconColor: "#635bff",
    title: "Accept and optimize payments worldwide",
    description:
      "Increase authorization rates and reduce fraud with ML-powered payment optimization across 195 countries.",
    label: "Payments",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-[#0e9eff]/10",
    iconColor: "#0e9eff",
    title: "Design your own billing model",
    description:
      "From flat-rate subscriptions to complex usage-based pricing, build any revenue model with a few lines of code.",
    label: "Billing",
  },
  {
    icon: Share2,
    iconBg: "bg-[#4f46e5]/10",
    iconColor: "#4f46e5",
    title: "Monetize commerce with AI agents",
    description:
      "Enable AI agents to autonomously accept payments, manage subscriptions, and handle financial operations.",
    label: "Connect",
  },
  {
    icon: LayoutGrid,
    iconBg: "bg-[#0694a2]/10",
    iconColor: "#0694a2",
    title: "Create a card program",
    description:
      "Issue physical and virtual payment cards to customers, employees, or contractors instantly.",
    label: "Issuing",
  },
  {
    icon: Globe,
    iconBg: "bg-[#059669]/10",
    iconColor: "#059669",
    title: "Move money globally with stablecoins",
    description:
      "Use stablecoin infrastructure to send and receive money globally, 24/7, with instant settlement.",
    label: "Treasury",
  },
  {
    icon: Building2,
    iconBg: "bg-[#d97706]/10",
    iconColor: "#d97706",
    title: "Integrate payments into your platform",
    description:
      "Build a marketplace or SaaS platform with embedded financial services for your customers.",
    label: "Platform",
  },
];

const staggerClasses = [
  "stagger-1",
  "stagger-2",
  "stagger-3",
  "stagger-4",
  "stagger-5",
  "stagger-6",
];

export function SolutionsGrid() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 opacity-0",
            isInView && "animate-mocha-fade-in"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4 tracking-tight">
            Flexible solutions for any business model
          </h2>
          <p className="text-[#425466] text-lg leading-relaxed">
            From global enterprises to local startups, Stripe powers businesses
            of all shapes and sizes.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.label}
                className={cn(
                  "bg-white border border-[#e7ecf1] rounded-lg p-6 group opacity-0",
                  "hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,.25),_0_8px_16px_-8px_rgba(0,0,0,.3)]",
                  "hover:-translate-y-1 transition-all duration-150",
                  isInView && `animate-mocha-fade-in-up ${staggerClasses[index]}`
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-4",
                    solution.iconBg
                  )}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: solution.iconColor }}
                    strokeWidth={1.75}
                  />
                </div>

                {/* Label */}
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8c9eb1] mb-1">
                  {solution.label}
                </p>

                {/* Title */}
                <h3 className="text-[#0a2540] font-semibold text-lg mb-2 leading-snug">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-[#425466] text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="text-[#635bff] text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  Learn more →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
