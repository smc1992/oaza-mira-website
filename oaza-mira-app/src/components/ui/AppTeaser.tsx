"use client";

import { Smartphone, CheckCircle2, ShieldCheck, Camera } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function AppTeaser({ dict, lang }: { dict: any, lang: string }) {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-b from-white via-[#FDF8EE] to-white">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#E09D00]/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#50641B]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow-reverse"></div>
      
      <div className="relative px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden rounded-[3rem] md:rounded-[5rem] border border-[#B6C485]/30 shadow-[0_40px_100px_rgba(80,100,27,0.45)]">
        {/* Cinematic Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/App_Teaser_BG.webp"
            alt="Peaceful cemetery garden background"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Deep Green brand overlay to maintain consistency and text readability */}
          <div className="absolute inset-0 bg-[#50641B]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2208]/40 via-transparent to-[#1a2208]/30"></div>
        </div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay z-0"></div>
        
        {/* Animated Glow Rings */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-[#B6C485]/20 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-64 -right-64 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#E09D00]/25 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-10 md:p-16 lg:p-24 relative z-10">
          
          {/* Mockup Content */}
          <AnimatedSection delay={0.2} className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[750px] flex items-center justify-center w-full order-first lg:order-last">
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
                src="/mockup-oaza-mira.png"
                alt="Oaza Mira App Interface"
                fill
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-700"
                priority
              />
            </motion.div>
            
            {/* Simple Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-black/30 blur-[40px] rounded-full scale-y-50 -z-10"></div>
          </AnimatedSection>

          {/* Text Content */}
          <div className="w-full lg:pr-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 border border-white/20 text-[#E9C36B] font-bold mb-10 text-xs md:text-sm uppercase tracking-[0.3em] backdrop-blur-md shadow-lg group hover:bg-[#E09D00]/20 transition-all transform-gpu translate-z-0">
                <Smartphone size={18} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
                <span data-dict-key="teaser.badge">{dict["teaser.badge"]}</span>
              </div>

              <h2 data-dict-key="teaser.title" className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] font-black text-white mb-10 tracking-tightest leading-[0.95] drop-shadow-2xl text-balance">
                {dict["teaser.title"]}
              </h2>
              
              <p data-dict-key="teaser.desc" className="text-lg md:text-xl text-white/90 mb-12 md:mb-16 leading-relaxed max-w-xl font-medium drop-shadow-sm">
                {dict["teaser.desc"]}
              </p>
            </AnimatedSection>

            <div className="space-y-10 md:space-y-14 mb-16 md:mb-20">
              {/* Feature 1 */}
              <AnimatedSection delay={0.4}>
                <div className="flex gap-6 md:gap-8 group">
                  <div className="mt-1 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-gradient-to-br from-[#E09D00] to-[#E9C36B] flex items-center justify-center text-[#1a2308] shadow-[0_10px_30px_rgba(224,157,0,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <CheckCircle2 size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 data-dict-key="teaser.feature1.title" className="text-white font-black text-xl md:text-2xl mb-3 tracking-tight group-hover:translate-x-1 transition-transform">{dict["teaser.feature1.title"]}</h4>
                    <p data-dict-key="teaser.feature1.desc" className="text-white/80 text-base md:text-lg leading-relaxed font-semibold max-w-lg opacity-90">{dict["teaser.feature1.desc"]}</p>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Feature 2 */}
              <AnimatedSection delay={0.5}>
                <div className="flex gap-6 md:gap-8 group">
                  <div className="mt-1 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-gradient-to-br from-[#E09D00] to-[#E9C36B] flex items-center justify-center text-[#1a2308] shadow-[0_10px_30px_rgba(224,157,0,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Camera size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 data-dict-key="teaser.feature2.title" className="text-white font-black text-xl md:text-2xl mb-3 tracking-tight group-hover:translate-x-1 transition-transform">{dict["teaser.feature2.title"]}</h4>
                    <p data-dict-key="teaser.feature2.desc" className="text-white/80 text-base md:text-lg leading-relaxed font-semibold max-w-lg opacity-90">{dict["teaser.feature2.desc"]}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Feature 3 */}
              <AnimatedSection delay={0.6}>
                <div className="flex gap-6 md:gap-8 group">
                  <div className="mt-1 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-gradient-to-br from-[#E09D00] to-[#E9C36B] flex items-center justify-center text-[#1a2308] shadow-[0_10px_30px_rgba(224,157,0,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <ShieldCheck size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 data-dict-key="teaser.feature3.title" className="text-white font-black text-xl md:text-2xl mb-3 tracking-tight group-hover:translate-x-1 transition-transform">{dict["teaser.feature3.title"]}</h4>
                    <p data-dict-key="teaser.feature3.desc" className="text-white/80 text-base md:text-lg leading-relaxed font-semibold max-w-lg opacity-90">{dict["teaser.feature3.desc"]}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Store Buttons */}
            <AnimatedSection delay={0.7} className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8">
              <button className="flex items-center justify-center gap-4 px-6 md:px-8 py-3.5 md:py-4 rounded-[1rem] md:rounded-[1.25rem] bg-black hover:bg-zinc-900 border border-white/20 text-white font-sans transition-all cursor-not-allowed group shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-white/5 active:scale-95 w-full sm:w-auto">
                <svg className="w-8 h-8 md:w-10 md:h-10 fill-white transition-transform group-hover:scale-105" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-97.3-132-97.3-132zm-58.4-154.3c31.4-38.9 29.1-80.5 29.1-80.5s-41.4 3-72.8 38.9c-26.9 31-26.9 66.4-26.9 66.4s36.4 7.2 70.6-24.8z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <div className="text-[10px] md:text-[11px] text-zinc-400 font-medium uppercase tracking-widest mb-0.5 whitespace-nowrap">Coming Soon</div>
                  <div className="text-lg md:text-xl font-semibold tracking-tight whitespace-nowrap leading-none">App Store</div>
                </div>
              </button>

              <button className="flex items-center justify-center gap-4 px-6 md:px-8 py-3.5 md:py-4 rounded-[1rem] md:rounded-[1.25rem] bg-black hover:bg-zinc-900 border border-white/20 text-white font-sans transition-all cursor-not-allowed group shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-white/5 active:scale-95 w-full sm:w-auto">
                <svg className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.48,3.2C3.2,3.48,3,3.95,3,4.56v14.88c0,0.6,0.2,1.08,0.48,1.36l0.06,0.06L12.53,12L12.53,11.83L3.54,3.14L3.48,3.2z" />
                  <path fill="#34A853" d="M16.59,16.06l-4.06-4.06v-0.17l4.06-4.06l4.79,2.72c1.37,0.78,1.37,2.05,0,2.83L16.59,16.06z" />
                  <path fill="#EA4335" d="M12.53,11.83L3.48,3.2c0.47-0.47,1.25-0.53,2.14-0.03l10.97,6.23L12.53,11.83z" />
                  <path fill="#FBBC05" d="M12.53,12.17l4.06,4.06l-10.97,6.23c-0.89,0.5-1.67,0.44-2.14-0.03L12.53,12.17z" />
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <div className="text-[10px] md:text-[11px] text-zinc-400 font-medium uppercase tracking-widest mb-0.5 whitespace-nowrap">Coming Soon</div>
                  <div className="text-lg md:text-xl font-semibold tracking-tight whitespace-nowrap leading-none">Google Play</div>
                </div>
              </button>
            </AnimatedSection>
          </div>


        </div>
      </div>
    </section>
  );
}
