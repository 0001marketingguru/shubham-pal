import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CurrentReality } from "@/components/sections/CurrentReality";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#09090b] text-zinc-100 selection:bg-[#00e599] selection:text-black">
      <Navbar />
      <HeroSection />
      <CurrentReality />
    </main>
  );
}
