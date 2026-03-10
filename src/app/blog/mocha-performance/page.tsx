"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function MochaPerformancePage() {
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
            How We Made Mocha 10x Faster Without Sacrificing Intelligence
          </h1>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-black/40 mb-12 pb-12 border-b border-black/[0.07]">
            <span>February 10, 2026</span>
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-black/20 inline-block" />
            <span>Mocha Engineering</span>
          </div>

          {/* Body */}
          <div className="space-y-6 text-[16px] leading-[1.8] text-black/75">
            <p>
              Speed and intelligence are usually in tension. Faster models are
              smaller and less capable. Smarter models are larger and slower. For
              most applications, you pick a point on that curve and accept the
              trade-off.
            </p>

            <p>
              We refused to accept it. This is a post about how we achieved a
              10x reduction in median response latency in Mocha's agent layer
              without degrading output quality — and what we learned along the
              way.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              Measuring the right thing
            </h2>

            <p>
              Before optimizing, we needed to be precise about what we were
              optimizing. "Response latency" is vague. There are at least four
              distinct latency numbers that matter in an AI IDE:
            </p>

            <ul className="list-none space-y-3 pl-0">
              {[
                "Time to first token (TTFT) — how long until the user sees anything",
                "Time to interactive response — how long until the agent has said something useful enough to act on",
                "Task completion time — total wall-clock time for an agentic task to finish",
                "Perceived latency — a subjective measure that incorporates streaming, UI feedback, and expectation-setting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-black/25 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              We found that optimizing TTFT had the largest impact on perceived
              latency, even when task completion time didn't change. Users are
              remarkably tolerant of long tasks if they see forward motion
              immediately.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              Streaming everything
            </h2>

            <p>
              The most impactful change we made was architectural: we moved from
              a request-response model to a streaming model everywhere. Not just
              in the text output, but in tool calls, context retrieval, and UI
              state updates.
            </p>

            <p>
              In the old architecture, the agent would complete a tool call
              (say, reading a file) before sending any output to the UI. In the
              new architecture, the tool call and the text generation are
              interleaved — the agent streams its reasoning while simultaneously
              issuing tool calls in parallel. The user sees the agent thinking
              and acting at the same time.
            </p>

            <blockquote className="border-l-2 border-black/15 pl-6 my-8 text-black/55 italic">
              "Streaming isn't just a display optimization. It restructures how
              the agent and the UI coordinate, unlocking parallelism that wasn't
              possible before."
            </blockquote>

            <h3 className="text-xl font-semibold tracking-tight text-black mt-8 mb-3">
              Speculative context prefetching
            </h3>

            <p>
              One of the most expensive operations in an agentic IDE is context
              retrieval — finding the right files, symbols, and documentation to
              pass into the model's context window. In a naive implementation,
              this happens after the user submits a prompt.
            </p>

            <p>
              We moved it earlier. Mocha now starts indexing likely-relevant
              context as soon as the user opens the chat input — before they've
              finished typing. We use a lightweight classifier to predict what
              the user is likely to ask about based on the current file, recent
              edits, and cursor position. By the time the user hits enter, the
              context is often already assembled.
            </p>

            <p>
              This reduced median TTFT by 340ms — which sounds small until you
              consider that it's a 40% reduction from our previous baseline.
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-black mt-8 mb-3">
              KV cache optimization
            </h3>

            <p>
              Large language models are stateless: every request sends the full
              context from scratch. At the infrastructure layer, we implemented
              aggressive KV cache reuse — keeping the key-value activations for
              stable parts of the context (your codebase's core files, your
              configuration, your system prompt) warm across requests.
            </p>

            <p>
              For typical developer workflows, 60-70% of the context doesn't
              change between consecutive requests. Caching those activations
              reduced both latency and cost substantially.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              The intelligence guarantee
            </h2>

            <p>
              Every optimization we shipped went through a regression suite that
              measured output quality, not just speed. We evaluate on a benchmark
              of 1,200 real-world developer tasks across twelve languages, ranging
              from single-function generation to multi-file refactors.
            </p>

            <p>
              Our bar: no optimization ships if it regresses benchmark scores by
              more than 0.5%. In practice, the streaming and prefetching
              improvements had no measurable effect on output quality. The KV
              cache optimization required careful tuning to avoid serving stale
              context — but once we got that right, quality was identical to the
              uncached baseline.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-black mt-10 mb-4">
              What's next
            </h2>

            <p>
              We think there's another 3-5x of latency to recover through better
              model distillation and adaptive compute routing — using smaller
              models for simpler tasks and reserving our most capable models for
              the hard ones. We're also exploring on-device inference for
              latency-critical operations like inline completion.
            </p>

            <p>
              Speed isn't a nice-to-have in an AI IDE. When the tool is slow,
              developers context-switch, lose their train of thought, and revert
              to doing things manually. A 10x improvement in latency isn't just a
              technical benchmark — it's the difference between a tool you reach
              for constantly and one you reach for occasionally.
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
