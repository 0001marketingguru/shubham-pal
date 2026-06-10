"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  IconCpu,
  IconChartLine,
  IconTargetArrow,
} from "@tabler/icons-react";

const steps = [
  {
    num: "01",
    title: "Diagnostic Call",
    description: "Book a 15-minute alignment briefing. We outline your funnel scope and operational bottlenecks.",
    icon: <IconCpu size={28} stroke={1.5} className="text-accent" />,
  },
  {
    num: "02",
    title: "Systems Audit",
    description: "We audit your backend CRM, GTM routing, and load latency to locate leakages.",
    icon: <IconChartLine size={28} stroke={1.5} className="text-accent" />,
  },
  {
    num: "03",
    title: "Infrastructure Deployment",
    description: "Deploy custom automated sales pipelines, high-converting silos, and optimized models.",
    icon: <IconTargetArrow size={28} stroke={1.5} className="text-accent" />,
  },
];

const logos = [
  { name: "Stripe", slug: "stripe" },
  { name: "Vercel", slug: "vercel" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Linear", slug: "linear" },
  { name: "OpenAI", slug: "openai" },
  { name: "Anthropic", slug: "anthropic" },
];

export function SocialProof() {
  const shouldReduceMotion = useReducedMotion();

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
    <section className="w-full bg-neutral-dark border-b border-neutral-border py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-32">
        {/* Marquee Logo Wall */}
        <div className="flex flex-col gap-8 w-full border-y border-neutral-border/50 py-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-dark to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-16 md:gap-24 min-w-max pr-16 md:pr-24"
              animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex justify-center items-center h-12 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <img
                    src={`https://cdn.simpleicons.org/${logo.slug}/ffffff`}
                    alt={logo.name}
                    className="h-7 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Asymmetric Protocol Grid */}
        <div className="px-6 md:px-12">
          <div className="flex flex-col gap-12">
            {/* Removed eyebrow per Eyebrow Restraint rule */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-[-0.03em] uppercase text-foreground max-w-[20ch]">
              How we deploy operational speed
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
              {/* Large Step 1 Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
                className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 border border-neutral-border bg-neutral-900/40 hover:-translate-y-[2px] transition-transform duration-500 group"
              >
                <div className="flex justify-between items-start mb-16">
                  <span className="text-6xl font-display font-black tracking-tighter text-neutral-800 group-hover:text-neutral-700 transition-colors">
                    {steps[0].num}
                  </span>
                  <div className="p-3 border border-neutral-border bg-neutral-dark">{steps[0].icon}</div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-foreground">
                    {steps[0].title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed text-left max-w-[40ch]">
                    {steps[0].description}
                  </p>
                </div>
              </motion.div>

              {/* Stacked Steps 2 & 3 */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {[steps[1], steps[2]].map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { 
                          type: "spring" as const,
                          stiffness: 100,
                          damping: 20,
                          delay: (i + 1) * 0.1 
                        },
                      },
                    }}
                    className="flex-1 flex flex-col justify-between p-8 border border-neutral-border bg-neutral-900/40 hover:-translate-y-[2px] transition-transform duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-border group-hover:bg-accent transition-colors" />
                    
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-4xl font-display font-black tracking-tighter text-neutral-800 group-hover:text-neutral-700 transition-colors">
                        {step.num}
                      </span>
                      <div className="p-2 border border-neutral-border bg-neutral-dark">{step.icon}</div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-display font-bold uppercase tracking-wider text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-neutral-400 text-base leading-relaxed text-left">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
