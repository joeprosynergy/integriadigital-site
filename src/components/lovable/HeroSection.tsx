import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Diagonal Accent Line */}
      <div className="absolute top-0 right-0 w-[60%] h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] border-l border-accent/20 rotate-[15deg] origin-top-right" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-[20%] right-[15%] w-4 h-4 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[30%] right-[10%] w-3 h-3 border border-accent/40 rounded-full animate-float" />

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10 min-h-screen flex flex-col">
        {/* Top Tag */}
        <div className="mb-auto">
          <div className="inline-flex items-center gap-3 animate-fade-up">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">
              Software Consulting
            </span>
          </div>
        </div>

        {/* Main Content - Dramatic Typography */}
        <div className="flex-1 flex items-center">
          <div className="w-full">
            {/* Giant Headline */}
            <div className="relative">
              <h1 className="font-heading font-bold text-primary-foreground leading-[0.9] tracking-tight">
                <span className="block text-[12vw] md:text-[10vw] lg:text-[8vw] animate-fade-up">
                  Software
                </span>
                <span className="block text-[16vw] md:text-[14vw] lg:text-[11vw] text-accent animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  that fits.
                </span>
              </h1>
              
              {/* Offset Description Box */}
              <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:max-w-sm mt-8 lg:mt-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 lg:p-8">
                  <p className="text-primary-foreground/70 font-body leading-relaxed mb-6">
                    We implement solutions your team will actually use—delivering reports that drive decisions, not confusion.
                  </p>
                  <Button variant="hero" className="group w-full sm:w-auto">
                    Start a Conversation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-auto pt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-wrap items-end justify-between gap-8 border-t border-primary-foreground/10 pt-8">
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">100%</div>
                <div className="text-primary-foreground/40 text-sm font-body">Adoption Focused</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">Clear</div>
                <div className="text-primary-foreground/40 text-sm font-body">Actionable Reports</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">Open</div>
                <div className="text-primary-foreground/40 text-sm font-body">Transparent Workflows</div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 text-primary-foreground/30">
              <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
