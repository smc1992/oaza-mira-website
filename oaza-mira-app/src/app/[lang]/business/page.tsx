import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import pageImagesData from "@/content/images.json";
import MagneticPull from "@/components/ui/MagneticPull";

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
            src="/extracted/business_hero.jpg" 
            alt="Oaza Mira Business" 
            className="w-full h-full object-cover"
            data-dict-key="images.businessHero"
          />
          {/* Deep Green / Gold Luxury Overlay for crisp white text readability */}
          <div className="absolute inset-0 bg-[#50641B]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#333]/30"></div>
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
              <span data-dict-key="business.hero.badge">{dict["business.hero.badge"] || "Tvrtke"}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              <span data-dict-key="business.hero.title1">{dict["business.hero.title1"]}</span> <br/>
              <span data-dict-key="business.hero.title2" className="font-serif italic font-normal text-[#E9C36B] block sm:inline mt-2 sm:mt-0">{dict["business.hero.title2"]}</span>
            </h1>
            
            <p data-dict-key="business.hero.desc" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["business.hero.desc"]}
            </p>
            
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4 relative z-20">
              <MagneticPull strength={15}>
                <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
                  <span data-dict-key="business.hero.cta1">{dict["business.hero.cta1"]}</span>
                  <ArrowRight size={20} />
                </Link>
              </MagneticPull>
              <MagneticPull strength={15}>
                <a href="#how" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/25 backdrop-blur-md !text-white border border-white/25 shadow-lg font-bold text-lg hover:bg-white hover:!text-[#1a2208] transition-all duration-300 transform-gpu translate-z-0">
                  <span data-dict-key="business.hero.cta2">{dict["business.hero.cta2"]}</span>
                </a>
              </MagneticPull>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Steps / How it works Section */}
      <section id="how" className="py-24 bg-[#FDFCF9] relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="text-center max-w-3xl mx-auto">
              <span data-dict-key="business.steps.eyebrow" className="text-[#50641B] font-bold tracking-widest uppercase text-sm mb-4 block">
                {dict["business.steps.eyebrow"]}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] tracking-tight leading-[1.1] mb-6">
                <span data-dict-key="business.steps.title1">{dict["business.steps.title1"]}</span>
                <span data-dict-key="business.steps.title2" className="font-serif italic font-normal text-[#E09D00]">{dict["business.steps.title2"]}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-16">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex flex-col p-8 rounded-3xl bg-white border border-[#E9C36B]/15 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="text-5xl font-black text-[#50641B]/10 group-hover:text-[#50641B]/20 transition-colors duration-300 mb-4">
                    0{stepNum}
                  </div>
                  <h3 data-dict-key={`business.steps.s${stepNum}.title`} className="text-xl font-extrabold text-[#333] mb-3">
                    {dict[`business.steps.s${stepNum}.title`]}
                  </h3>
                  <p data-dict-key={`business.steps.s${stepNum}.desc`} className="text-[#7A7366] text-sm leading-relaxed font-medium">
                    {dict[`business.steps.s${stepNum}.desc`]}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Split Row 1 (warm-bg) */}
      <section className="py-24 bg-[#FCFAF2] border-y border-[#E9C36B]/15 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Image Left */}
              <div className="w-full lg:w-[45%] aspect-[4/3] lg:aspect-[1.2] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E9C36B]/25">
                <Image
                  src="/extracted/business_sec1.jpg"
                  alt="Caring for colleagues"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                <span data-dict-key="business.split1.media" className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/30 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-lg">
                  {dict["business.split1.media"]}
                </span>
              </div>

              {/* Content Right */}
              <div className="w-full lg:w-[55%] flex flex-col justify-center">
                <span data-dict-key="business.split1.eyebrow" className="text-[#50641B] font-bold tracking-widest uppercase text-sm mb-4">
                  {dict["business.split1.eyebrow"]}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#333] tracking-tight leading-[1.1] mb-6">
                  <span data-dict-key="business.split1.title1">{dict["business.split1.title1"]}</span>
                  <span data-dict-key="business.split1.title2" className="font-serif italic font-normal text-[#E09D00]">{dict["business.split1.title2"]}</span>
                </h2>
                <p data-dict-key="business.split1.desc" className="text-lg text-[#7A7366] leading-relaxed font-medium mb-8">
                  {dict["business.split1.desc"]}
                </p>
                <div>
                  <MagneticPull strength={15}>
                    <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-extrabold text-base hover:scale-105 hover:shadow-[0_15px_30px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20">
                      <span data-dict-key="business.split1.cta">{dict["business.split1.cta"]}</span>
                      <ArrowRight size={18} />
                    </Link>
                  </MagneticPull>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Split Row 2 */}
      <section className="py-24 bg-[#FDFCF9] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Content Left */}
              <div className="w-full lg:w-[55%] flex flex-col justify-center order-last lg:order-first">
                <span data-dict-key="business.split2.eyebrow" className="text-[#50641B] font-bold tracking-widest uppercase text-sm mb-4">
                  {dict["business.split2.eyebrow"]}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#333] tracking-tight leading-[1.1] mb-6">
                  <span data-dict-key="business.split2.title1">{dict["business.split2.title1"]}</span>
                  <span data-dict-key="business.split2.title2" className="font-serif italic font-normal text-[#E09D00]">{dict["business.split2.title2"]}</span>
                </h2>
                <p data-dict-key="business.split2.desc" className="text-lg text-[#7A7366] leading-relaxed font-medium mb-8">
                  {dict["business.split2.desc"]}
                </p>
                <div>
                  <MagneticPull strength={15}>
                    <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-extrabold text-base hover:scale-105 hover:shadow-[0_15px_30px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20">
                      <span data-dict-key="business.split2.cta">{dict["business.split2.cta"]}</span>
                      <ArrowRight size={18} />
                    </Link>
                  </MagneticPull>
                </div>
              </div>

              {/* Image Right */}
              <div className="w-full lg:w-[45%] aspect-[4/3] lg:aspect-[1.2] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E9C36B]/25">
                <Image
                  src="/extracted/business_sec2.jpg"
                  alt="One dashboard, all orders"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                <span data-dict-key="business.split2.media" className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/30 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-lg">
                  {dict["business.split2.media"]}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Final CTA Section (Redesigned to match standard layout) */}
      <section className="pt-32 lg:pt-40 pb-32 relative overflow-hidden px-4 z-10 bg-[#FDFCF9]">
        <AnimatedSection delay={0.3}>
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-2xl shadow-[#50641B]/30 text-center group flex flex-col justify-center items-center min-h-[450px]">
              
              {/* Background Image & Cinematic Overlays */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={(dict as any)["images.registerHero"] || pageImagesData.registerHero || "/Hero_Register.webp"} 
                  alt="Oaza Mira Care" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] select-none pointer-events-none" 
                  data-dict-key="images.registerHero"
                />
                {/* Deep Green / Black Overlay for readability */}
                <div className="absolute inset-0 bg-[#50641B]/50 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#222]/80 via-[#222]/40 to-transparent"></div>
              </div>

              {/* Decorative mesh overlay */}
              <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

              {/* Styled Logo Element from HTML1v2 */}
              <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-6 relative z-10 border border-white/10 shadow-lg">
                <Image 
                  src="/logo.png" 
                  alt="Oaza Mira Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain opacity-95 select-none pointer-events-none"
                />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.15] font-extrabold text-white tracking-tight relative z-10 max-w-4xl mx-auto drop-shadow-xl mb-4">
                <span data-dict-key="business.cta.title1">{dict["business.cta.title1"]}</span>
                <span data-dict-key="business.cta.title2" className="font-serif italic font-normal text-[#E9C36B] block sm:inline mt-2 sm:mt-0">{dict["business.cta.title2"]}</span>
              </h2>
              
              <p data-dict-key="business.cta.desc" className="text-xl text-white/90 max-w-2xl mx-auto mb-12 relative z-10 drop-shadow-md leading-relaxed font-medium">
                {dict["business.cta.desc"]}
              </p>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
                <MagneticPull strength={15}>
                  <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
                    <span data-dict-key="business.cta.btn">{dict["business.cta.btn"]}</span>
                    <ArrowRight size={20} />
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
