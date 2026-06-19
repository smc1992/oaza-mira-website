import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Landmark, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import pageImagesData from "@/content/images.json";
import MagneticPull from "@/components/ui/MagneticPull";

export default async function InstitutionsPage({ params }: { params: Promise<{ lang: string }> }) {
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
            src={(dict as any)["images.institutionsHero"] || pageImagesData.institutionsHero || "/hero_institutions.webp"} 
            alt="Oaza Mira Institutions" 
            className="w-full h-full object-cover"
            data-dict-key="images.institutionsHero"
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
              <Landmark size={16} className="text-[#E9C36B]" strokeWidth={2.5} />
              <span data-dict-key="institutions.hero.badge">{dict["institutions.hero.badge"] || "Institucije"}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              <span data-dict-key="institutions.hero.title1">{dict["institutions.hero.title1"]}</span> <br/>
              <span data-dict-key="institutions.hero.title2" className="text-white">{dict["institutions.hero.title2"]}</span>
            </h1>
            
            <p data-dict-key="institutions.hero.desc" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["institutions.hero.desc"]}
            </p>
            
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4 relative z-20">
              <MagneticPull strength={15}>
                <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
                  <span data-dict-key="institutions.hero.cta">{dict["institutions.hero.cta"]}</span>
                  <ArrowRight size={20} />
                </Link>
              </MagneticPull>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Partnerships that build trust - Section 2 (Split Row 1: Image Left, Content Right) */}
      <section className="py-24 bg-[#FCFAF2] border-y border-[#E9C36B]/15 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Image Left */}
              <div className="w-full lg:w-[45%] aspect-[4/3] lg:aspect-[1.2] order-last lg:order-first relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E9C36B]/25">
                <Image
                  src={(dict as any)["images.institutionsSec1"] || pageImagesData.institutionsSec1 || "/business_sec2.avif"}
                  alt="Trust Partnerships"
                  fill
                  className="object-cover"
                  data-dict-key="images.institutionsSec1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
              </div>

              {/* Content Right */}
              <div className="w-full lg:w-[55%] flex flex-col justify-center">
                <span data-dict-key="institutions.hero.badge" className="text-[#50641B] font-bold tracking-widest uppercase text-sm mb-4">
                  {dict["institutions.hero.badge"] || "Institucije"}
                </span>
                <h2 data-dict-key="institutions.db2gj4" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#333] tracking-tight leading-[1.1] mb-6">
                  {dict["institutions.db2gj4"]}
                </h2>
                <p data-dict-key="institutions.qapkqs" className="text-lg text-[#7A7366] leading-relaxed font-medium">
                  {dict["institutions.qapkqs"]}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Final CTA Section (Current Website Layout, Text: HTML1v4) */}
      <section className="pt-32 lg:pt-40 pb-32 relative overflow-hidden px-4 z-10 bg-[#FDFCF9]">
        <AnimatedSection delay={0.3}>
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-2xl shadow-[#50641B]/30 text-center group flex flex-col justify-center items-center min-h-[450px]">
              
              {/* Emotional Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={(dict as any)["images.registerHero"] || pageImagesData.registerHero || "/Hero_Register.webp"} 
                  alt="Oaza Mira B2G Help" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]" 
                  data-dict-key="images.registerHero"
                />
                {/* Deep Green / Black Overlay for readability */}
                <div className="absolute inset-0 bg-[#50641B]/50 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#222]/80 via-[#222]/40 to-transparent"></div>
              </div>

              {/* Decorative mesh overlay */}
              <div className="absolute inset-0 z-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

              <h2 data-dict-key="institutions.r1j4o5" className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-extrabold text-white tracking-tight relative z-10 max-w-4xl mx-auto drop-shadow-xl mb-4">
                {dict["institutions.r1j4o5"] || "Započnite suradnju danas."}
              </h2>
              
              <p data-dict-key="institutions.cta.desc" className="text-xl text-white/90 max-w-2xl mx-auto mb-12 relative z-10 drop-shadow-md leading-relaxed font-medium">
                {dict["institutions.cta.desc"] || "Pridružite se modernom svijetu gospodarenja grobnim mjestima uz Oazu Mira."}
              </p>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
                <MagneticPull strength={15}>
                  <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
                    <span data-dict-key="institutions.hero.cta">{dict["institutions.hero.cta"] || "Kontaktirajte nas"}</span>
                    <Mail size={20} />
                  </Link>
                </MagneticPull>
                <MagneticPull strength={15}>
                  <Link href={`/${lang}/how-it-works`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/20 backdrop-blur-md !text-white border border-white/20 shadow-lg font-bold text-lg hover:bg-white hover:!text-[#1a2208] transition-all duration-300 transform-gpu translate-z-0">
                    <span data-dict-key="nav.howItWorks">{dict["nav.howItWorks"] || "See how it works"}</span>
                  </Link>
                </MagneticPull>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
