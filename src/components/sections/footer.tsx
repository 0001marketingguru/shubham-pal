"use client";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="w-full bg-neutral-dark border-t border-neutral-border mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-16">
        
        {/* Large Repeated Action / CTA Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-neutral-border/50">
          <div className="max-w-[65ch]">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-[-0.03em] uppercase text-foreground mb-4">
              Ready to eliminate operational drag?
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Secure your diagnostic briefing. We will audit your current pipeline and deploy a customized strategy to scale without increasing advertising burn.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 shrink-0">
            {/* Urgency Scarcity Tracker */}
            <span className="text-xs font-mono uppercase tracking-[0.1em] text-accent text-left">
              Accepting only 2 partner portfolios for Q3
            </span>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-between gap-4 px-8 py-4 bg-accent hover:bg-accent-hover text-neutral-dark font-display font-black text-base uppercase tracking-wider rounded-none transition-tactile"
            >
              Book Blueprint Call
              <IconArrowUpRight size={20} stroke={2.5} />
            </Link>
          </div>
        </div>

        {/* Footer Directory links & Details */}
        <div className="flex flex-col md:flex-row justify-between gap-12 text-sm text-neutral-400">
          <div className="flex flex-col gap-4">
            <span className="font-display font-bold uppercase tracking-wider text-foreground">
              Shubham Pal
            </span>
            <span className="max-w-[30ch]">
              Frontend Systems Engineer & Conversion Optimization Consultant.
            </span>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-display font-bold uppercase tracking-wider text-foreground text-xs">
                Silos
              </span>
              <Link href="/ai-consulting" className="hover:text-foreground transition-colors">
                AI Optimization
              </Link>
              <Link href="/gtm-strategy" className="hover:text-foreground transition-colors">
                GTM Strategy
              </Link>
              <Link href="/cro-services" className="hover:text-foreground transition-colors">
                CRO Services
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-display font-bold uppercase tracking-wider text-foreground text-xs">
                Action Hub
              </span>
              <Link href="/book-call" className="hover:text-foreground transition-colors">
                Book Blueprint Call
              </Link>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home Overview
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center text-xs text-neutral-500 pt-8 border-t border-neutral-border/30">
          <span>&copy; {new Date().getFullYear()} Shubham Pal. All rights reserved.</span>
          <span>Security & Curation Assured</span>
        </div>
      </div>
    </footer>
  );
}
