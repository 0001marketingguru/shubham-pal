"use client";

import Link from "next/link";
import { BookingTerminal } from "@/components/sections/booking-terminal";
import { IconArrowLeft } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BookCallClient() {
  return (
    <main className="flex-grow flex flex-col justify-center items-center min-h-dvh bg-neutral-dark px-6 py-12 relative">
      
      {/* Structural grid line styling to match premium aesthetics */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-r border-neutral-border h-full last:border-r-0" />
        ))}
      </div>

      {/* Traffic Leak Shield Minimal Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[900px] flex justify-between items-center mb-8 z-10"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-neutral-400 hover:text-foreground transition-colors group">
          <IconArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Exit Terminal</span>
        </Link>
        
        <span className="text-sm font-display font-black tracking-[-0.03em] uppercase text-neutral-500">
          Shubham Pal
        </span>
      </motion.div>

      {/* The Curation Terminal with GHL Form Embed */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full z-10"
      >
        <BookingTerminal />
      </motion.div>

      {/* Traffic Leak Shield Minimal Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative w-full max-w-[900px] flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 text-[10px] text-neutral-600 font-mono uppercase z-10"
      >
        <span>© {new Date().getFullYear()} Shubham Pal</span>
        <span>Secure lead-connector sandbox integration</span>
      </motion.div>
      
    </main>
  );
}
