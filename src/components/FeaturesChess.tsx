import { motion } from "motion/react";

export const FeaturesChess = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-24">
        <div className="liquid-glass rounded-full px-4 py-1 text-[10px] font-medium text-white/60 uppercase tracking-widest inline-block mb-6">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-[0.9] tracking-tight">
          Unrivaled Performance. <br /> Absolute Precision.
        </h2>
      </div>

      <div className="space-y-32">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              Built for Conversion.
            </h3>
            <p className="text-white/60 font-body font-light text-lg leading-relaxed">
              Every interaction is calculated. We deploy high-performance patterns that turn visitors into loyalists.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm text-white font-body font-medium hover:bg-white/5 transition-colors">
              The Design
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                alt="Digital Architecture"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              Autonomous Intelligence.
            </h3>
            <p className="text-white/60 font-body font-light text-lg leading-relaxed">
              Your platform evolves. Real-time optimization ensures you remain at the frontier of digital experience.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm text-white font-body font-medium hover:bg-white/5 transition-colors">
              The Engine
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2042&auto=format&fit=crop"
                alt="Autonomous Intelligence"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
