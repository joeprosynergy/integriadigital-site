import { CheckCircle2, XCircle } from "lucide-react";

const successPoints = [
  "Your team actually uses the tools you've invested in",
  "You have clear reports that help you make decisions",
  "Workflows are transparent—you see exactly where things stand",
  "You spend less time fighting software and more time growing",
];

const failurePoints = [
  "More wasted money on software nobody uses",
  "Continued guesswork instead of data-driven decisions",
  "Frustrated employees and inefficient processes",
  "Falling behind competitors who've figured this out",
];

const StakesSection = () => {
  return (
    <section className="py-32 bg-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
            The Stakes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            What's at stake?
          </h2>
        </div>

        {/* Success vs Failure Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Success Column */}
          <div className="relative">
            <div className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  With the right software
                </h3>
              </div>
              
              <ul className="space-y-4">
                {successPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/80 font-body">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Failure Column */}
          <div className="relative">
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  Without taking action
                </h3>
              </div>
              
              <ul className="space-y-4">
                {failurePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-primary-foreground/30 shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/50 font-body">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16">
          <p className="text-primary-foreground/60 font-body text-lg max-w-xl mx-auto">
            The difference between thriving and struggling often comes down to having the right systems in place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;