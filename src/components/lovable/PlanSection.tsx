import { MessageSquare, Compass, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Schedule a Call",
    description: "Tell us about your business, your current tools, and what's not working. No jargon, no pressure.",
  },
  {
    icon: Compass,
    number: "2",
    title: "Get a Plan",
    description: "We'll recommend solutions that fit your needs, your team, and your budget—not the most expensive option.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "See Results",
    description: "We implement with your team in mind, train everyone properly, and stay with you as you grow.",
  },
];

const PlanSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
            The Plan
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Getting started is simple.
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            You don't need to understand technology. You just need to know what you want your business to do better.
          </p>
        </div>

        {/* Three Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="text-center">
                {/* Step Number Circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20" />
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="xl" className="group">
            Schedule Your Free Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-muted-foreground font-body text-sm mt-4">
            No commitment. No sales pitch. Just clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;