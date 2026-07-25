import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#09090b] text-zinc-100 selection:bg-[#00e599] selection:text-black">
      <Navbar />
      <HeroSection />
    </main>
  );
}
