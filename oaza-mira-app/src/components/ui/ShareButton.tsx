"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import MagneticPull from "./MagneticPull";

interface ShareButtonProps {
  label: string;
  successLabel?: string;
}

export default function ShareButton({ label, successLabel = "Link copied!" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Oaza Mira",
      text: "Oaza Mira - For those who care",
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        console.log("Error sharing via navigator.share, fallback to clipboard copy", err);
      }
    }

    // Fallback to Clipboard Copy
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 w-full">
      <MagneticPull strength={15}>
        <button
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] !text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-xl border border-white/20 select-none cursor-pointer"
        >
          <span>{copied ? successLabel : label}</span>
          <ArrowRight size={20} />
        </button>
      </MagneticPull>
    </div>
  );
}
