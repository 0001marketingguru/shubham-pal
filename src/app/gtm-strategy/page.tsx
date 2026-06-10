import { Metadata } from "next";
import { GTMClient } from "@/components/clients/gtm-client";

export const metadata: Metadata = {
  title: "GTM Strategy | Shubham Pal",
  description: "Align Marketing and Sales into One High-Velocity Pipeline. We clean and structure your CRM nodes, lead routing, and server-side traffic attribution.",
};

export default function GTMStrategy() {
  return <GTMClient />;
}
