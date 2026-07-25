"use client";

import { useState } from "react";
import { IconMenu2, IconX, IconArrowUpRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Reality Shift", href: "#reality-shift" },
    { label: "Why Us", href: "#why-us" },
    { label: "Solutions", href: "#solutions" },
    { label: "How We Work", href: "#how-we-work" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto h-14 rounded-full bg-[#09090b]/85 backdrop-blur-xl border border-white/10 px-4 sm:px-6 flex items-center justify-between shadow-2xl pointer-events-auto">
        
        {/* Brand Mark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs font-bold tracking-tight text-[#00e599] group-hover:border-[#00e599]/40 transition-colors">
            A
          </div>
          <span className="font-heading font-bold text-sm tracking-widest text-white group-hover:text-[#00e599] transition-colors uppercase">
            AURANGY
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-widest text-zinc-400 hover:text-[#00e599] transition-colors font-mono font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Desktop Button-in-Button CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5 rounded-full bg-[#00e599] text-[#09090b] font-bold text-[11px] uppercase tracking-wider transition-all duration-300 hover:bg-[#1cf0aa] hover:scale-[0.98] active:scale-[0.96]"
          >
            <span>Book Session</span>
            <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-[#09090b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <IconArrowUpRight size={13} stroke={2.5} />
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full bg-zinc-900 text-zinc-300 border border-white/10 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl bg-[#09090b]/95 backdrop-blur-2xl border border-white/10 p-6 pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest text-zinc-300 hover:text-[#00e599] py-1 font-mono transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#00e599] text-[#09090b] text-xs font-bold uppercase tracking-wider"
              >
                <span>Book Strategy Session</span>
                <IconArrowUpRight size={16} stroke={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
