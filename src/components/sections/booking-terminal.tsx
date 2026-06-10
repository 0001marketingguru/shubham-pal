"use client";

import { useState } from "react";
import { IconShieldLock, IconDatabaseShare, IconLock } from "@tabler/icons-react";

export function BookingTerminal() {
  const [bottleneck, setBottleneck] = useState<string | null>(null);

  // Configuration: The GHL form embed URL. This can be easily replaced.
  // Using a standard leadconnector/ghl form URL placeholder.
  const ghlFormUrl = "https://api.leadconnectorhq.com/widget/form/mZfGvjK2f1K5k6MvUvS2"; 

  const bottlenecks = [
    { id: "ai", label: "AI Optimization", desc: "Automate manual workflows & model integrations." },
    { id: "gtm", label: "GTM Strategy", desc: "Map sales pipelines & clean customer routing." },
    { id: "cro", label: "CRO Services", desc: "Shatter friction points & optimize landing page flow." },
  ];

  return (
    <div className="w-full max-w-[900px] mx-auto bg-neutral-muted border border-neutral-border p-6 md:p-12 relative">
      {/* Asymmetric indicator */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-accent" />
      
      {/* Secure Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-8 border-b border-neutral-border mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent font-black">
            Secure Booking Terminal
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-black tracking-[-0.03em] uppercase text-foreground mt-2">
            Schedule Diagnostic Call
          </h2>
        </div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono uppercase rounded-none">
          <IconShieldLock size={14} stroke={2} />
          <span>Encrypted Connection</span>
        </div>
      </div>

      {/* Step 1: Curation Filter */}
      {!bottleneck ? (
        <div className="flex flex-col gap-6">
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed text-left">
            To unlock open calendar slots, select your primary operational bottleneck below:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bottlenecks.map((item) => (
              <button
                key={item.id}
                onClick={() => setBottleneck(item.id)}
                className="flex flex-col gap-3 p-6 border border-neutral-border bg-neutral-dark text-left hover:border-accent hover:bg-neutral-muted transition-all duration-200 group relative cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-neutral-border group-hover:bg-accent transition-colors" />
                <span className="font-display font-bold text-sm uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">
                  {item.label}
                </span>
                <span className="text-xs text-neutral-400 leading-normal">
                  {item.desc}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4 text-xs text-neutral-500">
            <IconLock size={14} stroke={2} />
            <span>Information is processed strictly under our Data Security Protocol.</span>
          </div>
        </div>
      ) : (
        /* Step 2: GHL Embed Frame */
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-400">
              <span>Selected Segment:</span>
              <span className="text-accent font-black">
                {bottlenecks.find((b) => b.id === bottleneck)?.label}
              </span>
            </div>
            
            <button
              onClick={() => setBottleneck(null)}
              className="text-xs font-mono uppercase text-neutral-500 hover:text-foreground underline underline-offset-4"
            >
              Change Bottleneck
            </button>
          </div>

          {/* GoHighLevel Form Embed Container */}
          <div className="w-full min-h-[500px] border border-neutral-border bg-white rounded-none overflow-hidden relative">
            <iframe
              src={ghlFormUrl}
              style={{ width: "100%", height: "100%", minHeight: "500px", border: "none" }}
              id="ghl-form-iframe"
              title="GoHighLevel Intake Form"
              className="w-full"
            />
          </div>

          {/* Secure Trust Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-neutral-border/50 bg-neutral-dark/40 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <IconDatabaseShare size={16} stroke={1.5} className="text-accent" />
              <span>Zero-leakage contact database. We never sell your corporate data.</span>
            </div>
            
            <span className="font-mono text-[10px] text-neutral-500 uppercase">
              Compliance Standard: SOC2 / GDPR Certified
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
