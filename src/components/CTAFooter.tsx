import { HlsVideo } from "./HlsVideo";

export const CTAFooter = () => {
  return (
    <section className="relative min-h-[800px] w-full pt-32 pb-12 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HlsVideo
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl text-center mb-32">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-white leading-[0.85] tracking-tight mb-8">
          The Future <br /> Starts Here.
        </h2>
        <p className="text-white/60 font-body font-light text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Secure your session. Experience bespoke digital architecture.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="liquid-glass-strong rounded-full px-10 py-5 text-white font-body font-medium hover:scale-105 transition-transform">
            Inquire
          </button>
          <button className="bg-white text-black rounded-full px-10 py-5 text-sm font-body font-medium hover:bg-white/90 transition-colors">
            Pricing
          </button>
        </div>
      </div>

      <footer className="relative z-10 w-full max-w-7xl mx-auto mt-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/40 text-xs font-body tracking-wider">
          © 2026 Web.Maro. All rights reserved.
        </div>
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="text-white/40 text-xs hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
};
