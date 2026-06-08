import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Building2, HeartHandshake, Globe2, BriefcaseBusiness, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import pageImagesData from "@/content/images.json";

export default async function BusinessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang as Locale)) as any;

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
            src={pageImagesData.businessHero || "/hero_business.webp"} 
            alt="Oaza Mira Business" 
            className="w-full h-full object-cover"
          />
          {/* Deep Green / Gold Luxury Overlay for crisp white text readability */}
          <div className="absolute inset-0 bg-[#50641B]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#333]/40"></div>
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
              <Building2 size={16} className="text-[#E9C36B]" strokeWidth={2.5} />
              <span>{dict["nav.companies"] || "Corporate Services"}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              {dict["business.hero.title1"]} <br/>
              <span className="text-white">{dict["business.hero.title2"]}</span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["business.hero.desc"]}
            </p>
            
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
              <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#50641B] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20">
                {dict["business.hero.cta"]} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Core Pillars (Bento Layout) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 md:pt-24 mb-32 z-10 relative">
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-[#FDFBF7] p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-[#E9C36B]/20 hover:shadow-xl hover:border-[#E09D00]/30 transition-all duration-500 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500 text-[#E09D00]">
                <HeartHandshake size={160} />
              </div>
              <div className="bg-[#E9C36B]/30 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E09D00] mb-8 group-hover:bg-[#E09D00] group-hover:!text-white transition-colors shadow-sm relative z-10">
                <HeartHandshake size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#333] mb-6 relative z-10">{dict["business.pillar1.title"]}</h2>
              <p className="text-[#B8AE9F] text-lg leading-relaxed relative z-10">
                {dict["business.pillar1.desc"]}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#50641B] p-10 md:p-14 rounded-[2.5rem] shadow-xl overflow-hidden relative group text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#50641B] to-[#B6C485] opacity-50"></div>
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#E09D00]/20 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-1000"></div>
              
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500 text-[#E09D00]">
                <Globe2 size={160} />
              </div>

              <div className="bg-white/10 border border-white/20 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E09D00] mb-8 backdrop-blur-sm relative z-10">
                <Globe2 size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6 relative z-10">{dict["business.pillar2.title"]}</h2>
              <p className="text-white/80 text-lg leading-relaxed relative z-10">
                {dict["business.pillar2.desc"]}
              </p>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* 3. CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16 relative z-10">
        <AnimatedSection delay={0.3}>
          <div className="bg-[#FDFBF7] border border-[#E9C36B]/20 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E9C36B]/30 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <div className="bg-[#E9C36B]/30 w-20 h-20 rounded-[2rem] flex items-center justify-center text-[#E09D00] mx-auto mb-8 border border-[#E09D00]/30">
                <BriefcaseBusiness size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#333] mb-6 tracking-tight">{dict["business.cta.title"]}</h2>
              <p className="text-[#B8AE9F] text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                {dict["business.cta.desc"]}
              </p>
              <Link href={`/${lang}/how-it-works`} className="portal-login-btn inline-flex items-center justify-center px-10 py-5 font-bold text-lg">
                {dict["nav.howItWorks"] || "See how it works"} <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
