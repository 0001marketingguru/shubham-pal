"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";

const phases = [
  {
    id: "01",
    tag: "AUDIT",
    title: "Map Every Friction Point.",
    description:
      "We analyse every manual process in your business and identify exactly where AI automation creates the highest return. No guesswork. A clear report delivered at the end.",
    timeline: "3 to 5 days",
    deliverable: "Discovery Report",
    accentOpacity: "opacity-[0.06]",
    shadowClass: "shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
  },
  {
    id: "02",
    tag: "BUILD",
    title: "Architect Your AI System.",
    description:
      "We design and deploy your custom AI operating system — connecting your existing tools, automating repetitive workflows, and removing the manual bottlenecks holding your growth back.",
    timeline: "2 to 3 weeks",
    deliverable: "Live AI System",
    accentOpacity: "opacity-[0.08]",
    shadowClass: "shadow-[0_16px_60px_rgba(0,0,0,0.55)]",
  },
  {
    id: "03",
    tag: "DEPLOY",
    title: "Go Live and Scale.",
    description:
      "Your system goes live. We train your team, monitor performance in real time, and refine every workflow as your business scales — so growth never creates chaos again.",
    timeline: "Ongoing support",
    deliverable: null,
    accentOpacity: "opacity-[0.1]",
    shadowClass: "shadow-[0_24px_80px_rgba(0,0,0,0.65)]",
    isFinal: true,
  },
];

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32 bg-[#09090b] overflow-hidden border-t border-white/5">

      {/* Radial ambient — left side */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00e599]/5 blur-[150px] rounded-full pointer-events-none" />
      {/* Radial ambient — right bottom */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00e599]/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <div className="mb-16 lg:mb-20">

          {/* Eyebrow */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] animate-pulse" />
            <span>Our Process</span>
          </motion.div>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
            className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-none mb-4"
          >
            From Discovery
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e599] via-emerald-200 to-zinc-400">
              to Deployment.
            </span>
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-[48ch] leading-relaxed"
          >
            Three deliberate steps. No wasted time, no mystery.
          </motion.p>
        </div>

        {/* ── Z-Axis Cascade Cards ── */}
        <div className="flex flex-col gap-0">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: i * 0.14,
              }}
              /* Z-Axis Cascade: each card pulls up to overlap the previous */
              className={`relative ${i > 0 ? "-mt-6" : ""}`}
              style={{ zIndex: i + 1 }}
              whileHover={reduce ? {} : { scale: 1.012, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } }}
            >
              {/* Outer shell (Double-Bezel) */}
              <div
                className={`bg-white/5 p-2.5 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-colors duration-700 ${phase.shadowClass}`}
              >
                {/* Inner core */}
                <div className="relative bg-zinc-950/95 rounded-[calc(2.5rem-0.625rem)] overflow-hidden border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">

                  {/* Watermark phase number */}
                  <div
                    className={`absolute top-4 right-6 font-heading font-bold text-[96px] leading-none text-white select-none pointer-events-none ${phase.accentOpacity}`}
                  >
                    {phase.id}
                  </div>

                  {/* Card content */}
                  <div className="relative z-10 p-7 sm:p-10">

                    {/* Top row: phase tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#00e599]">
                        {phase.tag}
                      </div>
                      {phase.deliverable && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00e599]/10 border border-[#00e599]/20 text-[10px] font-mono text-[#00e599] tracking-wide">
                          <IconCheck size={10} stroke={2.5} />
                          {phase.deliverable}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 leading-snug">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-[52ch] mb-7">
                      {phase.description}
                    </p>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Timeline</span>
                        <span className="text-[10px] font-mono text-zinc-300 bg-zinc-900 border border-white/10 rounded-full px-2.5 py-0.5">
                          {phase.timeline}
                        </span>
                      </div>

                      {/* CTA only on final card */}
                      {phase.isFinal && (
                        <a
                          href="https://cal.com/shubhampal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#00e599] text-[#09090b] font-bold text-[11px] uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#1cf0aa] hover:scale-[0.98] active:scale-[0.96] shadow-[0_0_24px_rgba(0,229,153,0.2)]"
                        >
                          <span>Book a Call</span>
                          <div className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
                            <IconArrowUpRight size={14} stroke={2.5} />
                          </div>
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
