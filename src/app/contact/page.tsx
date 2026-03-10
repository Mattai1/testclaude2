"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, MessageCircle, Newspaper, Headphones, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ────────────────────────────────────────────────────────────────────

const contactCards = [
  {
    icon: Mail,
    label: "General",
    value: "hello@mocha.dev",
    href: "mailto:hello@mocha.dev",
    description: "Questions about Mocha, partnerships, or anything else.",
  },
  {
    icon: Headphones,
    label: "Support",
    value: "support@mocha.dev",
    href: "mailto:support@mocha.dev",
    description: "Having trouble? Our support team typically replies within 2 hours.",
  },
  {
    icon: Newspaper,
    label: "Press",
    value: "press@mocha.dev",
    href: "mailto:press@mocha.dev",
    description: "Media inquiries, interviews, and press kit requests.",
  },
  {
    icon: MessageCircle,
    label: "Discord community",
    value: "Join the server",
    href: "https://discord.gg/mocha",
    description: "Chat with the team and thousands of Mocha developers live.",
  },
];

const subjects = [
  { value: "", label: "Select a subject" },
  { value: "general", label: "General question" },
  { value: "feature", label: "Feature request" },
  { value: "bug", label: "Bug report" },
  { value: "enterprise", label: "Enterprise inquiry" },
  { value: "press", label: "Press" },
];

// ─── Textarea with auto-resize ────────────────────────────────────────────────

function AutoResizeTextarea({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);

  return (
    <textarea
      ref={ref}
      rows={5}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={cn(
        "w-full resize-none overflow-hidden",
        className
      )}
    />
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const fieldClass =
    "w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black/40 transition-colors duration-200 bg-white";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-14 h-14 rounded-full bg-black/[0.04] flex items-center justify-center mb-5">
          <CheckCircle className="w-7 h-7 text-black/70" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-medium tracking-tight mb-2">
          Message sent!
        </h3>
        <p className="text-sm text-black/50 max-w-xs leading-relaxed">
          Thanks for reaching out. We&apos;ll get back to you at{" "}
          <span className="text-black/70 font-medium">{email}</span> within one
          business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
          }}
          className="mt-8 text-sm text-black/40 hover:text-black transition-colors duration-200 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-xs font-medium text-black/50 mb-1.5">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className={fieldClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-black/50 mb-1.5">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className={fieldClass}
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-medium text-black/50 mb-1.5">
          Subject
        </label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={cn(
            fieldClass,
            subject === "" ? "text-black/35" : "text-black",
            "appearance-none cursor-pointer"
          )}
        >
          {subjects.map((s) => (
            <option
              key={s.value}
              value={s.value}
              disabled={s.value === ""}
              className="text-black"
            >
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-black/50 mb-1.5">
          Message
        </label>
        <AutoResizeTextarea
          value={message}
          onChange={setMessage}
          placeholder="Tell us what's on your mind..."
          className={fieldClass}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !name.trim() || !email.trim() || !message.trim()}
        className={cn(
          "w-full flex items-center justify-center gap-2.5 bg-black text-white font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-200",
          "hover:bg-black/85 active:scale-[0.98]",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
        )}
      >
        {loading ? (
          <>
            <span
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
              aria-hidden="true"
            />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

// ─── Contact info column ──────────────────────────────────────────────────────

function ContactInfoColumn({
  isInView,
}: {
  isInView: boolean;
}) {
  return (
    <div className="space-y-4">
      {contactCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <a
            key={card.label}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={cn(
              "flex items-start gap-4 p-5 rounded-2xl border border-black/[0.06] bg-white",
              "hover:border-black/12 hover:shadow-md hover:shadow-black/[0.03] hover:-translate-y-0.5",
              "transition-all duration-300 group opacity-0",
              isInView && `animate-mocha-fade-in-up stagger-${i + 2}`
            )}
          >
            <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-indigo-500/10 transition-colors duration-300">
              <Icon
                className="w-4.5 h-4.5 text-black/50 group-hover:text-indigo-500 transition-colors duration-300"
                strokeWidth={1.5}
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-0.5">
                {card.label}
              </p>
              <p className="text-sm font-medium text-black truncate">
                {card.value}
              </p>
              <p className="text-xs text-black/45 mt-1 leading-relaxed">
                {card.description}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

// ─── Office location ──────────────────────────────────────────────────────────

function OfficeSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 bg-black/[0.015]">
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "rounded-3xl border border-black/[0.06] bg-white overflow-hidden opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-1"
          )}
        >
          <div className="grid md:grid-cols-2">
            {/* Map placeholder */}
            <div className="relative h-56 md:h-full min-h-[220px] bg-black/[0.025] overflow-hidden">
              {/* Dot grid overlay */}
              <div className="absolute inset-0 mocha-grid-dots opacity-60 pointer-events-none" />

              {/* Stylized city grid lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-48">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((n) => (
                    <div
                      key={`h-${n}`}
                      className="absolute left-0 right-0 border-t border-black/[0.07]"
                      style={{ top: `${n * 25}%` }}
                    />
                  ))}
                  {[0, 1, 2, 3, 4].map((n) => (
                    <div
                      key={`v-${n}`}
                      className="absolute top-0 bottom-0 border-l border-black/[0.07]"
                      style={{ left: `${n * 25}%` }}
                    />
                  ))}
                  {/* Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                    <div className="w-3 h-3 rounded-full bg-black shadow-lg shadow-black/20" />
                    <div className="w-px h-4 bg-black mx-auto" />
                  </div>
                </div>
              </div>

              <span className="absolute bottom-4 left-4 text-xs text-black/30 font-medium">
                San Francisco, CA
              </span>
            </div>

            {/* Location info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5 text-black/50" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-2">
                San Francisco, CA
              </h3>
              <p className="text-sm text-black/50 leading-relaxed mb-6">
                Our headquarters are in the heart of SoMa. We also have team
                members working remotely across North America, Europe, and Asia.
              </p>
              <div className="space-y-1.5">
                <p className="text-sm text-black/70">
                  <span className="text-black/35 text-xs uppercase tracking-wide font-medium mr-2">
                    Address
                  </span>
                  340 Pine Street, San Francisco, CA 94104
                </p>
                <p className="text-sm text-black/70">
                  <span className="text-black/35 text-xs uppercase tracking-wide font-medium mr-2">
                    Hours
                  </span>
                  Mon–Fri, 9 am – 6 pm PT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main two-column section ──────────────────────────────────────────────────

function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: contact info */}
          <div>
            <p
              className={cn(
                "text-sm font-medium text-indigo-500 tracking-wide uppercase mb-3 opacity-0",
                isInView && "animate-mocha-fade-in-up stagger-1"
              )}
            >
              Reach out
            </p>
            <h2
              className={cn(
                "text-2xl md:text-3xl font-medium tracking-tight mb-8 opacity-0",
                isInView && "animate-mocha-fade-in-up stagger-2"
              )}
            >
              The right channel for your message
            </h2>
            <ContactInfoColumn isInView={isInView} />
          </div>

          {/* Right: form */}
          <div
            className={cn(
              "rounded-2xl border border-black/[0.06] bg-white p-7 md:p-8 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
          >
            <h3 className="text-lg font-medium tracking-tight mb-6">
              Send us a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 mocha-grid-dots pointer-events-none" />

      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.07),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-sm font-medium text-indigo-500 tracking-wide uppercase mb-5 animate-mocha-fade-in stagger-1">
          Contact
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-[64px] font-medium tracking-tight leading-[1.05] opacity-0 animate-mocha-fade-in-up stagger-2">
          Get in touch
        </h1>
        <p className="mt-5 text-lg md:text-xl text-black/50 max-w-xl leading-relaxed opacity-0 animate-mocha-fade-in-up stagger-3">
          We&apos;d love to hear from you — whether you have a question, a
          feature idea, or just want to say hello.
        </p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />
      <ContactSection />
      <OfficeSection />
      <Footer />
    </div>
  );
}
