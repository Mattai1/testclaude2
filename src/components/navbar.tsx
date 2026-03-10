"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { StripeLogo } from "./stripe-logo";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Products",
    href: "/features",
    hasDropdown: true,
    items: [
      { label: "Payments", desc: "Online payments" },
      { label: "Billing", desc: "Subscription management" },
      { label: "Connect", desc: "Payments for platforms" },
      { label: "Radar", desc: "Fraud prevention" },
      { label: "Terminal", desc: "In-person payments" },
      { label: "Issuing", desc: "Physical and virtual cards" },
    ],
  },
  { label: "Solutions", href: "#solutions", hasDropdown: false },
  { label: "Developers", href: "/docs", hasDropdown: false },
  { label: "Resources", href: "/blog", hasDropdown: false },
  { label: "Pricing", href: "/pricing", hasDropdown: false },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-4">
      {/* Floating nav container */}
      <nav
        className={cn(
          "relative max-w-[1264px] mx-auto rounded-t-lg transition-all duration-300",
          "bg-white",
          scrolled
            ? "shadow-[0_0_60px_rgba(50,50,93,0.18)] rounded-lg"
            : "shadow-[0_30px_60px_-50px_rgba(0,0,0,0.10),_0_30px_60px_-10px_rgba(50,50,93,0.25)]"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <StripeLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-[#0a2540] hover:opacity-60 transition-opacity duration-150 rounded-md"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-50 transition-transform group-hover:rotate-180 duration-200" />
                  )}
                </a>

                {/* Dropdown */}
                {item.hasDropdown && item.items && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-[0_13px_27px_-5px_rgba(50,50,93,.25),_0_8px_16px_-8px_rgba(0,0,0,.3)] p-2 z-50"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href="#"
                        className="flex flex-col px-3 py-2.5 rounded-md hover:bg-[#f6f9fc] transition-colors duration-150"
                      >
                        <span className="text-[14px] font-medium text-[#0a2540]">{sub.label}</span>
                        <span className="text-[12px] text-[#8c9eb1]">{sub.desc}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-[15px] font-medium text-[#0a2540] hover:opacity-60 transition-opacity duration-150"
            >
              Sign in
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#635bff] text-white text-[15px] font-medium rounded-full hover:bg-[#0a2540] transition-colors duration-150"
            >
              Start now →
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#f6f9fc] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[#0a2540]" />
            ) : (
              <Menu className="w-5 h-5 text-[#0a2540]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-[#e7ecf1]",
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-4 space-y-1 bg-white rounded-b-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center px-3 py-2.5 text-[15px] font-medium text-[#0a2540] rounded-lg hover:bg-[#f6f9fc] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#e7ecf1] mt-2 space-y-2">
              <a
                href="#"
                className="block text-center px-4 py-2.5 text-[15px] font-medium text-[#0a2540] rounded-lg hover:bg-[#f6f9fc]"
              >
                Sign in
              </a>
              <a
                href="/pricing"
                className="block text-center px-4 py-2.5 bg-[#635bff] text-white text-[15px] font-medium rounded-full hover:bg-[#0a2540] transition-colors"
              >
                Start now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
