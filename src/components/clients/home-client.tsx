"use client";

import { Navbar } from "@/components/sections/navbar";
import { ATFHero } from "@/components/sections/atf-hero";
import { SocialProof } from "@/components/sections/trust-matrix";
import { PrimarySilos } from "@/components/sections/silo-bento-grid";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Footer } from "@/components/sections/footer";

export function HomeClient() {
  const faqItems = [
    {
      question: "How long does a systems audit take?",
      answer: "The comprehensive systems audit takes exactly 5 business days. We require credentials access for active diagnostic tracking of your backend routing and database nodes.",
    },
    {
      question: "What platforms do you integrate with?",
      answer: "We deploy custom code integrations directly via webhooks and APIs for systems like Stripe, Salesforce, HighLevel, Vercel, and custom OpenAI/Anthropic deployments.",
    },
    {
      question: "What is your pricing structure?",
      answer: "We work strictly on flat-rate, project-based retainers. Custom diagnostics start at $5,000, and full silo systems integration is quoted based on database and pipeline scale.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <ATFHero
          eyebrow="Funnel Architecture & Systems"
          headline="Skyrocket Funnel Yield Without Increasing Advertising Burn"
          subtext="We construct high-converting landing page silos and automate operational pipelines for high-ticket service portfolios."
          ctaText="Secure Diagnostic Briefing"
          ctaHref="/book-call"
        />

        <SocialProof />

        <PrimarySilos />

        <FAQAccordion items={faqItems} />
      </main>

      <Footer />
    </>
  );
}
