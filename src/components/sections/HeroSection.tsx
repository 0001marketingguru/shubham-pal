"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconCpu, IconCheck } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 flex items-center justify-center bg-[#09090b] overflow-hidden bg-grid-pattern">
      
      {/* Ambient Lighting & Mesh Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#00e599]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-[11px] font-mono tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse" />
              <span className="text-zinc-200 font-medium">AI OPERATING SYSTEMS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6"
            >
              Your Business Should Grow. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e599] via-emerald-200 to-zinc-400">
                Not Your Workload.
              </span>
            </motion.h1>

            {/* Verbatim Body Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-[56ch] mb-8"
            >
              Most businesses don&apos;t struggle because they need more people. They struggle because every new customer creates more manual work. We build AI-powered operating systems that automate repetitive tasks, remove operational bottlenecks, and help your business grow without adding unnecessary complexity.
            </motion.p>

            {/* Primary Action CTA (Button-in-Button Architecture) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2.5 rounded-full bg-[#00e599] text-[#09090b] font-bold text-xs uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#1cf0aa] hover:scale-[0.98] active:scale-[0.96] shadow-[0_0_30px_rgba(0,229,153,0.25)]"
              >
                <span>Book Your AI Strategy Session</span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-[#09090b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <IconArrowUpRight size={16} stroke={2.5} />
                </div>
              </a>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <IconCheck size={14} className="text-[#00e599]" />
                <span>Zero Technical Friction</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheck size={14} className="text-[#00e599]" />
                <span>Custom Integration</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Double-Bezel Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5"
          >
            {/* Outer Shell (Double-Bezel) */}
            <div className="bg-white/5 p-2.5 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl relative">
              
              {/* Inner Core Enclosure */}
              <div className="relative rounded-[calc(2.5rem-0.625rem)] overflow-hidden bg-zinc-950 border border-white/10 aspect-[4/5]">
                
                {/* Personal Brand Image */}
                <Image
                  src="/images/shubham_pal.png"
                  alt="Shubham Pal — Founder & Systems Architect at Aurangy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />

                {/* Dark Gradient Scrim Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                {/* Micro Floating Founder Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00e599]" />
                    <span className="text-[10px] font-mono text-zinc-200 tracking-wide uppercase">
                      SHUBHAM PAL
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#00e599]">
                    <IconCpu size={14} />
                  </div>
                </div>

                {/* Bottom Overlay Info Box */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-white/10 z-10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#00e599] font-bold">SYSTEMS ARCHITECT</span>
                    <span className="text-zinc-400 text-[10px]">AURANGY OS</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-tight">
                    Designing intelligent workflows that make business growth effortless.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
