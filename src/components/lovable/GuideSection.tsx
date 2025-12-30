import { Award, Heart } from "lucide-react";

const GuideSection = () => {
  return (
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              Your Guide
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              We've been where you are.
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              We've seen businesses drown in complicated software that promised the world and delivered confusion. We've watched teams abandon expensive tools because no one could figure them out.
            </p>
            <p className="text-foreground font-body text-lg leading-relaxed mb-10">
              That's why we do things differently. We don't sell you the flashiest solution—we find the one that <span className="text-accent font-medium">actually works for your team</span>.
            </p>

            {/* Empathy + Authority */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">We Get It</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    We understand the frustration of tools that over-promise.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">We've Done This</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    We've helped businesses find clarity through better software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual/Quote */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent/20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent/20" />
            
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative">
              <div className="text-6xl text-accent/20 font-heading leading-none mb-4">"</div>
              <blockquote className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
                The best software in the world is useless if your team won't use it.
              </blockquote>
              <p className="text-muted-foreground font-body">
                — Our core belief at Integria Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;