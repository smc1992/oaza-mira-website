"use client";
import { motion } from "framer-motion";

export default function HeroBackgroundSVG() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none flex items-center justify-center">
      <motion.svg
        viewBox="0 0 800 800"
        className="absolute w-[1000px] h-[1000px] opacity-15"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <radialGradient id="emeraldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="400" cy="400" r="400" fill="url(#emeraldGlow)" />
      </motion.svg>
    </div>
  );
}
