import { Metadata } from "next";
import { HomeClient } from "@/components/clients/home-client";

export const metadata: Metadata = {
  title: "Premium Funnel Architecture | Shubham Pal",
  description: "Skyrocket Funnel Yield Without Increasing Advertising Burn. We construct high-converting landing page silos and automate operational pipelines.",
};

export default function Home() {
  return <HomeClient />;
}
