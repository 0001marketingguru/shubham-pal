"use client";

import { Navbar } from "@/components/sections/navbar";
import { ATFHero } from "@/components/sections/atf-hero";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Footer } from "@/components/sections/footer";
import { IconChartLine, IconRoute, IconMapSearch } from "@tabler/icons-react";
import { motion, useReducedMotion } from "framer-motion";

export function GTMClient() {
  const shouldReduceMotion = useReducedMotion();

  const faqItems = [
    {
      question: "Which CRMs do you support?",
      answer: "We support Hubspot, Salesforce, Close, and GoHighLevel. We specialize in custom API routing layers when default CRM integrations create double entries or data delay.",
    },
    {
      question: "How do you handle multi-touch attribution?",
      answer: "We deploy server-side tracking pipelines using Cloudflare Workers. This captures first-party click IDs directly and bypasses browser ad-blockers for accurate pipeline mapping.",
    },
    {
      question: "Do you build the sales copy or just the technical plumbing?",
      answer: "We build both. A pipeline is useless without copy that structures buyer progression. We design the conversion scripts and technical routing side-by-side.",
    },
  ];

  const features = [
    {
      icon: <IconRoute size={24} className="text-accent" />,
      title: "Clean Lead Routing Pipelines",
      desc: "Stop letting leads rot in the inbox. We build instant round-robin systems, urgency escalators, and Slack alerts to ensure a response within 2 minutes.",
    },
    {
      icon: <IconMapSearch size={24} className="text-accent" />,
      title: "Funnel Attribution Systems",
      desc: "Get absolute transparency. Track exactly which ad click, email newsletter, or organic post generated your high-ticket booking with server-side cookies.",
    },
    {
      icon: <IconChartLine size={24} className="text-accent" />,
      title: "CRM Lifecycle Optimization",
      desc: "We clean your pipeline stages, remove legacy custom fields that slow down loading, and construct automated lead progression paths.",
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
          eyebrow="GTM Strategy Silo"
          headline="Align Marketing and Sales into One High-Velocity Pipeline"
          subtext="Eliminate leakage. We clean and structure your CRM nodes, lead routing, and server-side traffic attribution."
          ctaText="Schedule GTM Diagnostic"
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
                The Revenue Engine
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-[-0.03em] uppercase text-foreground">
                Decoupled Funnel Mapping
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed text-left">
                analytical business leaders suffer from broken analytics and disjointed data. We connect your advertising platform click IDs directly to bottom-funnel CRM sales records, giving you absolute scaling confidence.
              </p>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feat) => (
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
