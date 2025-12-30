const problems = [
  {
    external: "Your team wastes hours on manual processes and disconnected tools.",
    internal: "You feel like you're always playing catch-up instead of leading.",
  },
  {
    external: "Reports take forever to pull and still don't answer your questions.",
    internal: "You're making decisions based on gut feeling, not data.",
  },
  {
    external: "New software gets purchased but nobody actually uses it.",
    internal: "You've wasted money and your team is more frustrated than before.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02]">
        <span className="text-[180px] md:text-[280px] font-heading font-bold text-foreground whitespace-nowrap">
          STUCK?
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Running a business is hard enough.
            <br />
            <span className="text-muted-foreground">Your software shouldn't make it harder.</span>
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-card hover:border-destructive/30 transition-all duration-300">
                {/* Number */}
                <div className="text-6xl font-heading font-bold text-destructive/10 mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* External Problem */}
                <p className="text-foreground font-body text-lg mb-4 leading-relaxed">
                  {problem.external}
                </p>
                
                {/* Internal Problem */}
                <p className="text-muted-foreground font-body text-sm italic">
                  "{problem.internal}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empathy Statement */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-body text-xl max-w-2xl mx-auto">
            You didn't start your business to fight with software.
            <span className="text-foreground font-medium"> You deserve tools that work for you.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;