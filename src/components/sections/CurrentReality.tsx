"use client";

import { motion } from "framer-motion";
import { 
  IconAlertTriangle, 
  IconUsers, 
  IconClock, 
  IconFileText, 
  IconCircleX, 
  IconUserPlus, 
  IconFlame 
} from "@tabler/icons-react";

export function CurrentReality() {
  const painPoints = [
    { title: "More leads.", description: "Inbound volume increases, but qualification delays cause drop-offs.", icon: IconUsers },
    { title: "More follow-ups.", description: "Manual outreach slips through the cracks, leaving revenue behind.", icon: IconClock },
    { title: "More admin.", description: "Team hours wasted copying data across disconnected tools.", icon: IconFileText },
    { title: "More mistakes.", description: "Human errors compound as manual workloads double.", icon: IconCircleX },
    { title: "More hiring.", description: "Adding headcount to fix broken manual processes.", icon: IconUserPlus },
    { title: "More chaos.", description: "Operations become unpredictable and impossible to scale.", icon: IconFlame },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#09090b] overflow-hidden border-t border-white/5">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-rose-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Stack */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4"
          >
            <IconAlertTriangle size={12} className="text-amber-400" />
            <span>Operational Friction</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-2xl leading-none"
          >
            Does Growth Feel Like <br className="hidden sm:block" />
            <span className="text-zinc-400">More Work?</span>
          </motion.h2>
        </div>

        {/* 6 Pain Cards - Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="group bg-white/5 p-2 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <div className="h-full bg-zinc-950/90 rounded-[calc(2rem-0.5rem)] p-6 sm:p-8 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] group-hover:bg-zinc-900/90 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#00e599] group-hover:border-[#00e599]/30 transition-colors mb-6">
                      <Icon size={20} stroke={1.75} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Operational Debt Callout (Double-Bezel Hardware Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="bg-white/5 p-2 rounded-[2rem] border border-rose-500/20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 rounded-[calc(2rem-0.5rem)] p-8 sm:p-10 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 bg-rose-500/5 blur-3xl pointer-events-none" />
            <p className="font-heading text-lg sm:text-2xl font-semibold text-zinc-200 leading-snug relative z-10">
              For many businesses, growth doesn&apos;t create freedom. <br className="hidden sm:block" />
              <span className="text-rose-400 font-bold">It creates operational debt.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
