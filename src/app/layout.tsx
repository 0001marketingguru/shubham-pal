import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shubham Pal | Elite Operational Systems & Funnels",
  description: "Constructing high-converting GTM strategy, AI infrastructure, and CRO funnels for high-ticket entrepreneur portfolios.",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark scroll-smooth", "font-sans", inter.variable)}>
      <body
        className={`${oswald.variable} ${inter.variable} bg-neutral-dark text-foreground min-h-dvh flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
