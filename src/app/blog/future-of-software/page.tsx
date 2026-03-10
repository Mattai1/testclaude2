"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function FutureOfSoftwarePage() {
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
          <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 mb-6">
            Vision
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            The Future of Software: Humans and Agents, Side by Side
          </h1>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-black/40 mb-12 pb-12 border-b border-black/[0.07]">
            <span>January 28, 2026</span>
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
            <span>The Mocha Team</span>
          </div>

          {/* Body */}
          <div className="space-y-6 text-[16px] leading-[1.8] text-black/75">
            <p>
              There's a narrative about AI and software development that goes
              something like this: AI gets smarter, developers get replaced,
              software gets written by machines. It makes for compelling
              headlines. It also misunderstands how software actually gets built.
            </p>

            <p>
              We believe the future looks different. Not AI instead of developers
              — AI as the medium through which developers express larger and
              larger ambitions.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              The expanding scope of what's possible
            </h2>

            <p>
              Every time the cost of software production drops, the appetite for
              software grows. When compiled languages made programming faster
              than assembly, we didn't build fewer programs — we built more, and
              more complex ones. When the web lowered the cost of distribution,
              we didn't see fewer applications — we saw an explosion.
            </p>

            <p>
              AI is following the same pattern. The organizations using AI agents
              most effectively aren't shrinking their engineering teams. They're
              shipping more features, maintaining more products, and attempting
              larger bets than they could before. The demand for software expands
              to fill the capacity available to produce it.
            </p>

            <blockquote className="border-l-2 border-black/15 pl-6 my-8 text-black/55 italic">
              "The demand for software expands to fill the capacity available to
              produce it. AI doesn't shrink that demand — it expands what supply
              can meet."
            </blockquote>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              What humans are for
            </h2>

            <p>
              If agents handle more and more of the implementation work, what do
              human developers actually do? The question sounds threatening. We
              think the answer is clarifying.
            </p>

            <p>
              Humans provide judgment. They understand the user's actual problem,
              not the stated specification. They know which trade-offs are
              acceptable given the business context. They decide when to ship
              versus when to keep iterating. They hold the ethical accountability
              for what the software does in the world.
            </p>

            <p>
              These are not tasks that get automated away as models improve.
              They're tasks that become more important as the speed of
              implementation accelerates. When code can be written in hours
              instead of weeks, the bottleneck shifts from implementation to
              judgment. The developer who can direct agents effectively, evaluate
              their outputs critically, and integrate the results thoughtfully
              becomes more valuable — not less.
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-black mt-8 mb-3">
              A new kind of craft
            </h3>

            <p>
              We're watching a new craft emerge: the craft of directing agents.
              It involves knowing how to decompose problems so agents can work on
              them independently. It involves knowing how to evaluate AI-generated
              code with the right level of skepticism — neither rubber-stamping
              everything nor rewriting everything from scratch. It involves
              knowing when to trust the agent's judgment and when to override it.
            </p>

            <p>
              This craft is genuinely different from traditional programming,
              though it builds on many of the same foundations. The developers we
              see mastering it fastest are the ones with the deepest
              understanding of systems — not because they're writing more code,
              but because they can recognize when the agent's code is wrong
              quickly and articulate why.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              The collaboration stack
            </h2>

            <p>
              We think of the human-agent relationship as a stack. At the top,
              humans set goals and constraints: what the system should do, what
              it should never do, what success looks like. In the middle, agents
              decompose goals into tasks and execute them. At the bottom, the
              infrastructure runs reliably and validates outputs against
              specifications.
            </p>

            <p>
              Most current tooling collapses this stack — humans end up involved
              at every layer, which limits the leverage. The right architecture
              gives humans control over the top layer and lets agents own the
              middle and bottom, with clear interfaces between them.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              What we're building toward
            </h2>

            <p>
              At Mocha, our north star is simple: the best software in the world
              should be within reach of any team with a good idea, not just the
              teams with the largest engineering headcount.
            </p>

            <p>
              We're not there yet. But every improvement in agent reliability,
              every reduction in latency, every advance in context understanding
              moves us closer. The future of software isn't human or machine. It's
              a collaboration that makes both more capable than either could be
              alone.
            </p>

            <p>
              That future is being built right now. We're glad you're building it
              with us.
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
