import { Metadata } from "next";
import { BookCallClient } from "@/components/clients/book-call-client";

export const metadata: Metadata = {
  title: "Secure Diagnostic Briefing | Shubham Pal",
  description: "Book your 15-minute alignment briefing. We outline your funnel scope and operational bottlenecks.",
};

export default function BookCall() {
  return <BookCallClient />;
}
