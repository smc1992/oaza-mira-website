import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { CheckCircle2, Search, Camera, Heart, Users, Mail, ArrowRight, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import pageImagesData from "@/content/images.json";

export default async function FamiliesPage({ params }: { params: Promise<{ lang: string }> }) {
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
            src={pageImagesData.familiesHero || "/hero_families.webp"} 
            alt="Oaza Mira Families" 
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
              <Users size={16} strokeWidth={2.5} />
              <span data-dict-key="nav.families">{dict["nav.families"] || "For Families"}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              <span data-dict-key="families.hero.title1">{dict["families.hero.title1"]}</span> <br/>
              <span data-dict-key="families.hero.title2" className="text-white">{dict["families.hero.title2"]}</span>
            </h1>
            
            <p data-dict-key="families.hero.desc" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["families.hero.desc"]}
            </p>
            
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
              <Link href="#portal" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20">
                <span data-dict-key="families.hero.cta">{dict["families.hero.cta"] || "Register"}</span>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. How it works (Bento Grid) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 md:pt-24 mb-32 z-10 relative">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <h2 data-dict-key="families.how.title" className="text-3xl md:text-4xl font-bold text-[#333]">{dict["families.how.title"]}</h2>
            <div className="h-1 w-20 bg-[#E09D00] mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Steps */}
            {[
              { icon: CheckCircle2, title: dict["families.how.1.title"], desc: dict["families.how.1.desc"] },
              { icon: Search, title: dict["families.how.2.title"], desc: dict["families.how.2.desc"] },
              { icon: Camera, title: dict["families.how.3.title"], desc: dict["families.how.3.desc"] },
              { icon: Heart, title: dict["families.how.4.title"], desc: dict["families.how.4.desc"] }
            ].map((step, index) => (
              <div key={index} className="bg-[#FDFBF7] p-8 rounded-3xl shadow-sm border border-[#E9C36B]/20 hover:shadow-xl hover:border-[#E09D00]/30 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500 text-[#E09D00]">
                  <step.icon size={120} />
                </div>
                <div className="bg-[#E9C36B]/30 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E09D00] mb-6 group-hover:bg-[#E09D00] group-hover:!text-white transition-colors shadow-sm relative z-10">
                  <step.icon size={28} />
                </div>
                <h3 data-dict-key={`families.how.${index + 1}.title`} className="text-xl font-bold text-[#333] mb-3 relative z-10">{step.title}</h3>
                <p data-dict-key={`families.how.${index + 1}.desc`} className="text-[#8E8675] leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Invite Family & Know Someone */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32 relative z-10">
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Box 1 */}
            <div className="rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden text-white group shadow-xl bg-[#50641B]">
              <div className="absolute inset-0 z-0">
                <img 
                  src={pageImagesData.familiesInvite || "/families_invite_bg.jpg"} 
                  alt="Invite family" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#50641B]/60 mix-blend-multiply transition-opacity group-hover:opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#50641B] via-transparent to-transparent opacity-80"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col items-start">
                <div className="bg-white/10 border border-white/20 w-14 h-14 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 backdrop-blur-md">
                  <Users size={24} />
                </div>
                <h2 data-dict-key="families.invite.title" className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">{dict["families.invite.title"]}</h2>
                <p data-dict-key="families.invite.desc" className="text-white/90 text-lg leading-relaxed mb-auto pb-10 drop-shadow-sm font-medium">
                  {dict["families.invite.desc"]}
                </p>
                <Link href="#portal" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20">
                  <span data-dict-key="families.invite.cta">{dict["families.invite.cta"] || "Share with family"}</span>
                </Link>
              </div>
            </div>

            {/* Box 2 */}
            <div className="rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group shadow-lg hover:shadow-xl border border-[#E9C36B]/30 bg-white">
              <div className="absolute inset-0 z-0">
                <img 
                  src={pageImagesData.familiesCaretaker || "/families_caretaker_bg.jpg"} 
                  alt="Already have a caretaker" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-white/85 transition-opacity group-hover:opacity-80"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col items-start">
                <div className="bg-[#E9C36B]/40 w-14 h-14 rounded-2xl flex items-center justify-center text-[#E09D00] mb-8 shadow-sm backdrop-blur-sm">
                  <Mail size={24} />
                </div>
                <h2 data-dict-key="families.know.title" className="text-3xl md:text-4xl font-bold text-[#333] mb-6 drop-shadow-sm">{dict["families.know.title"]}</h2>
                <p data-dict-key="families.know.desc" className="text-[#555] text-lg leading-relaxed mb-auto pb-10 font-medium">
                  {dict["families.know.desc"]}
                </p>
                <Link href="#portal" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 group/btn shadow-lg border border-white/20">
                  <span data-dict-key="families.know.cta">{dict["families.know.cta"] || "Invite Your Caretaker"}</span> <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>


    </div>
  );
}
