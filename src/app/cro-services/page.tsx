import { Metadata } from "next";
import { CROClient } from "@/components/clients/cro-client";

export const metadata: Metadata = {
  title: "Conversion Optimization | Shubham Pal",
  description: "Shatter Funnel Friction Points and Capture Ready Buyers. We rewrite sales arguments, design high-end asymmetrical viewports, and optimize page speeds.",
};

export default function CROServices() {
  return <CROClient />;
}
