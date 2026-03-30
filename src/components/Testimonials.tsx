const testimonials = [
  {
    quote: "Digital transformation in under a week. The aesthetic is unrivaled.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote: "Conversion rates quadrupled. They understand the psychology of luxury.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote: "Not just a site; a high-performance engine for our global expansion.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <div className="liquid-glass rounded-full px-4 py-1 text-[10px] font-medium text-white/60 uppercase tracking-widest inline-block mb-6">
          Voices
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-[0.9] tracking-tight">
          The Standard.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-10 space-y-8 flex flex-col justify-between">
            <p className="text-white/80 font-body font-light text-lg italic leading-relaxed">
              "{t.quote}"
            </p>
            <div>
              <div className="text-white font-body font-medium text-sm">{t.name}</div>
              <div className="text-white/40 font-body font-light text-xs uppercase tracking-wider mt-1">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
