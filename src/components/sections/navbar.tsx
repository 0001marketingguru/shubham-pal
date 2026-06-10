"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "AI Consulting", href: "/ai-consulting" },
    { name: "GTM Strategy", href: "/gtm-strategy" },
    { name: "CRO Services", href: "/cro-services" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full h-18 bg-neutral-dark border-b border-neutral-border flex items-center justify-between px-6 md:px-12">
      <Link href="/" className="flex items-center gap-2 group">
        <span className="text-xl md:text-2xl font-display font-black tracking-[-0.03em] uppercase text-foreground group-hover:text-accent transition-colors duration-200">
          Shubham Pal
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-display uppercase tracking-wider font-semibold transition-colors duration-200 hover:text-foreground ${
                isActive ? "text-foreground" : "text-neutral-400"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex items-center">
        <Link href="/book-call" className={buttonVariants({ variant: "default", size: "default" })}>
          Book Blueprint Call
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <IconX size={24} stroke={1.5} /> : <IconMenu2 size={24} stroke={1.5} />}
      </button>

      {isOpen && (
        <div className="absolute top-18 left-0 w-full bg-neutral-dark border-b border-neutral-border flex flex-col p-6 gap-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-display uppercase tracking-wider font-semibold text-neutral-400 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book-call" className={buttonVariants({ variant: "default", size: "default" })} onClick={() => setIsOpen(false)}>
            Book Blueprint Call
          </Link>
        </div>
      )}
    </nav>
  );
}
