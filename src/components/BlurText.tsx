import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurText = ({ text, className, delay = 0 }: BlurTextProps) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.35,
            delay: delay + i * 0.1,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.2em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
