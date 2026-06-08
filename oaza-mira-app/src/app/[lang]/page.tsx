import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import AppTeaser from "@/components/ui/AppTeaser";
import MagneticPull from "@/components/ui/MagneticPull";
import { Leaf, ShieldCheck, ArrowRight, Apple, Play, CheckCircle2 } from "lucide-react";
import pageImagesData from "@/content/images.json";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="page-wrapper relative overflow-hidden z-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[90vh] -mb-px">
        {/* Background Image & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={(dict as any)["images.homeHero"] || pageImagesData.homeHero || "/Home_hero2.webp"}
            alt="Oaza Mira Cemetery Background"
            className="w-full h-full object-cover"
            data-dict-key="images.homeHero"
          />
          {/* Deep Green / Gold Luxury Overlay for crisp white text readability */}
          <div className="absolute inset-0 bg-[#50641B]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#333]/25"></div>
          {/* Bottom fade into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#FDFCF9] to-transparent pointer-events-none"></div>
        </div>

        {/* Ambient SVG Glow (Screen overlay to give it a magical touch) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <HeroBackgroundSVG />
        </div>
        
        <AnimatedSection delay={0.1}>
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
            
            {/* The Classic Dove Logo */}
            <div className="mb-8">
              <img 
                src="/logo.png" 
                alt="Oaza Mira Logo" 
                className="h-48 md:h-64 lg:h-72 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E9C36B]/40 bg-[#E09D00]/25 text-[#E9C36B] text-sm font-bold tracking-widest uppercase mb-10 shadow-lg backdrop-blur-md transform-gpu translate-z-0">
              <Leaf size={16} strokeWidth={2.5} /> Oaza Mira App
            </div>
            
            <h1 data-dict-key="hero.title" className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              {dict["hero.title"] || "Grave care across any distance."}
            </h1>
            
            <p data-dict-key="hero.subtitle" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {dict["hero.subtitle"] || "Stay connected to what matters — we care for your loved ones’ resting place with dignity and consistency"}
            </p>
            
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
              <MagneticPull strength={15}>
                <Link 
                  href="#portal" 
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] font-bold text-lg hover:!text-white hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20"
                >
                  <span data-dict-key="hero.cta.primary">{dict["hero.cta.primary"] || "Download App & Register"}</span>
                </Link>
              </MagneticPull>
              <MagneticPull strength={15}>
                <Link 
                  href={`/${lang}/how-it-works`} 
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/20 backdrop-blur-md !text-white border border-white/20 shadow-lg font-bold text-lg hover:bg-white hover:!text-[#1a2208] transition-all duration-300 transform-gpu translate-z-0"
                >
                  <span data-dict-key="hero.cta.secondary">{dict["hero.cta.secondary"] || "See How it Works"}</span>
                </Link>
              </MagneticPull>
            </div>
            

            
          </div>
        </AnimatedSection>
      </section>

      {/* INFINITE MARQUEE */}
      <InfiniteMarquee dict={dict} />

      {/* 4. NEW APP TEASER PROMO */}
      <AppTeaser dict={dict} lang={lang} />

      {/* 5. HIGH-IMPACT EMOTIONAL CTA */}
      <section className="pb-32 relative overflow-hidden px-4">
         <AnimatedSection delay={0.3}>
            <div className="max-w-7xl mx-auto">
               <div className="relative rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-2xl shadow-[#50641B]/30 text-center group flex flex-col justify-center items-center min-h-[450px]">
                  
                  {/* Emotional Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={(dict as any)["images.registerHero"] || pageImagesData.registerHero || "/Hero_Register.webp"} 
                      alt="Oaza Mira Care" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]" 
                      data-dict-key="images.registerHero"
                    />
                    {/* Deep Green / Black Overlay for readability */}
                    <div className="absolute inset-0 bg-[#50641B]/50 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#222]/80 via-[#222]/40 to-transparent"></div>
                  </div>

                  {/* Decorative mesh overlay */}
                  <div className="absolute inset-0 z-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                  <h1 data-dict-key="cta.final" className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-extrabold text-white tracking-tight relative z-10 max-w-4xl mx-auto drop-shadow-xl">
                     {dict["cta.final"] || "Join hundreds of families who trust Oaza Mira for grave care."}
                  </h1>
                  
                  <div className="mt-14 relative z-10 inline-flex">
                     <Link href="#portal" className="px-12 py-6 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-extrabold text-xl hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 flex items-center gap-3 group/btn shadow-xl border border-white/20">
                        <span data-dict-key="btn.register">{dict["btn.register"] || "Register"}</span>
                        <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                     </Link>
                  </div>

               </div>
            </div>
         </AnimatedSection>
      </section>

    </div>
  );
}
