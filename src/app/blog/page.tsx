"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const posts = [
  {
    slug: "introducing-mocha",
    category: "Announcements",
    title: "Introducing Mocha: The IDE Built for the Agentic Era",
    excerpt:
      "Today we're unveiling Mocha — a next-generation development environment designed from the ground up for AI agents and the humans who direct them. Here's what we built and why.",
    date: "March 1, 2026",
    readTime: "7 min read",
  },
  {
    slug: "ai-pair-programming",
    category: "Engineering",
    title: "Beyond Autocomplete: The New Paradigm of AI Pair Programming",
    excerpt:
      "Autocomplete was just the beginning. The next leap in developer productivity isn't faster suggestions — it's agents that understand intent, context, and collaborate the way a senior engineer would.",
    date: "February 20, 2026",
    readTime: "6 min read",
  },
  {
    slug: "mocha-performance",
    category: "Engineering",
    title: "How We Made Mocha 10x Faster Without Sacrificing Intelligence",
    excerpt:
      "Speed and intelligence are often treated as a trade-off. We refused to accept that. A deep dive into the architecture decisions, streaming optimizations, and latency engineering that power Mocha.",
    date: "February 10, 2026",
    readTime: "8 min read",
  },
  {
    slug: "future-of-software",
    category: "Vision",
    title: "The Future of Software: Humans and Agents, Side by Side",
    excerpt:
      "We're entering a new era where the best software isn't written by humans alone or by AI alone — it's co-authored. What does that mean for how we build, who we hire, and what software becomes?",
    date: "January 28, 2026",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  Announcements: "bg-blue-50 text-blue-700",
  Engineering: "bg-violet-50 text-violet-700",
  Vision: "bg-amber-50 text-amber-700",
};

function BlogCard({
  post,
  index,
  isInView,
}: {
  post: (typeof posts)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col bg-white border border-black/[0.07] rounded-2xl p-7 hover:border-black/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 opacity-0",
        isInView && "animate-mocha-fade-in-up",
        `stagger-${index + 1}`
      )}
    >
      {/* Category */}
      <span
        className={cn(
          "self-start text-xs font-medium px-2.5 py-1 rounded-full mb-5",
          categoryColors[post.category] ?? "bg-black/5 text-black/60"
        )}
      >
        {post.category}
      </span>

      {/* Title */}
      <h2 className="text-[17px] font-semibold leading-snug tracking-tight text-black mb-3 group-hover:text-black/75 transition-colors">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-sm text-black/50 leading-relaxed flex-1">
        {post.excerpt}
      </p>

      {/* Footer row */}
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-black/5">
        <div className="flex items-center gap-3 text-xs text-black/35">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
          <span>{post.readTime}</span>
        </div>
        <span className="text-xs font-medium text-black/40 group-hover:text-black transition-colors duration-200">
          Read more →
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="pt-32 pb-20 px-6 text-center max-w-3xl mx-auto"
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 text-xs font-medium text-black/40 tracking-widest uppercase mb-6 opacity-0",
              heroInView && "animate-mocha-fade-in stagger-1"
            )}
          >
            <span className="w-4 h-px bg-black/25 inline-block" />
            Mocha Blog
            <span className="w-4 h-px bg-black/25 inline-block" />
          </div>

          <h1
            className={cn(
              "text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6 opacity-0",
              heroInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            The Mocha Blog
          </h1>

          <p
            className={cn(
              "text-lg text-black/50 leading-relaxed max-w-xl mx-auto opacity-0",
              heroInView && "animate-mocha-fade-in-up stagger-3"
            )}
          >
            Insights on agentic development, AI-powered coding, and the future
            of software engineering.
          </p>
        </section>

        {/* Posts grid */}
        <section
          ref={gridRef}
          className="max-w-6xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {posts.map((post, i) => (
            <BlogCard
              key={post.slug}
              post={post}
              index={i}
              isInView={gridInView}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
