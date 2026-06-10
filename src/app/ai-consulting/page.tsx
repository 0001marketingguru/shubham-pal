import { Metadata } from "next";
import { AIClient } from "@/components/clients/ai-client";

export const metadata: Metadata = {
  title: "AI Optimization | Shubham Pal",
  description: "Automate Operational Workflows and Scale Headcount-Free. We integrate vector pipelines, custom agents, and context-aware LLMs into your existing pipeline.",
};

export default function AIConsulting() {
  return <AIClient />;
}
