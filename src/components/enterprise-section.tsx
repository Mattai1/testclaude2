"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const customerStories = [
  {
    quote:
      "Stripe helped us modernize our payments infrastructure globally.",
    author: "CTO, Hertz",
    company: "Hertz",
    initials: "H",
    color: "#f5a623",
  },
  {
    quote:
      "Stripe processes millions of orders for us reliably, every day.",
    author: "Head of Engineering, Instacart",
    company: "Instacart",
    initials: "I",
    color: "#43b02a",
  },
];

const companyCards = [
  {
    name: "Hertz",
    industry: "Automotive",
    metric: "40% increase in auth rates",
    description:
      "Hertz partnered with Stripe to unify payments across 160 countries, reducing failed transactions and accelerating global expansion.",
    initials: "H",
    accentColor: "#f5a623",
  },
  {
    name: "Instacart",
    industry: "Grocery delivery",
    metric: "99.99% uptime during peak demand",
    description:
      "Instacart relies on Stripe to handle millions of same-day delivery transactions with zero tolerance for downtime.",
    initials: "I",
    accentColor: "#43b02a",
  },
];

function CompanyAvatar({
  initials,
  color,
  size = 40,
}: {
  initials: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-white"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.4,
      }}
    >
      {initials}
    </div>
  );
}

export function EnterpriseSection() {
  const { ref: leftRef, isInView: leftInView } = useInView();
  const { ref: rightRef, isInView: rightInView } = useInView();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div
            ref={leftRef}
            className={cn("opacity-0", leftInView && "animate-mocha-fade-in")}
          >
            {/* Eyebrow */}
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#635bff" }}
            >
              Enterprise
            </p>

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ color: "#0a2540" }}
            >
              Financial infrastructure for businesses of all sizes
            </h2>

            {/* Body */}
            <p
              className="text-base leading-relaxed mb-12 font-light"
              style={{ color: "#425466", maxWidth: "480px" }}
            >
              Whether you&apos;re a startup processing your first payments or an
              enterprise managing billions in transactions, Stripe scales with
              you.
            </p>

            {/* Customer stories */}
            <div className="space-y-8">
              {customerStories.map((story) => (
                <div key={story.company} className="flex items-start gap-4">
                  <CompanyAvatar
                    initials={story.initials}
                    color={story.color}
                    size={44}
                  />
                  <div>
                    <p
                      className="text-sm leading-relaxed mb-1 italic"
                      style={{ color: "#425466" }}
                    >
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#8898aa" }}
                    >
                      {story.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: cards */}
          <div
            ref={rightRef}
            className={cn(
              "opacity-0 flex flex-col gap-6",
              rightInView && "animate-mocha-fade-in"
            )}
            style={{ animationDelay: "120ms" }}
          >
            {companyCards.map((card) => (
              <EnterpriseCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnterpriseCard({
  card,
}: {
  card: {
    name: string;
    industry: string;
    metric: string;
    description: string;
    initials: string;
    accentColor: string;
  };
}) {
  return (
    <div
      className="rounded-lg p-6 border transition-all duration-300 cursor-pointer group"
      style={{
        backgroundColor: "#f6f9fc",
        borderColor: "#e7ecf1",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow =
          "0 12px 40px rgba(10, 37, 64, 0.10), 0 2px 8px rgba(10, 37, 64, 0.06)";
        el.style.borderColor = "#c4d3e0";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "#e7ecf1";
      }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <CompanyAvatar
            initials={card.initials}
            color={card.accentColor}
            size={36}
          />
          <span
            className="text-xl font-bold"
            style={{ color: "#0a2540" }}
          >
            {card.name}
          </span>
        </div>
        {/* Industry badge */}
        <span
          className="text-[11px] font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: "rgba(99, 91, 255, 0.08)",
            color: "#635bff",
          }}
        >
          {card.industry}
        </span>
      </div>

      {/* Metric highlight */}
      <div
        className="text-sm font-semibold mb-3 px-3 py-2 rounded-md inline-block"
        style={{
          backgroundColor: "rgba(99, 91, 255, 0.06)",
          color: "#0a2540",
        }}
      >
        {card.metric}
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5 font-light"
        style={{ color: "#425466" }}
      >
        {card.description}
      </p>

      {/* CTA */}
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
        style={{
          color: "#635bff",
          transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "#4f46e5")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "#635bff")
        }
      >
        Read their story
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
      </a>
    </div>
  );
}
