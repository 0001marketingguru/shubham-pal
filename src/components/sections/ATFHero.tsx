import { Button } from "@/components/ui/button";

export function ATFHero() {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-[85vh] w-full bg-slate-950 px-6 sm:px-12 md:px-24 overflow-hidden pt-24 pb-16">
      {/* Visual Density - Expansive whitespace, no generic ornaments, dark mode emphasis */}
      <div className="z-10 w-full max-w-4xl flex flex-col items-start gap-8">
        
        {/* Urgency Tracker Bar */}
        <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/50 px-3 py-1.5 rounded-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
            Accepting only 2 elite entrepreneur portfolios for Q3
          </span>
        </div>

        {/* The Hook - Display Typography (Heavy geometric, uppercase style, clamped tracking) */}
        <h1 className="text-left text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-[-0.03em] text-slate-50 leading-[1.1] md:leading-[1]">
          Skyrocket Your Funnel <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Conversion Rates
          </span>{" "}
          <br className="hidden sm:block" />
          Without Sacrificing Ad Spend.
        </h1>

        {/* Value Proposition Subheadline - Prose Typography (High readability, left-aligned) */}
        <p className="max-w-2xl text-left text-base sm:text-lg text-slate-400 leading-relaxed">
          Stop bleeding traffic on generic, bloated landing pages. We build strictly 
          transactional, high-ticket conversion architectures engineered to destroy 
          cognitive friction and scale your customer acquisition.
        </p>

        {/* The ATF Call-To-Action */}
        <div className="flex flex-col sm:flex-row items-start gap-4 w-full mt-4">
          <Button 
            size="lg" 
            className="rounded-none bg-blue-600 hover:bg-blue-700 text-white font-medium tracking-wide text-sm px-8 h-14 w-full sm:w-auto transition-transform hover:scale-[1.02]"
          >
            Book Your 15-Min Strategy Blueprint Call
          </Button>
          <p className="text-xs text-slate-500 font-medium self-start sm:self-center">
            No fluff. Just a raw diagnostic of your stack.
          </p>
        </div>
      </div>

      {/* Hardware-accelerated abstract background hint (no floating animations or generic shapes) */}
      <div className="absolute top-0 right-0 w-[50vw] h-[80vh] bg-blue-900/10 blur-[120px] pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/4"></div>
    </section>
  );
}
