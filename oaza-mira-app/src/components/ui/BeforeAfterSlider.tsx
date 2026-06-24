"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before grave care",
  afterAlt = "After grave care",
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[1.38/1] rounded-[22px] overflow-hidden shadow-2xl select-none group border border-[#E9C36B]/20 bg-[#FDFBF7]">
      {/* After Image (Bottom Layer - Right Side) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-w-7xl) 100vw, 50vw"
          priority
        />
      </div>

      {/* Before Image (Top Layer - Left Side, Clipped from the right) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-w-7xl) 100vw, 50vw"
          priority
        />
      </div>

      {/* Before Badge (Fixed Bottom-Left) */}
      <span className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-md bg-black/50 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm pointer-events-none transition-opacity duration-300 group-hover:bg-black/70">
        {beforeLabel}
      </span>

      {/* After Badge (Fixed Bottom-Right) */}
      <span className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-md bg-[#50641B]/80 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm pointer-events-none transition-opacity duration-300 group-hover:bg-[#50641B]">
        {afterLabel}
      </span>

      {/* Vertical divider line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Circle Slider Handle */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[3px] border-white bg-[#E09D00] flex items-center justify-center text-white select-none pointer-events-none z-20 group-hover:scale-110 group-hover:bg-[#E9C36B] transition duration-200"
        style={{ left: `${position}%` }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-[#1a2308]"
        >
          <path d="m9 18-6-6 6-6" />
          <path d="m15 6 6 6-6 6" />
        </svg>
      </div>

      {/* Interactive Transparent Input Range */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Before and after image comparison slider"
      />
    </div>
  );
}
