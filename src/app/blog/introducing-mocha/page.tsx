"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function IntroducingMochaPage() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-28 pb-24 px-6">
        {/* Back link */}
        <div className="max-w-2xl mx-auto mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-black/40 hover:text-black transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Article */}
        <article
          ref={ref}
          className={cn(
            "max-w-2xl mx-auto opacity-0",
            isInView && "animate-mocha-fade-in-up"
          )}
        >
          {/* Category badge */}
          <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 mb-6">
            Announcements
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Introducing Mocha: The IDE Built for the Agentic Era
          </h1>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-black/40 mb-12 pb-12 border-b border-black/[0.07]">
            <span>March 1, 2026</span>
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
            <span>7 min read</span>
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
            <span>The Mocha Team</span>
          </div>

          {/* Body */}
          <div className="prose-content space-y-6 text-[16px] leading-[1.8] text-black/75">
            <p>
              For the past two years, we've been asking a deceptively simple
              question: what would an IDE look like if it were built today, with
              the assumption that AI agents are first-class collaborators — not
              just features bolted on?
            </p>

            <p>
              The answer is Mocha. And today, we're opening it up to the world.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              Why we built it
            </h2>

            <p>
              Existing IDEs are remarkable feats of engineering. But they were
              designed for a world where every line of code was written by a
              human, character by character. The interface metaphors — the file
              tree, the split editor, the terminal — are shaped around that
              assumption.
            </p>

            <p>
              That world is changing fast. Developers today might write a
              function and ask an agent to write the tests, review the diff, and
              suggest improvements to the API surface — all before a single
              manual keystroke in the file. The gap between intent and
              implementation is collapsing. The IDE needs to collapse with it.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              What makes Mocha different
            </h2>

            <p>
              Mocha is not a code editor with an AI plugin. It is an agent
              runtime with an editor built in. The distinction matters
              enormously.
            </p>

            <p>
              In Mocha, every project ships with a persistent context window. The
              IDE understands your codebase architecture, not just the file
              you're looking at. When you ask Mocha to refactor a module, it
              traces dependencies across the entire repository, identifies
              callsites that will break, and surfaces them — before you've even
              run a build.
            </p>

            <blockquote className="border-l-2 border-black/15 pl-6 my-8 text-black/55 italic">
              "The IDE understands your codebase architecture, not just the file
              you're looking at."
            </blockquote>

            <h3 className="text-xl font-semibold tracking-tight text-black mt-8 mb-3">
              Agentic task execution
            </h3>

            <p>
              Mocha supports long-running agentic tasks. You can assign an agent
              a ticket from your issue tracker, step away, and return to a pull
              request ready for your review. Agents run in sandboxed environments
              with full filesystem and network access, so they can install
              dependencies, run tests, and validate their own work.
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-black mt-8 mb-3">
              Human-in-the-loop by design
            </h3>

            <p>
              Automation without oversight is a liability. Mocha treats every
              agent action as auditable: a structured log shows exactly what
              commands were run, what files were changed, and why the agent made
              the decisions it did. You can inspect, rewind, or override any
              step.
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-black mt-8 mb-3">
              Multi-agent orchestration
            </h3>

            <p>
              Large tasks can be decomposed into parallel workstreams. A
              coordinator agent breaks a feature spec into sub-tasks, spins up
              worker agents for each, and merges their outputs when complete.
              What used to take a sprint can take an afternoon.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              Built on open standards
            </h2>

            <p>
              Mocha is not a walled garden. It's built on the Language Server
              Protocol (LSP), supports any language with an LSP server, and
              integrates with the tools you already use — Git, GitHub, Jira,
              Linear, Slack. We're committing to open-sourcing the agent runtime
              layer in Q3 2026.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              The liftoff moment
            </h2>

            <p>
              There's a specific feeling we optimized for: the moment when
              something that felt impossible — a large refactor, a gnarly bug, a
              feature you'd been putting off for weeks — suddenly just gets done.
              We call it liftoff.
            </p>

            <p>
              We've seen early users describe it as "the first time I felt like
              I had a real co-author, not a glorified autocomplete." That's the
              feeling we're chasing.
            </p>

            <p>
              Mocha is available for early access starting today. Download it,
              build something ambitious, and tell us what you think. We're just
              getting started.
            </p>
          </div>
        </article>

        {/* Back link bottom */}
        <div className="max-w-2xl mx-auto mt-16 pt-10 border-t border-black/[0.07]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-black/40 hover:text-black transition-colors duration-200"
          >
            ← Back to all articles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
