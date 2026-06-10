"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

interface ATFHeroProps {
  eyebrow?: string;
  headline: string;
  subtext: string;
  ctaText: string;
  ctaHref?: string;
}

export function ATFHero({
  eyebrow,
  headline,
  subtext,
  ctaText,
  ctaHref = "/book-call",
}: ATFHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      },
    },
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center bg-neutral-dark px-6 md:px-12 py-24 border-b border-neutral-border overflow-hidden">
      {/* Background gradient texture - subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.05)_0%,transparent_60%)]" />
      </div>

      <motion.div
        className="relative max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Core Value Prop */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          {eyebrow && (
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent font-bold">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[4.5rem] font-display font-black tracking-[-0.03em] uppercase text-foreground leading-[0.95] max-w-[15ch]">
            {headline}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-neutral-400 text-lg leading-relaxed max-w-[45ch] text-left">
            {subtext}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-4">
            <Link href={ctaHref} className={buttonVariants({ variant: "default", size: "lg", className: "px-8 py-6 text-sm hover:-translate-y-[1px] transition-transform active:translate-y-[1px]" })}>
              {ctaText}
              <IconArrowRight size={16} stroke={2.5} className="ml-2" />
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Editorial Element */}
        <motion.div variants={itemVariants} className="lg:col-span-5 hidden lg:flex flex-col border border-neutral-border bg-neutral-900/50 p-8 relative self-end backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-2 h-2 bg-accent" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-border" />
          
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 border-b border-neutral-800 pb-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">System Priority</span>
              <span className="text-lg font-display font-black text-foreground uppercase tracking-wider">Zero Cognitive Friction</span>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-mono text-accent">90%</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">Flow Automated</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-mono text-foreground">2.4x</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">Deal Velocity</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
