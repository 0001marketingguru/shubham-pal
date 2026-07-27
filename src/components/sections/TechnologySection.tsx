"use client";

import { motion } from "framer-motion";

/* ─── Lettermark SVG for tools without Simple Icons entries ─── */
function Lettermark({ letter, color = "#ffffff" }: { letter: string; color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="5" fill="white" fillOpacity="0.08" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill={color}
        fontSize="11"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
      >
        {letter}
      </text>
    </svg>
  );
}

/* ─── Tool logo chip ─── */
function ToolChip({
  name,
  slug,
  lettermark,
}: {
  name: string;
  slug?: string;
  lettermark?: string;
}) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00e599]/30 hover:bg-white/8 transition-all duration-300 cursor-default select-none mx-3">
      {slug ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt=""
          width={18}
          height={18}
          className="opacity-80"
        />
      ) : (
        <Lettermark letter={lettermark ?? "?"} />
      )}
      <span className="font-mono text-[11px] text-zinc-300 whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

/* ─── Tool lists ─── */
const row1: { name: string; slug?: string; lettermark?: string }[] = [
  { name: "ChatGPT",      slug: "openai" },
  { name: "Claude",       slug: "anthropic" },
  { name: "Gemini",       slug: "googlegemini" },
  { name: "Perplexity",   slug: "perplexity" },
  { name: "ElevenLabs",   slug: "elevenlabs" },
  { name: "Mistral",      slug: "mistralai" },
  { name: "Hugging Face", slug: "huggingface" },
];

const row2: { name: string; slug?: string; lettermark?: string }[] = [
  { name: "n8n",          slug: "n8n" },
  { name: "Make",         slug: "make" },
  { name: "Zapier",       slug: "zapier" },
  { name: "Kling",        lettermark: "K" },
  { name: "Higgsfield",   lettermark: "H" },
  { name: "Runway",       lettermark: "R" },
  { name: "Grok",         lettermark: "x" },
];

export function TechnologySection() {
  return (
    <section
      id="why-us"
      className="relative py-16 lg:py-20 bg-[#09090b] overflow-hidden border-t border-white/5"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-[#00e599]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2"
        >
          The Stack Behind the System
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
          className="text-sm text-zinc-500 font-mono"
        >
          AI tools and automation platforms powering every workflow.
        </motion.p>
      </div>

      {/* ── Row 1 — scrolls LEFT ── */}
      <div
        className="marquee-track relative overflow-hidden mb-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee-left w-max">
          {/* Set A */}
          {row1.map((tool) => (
            <ToolChip key={`a-${tool.name}`} {...tool} />
          ))}
          {/* Set B — duplicate for seamless loop */}
          {row1.map((tool) => (
            <ToolChip key={`b-${tool.name}`} {...tool} />
          ))}
        </div>
      </div>

      {/* ── Row 2 — scrolls RIGHT ── */}
      <div
        className="marquee-track relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee-right w-max">
          {/* Set A */}
          {row2.map((tool) => (
            <ToolChip key={`a-${tool.name}`} {...tool} />
          ))}
          {/* Set B — duplicate for seamless loop */}
          {row2.map((tool) => (
            <ToolChip key={`b-${tool.name}`} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
