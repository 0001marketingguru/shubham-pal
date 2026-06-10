"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Stripe", slug: "stripe" },
  { name: "Vercel", slug: "vercel" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Linear", slug: "linear" },
];

export function ProofStrip() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  if (typeof window !== "undefined") {
    // Inline client-only tracking used by motion hooks above.
  }

  return (
    <section className="w-full bg-neutral-dark border-b border-neutral-border py-16 md:py-24 px-6 md:px-12">
      <motion.div
        className="max-w-[1400px] mx-auto flex flex-col gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="flex flex-col gap-6 items-start">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-400">
            Trusted Infrastructure Integrations
          </span>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 items-center py-6 border-y border-neutral-border/50">
            {logos.map((logo) => (
              <div
                key={logo.slug}
                className="flex justify-center items-center h-12 grayscale transition-all duration-300"
                style={{ opacity: hoveredLogo === logo.slug ? 1 : 0.6 }}
                onMouseEnter={() => setHoveredLogo(logo.slug)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <img
                  src={`https://cdn.simpleicons.org/${logo.slug}/ffffff`}
                  alt={logo.name}
                  className="h-6 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
