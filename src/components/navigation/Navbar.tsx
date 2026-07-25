"use client";

import { useState } from "react";
import { IconMenu2, IconX, IconArrowUpRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Systems", href: "#systems" },
    { label: "Selected Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Monogram Brand Mark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-xs font-bold tracking-tight text-[#00e599] group-hover:border-[#00e599]/40 transition-colors">
            SP
          </div>
          <span className="font-heading font-medium text-sm tracking-wide text-zinc-200 group-hover:text-white transition-colors">
            SHUBHAM PAL
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-[#00e599] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00e599] text-[#09090b] text-xs font-bold tracking-wide uppercase hover:bg-[#1cf0aa] transition-all hover:scale-[0.98] active:scale-[0.96]"
          >
            <span>Get In Touch</span>
            <IconArrowUpRight size={14} stroke={2.5} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 text-zinc-300 border border-white/10 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b] border-b border-white/10 px-4 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider text-zinc-300 hover:text-[#00e599] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#00e599] text-[#09090b] text-xs font-bold uppercase tracking-wider"
              >
                <span>Get In Touch</span>
                <IconArrowUpRight size={16} stroke={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
