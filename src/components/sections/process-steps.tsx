"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  IconPhoneCall,
  IconReportAnalytics,
  IconSettingsAutomation,
  IconChevronRight,
} from "@tabler/icons-react";

const steps = [
  {
    num: "01",
    title: "Diagnostic Call",
    description: "Book a 15-minute alignment briefing. We outline your funnel scope and operational bottlenecks.",
    icon: <IconPhoneCall size={28} stroke={1.5} className="text-accent" />,
  },
  {
    num: "02",
    title: "Systems Audit",
    description: "We audit your backend CRM, GTM routing, and load latency to locate leakages.",
    icon: <IconReportAnalytics size={28} stroke={1.5} className="text-accent" />,
  },
  {
    num: "03",
    title: "Infrastructure Deployment",
    description: "Deploy custom automated sales pipelines, high-converting silos, and optimized models.",
    icon: <IconSettingsAutomation size={28} stroke={1.5} className="text-accent" />,
  },
];

export function ProcessSteps() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full bg-neutral-dark border-b border-neutral-border py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
        <motion.div
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col gap-4 max-w-[65ch]">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-black">
              The Protocol
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-[-0.03em] uppercase text-foreground">
              How we deploy operational speed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="relative flex flex-col gap-6 p-8 border border-neutral-border bg-neutral-muted hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-border group-hover:bg-accent transition-colors" />
                <div className="flex justify-between items-start">
                  <span className="text-4xl font-display font-black tracking-tighter text-neutral-600 group-hover:text-accent/50 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2 border border-neutral-border bg-neutral-dark">{step.icon}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed text-left">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-1 bg-neutral-dark border border-neutral-border rounded-full text-neutral-400">
                    <IconChevronRight size={16} stroke={2} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
