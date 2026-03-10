"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const footerColumns = [
  {
    title: "Products & Pricing",
    links: [
      "Pricing",
      "Atlas",
      "Billing",
      "Checkout",
      "Connect",
      "Elements",
      "Financial Accounts",
      "Identity",
      "Invoicing",
      "Issuing",
      "Payments",
      "Payment Links",
      "Radar",
      "Revenue Recognition",
      "Tax",
      "Terminal",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Enterprises",
      "Startups",
      "Agentic commerce",
      "Ecommerce",
      "Embedded finance",
      "Finance automation",
      "Global businesses",
      "Marketplaces",
      "Platforms",
      "SaaS",
    ],
  },
  {
    title: "Developers",
    links: [
      "Documentation",
      "API reference",
      "API status",
      "API changelog",
      "Libraries and SDKs",
      "Developer blog",
    ],
  },
  {
    title: "Resources",
    links: [
      "App integrations",
      "Code samples",
      "Guides",
      "Customer stories",
      "Blog",
      "Sessions conference",
    ],
  },
  {
    title: "Company",
    links: [
      "Jobs",
      "Newsroom",
      "Stripe Press",
      "Contact sales",
      "Become a partner",
    ],
  },
  {
    title: "Support",
    links: ["Get support", "Support plans", "Professional services"],
  },
];

export function Footer() {
  const { ref, isInView } = useInView();

  return (
    <footer
      ref={ref}
      style={{ backgroundColor: "#0a2540" }}
      className={cn("opacity-0", isInView && "animate-mocha-fade-in")}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top bar: logo + locale */}
        <div
          className="flex items-center justify-between py-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <a
            href="#"
            className="text-[22px] font-bold tracking-tight"
            style={{ color: "#635bff" }}
          >
            stripe
          </a>

          <button
            className="flex items-center gap-2 text-sm font-light transition-colors duration-150"
            style={{
              color: "#adbdcc",
              transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#fff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#adbdcc")
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <ellipse
                cx="8"
                cy="8"
                rx="2.5"
                ry="6.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M1.5 8h13M8 1.5C6 3.5 5 5.5 5 8s1 4.5 3 6.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            United States
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Link columns grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 py-12">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-xs font-semibold uppercase tracking-wide mb-4"
                style={{ color: "#8c9eb1" }}
              >
                {col.title}
              </h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="block mb-2 transition-colors"
                      style={{
                        fontSize: "13px",
                        color: "#adbdcc",
                        fontWeight: 300,
                        transitionDuration: "150ms",
                        transitionTimingFunction:
                          "cubic-bezier(0.215, 0.61, 0.355, 1)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#adbdcc")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span className="text-xs" style={{ color: "#8c9eb1", fontWeight: 300 }}>
            &copy; 2026 Stripe, Inc.
          </span>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms", "Cookie settings"].map(
              (label, i) => (
                <span key={label} className="flex items-center gap-6">
                  {i > 0 && (
                    <span
                      className="hidden sm:block"
                      style={{ color: "rgba(255,255,255,0.15)" }}
                    >
                      |
                    </span>
                  )}
                  <a
                    href="#"
                    className="text-xs transition-colors"
                    style={{
                      color: "#8c9eb1",
                      fontWeight: 300,
                      transitionDuration: "150ms",
                      transitionTimingFunction:
                        "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#8c9eb1")
                    }
                  >
                    {label}
                  </a>
                </span>
              )
            )}

            <span
              className="hidden sm:block"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              |
            </span>

            {/* Social links */}
            {[
              { label: "Twitter / X", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "YouTube", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-xs transition-colors"
                style={{
                  color: "#8c9eb1",
                  fontWeight: 300,
                  transitionDuration: "150ms",
                  transitionTimingFunction:
                    "cubic-bezier(0.215, 0.61, 0.355, 1)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#8c9eb1")
                }
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
