import { Zap, Palette, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Absolute Velocity",
    description: "Deployment at a pace that redefines industry standards.",
  },
  {
    icon: Palette,
    title: "Bespoke Precision",
    description: "Meticulous detail. Every element is a deliberate choice for your legacy.",
  },
  {
    icon: BarChart3,
    title: "Unrivaled ROI",
    description: "Analytics-driven layouts. Decisions backed by measurable growth.",
  },
  {
    icon: Shield,
    title: "Sovereign Security",
    description: "Enterprise protection integrated into every layer of your presence.",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="liquid-glass rounded-full px-4 py-1 text-[10px] font-medium text-white/60 uppercase tracking-widest inline-block mb-6">
          Advantage
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-[0.9] tracking-tight">
          Excellence in Every Detail.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-8 space-y-6 group hover:bg-white/[0.02] transition-colors">
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <feature.icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-heading italic text-white">{feature.title}</h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
