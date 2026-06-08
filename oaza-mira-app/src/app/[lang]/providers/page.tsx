import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Store, ArrowRight, TrendingUp, Smartphone, FileCheck2, CalendarClock, Target, Users2, Sparkles, HandHeart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import pageImagesData from "@/content/images.json";

export default async function ProvidersPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang as Locale)) as any;

  const advantages = [
    { icon: CalendarClock, title: dict["providers.adv.1.title"], desc: dict["providers.adv.1.desc"] },
    { icon: TrendingUp, title: dict["providers.adv.2.title"], desc: dict["providers.adv.2.desc"] },
    { icon: Smartphone, title: dict["providers.adv.3.title"], desc: dict["providers.adv.3.desc"] },
    { icon: FileCheck2, title: dict["providers.adv.4.title"], desc: dict["providers.adv.4.desc"] }
  ];

  return (
    <div className="page-wrapper relative overflow-hidden bg-gradient-to-b from-[#FDFCF9] via-[#FCFAF2] to-[#FDFCF9] min-h-screen">
      {/* Decorative Blobs for Warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-15%] w-[70%] h-[60%] bg-[#E9C36B]/15 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[50%] bg-[#50641B]/8 rounded-full blur-[120px] animate-pulse-slow-reverse"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[40%] bg-[#E9C36B]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-[-5%] w-[50%] h-[30%] bg-[#50641B]/5 rounded-full blur-[110px]"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[90vh] -mb-px">
        {/* Background Image & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={pageImagesData.providersHero || "/hero_caretakers.webp"} 
            alt="Oaza Mira Providers" 
            className="w-full h-full object-cover"
          />
          {/* Deep Green / Gold Luxury Overlay for crisp white text readability */}
          <div className="absolute inset-0 bg-[#50641B]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#333]/25"></div>
          {/* Transition Hero to body background smoothly */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#FDFCF9] to-transparent pointer-events-none"></div>
        </div>

        {/* Ambient SVG Glow */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <HeroBackgroundSVG />
        </div>

        <AnimatedSection delay={0.1}>
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E9C36B]/40 bg-[#E09D00]/20 text-[#E9C36B] text-sm font-bold tracking-widest uppercase mb-10 shadow-lg backdrop-blur-md">
              <Store size={16} strokeWidth={2.5} />
              <span>{dict["nav.caretakers"] || "Caretakers"}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              {dict["providers.hero.title1"]} <br/>
              <span className="text-white">{dict["providers.hero.title2"]}</span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["providers.hero.desc"]}
            </p>
            
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
              <Link href={`/${lang}/register-information`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#50641B] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20">
                {dict["providers.hero.cta"]} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Advantages Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 md:pt-24 mb-32 relative z-10">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333]">{dict["providers.adv.title"]}</h2>
            <div className="h-1 w-20 bg-[#E09D00] mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((adv, index) => (
              <div key={index} className="bg-[#FDFBF7] p-8 rounded-[2rem] shadow-sm border border-[#E9C36B]/20 hover:shadow-xl hover:border-[#E09D00]/30 transition-all duration-300 group relative overflow-hidden">
                <div className="bg-[#E9C36B]/30 w-14 h-14 rounded-2xl flex items-center justify-center text-[#E09D00] mb-6 group-hover:bg-[#E09D00] group-hover:!text-white transition-colors shadow-sm">
                  <adv.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-3">{adv.title}</h3>
                <p className="text-[#8E8675] leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Register as Caretaker Widget (Clean & Minimal) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-32 relative z-10">
        <AnimatedSection delay={0.3}>
          <div className="bg-[#FDFBF7] rounded-[3rem] p-12 md:p-16 shadow-xl shadow-[#50641B]/5 border border-[#E9C36B]/30 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E9C36B] via-[#E09D00] to-[#50641B]"></div>
            
            <div className="relative z-10">
              <div className="bg-[#E9C36B]/20 w-20 h-20 rounded-full flex items-center justify-center text-[#E09D00] mb-8 mx-auto shadow-inner">
                <HandHeart size={40} className="drop-shadow-sm" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-[#333] mb-6 tracking-tight">
                {dict["providers.app.title"]}
              </h2>
              
              <p className="text-[#8E8675] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                {dict["providers.app.desc"]}
              </p>
              
              <div className="flex justify-center">
                <Link href={`/${lang}/register-information`} className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#50641B] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20 group/btn">
                  {dict["providers.app.cta"]} <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Subtle background element */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#50641B] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <HandHeart size={240} />
            </div>
          </div>
        </AnimatedSection>
      </section>


    </div>
  );
}
