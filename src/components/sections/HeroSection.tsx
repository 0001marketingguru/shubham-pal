"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconTerminal2, IconCpu, IconSparkles } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] pt-20 pb-12 flex items-center justify-center bg-[#09090b] overflow-hidden bg-grid-pattern">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00e599]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column (Max 4 Text Elements) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Text Element 1: Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse" />
              <span className="text-zinc-300 font-medium">AI SYSTEMS ARCHITECT & FULL-STACK ENGINEER</span>
            </motion.div>

            {/* Text Element 2: Headline (Max 2 Lines Desktop) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-6"
            >
              Building Autonomous AI Systems <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e599] via-emerald-300 to-teal-100">
                & Digital Infrastructure
              </span>
            </motion.h1>

            {/* Text Element 3: Subtext (17 Words - Max 20 Words Rule) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-[54ch] mb-8"
            >
              Engineered for technical founders and high-growth teams demanding zero cognitive friction and maximum operational throughput.
            </motion.p>

            {/* Text Element 4: Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#systems"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00e599] text-[#09090b] font-bold text-xs uppercase tracking-wider hover:bg-[#1cf0aa] transition-all hover:scale-[0.98] active:scale-[0.96] shadow-[0_0_25px_rgba(0,229,153,0.2)]"
              >
                <span>Explore Systems</span>
                <IconArrowRight size={16} stroke={2.5} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 text-zinc-200 border border-white/10 font-medium text-xs uppercase tracking-wider hover:bg-zinc-800 hover:border-white/20 transition-all hover:scale-[0.98] active:scale-[0.96]"
              >
                <span>Schedule Briefing</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Live Interactive System Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-zinc-950/90 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <IconTerminal2 size={14} className="text-[#00e599]" />
                  <span>runtime.shubham.pal</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-[#00e599] border border-[#00e599]/30">
                  ONLINE
                </span>
              </div>

              {/* Terminal Execution Output */}
              <div className="space-y-3 font-mono text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <span className="text-[#00e599]">$</span>
                  <span>init agent_cluster --model=qwen3-72b</span>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/80 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <IconCpu size={14} className="text-[#00e599]" /> Memory Pipeline
                    </span>
                    <span className="text-[#00e599] font-bold">1536 dim / pgvector</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#00e599] h-full w-[84%] rounded-full" />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/80 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <IconSparkles size={14} className="text-[#00e599]" /> Active Agent
                    </span>
                    <span className="text-zinc-200">Execution Node #04</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    Processing multi-modal inputs, intent parsing, automated tool synthesis.
                  </p>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>LATENCY: 42ms</span>
                  <span>THROUGHPUT: 1.2k req/s</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
