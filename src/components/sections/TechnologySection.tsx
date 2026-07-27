"use client";

import { motion } from "framer-motion";
import { IconBrandOpenai, IconBrandSlack } from "@tabler/icons-react";
import React from "react";

/* ─── Lettermark SVG for tools without Simple Icons entries ─── */
function Lettermark({ letter }: { letter: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect width="22" height="22" rx="6" fill="white" fillOpacity="0.12" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
      >
        {letter}
      </text>
    </svg>
  );
}

/* ─── Single tool chip ─── */
function ToolChip({
  name,
  slug,
  lettermark,
  icon: IconComponent,
}: {
  name: string;
  slug?: string;
  lettermark?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="group flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-2.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#00e599]/40 hover:bg-white/[0.07] transition-all duration-500 cursor-default select-none">
      <div className="w-[22px] h-[22px] flex items-center justify-center flex-shrink-0">
        {IconComponent ? (
          <IconComponent size={20} className="text-zinc-400 group-hover:text-white transition-colors duration-500" />
        ) : slug ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.simpleicons.org/${slug}/ffffff`}
            alt={name}
            width={22}
            height={22}
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
        ) : (
          <Lettermark letter={lettermark ?? "?"} />
        )}
      </div>
      <span className="text-zinc-300 text-sm font-medium whitespace-nowrap group-hover:text-white transition-colors duration-500">
        {name}
      </span>
    </div>
  );
}

/* ─── Tool lists ─── */
const row1: { name: string; slug?: string; lettermark?: string; icon?: React.ElementType }[] = [
  { name: "ChatGPT",      icon: IconBrandOpenai },
  { name: "Claude",       slug: "anthropic" },
  { name: "Gemini",       slug: "googlegemini" },
  { name: "Perplexity",   slug: "perplexity" },
  { name: "ElevenLabs",   slug: "elevenlabs" },
  { name: "Mistral",      slug: "mistralai" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "Zapier",       slug: "zapier" },
];

const row2: { name: string; slug?: string; lettermark?: string; icon?: React.ElementType }[] = [
  { name: "n8n",        slug: "n8n" },
  { name: "Make",       slug: "make" },
  { name: "Kling",      lettermark: "K" },
  { name: "Higgsfield", lettermark: "H" },
  { name: "Runway",     lettermark: "R" },
  { name: "Grok",       lettermark: "x" },
  { name: "Notion",     slug: "notion" },
  { name: "Slack",      icon: IconBrandSlack },
];

export function TechnologySection() {
  return (
    <section
      id="why-us"
      className="relative py-20 lg:py-28 bg-[#09090b] overflow-hidden border-t border-white/5"
    >
      {/* Ambient glow behind the strips */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[260px] bg-[#00e599]/5 blur-[130px] rounded-full pointer-events-none" />

      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="font-mono text-[11px] text-[#00e599] uppercase tracking-[0.22em] mb-4"
        >
          Powered By
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
        >
          The Stack Behind the System
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
          className="text-base text-zinc-500 max-w-md mx-auto"
        >
          Leading AI models and automation platforms working together inside every workflow.
        </motion.p>
      </div>

      {/* ── Row 1 — scrolls LEFT ── */}
      <div
        className="marquee-track relative overflow-hidden mb-4"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee-left w-max py-2">
          {[...row1, ...row1].map((tool, i) => (
            <ToolChip key={`r1-${i}`} {...tool} />
          ))}
        </div>
      </div>

      {/* ── Row 2 — scrolls RIGHT ── */}
      <div
        className="marquee-track relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee-right w-max py-2">
          {[...row2, ...row2].map((tool, i) => (
            <ToolChip key={`r2-${i}`} {...tool} />
          ))}
        </div>
      </div>

      {/* ── Bottom stat strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
          {[
            { value: "14+", label: "AI platforms integrated" },
            { value: "Zero", label: "disruption to your current stack" },
            { value: "100%", label: "custom to your workflow" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
