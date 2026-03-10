"use client";

import { MochaLogo } from "./mocha-logo";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Community"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
];

export function Footer() {
  const { ref, isInView } = useInView();

  return (
    <footer
      ref={ref}
      className={cn(
        "border-t border-black/5 pt-16 pb-8 px-6 opacity-0",
        isInView && "animate-mocha-fade-in"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MochaLogo className="w-6 h-6" />
              <span className="text-[15px] font-medium tracking-tight">
                Mocha
              </span>
            </div>
            <p className="text-sm text-black/40 leading-relaxed">
              The agentic development platform for the next generation of
              builders.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-medium text-black/80 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-black/40 hover:text-black transition-colors duration-200"
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
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-black/30">
            &copy; {new Date().getFullYear()} Mocha. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-black/30 hover:text-black/60 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-xs text-black/30 hover:text-black/60 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-xs text-black/30 hover:text-black/60 transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
