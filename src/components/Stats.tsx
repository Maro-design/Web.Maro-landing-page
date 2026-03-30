import { HlsVideo } from "./HlsVideo";

const stats = [
  { value: "250+", label: "Global Launches" },
  { value: "99%", label: "Retention" },
  { value: "4.5x", label: "Growth" },
  { value: "72h", label: "Delivery" },
];

export const Stats = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HlsVideo
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          className="w-full h-full object-cover opacity-20 grayscale"
          style={{ filter: 'saturate(0)' }}
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-20 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-white/40 font-body font-light text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
