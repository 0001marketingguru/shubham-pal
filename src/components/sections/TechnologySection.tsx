"use client";

import { motion } from "framer-motion";
import { 
  IconCpu, 
  IconBrandOpenai, 
  IconBrandGoogle, 
  IconBrandSlack, 
  IconBrandNotion, 
  IconDatabase, 
  IconApi, 
  IconSparkles,
  IconCheck
} from "@tabler/icons-react";

export function TechnologySection() {
  const techStack = [
    { name: "OpenAI", category: "LLM Engine", icon: IconBrandOpenai },
    { name: "Claude", category: "Reasoning Models", icon: IconSparkles },
    { name: "Google Workspace", category: "Cloud & Mail", icon: IconBrandGoogle },
    { name: "Gemini", category: "Multi-Modal AI", icon: IconCpu },
    { name: "n8n", category: "Workflow Automation", icon: IconDatabase },
    { name: "HubSpot", category: "CRM Architecture", icon: IconDatabase },
    { name: "Slack", category: "Team Communication", icon: IconBrandSlack },
    { name: "Notion", category: "Knowledge Base", icon: IconBrandNotion },
    { name: "CRM Platforms", category: "Lead Routing", icon: IconDatabase },
    { name: "Custom APIs", category: "System Integration", icon: IconApi },
  ];

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#09090b] overflow-hidden border-t border-white/5">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#00e599]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4"
          >
            <IconCpu size={14} className="text-[#00e599]" />
            <span>TECHNOLOGY & INTEGRATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-none mb-4"
          >
            Built Using Industry-Leading AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl"
          >
            Our systems integrate with the tools businesses already trust.
          </motion.p>
        </div>

        {/* Double-Bezel Technology Grid Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="bg-white/5 p-3 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-5xl mx-auto"
        >
          <div className="bg-zinc-950/90 rounded-[calc(2.5rem-0.75rem)] p-8 sm:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}
                    className="group p-4 rounded-2xl bg-zinc-900/80 border border-white/5 hover:border-[#00e599]/30 hover:bg-zinc-900 transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#00e599] group-hover:scale-110 transition-all mb-3">
                      <Icon size={20} />
                    </div>
                    <span className="font-heading font-semibold text-xs text-white group-hover:text-[#00e599] transition-colors mb-1">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {tech.category}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Seamless Integration Guarantee */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <IconCheck size={16} className="text-[#00e599]" />
                <span>Zero disruption to existing tech stack</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheck size={16} className="text-[#00e599]" />
                <span>Custom API connectors & webhook bridges</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
