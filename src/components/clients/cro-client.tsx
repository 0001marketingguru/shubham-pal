"use client";

import { Navbar } from "@/components/sections/navbar";
import { ATFHero } from "@/components/sections/atf-hero";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Footer } from "@/components/sections/footer";
import { IconTargetArrow, IconDevices, IconGauge } from "@tabler/icons-react";
import { motion, useReducedMotion } from "framer-motion";

export function CROClient() {
  const shouldReduceMotion = useReducedMotion();

  const faqItems = [
    {
      question: "Do you focus on design tweaks or conversion copy?",
      answer: "Conversion copy is the structural backbone. We write direct-response copy that addresses objections before designing layouts, ensuring the styling supports the arguments, not the other way around.",
    },
    {
      question: "How do you achieve fast loading times?",
      answer: "We build strictly on static-site frameworks (Next.js), compile stylesheets down using Tailwind v4, optimize server-side image compression, and completely ban heavy tracking scripts that bog down mobile rendering.",
    },
    {
      question: "Do you run A/B tests?",
      answer: "For high-ticket service companies, traffic volume is often low but intent is extremely high. Instead of waiting months for generic A/B tests to resolve, we run aggressive structural audits and deploy validated layouts directly.",
    },
  ];

  const highlights = [
    {
      icon: <IconTargetArrow size={24} className="text-accent" />,
      title: "Direct-Response Copywriting",
      desc: "Stop using boring marketing buzzwords. We write outcome-oriented headlines and clean objection-handling faq blocks that speak directly to analytical business owners.",
    },
    {
      icon: <IconDevices size={24} className="text-accent" />,
      title: "Asymmetrical Responsive Layouts",
      desc: "We build custom interfaces that break traditional safe boxes. Our layouts are engineered mobile-first to eliminate horizontal scrolling issues and container overflow.",
    },
    {
      icon: <IconGauge size={24} className="text-accent" />,
      title: "Vapor-Latency Optimization",
      desc: "Sub-second loading speeds. We enforce structural code efficiency, hardware-accelerated transitions, and dynamic code-splitting to minimize core web vital lag.",
    },
  ];

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
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const } 
    },
  };

  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        <ATFHero
          eyebrow="Conversion Optimization Silo"
          headline="Shatter Funnel Friction Points and Capture Ready Buyers"
          subtext="Unlock maximum conversion yield. We rewrite sales arguments, design high-end asymmetrical viewports, and optimize page speeds."
          ctaText="Schedule Funnel Audit"
          ctaHref="/book-call"
        />

        <section className="w-full bg-neutral-dark border-b border-neutral-border py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-black">
                The Conversion Vector
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-[-0.03em] uppercase text-foreground">
                Copy-Led Visual Engineering
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed text-left">
                analytical entrepreneurs buy based on clear logic and structural confidence. We combine premium dark-mode visual aesthetics, left-aligned prose spacing, and clear data-security badges to remove all friction.
              </p>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {highlights.map((feat) => (
                <motion.div
                  variants={itemVariants}
                  key={feat.title}
                  className="flex flex-col md:flex-row gap-6 p-8 border border-neutral-border bg-neutral-muted relative"
                >
                  <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-border" />
                  <div className="p-3 border border-neutral-border bg-neutral-dark h-fit w-fit">
                    {feat.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-display font-bold uppercase tracking-wider text-foreground">
                      {feat.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed text-left">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        <FAQAccordion items={faqItems} />
      </main>

      <Footer />
    </>
  );
}
