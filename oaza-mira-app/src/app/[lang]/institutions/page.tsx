import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Landmark, ShieldCheck, MapPin, Handshake, Mail, ArrowRight, FolderKanban } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import pageImagesData from "@/content/images.json";

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
            src={pageImagesData.institutionsHero || "/hero_institutions.webp"} 
            alt="Oaza Mira Institutions" 
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
              <Landmark size={16} className="text-[#E9C36B]" strokeWidth={2.5} />
              <span data-dict-key="nav.institutions">{dict["nav.institutions"] || "Institutions & Municipalities"}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              <span data-dict-key="institutions.hero.title1">{dict["institutions.hero.title1"]}</span> <br/>
              <span data-dict-key="institutions.hero.title2" className="text-white">{dict["institutions.hero.title2"]}</span>
            </h1>
            
            <p data-dict-key="institutions.hero.desc" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["institutions.hero.desc"]}
            </p>
            
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
              <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20">
                <span data-dict-key="institutions.hero.cta">{dict["institutions.hero.cta"]}</span> <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. How it Works for Institutions */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 md:pt-24 mb-32 z-10 relative">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <h2 data-dict-key="institutions.steps.title" className="text-4xl md:text-5xl font-bold text-[#333] mb-6">{dict["institutions.steps.title"]}</h2>
            <div className="h-1.5 w-24 bg-[#E09D00] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#FDFBF7] p-10 rounded-[2.5rem] shadow-sm border border-[#E9C36B]/20 hover:shadow-xl hover:border-[#E09D00]/30 transition-all duration-500 group">
              <div className="bg-[#E9C36B]/30 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E09D00] mb-8 group-hover:bg-[#E09D00] group-hover:!text-white transition-colors shadow-sm">
                <Handshake size={32} />
              </div>
              <div className="text-[#E09D00] font-bold text-sm mb-4 uppercase tracking-widest">Step 01</div>
              <h3 data-dict-key="institutions.step1.title" className="text-2xl font-bold text-[#333] mb-4">{dict["institutions.step1.title"]}</h3>
              <p data-dict-key="institutions.step1.desc" className="text-[#8E8675] leading-relaxed">
                {dict["institutions.step1.desc"]}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FDFBF7] p-10 rounded-[2.5rem] shadow-sm border border-[#E9C36B]/20 hover:shadow-xl hover:border-[#E09D00]/30 transition-all duration-500 group">
              <div className="bg-[#E9C36B]/30 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E09D00] mb-8 group-hover:bg-[#E09D00] group-hover:!text-white transition-colors shadow-sm">
                <FolderKanban size={32} />
              </div>
              <div className="text-[#E09D00] font-bold text-sm mb-4 uppercase tracking-widest">Step 02</div>
              <h3 data-dict-key="institutions.step2.title" className="text-2xl font-bold text-[#333] mb-4">{dict["institutions.step2.title"]}</h3>
              <p data-dict-key="institutions.step2.desc" className="text-[#8E8675] leading-relaxed">
                {dict["institutions.step2.desc"]}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FDFBF7] p-10 rounded-[2.5rem] shadow-sm border border-[#E9C36B]/20 hover:shadow-xl hover:border-[#E09D00]/30 transition-all duration-500 group">
              <div className="bg-[#E9C36B]/30 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E09D00] mb-8 group-hover:bg-[#E09D00] group-hover:!text-white transition-colors shadow-sm">
                <ShieldCheck size={32} />
              </div>
              <div className="text-[#E09D00] font-bold text-sm mb-4 uppercase tracking-widest">Step 03</div>
              <h3 data-dict-key="institutions.step3.title" className="text-2xl font-bold text-[#333] mb-4">{dict["institutions.step3.title"]}</h3>
              <p data-dict-key="institutions.step3.desc" className="text-[#8E8675] leading-relaxed">
                {dict["institutions.step3.desc"]}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Register Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16 relative z-10">
        <AnimatedSection delay={0.3}>
          <div className="bg-[#50641B] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-[#50641B]/20 group">
            <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <div className="bg-white/10 w-20 h-20 rounded-[2rem] flex items-center justify-center text-white mx-auto mb-8 backdrop-blur-md border border-white/20">
                <Landmark size={40} />
              </div>
              <h2 data-dict-key="institutions.register.cta" className="text-3xl md:text-5xl font-bold mb-10">{dict["institutions.register.cta"]}</h2>
              <div className="flex justify-center">
                <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20">
                  <span data-dict-key="btn.register">{dict["btn.register"] || "Register"}</span> <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
