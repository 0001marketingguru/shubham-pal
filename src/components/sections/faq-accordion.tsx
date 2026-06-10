"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
    <section className="w-full bg-neutral-dark border-b border-neutral-border py-24 md:py-32 px-6 md:px-12">
      <motion.div
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="lg:col-span-5 flex flex-col gap-6 max-w-[65ch]">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent font-bold">
              Objection Handling
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-[-0.03em] uppercase text-foreground leading-[0.95]">
            Answers before you ask
          </motion.h2>
        </div>

        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col border-t border-neutral-border">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-neutral-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-8 text-left group transition-colors"
                >
                  <span className={`text-xl md:text-2xl font-display font-bold uppercase tracking-wider transition-colors ${isOpen ? 'text-accent' : 'text-foreground group-hover:text-neutral-300'}`}>
                    {item.question}
                  </span>
                  <div className="shrink-0 ml-6 p-2 border border-neutral-border group-hover:border-neutral-500 transition-colors">
                    {isOpen ? <IconMinus size={20} className="text-accent" /> : <IconPlus size={20} className="text-foreground" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-400 text-lg leading-relaxed pb-8 max-w-[60ch]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
