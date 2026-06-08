import React from 'react';

export default function InfiniteMarquee({ dict }: { dict?: any }) {
  const items = [
    dict?.["marquee.1"] || "Trusted over 100 caretakers across Croatia",
    "✦",
    dict?.["marquee.2"] || "Available in Croatia",
    "✦",
    dict?.["marquee.3"] || "24/7 Dedicated Support",
    "✦",
    dict?.["marquee.4"] || "Secure & Transparent Documentation",
    "✦",
    dict?.["marquee.5"] || "Dignified Care Guaranteed",
    "✦",
  ];

  // Duplicate the array multiple times to ensure it overflows the screen width vastly
  // We translate by -50%, which means it scrolls through exactly half of the clones seamlessly
  const repeatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden bg-emerald-950 text-white py-3 sm:py-4 border-y border-emerald-900/50 z-20">
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-emerald-950 to-transparent z-30 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-emerald-950 to-transparent z-30 pointer-events-none"></div>
      
      <div className="animate-marquee whitespace-nowrap flex items-center w-max">
        {repeatedItems.map((item, idx) => (
          <span 
            key={idx} 
            className={`mx-4 sm:mx-8 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase ${
              item === '✦' ? 'text-emerald-500/40' : 'text-emerald-100/90'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
