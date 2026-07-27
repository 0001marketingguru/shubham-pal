"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  IconArrowUpRight, 
  IconLayersSubtract, 
  IconUserCheck, 
  IconCalendarEvent, 
  IconPhoneCall, 
  IconShoppingCart, 
  IconArticle, 
  IconChartBar 
} from "@tabler/icons-react";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Lead Generation System",
      description: "Capture, qualify, and organise every enquiry automatically.",
      image: "/images/lead-gen.png",
      tag: "WhatsApp & CRM Pipeline",
      icon: IconUserCheck,
    },
    {
      title: "Sales System",
      description: "Automate proposals, follow-ups, reminders, and CRM updates.",
      image: "/images/appointment.png",
      tag: "Appointment Booking & n8n",
      icon: IconCalendarEvent,
    },
    {
      title: "Customer Support System",
      description: "Answer common questions instantly and route complex requests to your team.",
      image: "/images/ai-calling.png",
      tag: "AI Voice & Calling Workflow",
      icon: IconPhoneCall,
    },
    {
      title: "Operations System",
      description: "Remove repetitive internal tasks and improve team productivity.",
      image: "/images/ecommerce.png",
      tag: "Order & Ops Automation",
      icon: IconShoppingCart,
    },
    {
      title: "Content System",
      description: "Generate, review, schedule, and manage marketing content faster.",
      image: "/images/content.png",
      tag: "Content OS Workflow Builder",
      icon: IconArticle,
    },
    {
      title: "Reporting System",
      description: "Get real-time business insights without manual reporting.",
      image: "/images/social-media.png",
      tag: "Automated Social & Analytics OS",
      icon: IconChartBar,
    },
  ];

  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-[#09090b] overflow-hidden border-t border-white/5">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#00e599]/5 blur-[150px] rounded-full pointer-events-none" />

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
            <IconLayersSubtract size={14} className="text-[#00e599]" />
            <span>SOLUTIONS & WORKFLOW EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-none mb-4"
          >
            AI Systems Built For Real Business Operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl"
          >
            Engineered workflows that replace manual effort with intelligent, reliable execution.
          </motion.p>
        </div>

        {/* 6 Solutions Cards (Double-Bezel Hardware Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="group bg-white/5 p-2.5 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col justify-between"
              >
                {/* Inner Core Container */}
                <div className="bg-zinc-950 rounded-[calc(2.5rem-0.625rem)] overflow-hidden p-5 flex flex-col justify-between h-full border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                  
                  {/* Workflow Image Preview */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-zinc-900 border border-white/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#00e599]">
                      {item.tag}
                    </div>
                  </div>

                  {/* Solution Meta & Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#00e599]">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 group-hover:text-white transition-colors">
                      Automate Workflow
                    </span>
                    <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#00e599] group-hover:border-[#00e599]/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <IconArrowUpRight size={14} />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
