import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-16 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo size="md" variant="light" />
            <p className="text-primary-foreground/50 font-body mt-4 max-w-xs text-sm leading-relaxed">
              Helping businesses implement software solutions that work.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 md:col-start-6">
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">Navigate</h4>
            <nav className="grid grid-cols-2 gap-3">
              <a href="#services" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">
                Services
              </a>
              <a href="#why-us" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">
                Why Us
              </a>
              <a href="#approach" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">
                Approach
              </a>
              <a href="#contact" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-primary-foreground/50 text-sm font-body">hello@integriadigital.com</p>
              <p className="text-primary-foreground/50 text-sm font-body">(508) 446-3877</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-sm font-body">
            © {currentYear} Integria Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors text-xs font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors text-xs font-body">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;