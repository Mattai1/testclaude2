"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import { MochaLogo } from "./mocha-logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Use Cases", href: "#use-cases", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Resources", href: "#resources", hasDropdown: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[52px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <MochaLogo className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[15px] font-medium tracking-tight text-black">
            Mocha
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 px-3.5 py-2 text-sm text-black/60 hover:text-black transition-colors duration-200 rounded-lg hover:bg-black/[0.04]"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 opacity-40" />
              )}
            </a>
          ))}
        </div>

        {/* Download Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-black/85 active:scale-[0.97] transition-all duration-200"
          >
            Download
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 px-3 py-2.5 text-sm text-black/70 hover:text-black rounded-lg hover:bg-black/5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 opacity-50" />
              )}
            </a>
          ))}
          <a
            href="#download"
            className="flex items-center justify-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full mt-3"
          >
            Download
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
