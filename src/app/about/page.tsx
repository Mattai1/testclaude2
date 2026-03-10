"use client";

import { Zap, Shield, Users, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Zap,
    title: "Speed first",
    description:
      "We obsess over performance so developers never wait. Every millisecond matters when you're in flow.",
  },
  {
    icon: Shield,
    title: "Privacy by default",
    description:
      "Your code stays yours, always. Local-first architecture means your work never leaves your machine without your consent.",
  },
  {
    icon: Users,
    title: "Built for builders",
    description:
      "Every decision is made with developers in mind. We eat our own dog food and ship what we'd want to use ourselves.",
  },
];

const team = [
  { initials: "AC", name: "Alex Chen", title: "Co-founder & CEO" },
  { initials: "SP", name: "Sarah Park", title: "Co-founder & CTO" },
  { initials: "MR", name: "Marco Rossi", title: "Head of Engineering" },
  { initials: "PS", name: "Priya Sharma", title: "Head of Design" },
  { initials: "JW", name: "James Wilson", title: "Head of Product" },
  { initials: "EY", name: "Elif Yıldız", title: "Head of Growth" },
];

const backers = [
  "Sequoia Capital",
  "Andreessen Horowitz",
  "Founders Fund",
  "Y Combinator",
];

// ─── Sub-sections ─────────────────────────────────────────────────────────────

function MissionSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p
          className={cn(
            "text-sm font-medium text-indigo-500 tracking-wide uppercase mb-6 opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-1"
          )}
        >
          Our mission
        </p>
        <h2
          className={cn(
            "text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-2"
          )}
        >
          Our mission is to collapse the gap between human intent and working
          software.
        </h2>
        <p
          className={cn(
            "mt-8 text-lg text-black/50 leading-relaxed max-w-2xl opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-3"
          )}
        >
          For too long, the distance between an idea and a shipped product has
          been measured in context switches, boilerplate, and cognitive overhead.
          We believe that gap should be zero — and we&apos;re building the tools
          to prove it.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 bg-black/[0.015]">
      <div className="max-w-4xl mx-auto">
        <p
          className={cn(
            "text-sm font-medium text-indigo-500 tracking-wide uppercase mb-6 opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-1"
          )}
        >
          Our story
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <p
            className={cn(
              "text-base text-black/70 leading-relaxed opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            Mocha was founded in 2024 by Alex and Sarah, two engineers who grew
            tired of working around their tools instead of with them. After a
            decade building developer infrastructure at companies like Google and
            Stripe, they saw the same pattern over and over: brilliant engineers
            held back by slow, static IDEs that hadn&apos;t meaningfully evolved
            in years.
          </p>
          <p
            className={cn(
              "text-base text-black/70 leading-relaxed opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-3"
            )}
          >
            They built Mocha to bring agentic AI into the core of the
            development flow — not as a bolt-on plugin, but as the foundation.
            From day one, the team has obsessed over the details: startup time,
            keystroke latency, context awareness, and the kind of seamless
            collaboration that makes a two-person startup feel like a ten-person
            team. Today, thousands of developers ship faster because of it.
          </p>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-sm font-medium text-indigo-500 tracking-wide uppercase mb-3 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-1"
            )}
          >
            What we believe
          </p>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-medium tracking-tight opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            Our values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={cn(
                  "rounded-2xl border border-black/[0.06] bg-white p-8 opacity-0",
                  "hover:border-black/10 hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-1",
                  "transition-all duration-300",
                  isInView && `animate-mocha-fade-in-up stagger-${i + 3}`
                )}
              >
                <div className="w-11 h-11 rounded-xl bg-black/[0.04] flex items-center justify-center mb-5 group-hover:bg-indigo-500/10 transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-black/60"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-base font-medium text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-black/50 leading-relaxed">
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
    <section ref={ref} className="py-20 md:py-28 px-6 bg-black/[0.015]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={cn(
              "text-sm font-medium text-indigo-500 tracking-wide uppercase mb-3 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-1"
            )}
          >
            The team
          </p>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-medium tracking-tight opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            Meet the people behind Mocha
          </h2>
          <p
            className={cn(
              "mt-4 text-base text-black/50 max-w-md mx-auto opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-3"
            )}
          >
            A small team with outsized ambition, distributed across San
            Francisco and remote.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={cn(
                "flex flex-col items-center text-center p-6 rounded-2xl border border-black/[0.06] bg-white opacity-0",
                "hover:border-black/10 hover:shadow-md hover:shadow-black/[0.03] hover:-translate-y-0.5",
                "transition-all duration-300",
                isInView && `animate-mocha-fade-in-up stagger-${Math.min(i + 4, 8)}`
              )}
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-2xl bg-black/[0.05] flex items-center justify-center mb-4">
                <span className="text-sm font-medium text-black/60 tracking-tight">
                  {member.initials}
                </span>
              </div>
              <p className="text-sm font-medium text-black">{member.name}</p>
              <p className="text-xs text-black/40 mt-1 leading-snug">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackersSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className={cn(
            "text-sm text-black/40 mb-8 tracking-wide uppercase font-medium opacity-0",
            isInView && "animate-mocha-fade-in stagger-1"
          )}
        >
          Backed by world-class investors
        </p>
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-0",
            isInView && "animate-mocha-fade-in stagger-2"
          )}
        >
          {backers.map((backer) => (
            <span
              key={backer}
              className="text-base md:text-lg font-medium text-black/25 hover:text-black/50 transition-colors duration-300 cursor-default"
            >
              {backer}
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
    <section ref={ref} className="py-20 md:py-28 px-6 bg-black/[0.015]">
      <div
        className={cn(
          "max-w-2xl mx-auto text-center opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
          Join us on this journey
        </h2>
        <p className="text-base text-black/50 leading-relaxed mb-10">
          Whether you&apos;re a developer ready to experience a better IDE, or
          an investor who believes in the future of agentic software — we&apos;d
          love to connect.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2.5 bg-black text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-black/85 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-black/10"
          >
            See pricing
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-black/15 text-black font-medium text-sm px-7 py-3.5 rounded-full hover:bg-black/5 hover:border-black/25 active:scale-[0.97] transition-all duration-200 group"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Hero (inline, no useInView needed — animations run on mount) ─────────────

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pb-28 px-6 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 mocha-grid-dots pointer-events-none" />

      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.07),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-sm font-medium text-indigo-500 tracking-wide uppercase mb-5 animate-mocha-fade-in stagger-1">
          About Mocha
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-[68px] font-medium tracking-tight leading-[1.05] opacity-0 animate-mocha-fade-in-up stagger-2">
          We&apos;re building the IDE for the next decade.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-black/50 max-w-2xl leading-relaxed opacity-0 animate-mocha-fade-in-up stagger-3">
          A small, focused team building the tools that make developers
          extraordinary. Founded in 2024. Growing fast.
        </p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <BackersSection />
      <AboutCTA />
      <Footer />
    </div>
  );
}
