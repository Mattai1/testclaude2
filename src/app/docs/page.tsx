"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CreditCard,
  RefreshCw,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  MessageCircle,
  Github,
  LifeBuoy,
  ChevronRight,
  FileText,
  Users,
  Terminal,
  Code2,
  Layers,
  Package,
  BookOpen,
  Lock,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickStartCards = [
  {
    icon: CreditCard,
    title: "Accept a payment",
    description: "Integrate Stripe Checkout or the Payment Element to collect card payments.",
    href: "https://stripe.com/docs/payments/accept-a-payment",
  },
  {
    icon: RefreshCw,
    title: "Set up subscriptions",
    description: "Create recurring billing with Stripe Billing and the Subscriptions API.",
    href: "https://stripe.com/docs/billing/subscriptions/overview",
  },
  {
    icon: Users,
    title: "Build a marketplace",
    description: "Use Stripe Connect to route payments between multiple parties.",
    href: "https://stripe.com/docs/connect",
  },
  {
    icon: CreditCard,
    title: "Issue cards",
    description: "Create virtual and physical cards for your users with Stripe Issuing.",
    href: "https://stripe.com/docs/issuing",
  },
  {
    icon: Shield,
    title: "Verify identities",
    description: "Verify the identity of your users with Stripe Identity.",
    href: "https://stripe.com/docs/identity",
  },
  {
    icon: Globe,
    title: "Automate tax",
    description: "Calculate and collect sales tax, VAT, and GST automatically.",
    href: "https://stripe.com/docs/tax",
  },
];

const categories = [
  {
    title: "Getting started",
    icon: Zap,
    items: ["Quickstart", "API keys", "Testing", "Going live"],
  },
  {
    title: "Payments",
    icon: CreditCard,
    items: ["Payment Element", "Checkout", "Payment Links", "Payment Intents"],
  },
  {
    title: "Billing",
    icon: RefreshCw,
    items: ["Subscriptions", "Invoices", "Pricing tables", "Customer portal"],
  },
  {
    title: "Connect",
    icon: Users,
    items: ["Onboarding", "Routing payments", "Payouts", "Custom accounts"],
  },
  {
    title: "Radar",
    icon: Shield,
    items: ["Fraud rules", "3D Secure", "Risk scores", "Dispute management"],
  },
  {
    title: "Terminal",
    icon: Terminal,
    items: ["Readers", "SDK setup", "In-person payments", "Hardware"],
  },
  {
    title: "Issuing",
    icon: Layers,
    items: ["Cards", "Cardholders", "Authorizations", "Spend controls"],
  },
  {
    title: "Identity",
    icon: Lock,
    items: ["Verification sessions", "Document checks", "Selfie checks", "Webhooks"],
  },
  {
    title: "Tax",
    icon: FileText,
    items: ["Tax calculation", "Registration", "Filing", "Reporting"],
  },
  {
    title: "Financial Connections",
    icon: Code2,
    items: ["Linking accounts", "Transactions", "Balance", "Ownership"],
  },
];

const popularArticles = [
  {
    title: "Accept a card payment",
    category: "Payments",
    href: "https://stripe.com/docs/payments/accept-a-payment",
  },
  {
    title: "Create a subscription",
    category: "Billing",
    href: "https://stripe.com/docs/billing/subscriptions/overview",
  },
  {
    title: "Send API requests with Postman",
    category: "Tools",
    href: "https://stripe.com/docs/development/postman",
  },
  {
    title: "Test your Stripe integration",
    category: "Testing",
    href: "https://stripe.com/docs/testing",
  },
  {
    title: "Handle webhooks",
    category: "Webhooks",
    href: "https://stripe.com/docs/webhooks",
  },
];

const sdks = [
  { name: "Node.js", badge: "npm", href: "https://github.com/stripe/stripe-node", color: "#339933" },
  { name: "Python", badge: "pip", href: "https://github.com/stripe/stripe-python", color: "#3776ab" },
  { name: "Ruby", badge: "gem", href: "https://github.com/stripe/stripe-ruby", color: "#cc342d" },
  { name: "PHP", badge: "composer", href: "https://github.com/stripe/stripe-php", color: "#777bb4" },
  { name: "Java", badge: "maven", href: "https://github.com/stripe/stripe-java", color: "#b07219" },
  { name: "Go", badge: "go get", href: "https://github.com/stripe/stripe-go", color: "#00acd7" },
  { name: ".NET", badge: "nuget", href: "https://github.com/stripe/stripe-dotnet", color: "#512bd4" },
];

const communityLinks = [
  {
    icon: MessageCircle,
    title: "Developer community",
    description: "Ask questions and get help from Stripe engineers and the developer community.",
    href: "https://discord.com/invite/stripe",
    label: "Join Discord",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Browse Stripe's open-source SDKs, sample apps, and community projects.",
    href: "https://github.com/stripe",
    label: "View on GitHub",
  },
  {
    icon: LifeBuoy,
    title: "Stack Overflow",
    description: "Search answers tagged stripe-payments for common integration questions.",
    href: "https://stackoverflow.com/questions/tagged/stripe-payments",
    label: "Browse questions",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function HeroSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center"
    >
      {/* eyebrow */}
      <div
        className={cn(
          "inline-flex items-center gap-2 border rounded-full px-3.5 py-1.5 mb-8 opacity-0",
          isInView && "animate-mocha-fade-in stagger-1"
        )}
        style={{ borderColor: "#e7ecf1", background: "#f6f9fc" }}
      >
        <BookOpen className="w-3.5 h-3.5" style={{ color: "#8c9eb1" }} />
        <span className="text-xs font-medium tracking-wide" style={{ color: "#8c9eb1" }}>
          Documentation
        </span>
      </div>

      {/* heading */}
      <h1
        className={cn(
          "text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-5 opacity-0",
          isInView && "animate-mocha-hero-title stagger-2"
        )}
        style={{ color: "#0a2540" }}
      >
        Stripe Documentation
      </h1>

      <p
        className={cn(
          "text-lg md:text-xl max-w-xl mx-auto mb-10 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-3"
        )}
        style={{ color: "#425466" }}
      >
        Guides and references to help you build with Stripe.
      </p>

      {/* search bar */}
      <div
        className={cn(
          "relative max-w-lg mx-auto opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-4"
        )}
      >
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: "#8c9eb1" }}
        />
        <input
          type="text"
          placeholder="Search documentation…"
          className="w-full h-12 pl-11 pr-16 rounded-2xl border text-sm outline-none transition-all duration-200 bg-white"
          style={{
            borderColor: "#e7ecf1",
            color: "#0a2540",
            boxShadow: "0 2px 8px rgba(50,50,93,0.06)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#635bff")}
          onBlur={(e) => (e.target.style.borderColor = "#e7ecf1")}
          readOnly
        />
        <kbd
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono rounded px-1.5 py-0.5 border"
          style={{ color: "#8c9eb1", background: "#f6f9fc", borderColor: "#e7ecf1" }}
        >
          ⌘K
        </kbd>
      </div>
    </section>
  );
}

function QuickStartSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto">
      <h2
        className={cn(
          "text-2xl font-semibold tracking-tight mb-2 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
        style={{ color: "#0a2540" }}
      >
        Quick starts
      </h2>
      <p
        className={cn(
          "text-sm mb-8 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-2"
        )}
        style={{ color: "#8c9eb1" }}
      >
        Jump right in with the most popular integration guides.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickStartCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative flex flex-col gap-4 p-6 rounded-2xl border bg-white transition-all duration-300 opacity-0",
                "hover:-translate-y-0.5",
                isInView && `animate-mocha-fade-in-up stagger-${i + 3}`
              )}
              style={{
                borderColor: "#e7ecf1",
                boxShadow: "0 2px 8px rgba(50,50,93,0.04)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: "#635bff10" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#635bff" }} />
              </div>
              <div className="flex-1">
                <h3
                  className="text-[15px] font-semibold tracking-tight mb-1.5"
                  style={{ color: "#0a2540" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#425466" }}>
                  {card.description}
                </p>
              </div>
              <div
                className="flex items-center gap-1 text-xs font-medium transition-colors duration-200"
                style={{ color: "#635bff" }}
              >
                Read guide
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function BrowseSection() {
  const { ref, isInView } = useInView();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
        {/* Sidebar */}
        <aside>
          <h2
            className={cn(
              "text-2xl font-semibold tracking-tight mb-2 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-1"
            )}
            style={{ color: "#0a2540" }}
          >
            Browse by product
          </h2>
          <p
            className={cn(
              "text-sm mb-6 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
            style={{ color: "#8c9eb1" }}
          >
            Find docs for every Stripe product.
          </p>

          <nav className="space-y-1">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(i)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 text-left opacity-0",
                    isInView && `animate-mocha-fade-in-up stagger-${Math.min(i + 3, 8)}`
                  )}
                  style={
                    activeCategory === i
                      ? { background: "#635bff", color: "white", fontWeight: 600 }
                      : { color: "#425466" }
                  }
                  onMouseEnter={(e) => {
                    if (activeCategory !== i) {
                      (e.currentTarget as HTMLElement).style.background = "#f6f9fc";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== i) {
                      (e.currentTarget as HTMLElement).style.background = "";
                    }
                  }}
                >
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: activeCategory === i ? "rgba(255,255,255,0.8)" : "#8c9eb1" }}
                  />
                  {cat.title}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content panel */}
        <div
          className={cn(
            "rounded-2xl border bg-white p-8 opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-4"
          )}
          style={{
            borderColor: "#e7ecf1",
            boxShadow: "0 2px 8px rgba(50,50,93,0.04)",
          }}
        >
          {(() => {
            const cat = categories[activeCategory];
            const Icon = cat.icon;
            return (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "#635bff10" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#635bff" }} />
                  </div>
                  <h3
                    className="text-lg font-semibold tracking-tight"
                    style={{ color: "#0a2540" }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a
                        href={`https://stripe.com/docs/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-150"
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f6f9fc")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "")}
                      >
                        <span
                          className="text-sm transition-colors duration-150"
                          style={{ color: "#425466" }}
                        >
                          {item}
                        </span>
                        <ChevronRight
                          className="w-4 h-4 transition-colors duration-150"
                          style={{ color: "#8c9eb1" }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
}

function PopularArticlesSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto">
      <h2
        className={cn(
          "text-2xl font-semibold tracking-tight mb-2 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
        style={{ color: "#0a2540" }}
      >
        Popular articles
      </h2>
      <p
        className={cn(
          "text-sm mb-8 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-2"
        )}
        style={{ color: "#8c9eb1" }}
      >
        Most visited documentation pages this week.
      </p>

      <div
        className="divide-y rounded-2xl border overflow-hidden"
        style={{ borderColor: "#e7ecf1" }}
      >
        {popularArticles.map((article, i) => (
          <a
            key={article.title}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group flex items-center justify-between px-6 py-4 bg-white transition-colors duration-150 opacity-0",
              isInView && `animate-mocha-fade-in-up stagger-${i + 3}`
            )}
            style={{ borderColor: "#e7ecf1" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f6f9fc")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "")}
          >
            <div className="flex items-center gap-4 min-w-0">
              <span
                className="text-xs font-mono w-5 flex-shrink-0"
                style={{ color: "#8c9eb1" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p
                  className="text-sm font-medium truncate transition-colors duration-150"
                  style={{ color: "#0a2540" }}
                >
                  {article.title}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
              <span
                className="hidden sm:inline-flex text-[11px] font-medium px-2.5 py-0.5 rounded-full border"
                style={{
                  color: "#8c9eb1",
                  background: "#f6f9fc",
                  borderColor: "#e7ecf1",
                }}
              >
                {article.category}
              </span>
              <ArrowRight
                className="w-4 h-4 transition-all duration-200 group-hover:translate-x-0.5"
                style={{ color: "#635bff" }}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function SDKsSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto">
      <h2
        className={cn(
          "text-2xl font-semibold tracking-tight mb-2 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
        style={{ color: "#0a2540" }}
      >
        Official SDKs
      </h2>
      <p
        className={cn(
          "text-sm mb-8 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-2"
        )}
        style={{ color: "#8c9eb1" }}
      >
        Stripe maintains official libraries for every major language.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {sdks.map((sdk, i) => (
          <a
            key={sdk.name}
            href={sdk.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group flex flex-col items-center gap-3 p-4 rounded-2xl border bg-white text-center transition-all duration-300 opacity-0",
              "hover:-translate-y-0.5",
              isInView && `animate-mocha-fade-in-up stagger-${Math.min(i + 3, 8)}`
            )}
            style={{
              borderColor: "#e7ecf1",
              boxShadow: "0 2px 8px rgba(50,50,93,0.04)",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: sdk.color }}
            >
              {sdk.name[0]}
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "#0a2540" }}>
                {sdk.name}
              </p>
              <p
                className="text-[10px] font-mono mt-0.5"
                style={{ color: "#8c9eb1" }}
              >
                {sdk.badge}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function CommunitySection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto pb-32">
      <div
        className={cn(
          "rounded-3xl border overflow-hidden opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
        style={{ borderColor: "#e7ecf1", background: "#f6f9fc" }}
      >
        <div
          className="px-8 pt-10 pb-8 border-b"
          style={{ borderColor: "#e7ecf1" }}
        >
          <h2
            className="text-2xl font-semibold tracking-tight mb-1.5"
            style={{ color: "#0a2540" }}
          >
            Community &amp; support
          </h2>
          <p className="text-sm" style={{ color: "#8c9eb1" }}>
            Get help, share projects, and connect with other Stripe developers.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: "#e7ecf1" }}
        >
          {communityLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex flex-col gap-4 p-8 transition-colors duration-200 opacity-0",
                  isInView && `animate-mocha-fade-in-up stagger-${i + 2}`
                )}
                style={{ borderColor: "#e7ecf1" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "")}
              >
                <div
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: "white",
                    borderColor: "#e7ecf1",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#635bff" }} />
                </div>
                <div>
                  <h3
                    className="text-[15px] font-semibold mb-1"
                    style={{ color: "#0a2540" }}
                  >
                    {link.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#425466" }}>
                    {link.description}
                  </p>
                </div>
                <div
                  className="flex items-center gap-1.5 text-sm font-medium mt-auto transition-colors duration-200"
                  style={{ color: "#635bff" }}
                >
                  {link.label}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: "#0a2540" }}>
      <Navbar />
      <HeroSection />

      {/* thin divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "#e7ecf1" }} />
      </div>

      <QuickStartSection />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "#e7ecf1" }} />
      </div>

      <BrowseSection />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "#e7ecf1" }} />
      </div>

      <PopularArticlesSection />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "#e7ecf1" }} />
      </div>

      <SDKsSection />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "#e7ecf1" }} />
      </div>

      <CommunitySection />
      <Footer />
    </div>
  );
}
