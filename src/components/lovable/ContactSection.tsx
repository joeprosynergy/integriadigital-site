import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Large CTA Block */}
          <div className="relative rounded-[2.5rem] bg-card border border-border overflow-hidden">
            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
            
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-8">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-accent text-sm font-body">Free Consultation</span>
                  </div>
                  
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Let's find the
                    <br />
                    <span className="text-gradient">right fit</span>
                  </h2>
                  
                  <p className="text-muted-foreground text-lg font-body mb-8 max-w-md">
                    Ready to streamline your business with software that actually works? Start with a conversation.
                  </p>

                  {/* Quick Contact */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="font-body">hello@integriadigital.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="font-body">Serving businesses nationwide</span>
                    </div>
                  </div>
                </div>

                {/* Right Form */}
                <div>
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-body"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-body"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-body"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        What do you need help with?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none font-body"
                        placeholder="Tell us about your current tools and challenges..."
                      />
                    </div>
                    <Button variant="accent" size="xl" className="w-full group">
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;