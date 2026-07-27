import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CurrentReality } from "@/components/sections/CurrentReality";
import { RealityShift } from "@/components/sections/RealityShift";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#09090b] text-zinc-100 selection:bg-[#00e599] selection:text-black">
      <Navbar />
      <HeroSection />
      <CurrentReality />
      <RealityShift />
      <TechnologySection />
      <SolutionsSection />
    </main>
  );
}
