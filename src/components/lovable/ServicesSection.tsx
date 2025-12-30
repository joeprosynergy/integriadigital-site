import { Globe, Database, BarChart2, Layers, Settings, Code, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Websites",
    description: "Modern, responsive websites that represent your brand and convert visitors into customers.",
  },
  {
    icon: Database,
    number: "02",
    title: "CRM Systems",
    description: "Customer relationship management tailored to your sales and support workflows.",
  },
  {
    icon: BarChart2,
    number: "03",
    title: "Financial Tools",
    description: "Accounting and financial software that gives you clear visibility into your business health.",
  },
  {
    icon: Layers,
    number: "04",
    title: "Data Integration",
    description: "Connect your existing tools to create unified dashboards and automated reporting.",
  },
  {
    icon: Settings,
    number: "05",
    title: "Process Automation",
    description: "Streamline repetitive tasks and free your team to focus on what matters most.",
  },
  {
    icon: Code,
    number: "06",
    title: "Custom Development",
    description: "Bespoke software solutions when off-the-shelf options don't quite fit your needs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6">
            <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
              Solutions
              <br />
              <span className="text-muted-foreground">that work</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-muted-foreground text-lg font-body">
              From simple websites to complex integrations—we find what fits your business.
            </p>
          </div>
        </div>

        {/* Services List - Clean Numbered Layout */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group border-t border-border last:border-b"
            >
              <div className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-center cursor-pointer hover:bg-muted/30 transition-colors duration-300 -mx-4 px-4 md:-mx-8 md:px-8">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-2xl md:text-3xl font-heading font-bold text-accent/30 group-hover:text-accent transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="col-span-2 md:col-span-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Title */}
                <div className="col-span-8 md:col-span-3">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-10 col-start-3 md:col-span-5 md:col-start-6">
                  <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex col-span-2 justify-end">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;