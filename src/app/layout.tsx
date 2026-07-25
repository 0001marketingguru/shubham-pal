import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Shubham Pal — AI Systems Engineer & Full-Stack Architect",
  description: "Building autonomous AI systems, high-velocity web architecture, and digital products engineered for scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark scroll-smooth", outfit.variable)}>
      <body className="bg-[#09090b] text-zinc-100 min-h-dvh flex flex-col antialiased selection:bg-[#00e599] selection:text-black">
        {children}
      </body>
    </html>
  );
}
