"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
    enter: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -15, filter: "blur(5px)" },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
