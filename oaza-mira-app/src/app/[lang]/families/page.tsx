import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { CheckCircle2, Search, Camera, Heart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import pageImagesData from "@/content/images.json";
import MagneticPull from "@/components/ui/MagneticPull";
import ShareButton from "@/components/ui/ShareButton";

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
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[90vh] -mb-px">
        {/* Background Image & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={(dict as any)["images.familiesHero"] || pageImagesData.familiesHero || "/hero_families.webp"} 
            alt="Oaza Mira Families" 
            className="w-full h-full object-cover"
            data-dict-key="images.familiesHero"
          />
          {/* Linear Gradient Overlay as per HTML1v2 design specification */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: "linear-gradient(100deg, rgba(20, 18, 12, 0.82) 0%, rgba(20, 18, 12, 0.55) 42%, rgba(20, 18, 12, 0.12) 75%, rgba(20, 18, 12, 0.05) 100%)"
            }}
          ></div>
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
              <span data-dict-key="families.hero.badge">{dict["families.hero.badge"] || "Obitelji"}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              <span data-dict-key="families.hero.title1">{dict["families.hero.title1"]}</span> <br/>
              <span data-dict-key="families.hero.title2" className="font-sans font-extrabold not-italic text-[#E9C36B] block sm:inline mt-2 sm:mt-0">
                {dict["families.hero.title2"]}
              </span>
            </h1>
            
            <p data-dict-key="families.hero.desc" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["families.hero.desc"]}
            </p>
            
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4 relative z-20">
              <MagneticPull strength={15}>
                <Link href="https://app.oaza-mira.app" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] !text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
                  <span data-dict-key="home.cta.primary">{dict["home.cta.primary"] || "Start for free"}</span>
                  <ArrowRight size={20} />
                </Link>
              </MagneticPull>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. Od narudžbe do fotografije */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 md:pt-24 mb-32 z-10 relative">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <h2 data-dict-key="families.how.title" className="text-4xl md:text-5xl font-extrabold text-[#333] tracking-tight drop-shadow-sm">
              {dict["families.how.title"] || "Od narudžbe do fotografije"}
            </h2>
            <div className="h-1.5 w-24 bg-[#E09D00] mx-auto mt-6 rounded-full shadow-sm"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Steps */}
            {[
              { icon: CheckCircle2, title: dict["families.how.1.title"], desc: dict["families.how.1.desc"] },
              { icon: Search, title: dict["families.how.2.title"], desc: dict["families.how.2.desc"] },
              { icon: Camera, title: dict["families.how.3.title"], desc: dict["families.how.3.desc"] },
              { icon: Heart, title: dict["families.how.4.title"], desc: dict["families.how.4.desc"] }
            ].map((step, index) => (
              <div key={index} className="bg-[#FDFBF7] p-8 rounded-3xl shadow-sm border border-[#E9C36B]/20 hover:shadow-xl hover:border-[#E09D00]/30 transition-all duration-300 group relative overflow-hidden flex flex-col justify-start h-full min-h-[260px] text-left">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500 text-[#E09D00]">
                  <step.icon size={120} />
                </div>
                <div className="bg-[#E9C36B]/30 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E09D00] mb-6 group-hover:bg-[#E09D00] group-hover:!text-white transition-colors shadow-sm relative z-10">
                  <step.icon size={28} />
                </div>
                <div className="text-xs font-bold text-[#E09D00] tracking-wider mb-2">0{index + 1}</div>
                <h3 data-dict-key={`families.how.${index + 1}.title`} className="text-xl font-extrabold text-[#333] mb-3 relative z-10 leading-tight">{step.title}</h3>
                <p data-dict-key={`families.how.${index + 1}.desc`} className="text-[#7A7366] text-sm md:text-base leading-relaxed relative z-10 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Pozovite člana obitelji */}
      <section className="py-24 bg-[#FCFAF2] border-y border-[#E9C36B]/15 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Media Left */}
              <div className="w-full lg:w-[45%] aspect-[4/3] lg:aspect-[1.2] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E9C36B]/25">
                <Image
                  src={(dict as any)["images.familiesInvite"] || pageImagesData.familiesInvite || "/families_invite_bg.jpg"}
                  alt="Invite family"
                  fill
                  className="object-cover"
                  data-dict-key="images.familiesInvite"
                />
              </div>
              
              {/* Content Right */}
              <div className="w-full lg:w-[55%] flex flex-col justify-center">
                <span data-dict-key="families.invite.eyebrow" className="text-[#50641B] font-bold tracking-widest uppercase text-sm mb-4">
                  {dict["families.invite.eyebrow"] || "Zajedno"}
                </span>
                <h2 data-dict-key="families.invite.title" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#333] tracking-tight leading-[1.1] mb-6">
                  {dict["families.invite.title"]}
                </h2>
                <p data-dict-key="families.invite.desc" className="text-lg text-[#7A7366] leading-relaxed mb-10 font-medium">
                  {dict["families.invite.desc"]}
                </p>
                <ShareButton 
                  label={dict["families.invite.cta"] || "Share with family"} 
                  successLabel={lang === 'de' ? "Link kopiert!" : lang === 'hr' ? "Kopirano!" : "Link copied!"}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Pozovite cvjećara */}
      <section className="py-[110px] bg-[#FDFCF9] relative z-10">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[60px] items-center">
              {/* Content Left */}
              <div className="w-full flex flex-col justify-center order-2 lg:order-1">
                <span data-dict-key="families.know.eyebrow" className="text-[#E09D00] text-[12px] font-bold tracking-[0.2em] uppercase mb-[14px] inline-block">
                  {dict["families.know.eyebrow"] || "Već imate cvjećara?"}
                </span>
                <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-[#2b2a25] tracking-tight leading-[1.12] mb-[18px]">
                  <span data-dict-key="families.know.title.part1">{dict["families.know.title.part1"] || "Pozovite ga na "}</span>
                  <span data-dict-key="families.know.title.part2" className="font-serif italic font-normal text-[#E09D00]">
                    {dict["families.know.title.part2"] || "Oazu Mira."}
                  </span>
                </h2>
                <p data-dict-key="families.know.desc" className="text-[19px] text-[#5c594f] font-normal leading-[1.7] mt-0 mb-0">
                  {dict["families.know.desc"]}
                </p>
                <div className="mt-[28px] flex flex-col sm:flex-row items-center gap-6 w-full">
                  <MagneticPull strength={15}>
                    <Link href="https://app.oaza-mira.app" className="inline-flex items-center gap-[9px] px-[30px] py-[15px] rounded-full text-[15px] font-semibold tracking-[0.01em] border-[1.5px] border-[#2b2a25]/12 text-[#2b2a25] bg-white/50 hover:border-[#E09D00] hover:text-[#c48a00] hover:-translate-y-[3px] hover:bg-white transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] shadow-sm group">
                      <span data-dict-key="families.know.cta">{dict["families.know.cta"] || "Pozovite svog partnera"}</span>
                      <span className="transition-transform duration-350 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-1">→</span>
                    </Link>
                  </MagneticPull>
                </div>
              </div>

              {/* Media Right */}
              <div className="w-full aspect-[5/4] relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(80,100,27,0.1)] bg-[#F3EEE2] order-1 lg:order-2 group">
                <Image
                  src={(dict as any)["images.familiesCaretaker"] || pageImagesData.familiesCaretaker || "/invite_them_to_oaza_mira_main.webp"}
                  alt="Caretaker"
                  fill
                  className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-105"
                  data-dict-key="images.familiesCaretaker"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="pt-32 lg:pt-40 pb-32 relative overflow-hidden px-4 z-10 bg-[#FDFCF9]">
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

              <h2 data-dict-key="families.cta.title" className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-extrabold text-white tracking-tight relative z-10 max-w-4xl mx-auto drop-shadow-xl mb-4">
                {dict["families.cta.title"] || "Vaši najmiliji zaslužuju brigu."}
              </h2>
              
              <p data-dict-key="families.cta.desc" className="text-xl text-white/90 max-w-2xl mx-auto mb-12 relative z-10 drop-shadow-md leading-relaxed font-medium">
                {dict["families.cta.desc"] || "Pridružite se obiteljima koje vjeruju Oazi Mira, gdje god se nalazile."}
              </p>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
                <MagneticPull strength={15}>
                  <Link href="https://app.oaza-mira.app" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] !text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
                    <span data-dict-key="home.cta.primary">{dict["home.cta.primary"] || "Start for free"}</span>
                    <ArrowRight size={20} />
                  </Link>
                </MagneticPull>
                <MagneticPull strength={15}>
                  <Link href={`/${lang}/how-it-works`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/20 backdrop-blur-md !text-white border border-white/20 shadow-lg font-bold text-lg hover:bg-white hover:!text-[#1a2208] transition-all duration-300 transform-gpu translate-z-0">
                    <span data-dict-key="nav.howItWorks">{dict["nav.howItWorks"] || "How it works"}</span>
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
