"use client";

import { ArrowRight, Globe, TrendingUp, Users, DollarSign } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: TrendingUp,
    title: "Start with what's hard",
    description:
      "We tackle the most difficult problems in financial infrastructure so that businesses everywhere don't have to. The harder the challenge, the more durable the solution.",
  },
  {
    icon: Globe,
    title: "Increase the GDP of the internet",
    description:
      "Every new business that gets online — regardless of where they are — adds to the global economy. We build the tools that make that possible for anyone.",
  },
  {
    icon: TrendingUp,
    title: "Move fast, stay thorough",
    description:
      "Speed and rigor aren't opposites. We ship quickly because we think carefully. Cutting corners on financial infrastructure is never an option.",
  },
  {
    icon: DollarSign,
    title: "Think in decades",
    description:
      "Payments infrastructure is foundational. We make decisions as if we'll be operating them for 50 years, because we expect to be.",
  },
];

const team = [
  { initials: "PC", name: "Patrick Collison", title: "CEO, Co-founder" },
  { initials: "JC", name: "John Collison", title: "President, Co-founder" },
  { initials: "WG", name: "Will Gaybrick", title: "CTO" },
  { initials: "CH", name: "Claire Hughes Johnson", title: "Chief Operating Officer" },
  { initials: "LG", name: "Lachy Groom", title: "Head of Issuing" },
  { initials: "MK", name: "Michelle Kayal", title: "Head of Communications" },
];

const stats = [
  { value: "2010", label: "Founded" },
  { value: "$1T+", label: "Processed" },
  { value: "5,000+", label: "Employees" },
  { value: "135+", label: "Currencies" },
];

// ─── Sub-sections ─────────────────────────────────────────────────────────────

function MissionSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p
          className={cn(
            "text-sm font-medium tracking-wide uppercase mb-6 opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-1"
          )}
          style={{ color: "#635bff" }}
        >
          Our mission
        </p>
        <h2
          className={cn(
            "text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-2"
          )}
          style={{ color: "#0a2540" }}
        >
          Increase the GDP of the internet.
        </h2>
        <p
          className={cn(
            "mt-8 text-lg leading-relaxed max-w-2xl opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-3"
          )}
          style={{ color: "#425466" }}
        >
          Stripe&apos;s mission is to increase the GDP of the internet by making
          it easy for businesses everywhere to participate in the global digital
          economy. More businesses online means more economic opportunity for
          people around the world.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28 px-6" style={{ background: "#f6f9fc" }}>
      <div className="max-w-4xl mx-auto">
        <p
          className={cn(
            "text-sm font-medium tracking-wide uppercase mb-6 opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-1"
          )}
          style={{ color: "#635bff" }}
        >
          Our story
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <p
            className={cn(
              "text-base leading-relaxed opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
            style={{ color: "#425466" }}
          >
            Stripe was founded in 2010 by brothers Patrick and John Collison,
            who were frustrated by how difficult it was to accept payments
            online. Their original pitch was simple: seven lines of code and you
            could take credit card payments. What followed changed the internet.
          </p>
          <p
            className={cn(
              "text-base leading-relaxed opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-3"
            )}
            style={{ color: "#425466" }}
          >
            Today, Stripe processes hundreds of billions of dollars per year for
            millions of businesses — from the world&apos;s largest enterprises to
            solo founders launching their first product. We&apos;ve expanded from
            payments into billing, fraud prevention, identity, tax, banking
            infrastructure, and more, all united by a single goal: make the
            global economy work for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 bg-white border-y border-[#e7ecf1]">
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
    </section>
  );
}

function ValuesSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-32 px-6" style={{ background: "#f6f9fc" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-sm font-medium tracking-wide uppercase mb-3 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-1"
            )}
            style={{ color: "#635bff" }}
          >
            What we believe
          </p>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-medium tracking-tight opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
            style={{ color: "#0a2540" }}
          >
            Our values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={cn(
                  "rounded-2xl border bg-white p-8 opacity-0",
                  "hover:-translate-y-1",
                  "transition-all duration-300",
                  isInView && `animate-mocha-fade-in-up stagger-${i + 3}`
                )}
                style={{
                  borderColor: "#e7ecf1",
                  boxShadow: "0 2px 8px rgba(50,50,93,0.04)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "#635bff15" }}
                >
                  <Icon
                    className="w-5 h-5"
                    strokeWidth={1.5}
                    style={{ color: "#635bff" }}
                  />
                </div>
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#0a2540" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#425466" }}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-sm font-medium tracking-wide uppercase mb-3 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-1"
            )}
            style={{ color: "#635bff" }}
          >
            The team
          </p>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-medium tracking-tight opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
            style={{ color: "#0a2540" }}
          >
            Leadership
          </h2>
          <p
            className={cn(
              "mt-4 text-base max-w-md mx-auto opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-3"
            )}
            style={{ color: "#8c9eb1" }}
          >
            The people driving Stripe&apos;s mission forward every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={cn(
                "flex flex-col items-center text-center p-6 rounded-2xl border bg-white opacity-0",
                "hover:-translate-y-0.5",
                "transition-all duration-300",
                isInView && `animate-mocha-fade-in-up stagger-${Math.min(i + 4, 8)}`
              )}
              style={{
                borderColor: "#e7ecf1",
                boxShadow: "0 2px 8px rgba(50,50,93,0.04)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "#635bff15" }}
              >
                <span
                  className="text-sm font-semibold tracking-tight"
                  style={{ color: "#635bff" }}
                >
                  {member.initials}
                </span>
              </div>
              <p
                className="text-sm font-semibold"
                style={{ color: "#0a2540" }}
              >
                {member.name}
              </p>
              <p
                className="text-xs mt-1 leading-snug"
                style={{ color: "#8c9eb1" }}
              >
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { ref, isInView } = useInView();

  const products = [
    "Payments", "Billing", "Connect", "Radar",
    "Terminal", "Issuing", "Identity", "Tax", "Atlas",
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-6" style={{ background: "#f6f9fc" }}>
      <div className="max-w-4xl mx-auto text-center">
        <p
          className={cn(
            "text-sm mb-8 tracking-wide uppercase font-medium opacity-0",
            isInView && "animate-mocha-fade-in stagger-1"
          )}
          style={{ color: "#8c9eb1" }}
        >
          Our products
        </p>
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-0",
            isInView && "animate-mocha-fade-in stagger-2"
          )}
        >
          {products.map((product) => (
            <span
              key={product}
              className="text-base md:text-lg font-medium cursor-default transition-colors duration-300 hover:opacity-80"
              style={{ color: "#0a2540" }}
            >
              {product}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 bg-white">
      <div
        className={cn(
          "max-w-2xl mx-auto text-center opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
      >
        <h2
          className="text-3xl md:text-4xl font-medium tracking-tight mb-4"
          style={{ color: "#0a2540" }}
        >
          Join Stripe&apos;s mission
        </h2>
        <p
          className="text-base leading-relaxed mb-10"
          style={{ color: "#425466" }}
        >
          We&apos;re looking for the most ambitious people to work on the hardest
          problems in global commerce. Thousands of employees across dozens of
          offices worldwide are building the future of the internet economy.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://stripe.com/jobs"
            className="inline-flex items-center gap-2.5 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-[150ms] active:scale-[0.97]"
            style={{
              background: "#635bff",
              transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)",
            }}
          >
            View open roles
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-[150ms] active:scale-[0.97] group border"
            style={{
              color: "#0a2540",
              borderColor: "#e7ecf1",
              transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)",
            }}
          >
            Contact us
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: "#635bff" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-20 md:pb-28 px-6 overflow-hidden"
      style={{ background: "#0a2540" }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 mocha-grid-dots opacity-10 pointer-events-none" />

      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.25),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p
          className="text-sm font-medium tracking-wide uppercase mb-5 animate-mocha-fade-in stagger-1"
          style={{ color: "#635bff" }}
        >
          About Stripe
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-[68px] font-medium tracking-tight leading-[1.05] opacity-0 animate-mocha-fade-in-up stagger-2 text-white"
        >
          We&apos;re building the infrastructure for the future of commerce.
        </h1>
        <p
          className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-mocha-fade-in-up stagger-3"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Founded in 2010, Stripe helps businesses of every size accept
          payments, grow revenue, and scale globally with a unified platform for
          financial infrastructure.
        </p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: "#0a2540" }}>
      <Navbar />
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <ProductsSection />
      <AboutCTA />
      <Footer />
    </div>
  );
}
