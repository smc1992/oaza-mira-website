"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

export default function AppTeaser({ dict, lang }: { dict: any, lang: string }) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-y border-[#B6C485]/15 bg-gradient-to-b from-[#1a2208] to-[#101505] text-white">
      {/* Cinematic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={(dict as any)["images.teaserBg"] || "/App_Teaser_BG.webp"}
          alt="Peaceful cemetery garden background"
          fill
          className="object-cover opacity-40 select-none pointer-events-none"
          priority
          data-dict-key="images.teaserBg"
        />
        {/* Deep Green brand overlay to maintain consistency and text readability */}
        <div className="absolute inset-0 bg-[#50641B]/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2208]/90 via-transparent to-[#101505]/95"></div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none mix-blend-overlay z-0"></div>
      
      {/* Animated Glow Rings */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#B6C485]/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-64 -right-64 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#E09D00]/15 rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="relative z-10 max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Mockup Content (Left side on desktop, first on mobile) */}
          <AnimatedSection delay={0.2} className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center w-full">
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full h-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none"
            >
              <Image
                src={(dict as any)["images.teaserMockup"] || "/mockup-oaza-mira.png"}
                alt="Oaza Mira App Interface"
                fill
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] transition-all duration-700 select-none"
                priority
                data-dict-key="images.teaserMockup"
              />
            </motion.div>
            
            {/* Simple Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-black/35 blur-[40px] rounded-full scale-y-50 -z-10"></div>
          </AnimatedSection>

          {/* Text Content (Right side on desktop, second on mobile) */}
          <div className="w-full lg:pl-4">
            <AnimatedSection>
              {/* Eyebrow */}
              <span data-dict-key="teaser.badge" className="font-sans text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-[#c9a227] mb-4 block">
                {dict["teaser.badge"]}
              </span>

              {/* Title with split support for italicizing key parts */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-2xl text-balance">
                {dict["teaser.title.part1"] || "Close, "}
                <span className="font-serif italic font-normal text-[#c9a227]">
                  {dict["teaser.title.part2"] || "no matter the distance."}
                </span>
              </h2>
              
              {/* Description */}
              <p data-dict-key="teaser.desc" className="text-lg md:text-xl text-[#b8b4ac] mb-10 leading-[1.7] max-w-xl font-light drop-shadow-sm">
                {dict["teaser.desc"]}
              </p>
            </AnimatedSection>

            {/* Store Badges */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4 mt-8">
                {/* Web App button */}
                <a 
                  href="https://app.oaza-mira.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 px-5 py-3 bg-gradient-to-r from-[#E09D00] to-[#E9C36B] border border-[#E9C36B]/30 rounded-[13px] hover:scale-105 hover:shadow-[0_15px_30px_rgba(224,157,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 relative group cursor-pointer select-none !text-[#211c08]"
                >
                  <span className="opacity-95 transition-transform duration-300 group-hover:scale-105">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </span>
                  <div className="text-left flex flex-col justify-center">
                    <div className="text-[10px] text-[#4a3e14] font-semibold uppercase tracking-[0.1em] mb-0.5 leading-none">{dict["teaser.store.webapp.subtext"] || "Otvori u pregledniku"}</div>
                    <div className="text-base font-extrabold text-[#211c08] leading-none">{dict["teaser.store.webapp.text"] || "Web App"}</div>
                  </div>
                </a>

                {/* App Store button */}
                <button 
                  onClick={() => handleShowToast(dict["teaser.store.toast.apple"] || "Aplikacija uskoro stiže na App Store.")}
                  className="flex items-center gap-3.5 px-5 py-3 border border-[#c9a227]/20 rounded-[13px] bg-white/[0.02] hover:border-[#c9a227]/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 relative group cursor-pointer select-none"
                >
                  <span className="text-white opacity-90 transition-transform duration-300 group-hover:scale-105">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-97.3-132-97.3-132zm-58.4-154.3c31.4-38.9 29.1-80.5 29.1-80.5s-41.4 3-72.8 38.9c-26.9 31-26.9 66.4-26.9 66.4s36.4 7.2 70.6-24.8z"/>
                    </svg>
                  </span>
                  <div className="text-left flex flex-col justify-center">
                    <div className="text-[10px] text-[#5e5c57] font-semibold uppercase tracking-[0.1em] mb-0.5 leading-none">{dict["teaser.store.soon.text"] || "Uskoro na"}</div>
                    <div className="text-base font-semibold text-white leading-none">App Store</div>
                  </div>
                  <span className="absolute -top-2 right-3 text-[9px] bg-[#c9a227] text-[#211c08] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase">
                    {dict["teaser.store.soon.badge"] || "USKORO"}
                  </span>
                </button>

                {/* Google Play button */}
                <button 
                  onClick={() => handleShowToast(dict["teaser.store.toast.google"] || "Aplikacija uskoro stiže na Google Play.")}
                  className="flex items-center gap-3.5 px-5 py-3 border border-[#c9a227]/20 rounded-[13px] bg-white/[0.02] hover:border-[#c9a227]/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 relative group cursor-pointer select-none"
                >
                  <span className="text-white opacity-95 flex items-center transition-transform duration-300 group-hover:scale-105">
                    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M3.48,3.2C3.2,3.48,3,3.95,3,4.56v14.88c0,0.6,0.2,1.08,0.48,1.36l0.06,0.06L12.53,12L12.53,11.83L3.54,3.14L3.48,3.2z" />
                      <path fill="#34A853" d="M16.59,16.06l-4.06-4.06v-0.17l4.06-4.06l4.79,2.72c1.37,0.78,1.37,2.05,0,2.83L16.59,16.06z" />
                      <path fill="#EA4335" d="M12.53,11.83L3.48,3.2c0.47-0.47,1.25-0.53,2.14-0.03l10.97,6.23L12.53,11.83z" />
                      <path fill="#FBBC05" d="M12.53,12.17l4.06,4.06l-10.97,6.23c-0.89,0.5-1.67,0.44-2.14-0.03L12.53,12.17z" />
                    </svg>
                  </span>
                  <div className="text-left flex flex-col justify-center">
                    <div className="text-[10px] text-[#5e5c57] font-semibold uppercase tracking-[0.1em] mb-0.5 leading-none">{dict["teaser.store.soon.text"] || "Uskoro na"}</div>
                    <div className="text-base font-semibold text-white leading-none">Google Play</div>
                  </div>
                  <span className="absolute -top-2 right-3 text-[9px] bg-[#c9a227] text-[#211c08] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase">
                    {dict["teaser.store.soon.badge"] || "USKORO"}
                  </span>
                </button>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>

      {/* Premium Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 left-1/2 z-[9999] flex items-center gap-2.5 px-6 py-3.5 border border-[#c9a227]/40 rounded-full bg-[#1a1a1d] text-[#f6f2e9] text-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-nowrap select-none"
          >
            <span className="text-[#c9a227] font-bold">✦</span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

