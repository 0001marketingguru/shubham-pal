"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  IconCpu,
  IconChartLine,
  IconTargetArrow,
  IconArrowRight,
} from "@tabler/icons-react";

const silos = [
  {
    id: "ai",
    title: "AI Optimization",
    desc: "Remove human operational bottlenecks. We build custom language models, vector search routing, and API agents to automate lead grading, booking qualification, and custom workflows.",
    href: "/ai-consulting",
    icon: <IconCpu size={24} className="text-accent" />,
    metric: "90% Flow Automated",
  },
  {
    id: "gtm",
    title: "GTM Strategy",
    desc: "Architect a clean pipeline. We map, clean, and align your marketing channels, lead routing logic, database entries, and CRM stages for maximum transparency and speed.",
    href: "/gtm-strategy",
    icon: <IconChartLine size={24} className="text-accent" />,
    metric: "2.4x Deal Velocity",
  },
  {
    id: "cro",
    title: "Conversion Optimization",
    desc: "Shatter cognitive friction. We write conversion copy, design asymmetric layouts, and eliminate latency bottlenecks to maximize traffic yield without increasing ad spend.",
    href: "/cro-services",
    icon: <IconTargetArrow size={24} className="text-accent" />,
    metric: "18% Avg Funnel Lift",
  },
];

export function PrimarySilos() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="w-full bg-neutral-dark border-b border-neutral-border py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto flex flex-col gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-6 max-w-[65ch]">
          {/* Eyebrow removed - Eyebrow Restraint Rule */}
          <h2 className="text-5xl md:text-6xl font-display font-black tracking-[-0.03em] uppercase text-foreground">
            Decoupled Systems For Scaling
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          
          {/* Tile 1: AI (Col 7) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col">
            <div className="flex-1 flex flex-col justify-between p-8 md:p-10 border border-neutral-border bg-neutral-900/40 hover:-translate-y-[2px] transition-transform duration-500 group relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-accent" />
              
              <div className="flex flex-col gap-12">
                <div className="flex justify-between items-start">
                  <div className="p-3 border border-neutral-border bg-neutral-dark">{silos[0].icon}</div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 bg-neutral-dark border border-neutral-border px-3 py-1">
                    {silos[0].metric}
                  </span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-foreground">
                    {silos[0].title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed text-left max-w-[45ch]">
                    {silos[0].desc}
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <Link href={silos[0].href} className="inline-flex items-center text-sm font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                  Explore AI Protocol
                  <IconArrowRight size={16} stroke={2} className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: GTM (Col 5) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col">
            <div className="flex-1 flex flex-col justify-between p-8 md:p-10 border border-neutral-border bg-neutral-900/40 hover:-translate-y-[2px] transition-transform duration-500 group relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-border group-hover:bg-accent transition-colors" />
              
              <div className="flex flex-col gap-12">
                <div className="flex justify-between items-start">
                  <div className="p-3 border border-neutral-border bg-neutral-dark">{silos[1].icon}</div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 bg-neutral-dark border border-neutral-border px-3 py-1">
                    {silos[1].metric}
                  </span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-foreground">
                    {silos[1].title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed text-left">
                    {silos[1].desc}
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <Link href={silos[1].href} className="inline-flex items-center text-sm font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                  View Pipelines
                  <IconArrowRight size={16} stroke={2} className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Tile 3: CRO (Col 12, Background Diversity) */}
          <motion.div variants={itemVariants} className="lg:col-span-12 flex flex-col">
            <div className="relative flex-1 flex flex-col justify-between p-8 md:p-12 border border-neutral-border bg-neutral-900 overflow-hidden hover:-translate-y-[2px] transition-transform duration-500 group">
              {/* Background variation for diversity */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-border group-hover:bg-accent transition-colors z-10" />
              
              <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between relative z-10">
                <div className="flex flex-col gap-10 max-w-[65ch]">
                  <div className="p-3 border border-neutral-border bg-neutral-dark w-fit">{silos[2].icon}</div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-display font-bold uppercase tracking-wider text-foreground">
                      {silos[2].title}
                    </h3>
                    <p className="text-neutral-400 text-lg leading-relaxed text-left">
                      {silos[2].desc}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-8 lg:items-end">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 bg-neutral-dark border border-neutral-border px-4 py-2 w-fit">
                    {silos[2].metric}
                  </span>
                  <Link href={silos[2].href} className={buttonVariants({ variant: "default", size: "lg", className: "px-8 py-6 text-sm hover:-translate-y-[1px] transition-transform" })}>
                    Audit Conversion Assets
                    <IconArrowRight size={16} stroke={2.5} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
