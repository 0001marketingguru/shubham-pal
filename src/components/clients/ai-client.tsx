"use client";

import { Navbar } from "@/components/sections/navbar";
import { ATFHero } from "@/components/sections/atf-hero";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Footer } from "@/components/sections/footer";
import { IconCpu, IconNetwork, IconFileDatabase } from "@tabler/icons-react";
import { motion, useReducedMotion } from "framer-motion";

export function AIClient() {
  const shouldReduceMotion = useReducedMotion();

  const faqItems = [
    {
      question: "Do you train custom models or use APIs?",
      answer: "We primarily build routing systems using enterprise APIs (OpenAI, Anthropic) combined with fine-tuned local models and Retrieval-Augmented Generation (RAG) databases depending on latency needs.",
    },
    {
      question: "Will our proprietary business data leak?",
      answer: "No. We establish isolated private API nodes. Your proprietary data is never sent to public training pools, and we integrate custom data filters before any token is processed.",
    },
    {
      question: "What operations can be automated?",
      answer: "We automate lead qualification, sales intake triage, contextual CRM updates, document indexing, and natural language customer communication systems.",
    },
  ];

  const benefits = [
    {
      icon: <IconCpu size={24} className="text-accent" />,
      title: "Context-Aware Agent Systems",
      desc: "Deploy autonomous bots that execute data lookups and CRM writes based on user emails, chats, or audio transcripts.",
    },
    {
      icon: <IconNetwork size={24} className="text-accent" />,
      title: "Intelligent Pipeline Routing",
      desc: "Route leads dynamically. Grade, tag, and assign incoming opportunities based on historical closes and custom AI classifiers.",
    },
    {
      icon: <IconFileDatabase size={24} className="text-accent" />,
      title: "Private Knowledge Bases",
      desc: "Connect your company's SOPs, logs, and contracts to a semantic search vector index to answer team queries instantly.",
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
          eyebrow="AI Optimization Silo"
          headline="Automate Operational Workflows and Scale Headcount-Free"
          subtext="Eliminate administrative drag. We integrate vector pipelines, custom agents, and context-aware LLMs into your existing pipeline."
          ctaText="Schedule AI Diagnostic"
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
                The Performance Vector
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-[-0.03em] uppercase text-foreground">
                Autonomous Lead & CRM Triage
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed text-left">
                Stop forcing engineers to manually copy data and qualify records. Our integrations listen to your active webhooks and run high-accuracy classification algorithms in milliseconds.
              </p>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {benefits.map((benefit) => (
                <motion.div
                  variants={itemVariants}
                  key={benefit.title}
                  className="flex flex-col md:flex-row gap-6 p-8 border border-neutral-border bg-neutral-muted relative"
                >
                  <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-border" />
                  <div className="p-3 border border-neutral-border bg-neutral-dark h-fit w-fit">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-display font-bold uppercase tracking-wider text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed text-left">
                      {benefit.desc}
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
