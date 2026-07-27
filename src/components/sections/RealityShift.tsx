"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

const steps = [
  { id: "01", label: "A lead arrives", detail: "Captured automatically from any channel." },
  { id: "02", label: "AI qualifies the enquiry", detail: "Instant scoring against your criteria." },
  { id: "03", label: "CRM updates automatically", detail: "No manual data entry. Ever." },
  { id: "04", label: "A proposal is prepared", detail: "Drafted and reviewed in seconds." },
  { id: "05", label: "A meeting is booked", detail: "Calendar synced, confirmation sent." },
  { id: "06", label: "Dashboard updates in real time", detail: "Full visibility. Zero effort." },
];

export function RealityShift() {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32 bg-[#09090b] overflow-hidden border-t border-white/5">

      {/* Ambient glow — right side */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e599]/6 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Vertical-stack header (no eyebrow — eyebrow budget spent) ── */}
        <div className="mb-16 lg:mb-20">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none mb-4 max-w-2xl"
          >
            Growth Should Add Revenue.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e599] via-emerald-200 to-zinc-400">
              Not More Repetitive Work.
            </span>
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-[52ch] leading-relaxed"
          >
            Imagine a business where your operations keep moving even when you are not watching.
          </motion.p>
        </div>

        {/* ── Asymmetric two-column layout (left: numbered steps, right: terminal OS card) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left — Numbered step list with connecting line */}
          <div className="lg:col-span-5 relative">
            {/* Vertical connector line */}
            <div className="absolute left-[1.375rem] top-8 bottom-8 w-px bg-gradient-to-b from-[#00e599]/40 via-[#00e599]/10 to-transparent pointer-events-none" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                  className="group relative flex items-start gap-5 pl-0 py-5"
                >
                  {/* Step dot */}
                  <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-[#00e599]/50 transition-colors duration-500">
                    <span className="font-mono text-[10px] text-zinc-500 group-hover:text-[#00e599] transition-colors duration-500">
                      {step.id}
                    </span>
                  </div>

                  {/* Step text */}
                  <div className="pt-2.5">
                    <p className="font-heading font-semibold text-white text-base leading-snug mb-1 group-hover:text-[#00e599] transition-colors duration-500">
                      {step.label}
                    </p>
                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Double-bezel OS terminal card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7 bg-white/5 p-2.5 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            {/* Inner core */}
            <div className="bg-zinc-950 rounded-[calc(2.5rem-0.625rem)] border border-white/5 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">

              {/* Terminal top bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-zinc-950">
                <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-[#00e599]/60" />
                <span className="ml-4 font-mono text-[11px] text-zinc-500 tracking-widest uppercase">
                  aurangy-os · live workflow
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#00e599]">RUNNING</span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="p-6 sm:p-8 font-mono text-sm space-y-3">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.id}
                    initial={reduce ? false : { opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.09, ease: [0.32, 0.72, 0, 1] }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#00e599] text-xs mt-0.5 flex-shrink-0">
                      <IconArrowRight size={12} stroke={2.5} />
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-zinc-300 text-xs leading-snug">
                        {step.label}
                      </span>
                      <span className="text-zinc-600 text-[11px] hidden sm:inline">·</span>
                      <span className="text-zinc-500 text-[11px]">
                        {step.detail}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* Blinking cursor at end */}
                <motion.div
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1 }}
                  className="flex items-center gap-2 pt-2"
                >
                  <span className="text-[#00e599] text-xs">
                    <IconArrowRight size={12} stroke={2.5} />
                  </span>
                  <span className="text-zinc-300 text-xs">All done.</span>
                  <span className="w-2 h-4 bg-[#00e599] animate-pulse rounded-[2px]" />
                </motion.div>

                {/* Status footer */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">
                    Execution time
                  </span>
                  <span className="text-[10px] text-[#00e599] font-mono font-bold">
                    2.3 seconds
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
