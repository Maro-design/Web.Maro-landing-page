import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-12 px-6 rounded-full liquid-glass flex items-center justify-center overflow-hidden">
             <span className="text-white font-heading italic text-xl whitespace-nowrap tracking-tight">Web.Maro</span>
          </div>
        </div>

        <div className="liquid-glass rounded-full px-6 py-2 flex items-center gap-8">
          {["Studio", "Services", "Work", "Process", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-body font-medium text-white/90 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-white text-black rounded-full px-6 py-2.5 text-sm font-body font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
          Inquire
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
