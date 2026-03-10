"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function AIPairProgrammingPage() {
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
          <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 mb-6">
            Engineering
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Beyond Autocomplete: The New Paradigm of AI Pair Programming
          </h1>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-black/40 mb-12 pb-12 border-b border-black/[0.07]">
            <span>February 20, 2026</span>
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
            <span>6 min read</span>
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
            <span>Mocha Engineering</span>
          </div>

          {/* Body */}
          <div className="space-y-6 text-[16px] leading-[1.8] text-black/75">
            <p>
              In 2022, when GitHub Copilot shipped, the developer community
              learned to describe a new sensation: the subtle delight of watching
              a line of code materialize exactly as you intended it, before
              you'd finished typing. Autocomplete had transcended the
              dictionary. It had learned to read your mind — a little.
            </p>

            <p>
              Three years later, that feeling is table stakes. The developers we
              talk to aren't impressed by single-line suggestions anymore. They
              want something different: an AI that thinks with them, not just for
              them.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              The limits of completion
            </h2>

            <p>
              Autocomplete is, at its core, a local operation. It looks at the
              tokens before the cursor and predicts the next tokens. It's
              exceptionally good at this. But software development isn't a
              token-prediction problem — it's a goal-decomposition problem.
            </p>

            <p>
              When a senior engineer sits down to implement a feature, they don't
              start by predicting the first line of code. They start with a
              mental model of the whole system, identify which abstractions need
              to change, sketch an approach, and only then start writing. The
              code is almost an afterthought — a formalization of decisions made
              upstream.
            </p>

            <p>
              This is the gap autocomplete doesn't close. And it's the gap that
              matters most.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              What collaboration actually looks like
            </h2>

            <p>
              We've been studying how the most effective human-AI programming
              pairs work in Mocha, and the patterns are striking. The best
              interactions don't look like a developer asking for code and
              receiving code. They look like a conversation.
            </p>

            <blockquote className="border-l-2 border-black/15 pl-6 my-8 text-black/55 italic">
              "The best interactions don't look like a developer asking for code
              and receiving code. They look like a conversation."
            </blockquote>

            <p>
              A developer will describe an intent — "I want to refactor the
              authentication flow to support OAuth2" — and the agent will ask
              clarifying questions before proposing anything. It might say: "The
              current implementation has three callsites that assume a username
              and password. Do you want to maintain backward compatibility with
              those, or are you doing a full cutover?" That's not autocomplete.
              That's a colleague.
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-black mt-8 mb-3">
              Context is everything
            </h3>

            <p>
              The single biggest predictor of whether an AI pair is helpful or
              frustrating is context depth. An agent that only knows the current
              file will suggest solutions that work locally but break the system.
              An agent that has indexed your entire codebase, read your
              architecture docs, and understands your team's conventions will
              suggest solutions that fit.
            </p>

            <p>
              Building that context layer is most of what we do at Mocha. It's
              harder than it sounds — codebases are large, heterogeneous, and
              constantly changing. The context window has to be dynamic, not
              static.
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-black mt-8 mb-3">
              Disagreement as a feature
            </h3>

            <p>
              One pattern we've observed in the highest-performing pairs: they
              disagree. The developer proposes an approach; the agent pushes back
              with a trade-off they hadn't considered. The developer overrides
              the agent with business context the agent couldn't have known.
            </p>

            <p>
              This back-and-forth is not a bug in the collaboration model. It's
              the core value. A pair that never disagrees is a pair where one
              member isn't thinking.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              What this means for how we build IDEs
            </h2>

            <p>
              If AI pair programming is a conversation rather than a completion,
              the IDE needs to be built around dialogue, not cursor position. The
              interaction model changes. The persistence model changes. The way
              you review and accept changes changes.
            </p>

            <p>
              We've rebuilt all three in Mocha. The chat interface isn't a
              sidebar bolted onto a code editor — it's the primary surface, with
              the editor as one of many views into the work being done. Every
              agent action produces a structured diff that you can accept,
              reject, or modify at any granularity.
            </p>

            <p>
              We're still early in understanding what truly effective human-AI
              collaboration looks like. But we're convinced that autocomplete is
              not the destination. It was just the first proof that something
              profound was possible.
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
