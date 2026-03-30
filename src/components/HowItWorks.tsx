import { ArrowUpRight } from "lucide-react";
import { HlsVideo } from "./HlsVideo";

export const HowItWorks = () => {
  return (
    <section className="relative min-h-[700px] w-full py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden">
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0">
        <HlsVideo
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <div className="liquid-glass rounded-full px-4 py-1 text-[10px] font-medium text-white/60 uppercase tracking-widest inline-block mb-8">
          Methodology
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-8">
          Vision to Reality. <br /> Instantaneous.
        </h2>
        <p className="text-white/60 font-body font-light text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Define your ambition. Our intelligence orchestrates the complexity. Architecture to deployment in days.
        </p>
        <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-body font-medium flex items-center gap-3 mx-auto hover:scale-105 transition-transform">
          Inquire
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
