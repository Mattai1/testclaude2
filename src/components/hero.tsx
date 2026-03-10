"use client";

import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0a2540" }}
    >
      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #0a2540 0%, #1a1f71 25%, #635bff 50%, #0e9eff 75%, #0a2540 100%)",
          backgroundSize: "200% 200%",
          animation: "stripe-gradient-shift 12s ease-in-out infinite",
          opacity: 0.85,
        }}
      />

      {/* Noise overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          opacity: 0.4,
        }}
      />

      {/* Radial vignette at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10,37,64,0.6))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-16 w-full max-w-6xl mx-auto">
        {/* Banner pill */}
        <a
          href="#sessions"
          className={cn(
            "inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full text-sm font-medium text-white",
            "animate-mocha-fade-in-up stagger-1"
          )}
          style={{
            background: "rgba(99,91,255,0.35)",
            border: "1px solid rgba(99,91,255,0.5)",
            backdropFilter: "blur(8px)",
            transition: "background 150ms cubic-bezier(0.215,0.61,0.355,1)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              "rgba(99,91,255,0.55)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              "rgba(99,91,255,0.35)";
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-[#635bff] flex-shrink-0"
            style={{ boxShadow: "0 0 6px #635bff" }}
          />
          Join us at Sessions &middot; April 29–30 in San Francisco
          <span className="opacity-70 ml-1">→</span>
        </a>

        {/* Main headline */}
        <h1
          className={cn(
            "text-white font-bold tracking-tight leading-[1.05] mb-6",
            "text-5xl md:text-6xl lg:text-[76px]",
            "animate-mocha-hero-title stagger-2"
          )}
          style={{ maxWidth: "840px" }}
        >
          The financial infrastructure
          <br className="hidden md:block" />
          <span style={{ color: "#a5b4fc" }}> to grow your business.</span>
        </h1>

        {/* Subheadline */}
        <p
          className={cn(
            "text-lg md:text-xl leading-relaxed mb-10 animate-mocha-fade-in-up stagger-3"
          )}
          style={{ color: "#adbdcc", maxWidth: "560px", fontWeight: 300 }}
        >
          Accept payments, offer financial services, and build custom revenue
          models—from your first transaction.
        </p>

        {/* CTA buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center gap-4 mb-6",
            "animate-mocha-fade-in-up stagger-4"
          )}
        >
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white font-medium text-base"
            style={{
              color: "#635bff",
              transition: "all 150ms cubic-bezier(0.215,0.61,0.355,1)",
              boxShadow: "0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#0a2540";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#635bff";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3)";
            }}
          >
            Start now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-2 py-1 text-base font-medium text-white"
            style={{
              transition: "opacity 150ms cubic-bezier(0.215,0.61,0.355,1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            Contact sales
            <span className="inline-block" style={{ transition: "transform 150ms cubic-bezier(0.215,0.61,0.355,1)" }}>
              →
            </span>
          </a>
        </div>

        {/* Sign in with Google */}
        <div className={cn("animate-mocha-fade-in-up stagger-5")}>
          <button
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white text-sm font-medium"
            style={{
              color: "#425466",
              border: "1px solid #e7ecf1",
              transition: "all 150ms cubic-bezier(0.215,0.61,0.355,1)",
              boxShadow: "0 2px 6px rgba(50,50,93,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 2px 6px rgba(50,50,93,0.1)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Google G placeholder */}
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #4285F4 0%, #34A853 33%, #FBBC05 66%, #EA4335 100%)",
                color: "white",
              }}
            >
              G
            </span>
            Or sign in with Google
          </button>
        </div>

        {/* Product showcase cards */}
        <div
          className={cn(
            "mt-20 w-full flex items-end justify-center gap-4 lg:gap-6",
            "animate-mocha-fade-in-up stagger-6"
          )}
          style={{ perspective: "1200px" }}
        >
          {/* Card 1: Payment Form */}
          <div
            className="flex-shrink-0 w-64 lg:w-72 rounded-xl overflow-hidden"
            style={{
              background: "#0c2e4e",
              border: "1px solid rgba(99,91,255,0.3)",
              boxShadow:
                "0 30px 60px -12px rgba(50,50,93,.5), 0 18px 36px -18px rgba(0,0,0,.5)",
              transform: "rotateY(8deg) rotateX(4deg) translateZ(0)",
              transformOrigin: "center bottom",
            }}
          >
            <div className="px-5 pt-5 pb-4">
              <div
                className="text-xs font-semibold mb-4 tracking-wide"
                style={{ color: "#adbdcc" }}
              >
                PAYMENT DETAILS
              </div>
              {/* Card number field */}
              <div
                className="rounded-lg px-4 py-3 mb-3 text-sm font-mono"
                style={{
                  background: "#1f4468",
                  border: "1px solid rgba(99,91,255,0.4)",
                  color: "#fff",
                }}
              >
                4242 4242 4242 4242
              </div>
              {/* Exp + CVC row */}
              <div className="flex gap-3 mb-4">
                <div
                  className="flex-1 rounded-lg px-4 py-3 text-sm font-mono"
                  style={{
                    background: "#1f4468",
                    border: "1px solid rgba(99,91,255,0.2)",
                    color: "#adbdcc",
                  }}
                >
                  12/26
                </div>
                <div
                  className="flex-1 rounded-lg px-4 py-3 text-sm font-mono"
                  style={{
                    background: "#1f4468",
                    border: "1px solid rgba(99,91,255,0.2)",
                    color: "#adbdcc",
                  }}
                >
                  CVC
                </div>
              </div>
              {/* Pay button */}
              <button
                className="w-full rounded-lg py-3 text-sm font-semibold text-white"
                style={{ background: "#635bff" }}
              >
                Pay $49.00
              </button>
            </div>
            {/* Stripe branding strip */}
            <div
              className="px-5 py-2.5 flex items-center gap-1.5 text-xs"
              style={{
                background: "rgba(10,37,64,0.5)",
                borderTop: "1px solid rgba(99,91,255,0.15)",
                color: "#adbdcc",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#635bff" }}
              />
              Powered by Stripe
            </div>
          </div>

          {/* Card 2: Dashboard / Chart (center, tallest) */}
          <div
            className="flex-shrink-0 w-72 lg:w-80 rounded-xl overflow-hidden"
            style={{
              background: "#0c2e4e",
              border: "1px solid rgba(99,91,255,0.35)",
              boxShadow:
                "0 50px 100px -20px rgba(50,50,93,.6), 0 30px 60px -30px rgba(0,0,0,.6)",
              transform: "translateY(-24px) translateZ(40px) rotateX(3deg)",
              transformOrigin: "center bottom",
            }}
          >
            <div className="px-5 pt-5 pb-5">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-semibold tracking-wide" style={{ color: "#adbdcc" }}>
                  REVENUE
                </div>
                <div className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(99,91,255,0.2)", color: "#a5b4fc" }}>
                  +18.4%
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">$84,230</div>
              <div className="text-xs mb-5" style={{ color: "#adbdcc" }}>This month</div>
              {/* Bar chart */}
              <div className="flex items-end gap-1.5 h-20 mb-4">
                {[40, 65, 45, 70, 55, 80, 60, 90, 75, 95, 70, 88].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 11
                            ? "#635bff"
                            : `rgba(99,91,255,${0.15 + i * 0.04})`,
                      }}
                    />
                  )
                )}
              </div>
              {/* Stats row */}
              <div className="flex gap-4">
                {[
                  { label: "Transactions", val: "2,847" },
                  { label: "Customers", val: "1,204" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xs" style={{ color: "#adbdcc" }}>{s.label}</div>
                    <div className="text-sm font-semibold text-white">{s.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Mobile Payment Confirmation */}
          <div
            className="flex-shrink-0 w-52 lg:w-60 rounded-xl overflow-hidden"
            style={{
              background: "#0c2e4e",
              border: "1px solid rgba(99,91,255,0.25)",
              boxShadow:
                "0 30px 60px -12px rgba(50,50,93,.5), 0 18px 36px -18px rgba(0,0,0,.5)",
              transform: "rotateY(-8deg) rotateX(4deg) translateZ(0)",
              transformOrigin: "center bottom",
            }}
          >
            <div className="px-5 pt-6 pb-6 flex flex-col items-center text-center">
              {/* Checkmark circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(99,91,255,0.2)", border: "2px solid rgba(99,91,255,0.5)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#635bff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                Payment confirmed
              </div>
              <div className="text-2xl font-bold text-white mb-3">$49.00</div>
              <div className="text-xs mb-5" style={{ color: "#adbdcc" }}>
                To Acme Corp
              </div>
              {/* Transaction ID */}
              <div
                className="w-full rounded-lg px-3 py-2.5 text-xs font-mono text-left"
                style={{
                  background: "rgba(10,37,64,0.6)",
                  border: "1px solid rgba(99,91,255,0.15)",
                  color: "#adbdcc",
                }}
              >
                <div className="mb-0.5 text-[10px] uppercase tracking-wider" style={{ color: "#635bff" }}>
                  Transaction ID
                </div>
                pi_3Qx...bFF2
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
