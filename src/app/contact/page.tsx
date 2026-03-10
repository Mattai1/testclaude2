"use client";

import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Newspaper,
  Headphones,
  MapPin,
  ArrowRight,
  CheckCircle,
  Code2,
  DollarSign,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// ─── Data ────────────────────────────────────────────────────────────────────

const contactCards = [
  {
    icon: DollarSign,
    label: "Sales",
    value: "Talk to our sales team",
    href: "#sales-form",
    description:
      "For businesses with $1M+ in annual revenue. Explore volume pricing and custom contracts.",
    cta: "Contact sales",
  },
  {
    icon: Headphones,
    label: "Support",
    value: "Get help with your integration",
    href: "https://support.stripe.com",
    description:
      "Browse documentation or reach out to our support team for technical help.",
    cta: "Visit support",
  },
  {
    icon: Newspaper,
    label: "Press",
    value: "press@stripe.com",
    href: "mailto:press@stripe.com",
    description:
      "Media inquiries, interviews, spokespeople, and press kit requests.",
    cta: "Send an email",
  },
  {
    icon: Code2,
    label: "Developers",
    value: "stripe.com/docs",
    href: "https://stripe.com/docs",
    description:
      "Full API reference, SDKs, and guides. Ask questions on Stack Overflow: stripe-payments.",
    cta: "View docs",
  },
];

const monthlyVolumes = [
  { value: "", label: "Select monthly volume" },
  { value: "<10k", label: "Less than $10,000" },
  { value: "10k-100k", label: "$10,000 – $100,000" },
  { value: "100k-1m", label: "$100,000 – $1,000,000" },
  { value: "1m+", label: "$1,000,000+" },
];

const offices = [
  "San Francisco, CA",
  "Dublin, Ireland",
  "Singapore",
  "New York, NY",
  "London, UK",
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
      className={cn("w-full resize-none overflow-hidden", className)}
    />
  );
}

// ─── Sales Form ─────────────────────────────────────────────────────────────

function SalesForm() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [volume, setVolume] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const fieldClass =
    "w-full border rounded-xl px-4 py-3 text-sm text-[#0a2540] placeholder:text-[#8c9eb1] focus:outline-none transition-colors duration-200 bg-white";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!company.trim() || !email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
          style={{ background: "#635bff15" }}
        >
          <CheckCircle className="w-7 h-7" strokeWidth={1.5} style={{ color: "#635bff" }} />
        </div>
        <h3
          className="text-xl font-semibold tracking-tight mb-2"
          style={{ color: "#0a2540" }}
        >
          Request received!
        </h3>
        <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#8c9eb1" }}>
          Thanks for reaching out. Our sales team will contact you at{" "}
          <span className="font-medium" style={{ color: "#425466" }}>
            {email}
          </span>{" "}
          within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setCompany("");
            setEmail("");
            setVolume("");
            setMessage("");
          }}
          className="mt-8 text-sm hover:underline underline-offset-4 transition-colors duration-200"
          style={{ color: "#635bff" }}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Company name */}
      <div>
        <label
          className="block text-xs font-medium mb-1.5"
          style={{ color: "#8c9eb1" }}
        >
          Company name
        </label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Acme Corp"
          required
          className={fieldClass}
          style={{ borderColor: "#e7ecf1" }}
          onFocus={(e) => (e.target.style.borderColor = "#635bff")}
          onBlur={(e) => (e.target.style.borderColor = "#e7ecf1")}
        />
      </div>

      {/* Email */}
      <div>
        <label
          className="block text-xs font-medium mb-1.5"
          style={{ color: "#8c9eb1" }}
        >
          Work email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className={fieldClass}
          style={{ borderColor: "#e7ecf1" }}
          onFocus={(e) => (e.target.style.borderColor = "#635bff")}
          onBlur={(e) => (e.target.style.borderColor = "#e7ecf1")}
        />
      </div>

      {/* Monthly volume */}
      <div>
        <label
          className="block text-xs font-medium mb-1.5"
          style={{ color: "#8c9eb1" }}
        >
          Monthly payment volume
        </label>
        <select
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className={cn(
            fieldClass,
            "appearance-none cursor-pointer",
            volume === "" ? "text-[#8c9eb1]" : "text-[#0a2540]"
          )}
          style={{ borderColor: "#e7ecf1" }}
          onFocus={(e) => (e.target.style.borderColor = "#635bff")}
          onBlur={(e) => (e.target.style.borderColor = "#e7ecf1")}
        >
          {monthlyVolumes.map((v) => (
            <option
              key={v.value}
              value={v.value}
              disabled={v.value === ""}
              className="text-[#0a2540]"
            >
              {v.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          className="block text-xs font-medium mb-1.5"
          style={{ color: "#8c9eb1" }}
        >
          How can we help?
        </label>
        <AutoResizeTextarea
          value={message}
          onChange={setMessage}
          placeholder="Tell us about your business and what you're looking to build..."
          className={cn(fieldClass, "border border-[#e7ecf1]")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !company.trim() || !email.trim()}
        className={cn(
          "w-full flex items-center justify-center gap-2.5 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-[150ms]",
          "disabled:opacity-40 disabled:cursor-not-allowed"
        )}
        style={{
          background: "#635bff",
          transitionTimingFunction: "cubic-bezier(0.215,0.61,0.355,1)",
        }}
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
            Talk to sales
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

// ─── Contact info column ──────────────────────────────────────────────────────

function ContactInfoColumn({ isInView }: { isInView: boolean }) {
  return (
    <div className="space-y-4">
      {contactCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <a
            key={card.label}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={
              card.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className={cn(
              "flex items-start gap-4 p-5 rounded-2xl border bg-white",
              "hover:-translate-y-0.5",
              "transition-all duration-300 group opacity-0",
              isInView && `animate-mocha-fade-in-up stagger-${i + 2}`
            )}
            style={{
              borderColor: "#e7ecf1",
              boxShadow: "0 2px 8px rgba(50,50,93,0.04)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
              style={{ background: "#635bff10" }}
            >
              <Icon
                className="w-4 h-4 transition-colors duration-300"
                strokeWidth={1.5}
                style={{ color: "#635bff" }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className="text-xs font-medium uppercase tracking-wide mb-0.5"
                style={{ color: "#8c9eb1" }}
              >
                {card.label}
              </p>
              <p
                className="text-sm font-semibold truncate mb-1"
                style={{ color: "#0a2540" }}
              >
                {card.value}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#8c9eb1" }}>
                {card.description}
              </p>
              <p
                className="text-xs font-medium mt-2 flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                style={{ color: "#635bff" }}
              >
                {card.cta}
                <ArrowRight className="w-3 h-3" />
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

// ─── Office locations ─────────────────────────────────────────────────────────

function OfficeSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6"
      style={{ background: "#f6f9fc" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "rounded-3xl border overflow-hidden opacity-0",
            isInView && "animate-mocha-fade-in-up stagger-1"
          )}
          style={{ borderColor: "#e7ecf1", background: "white" }}
        >
          <div className="grid md:grid-cols-2">
            {/* Map placeholder */}
            <div
              className="relative h-56 md:h-full min-h-[220px] overflow-hidden"
              style={{ background: "#f6f9fc" }}
            >
              <div className="absolute inset-0 mocha-grid-dots opacity-60 pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-48">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <div
                      key={`h-${n}`}
                      className="absolute left-0 right-0 border-t"
                      style={{ top: `${n * 25}%`, borderColor: "#e7ecf1" }}
                    />
                  ))}
                  {[0, 1, 2, 3, 4].map((n) => (
                    <div
                      key={`v-${n}`}
                      className="absolute top-0 bottom-0 border-l"
                      style={{ left: `${n * 25}%`, borderColor: "#e7ecf1" }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                    <div
                      className="w-3 h-3 rounded-full shadow-lg"
                      style={{ background: "#635bff" }}
                    />
                    <div
                      className="w-px h-4 mx-auto"
                      style={{ background: "#635bff" }}
                    />
                  </div>
                </div>
              </div>

              <span
                className="absolute bottom-4 left-4 text-xs font-medium"
                style={{ color: "#8c9eb1" }}
              >
                Global offices
              </span>
            </div>

            {/* Location info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#635bff15" }}
              >
                <MapPin
                  className="w-5 h-5"
                  strokeWidth={1.5}
                  style={{ color: "#635bff" }}
                />
              </div>
              <h3
                className="text-xl font-semibold tracking-tight mb-2"
                style={{ color: "#0a2540" }}
              >
                Worldwide presence
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#425466" }}
              >
                Stripe operates globally with offices across multiple continents,
                serving businesses in 195+ countries with local expertise and
                support.
              </p>
              <div className="flex flex-wrap gap-2">
                {offices.map((office) => (
                  <span
                    key={office}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border"
                    style={{
                      color: "#425466",
                      borderColor: "#e7ecf1",
                      background: "#f6f9fc",
                    }}
                  >
                    {office}
                  </span>
                ))}
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
    <section ref={ref} className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: contact info */}
          <div>
            <p
              className={cn(
                "text-sm font-medium tracking-wide uppercase mb-3 opacity-0",
                isInView && "animate-mocha-fade-in-up stagger-1"
              )}
              style={{ color: "#635bff" }}
            >
              Reach out
            </p>
            <h2
              className={cn(
                "text-2xl md:text-3xl font-semibold tracking-tight mb-8 opacity-0",
                isInView && "animate-mocha-fade-in-up stagger-2"
              )}
              style={{ color: "#0a2540" }}
            >
              The right channel for your needs
            </h2>
            <ContactInfoColumn isInView={isInView} />
          </div>

          {/* Right: form */}
          <div
            id="sales-form"
            className={cn(
              "rounded-2xl border p-7 md:p-8 opacity-0",
              isInView && "animate-mocha-fade-in-up stagger-2"
            )}
            style={{
              borderColor: "#e7ecf1",
              background: "white",
              boxShadow:
                "0 6px 12px -2px rgba(50,50,93,0.1), 0 3px 7px -3px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              className="text-lg font-semibold tracking-tight mb-6"
              style={{ color: "#0a2540" }}
            >
              Talk to sales
            </h3>
            <SalesForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-16 md:pb-20 px-6 overflow-hidden"
      style={{ background: "#f6f9fc" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 mocha-grid-dots opacity-40 pointer-events-none" />

      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p
          className="text-sm font-medium tracking-wide uppercase mb-5 animate-mocha-fade-in stagger-1"
          style={{ color: "#635bff" }}
        >
          Contact
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-[64px] font-medium tracking-tight leading-[1.05] opacity-0 animate-mocha-fade-in-up stagger-2"
          style={{ color: "#0a2540" }}
        >
          Contact us
        </h1>
        <p
          className="mt-5 text-lg md:text-xl max-w-xl leading-relaxed opacity-0 animate-mocha-fade-in-up stagger-3"
          style={{ color: "#425466" }}
        >
          Whether you need help with your integration, want custom pricing, or
          have a media inquiry — we&apos;re here to help.
        </p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: "#0a2540" }}>
      <Navbar />
      <HeroSection />
      <ContactSection />
      <OfficeSection />
      <Footer />
    </div>
  );
}
