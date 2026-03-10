"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Download,
  Zap,
  Keyboard,
  Settings,
  Puzzle,
  BookOpen,
  ArrowRight,
  MessageCircle,
  Github,
  LifeBuoy,
  ChevronRight,
  FileText,
  GitBranch,
  Terminal,
  Code2,
  Layers,
  Globe,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickStartCards = [
  {
    icon: Download,
    title: "Installation",
    description: "Download and set up Mocha on macOS in minutes.",
    href: "/docs/installation",
    accent: "bg-black/[0.03]",
  },
  {
    icon: Zap,
    title: "Your First Agent",
    description: "Create and run your first AI agent task end-to-end.",
    href: "/docs/first-agent",
    accent: "bg-black/[0.03]",
  },
  {
    icon: Keyboard,
    title: "Key Bindings",
    description: "Master Mocha's keyboard shortcuts for maximum speed.",
    href: "/docs/keybindings",
    accent: "bg-black/[0.03]",
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize your environment to match your workflow.",
    href: "/docs/configuration",
    accent: "bg-black/[0.03]",
  },
  {
    icon: Puzzle,
    title: "Plugin Development",
    description: "Build and publish your own plugins for Mocha.",
    href: "/docs/plugin-development",
    accent: "bg-black/[0.03]",
  },
  {
    icon: BookOpen,
    title: "API Reference",
    description: "Explore the full Mocha API surface and types.",
    href: "/docs/api",
    accent: "bg-black/[0.03]",
  },
];

const categories = [
  {
    title: "Getting Started",
    icon: Zap,
    items: ["Installation", "Quick Start", "Configuration"],
  },
  {
    title: "Core Features",
    icon: Code2,
    items: ["AI Completions", "Agents", "Code Actions", "Refactoring"],
  },
  {
    title: "Plugins",
    icon: Puzzle,
    items: ["Plugin SDK", "Publishing", "Marketplace"],
  },
  {
    title: "Integrations",
    icon: GitBranch,
    items: ["Git", "Terminal", "Extensions"],
  },
  {
    title: "API Reference",
    icon: Globe,
    items: ["REST API", "Webhooks", "SDKs"],
  },
];

const popularArticles = [
  {
    title: "How to install Mocha on macOS",
    category: "Getting Started",
    href: "/docs/installation",
  },
  {
    title: "Building your first agentic workflow",
    category: "Agents",
    href: "/docs/first-agent",
  },
  {
    title: "Connecting Mocha to GitHub",
    category: "Integrations",
    href: "/docs/integrations/git",
  },
  {
    title: "Understanding AI completion context",
    category: "Core Features",
    href: "/docs/ai-completions",
  },
  {
    title: "Publishing a plugin to the Marketplace",
    category: "Plugins",
    href: "/docs/plugin-development",
  },
];

const communityLinks = [
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Join thousands of developers in our community server.",
    href: "https://discord.gg/mocha",
    label: "Join Discord",
  },
  {
    icon: Github,
    title: "GitHub Discussions",
    description: "Ask questions and share ideas in our GitHub repo.",
    href: "https://github.com/mocha-dev/mocha/discussions",
    label: "Open Discussions",
  },
  {
    icon: LifeBuoy,
    title: "Stack Overflow",
    description: "Find answers to common questions tagged mocha-ide.",
    href: "https://stackoverflow.com/questions/tagged/mocha-ide",
    label: "Browse Questions",
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
          "inline-flex items-center gap-2 bg-black/[0.04] border border-black/[0.07] rounded-full px-3.5 py-1.5 mb-8 opacity-0",
          isInView && "animate-mocha-fade-in stagger-1"
        )}
      >
        <FileText className="w-3.5 h-3.5 text-black/50" />
        <span className="text-xs font-medium text-black/50 tracking-wide">
          Documentation
        </span>
      </div>

      {/* heading */}
      <h1
        className={cn(
          "text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-5 opacity-0",
          isInView && "animate-mocha-hero-title stagger-2"
        )}
      >
        Documentation
      </h1>

      <p
        className={cn(
          "text-lg md:text-xl text-black/50 max-w-xl mx-auto mb-10 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-3"
        )}
      >
        Everything you need to get started with Mocha.
      </p>

      {/* search bar */}
      <div
        className={cn(
          "relative max-w-lg mx-auto opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-4"
        )}
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-black/30 pointer-events-none" />
        <input
          type="text"
          placeholder="Search documentation…"
          className="w-full h-12 pl-11 pr-4 rounded-2xl border border-black/[0.08] bg-white text-sm text-black placeholder:text-black/30 outline-none focus:border-black/20 focus:ring-2 focus:ring-black/[0.05] transition-all duration-200"
          readOnly
        />
        <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-black/25 font-mono bg-black/[0.04] border border-black/[0.07] rounded px-1.5 py-0.5">
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
      >
        Quick start
      </h2>
      <p
        className={cn(
          "text-sm text-black/45 mb-8 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-2"
        )}
      >
        Jump right in with the most essential guides.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickStartCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className={cn(
                "group relative flex flex-col gap-4 p-6 rounded-2xl border border-black/[0.07] bg-white hover:border-black/15 hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 opacity-0",
                isInView && `animate-mocha-fade-in-up stagger-${i + 3}`
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center group-hover:bg-black/[0.07] transition-colors duration-200">
                <Icon className="w-5 h-5 text-black/70" />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold tracking-tight mb-1.5">
                  {card.title}
                </h3>
                <p className="text-sm text-black/45 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-black/40 group-hover:text-black/70 transition-colors duration-200">
                Read more
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </Link>
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
          >
            Browse by category
          </h2>
          <p
            className={cn(
              "text-sm text-black/45 mb-6 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            Find exactly what you need.
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
                    isInView && `animate-mocha-fade-in-up stagger-${i + 3}`,
                    activeCategory === i
                      ? "bg-black text-white font-medium"
                      : "text-black/60 hover:text-black hover:bg-black/[0.04]"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 flex-shrink-0",
                      activeCategory === i ? "text-white/80" : "text-black/40"
                    )}
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
            "rounded-2xl border border-black/[0.07] bg-white p-8 opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-4"
          )}
        >
          {(() => {
            const cat = categories[activeCategory];
            const Icon = cat.icon;
            return (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-black/[0.04] flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-black/60" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/docs/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-black/[0.03] transition-colors duration-150"
                      >
                        <span className="text-sm text-black/70 group-hover:text-black transition-colors duration-150">
                          {item}
                        </span>
                        <ChevronRight className="w-4 h-4 text-black/25 group-hover:text-black/50 transition-colors duration-150" />
                      </Link>
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
      >
        Popular articles
      </h2>
      <p
        className={cn(
          "text-sm text-black/45 mb-8 opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-2"
        )}
      >
        Most visited documentation pages this week.
      </p>

      <div className="divide-y divide-black/[0.06] rounded-2xl border border-black/[0.07] overflow-hidden">
        {popularArticles.map((article, i) => (
          <Link
            key={article.title}
            href={article.href}
            className={cn(
              "group flex items-center justify-between px-6 py-4 bg-white hover:bg-black/[0.02] transition-colors duration-150 opacity-0",
              isInView && `animate-mocha-fade-in-up stagger-${i + 3}`
            )}
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="text-xs font-mono text-black/25 w-5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-black/80 group-hover:text-black transition-colors duration-150 truncate">
                  {article.title}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
              <span className="hidden sm:inline-flex text-[11px] font-medium text-black/40 bg-black/[0.04] border border-black/[0.06] px-2.5 py-0.5 rounded-full">
                {article.category}
              </span>
              <ArrowRight className="w-4 h-4 text-black/25 group-hover:text-black/60 transition-all duration-200 group-hover:translate-x-0.5" />
            </div>
          </Link>
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
          "rounded-3xl border border-black/[0.07] bg-[#fafafa] overflow-hidden opacity-0",
          isInView && "animate-mocha-fade-in-up stagger-1"
        )}
      >
        <div className="px-8 pt-10 pb-8 border-b border-black/[0.06]">
          <h2 className="text-2xl font-semibold tracking-tight mb-1.5">
            Community &amp; support
          </h2>
          <p className="text-sm text-black/45">
            Get help, share ideas, and connect with other Mocha developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
          {communityLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex flex-col gap-4 p-8 hover:bg-white/70 transition-colors duration-200 opacity-0",
                  isInView && `animate-mocha-fade-in-up stagger-${i + 2}`
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.07] flex items-center justify-center group-hover:border-black/15 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-black/60" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sm text-black/45 leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-black/50 group-hover:text-black transition-colors duration-200 mt-auto">
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
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />

      {/* thin divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-black/[0.05]" />
      </div>

      <QuickStartSection />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-black/[0.05]" />
      </div>

      <BrowseSection />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-black/[0.05]" />
      </div>

      <PopularArticlesSection />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-black/[0.05]" />
      </div>

      <CommunitySection />
      <Footer />
    </div>
  );
}
