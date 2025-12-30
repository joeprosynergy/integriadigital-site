import { CheckCircle2, TrendingUp, Users, FileText } from "lucide-react";

const features = [
  {
    icon: Users,
    number: "01",
    title: "Adoption First",
    description: "We choose software your team will actually use. No shelfware, no forgotten logins.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Reports That Matter",
    description: "Insights that drive action—not spreadsheets that collect dust.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Informed Decisions",
    description: "Give your leadership the data they need to steer confidently.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Transparent Workflows",
    description: "See exactly how work moves through your organization.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[200px] md:text-[300px] lg:text-[400px] font-heading font-bold text-foreground/[0.02] whitespace-nowrap">
          WHY
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
              The Difference
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why choose
              <br />
              <span className="text-gradient">Integria Digital?</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body leading-relaxed mb-8 max-w-md">
              The best software in the world is worthless if no one uses it. We focus on solutions that are intuitive, practical, and deliver value from day one.
            </p>
            
            {/* Decorative Line */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="w-12 h-px bg-accent" />
              <span className="text-muted-foreground text-sm font-mono">Since 2024</span>
            </div>
          </div>

          {/* Right - Scrolling Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative"
              >
                <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300">
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="text-5xl font-heading font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                      {feature.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;