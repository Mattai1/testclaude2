"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const logos = [
  "Amazon",
  "Shopify",
  "Figma",
  "Uber",
  "Anthropic",
  "OpenAI",
  "Instacart",
  "Hertz",
  "Linear",
  "Supabase",
  "Lovable",
  "Runway",
  "ElevenLabs",
  "Le Monde",
  "URBN",
  "Ramp",
  "Mindbody",
  "Lightspeed",
  "Cursor",
  "Woo",
];

export function MarqueeLogos() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 bg-white opacity-0",
        isInView && "animate-mocha-fade-in"
      )}
    >
      <p
        className="text-center mb-10 tracking-wide"
        style={{
          color: "#8c9eb1",
          fontSize: "13px",
          fontWeight: 400,
        }}
      >
        Trusted by the world&apos;s most innovative companies
      </p>

      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
        }}
      >
        {/* Marquee track — duplicated for seamless infinite scroll */}
        <div
          className="flex items-center"
          style={{
            animation: "mocha-marquee 35s linear infinite",
            width: "max-content",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState =
              "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState =
              "running";
          }}
        >
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="flex-shrink-0 whitespace-nowrap select-none"
              style={{
                fontWeight: 600,
                color: "#adbdcc",
                fontSize: "18px",
                letterSpacing: "-0.5px",
                paddingLeft: "64px",
                paddingRight: "0px",
                transition: "color 150ms cubic-bezier(0.215,0.61,0.355,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#425466";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#adbdcc";
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
