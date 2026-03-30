import { Play, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { BlurText } from "./BlurText";

export const Hero = () => {
  return (
    <section className="relative h-[1000px] w-full bg-black overflow-hidden flex flex-col items-center">
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        className="absolute top-[20%] w-full h-auto object-contain z-0 opacity-60"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/5 z-0" />
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-[150px] px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-3 mb-8"
        >
          <span className="bg-white text-black rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
            Elite
          </span>
          <span className="text-xs font-body font-medium text-white/90">
            The New Standard in Digital Architecture
          </span>
        </motion.div>

        <BlurText
          text="Digital Sovereignty for Global Brands"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] tracking-[-4px] mb-8"
          delay={0.1}
        />

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-white/60 font-body font-light text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Bespoke design. Absolute performance. Engineered by intelligence, refined by masters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-body font-medium flex items-center gap-3 hover:scale-105 transition-transform">
            Begin Project
            <ArrowUpRight className="w-5 h-5" />
          </button>
          <button className="text-white font-body font-medium flex items-center gap-3 hover:text-white/80 transition-colors">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <Play className="w-4 h-4 fill-current" />
            </div>
            The Film
          </button>
        </motion.div>
      </div>

      {/* Partners Bar */}
      <div className="mt-auto w-full pb-12 pt-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="liquid-glass rounded-full px-4 py-1 text-[10px] font-medium text-white/40 uppercase tracking-[0.2em] mb-12">
            Trusted by global innovators
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale">
            {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
