import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Link2, ShieldCheck, Camera, Heart, ArrowRight, X } from "lucide-react";
import pageImagesData from "@/content/images.json";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = (await getDictionary(lang as Locale)) as any;

  return (
    <div className="page-wrapper relative overflow-hidden bg-gradient-to-b from-[#FDFCF9] via-[#FCFAF2] to-[#FDFCF9] min-h-screen z-0">
      {/* Decorative Blobs for Warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[60%] h-[40%] bg-[#E9C36B]/15 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#50641B]/8 rounded-full blur-[120px] animate-pulse-slow-reverse"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[50%] bg-[#E9C36B]/12 rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-[#50641B]/10 rounded-full blur-[110px]"></div>
      </div>

      {/* 1. ABOUT HERO */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[90vh]">
        {/* Background Image & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={pageImagesData.aboutHero || "/About_Hero2.webp"}
            alt="Floral arrangement"
            className="w-full h-full object-cover"
          />
          {/* Deep Green / Gold Luxury Overlay (Standardized 50/25 ratio) */}
          <div className="absolute inset-0 bg-[#50641B]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#333]/25"></div>
          {/* Transition Hero to body background smoothly */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FDFCF9] to-transparent"></div>
        </div>

        {/* Ambient SVG Glow */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <HeroBackgroundSVG />
        </div>

        <AnimatedSection delay={0.1}>
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E9C36B]/40 bg-[#E09D00]/20 text-[#E9C36B] text-sm font-bold tracking-widest uppercase mb-10 shadow-lg backdrop-blur-md">
              <ShieldCheck size={16} strokeWidth={2.5} /> {dict["about.label"] || "About Oaza Mira"}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              {dict["about.lltg2z"] || "Trusted care. Verified caretakers. Clear proof."}
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["about.5i94sz"] || "Oaza Mira is a platform that connects families with trusted local grave care providers."}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. PLATFORM EXPLANATION */}
      <section className="py-24 relative z-10 -mt-10 lg:-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection delay={0.2}>
            <div className="rounded-[3rem] lg:rounded-[4rem] bg-[#FDFBF7] relative overflow-hidden flex flex-col lg:flex-row items-center shadow-xl shadow-[#50641B]/5 border border-[#E9C36B]/20">

              <div className="p-12 lg:p-24 lg:w-[55%] relative z-10">
                 <h2 className="text-[#E09D00] font-bold tracking-widest uppercase text-sm mb-4">
                    {dict["about.impact"] || "Our Role"}
                 </h2>
                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#333] tracking-tight leading-[1.1]">
                    {dict["about.bmciuz"] || "A platform, not a service provider"}
                 </h3>
                 <p className="mt-6 text-xl text-[#8E8675] leading-relaxed">
                    {dict["about.fyalyk"] || "We connect families with verified local providers who perform the actual grave care services."}
                 </p>
                 <p className="mt-6 text-xl text-[#50641B] leading-relaxed font-bold">
                    {dict["about.qje0vl"] || "Register a grave, choose your services, and receive verified photo proof once the work is complete."}
                 </p>
              </div>

              <div className="lg:w-[45%] relative w-full h-[400px] lg:h-auto self-stretch">
                 <Image
                   src={pageImagesData.aboutCareHands || "/about_care_hands.png"}
                   alt="Care imagery"
                   fill
                   className="object-cover rounded-t-[3rem] lg:rounded-l-none lg:rounded-r-[4rem] shadow-inner"
                 />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        {/* Cinematic Background Image & Luxury Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={pageImagesData.aboutWhatWeDo || "/about_what_we_do.webp"} 
            alt="Oaza Mira Cemetery Garden" 
            className="w-full h-full object-cover" 
          />
          {/* Deep Green / Gold Luxury Overlay (50% intensity for emotional resonance) */}
          <div className="absolute inset-0 bg-[#50641B]/50 mix-blend-multiply"></div>
          {/* Secondary contrast layer (25% as per global standard) */}
          <div className="absolute inset-0 bg-[#333]/25"></div>
          {/* Gradient for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a360e]/40 via-transparent to-[#2a360e]/60"></div>
          {/* Premium noise texture */}
          <div className="absolute inset-0 z-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
                {dict["about.c8lysq"] || "What we do"}
              </h2>
              <div className="h-1.5 w-24 bg-[#E9C36B] mx-auto mt-8 rounded-full shadow-lg"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Cards with Premium Glassmorphism (15% opacity, XL blur) */}
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 h-full transform transition-all hover:scale-105 hover:bg-white/20 duration-500 shadow-2xl group transform-gpu translate-z-0">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Link2 size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{dict["about.19u3im"] || "Connect"}</h4>
                <p className="text-white/80 leading-relaxed font-medium">{dict["about.ffnspn"] || "We connect you with trusted local caretakers."}</p>
              </div>

              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 h-full transform transition-all hover:scale-105 hover:bg-white/20 duration-500 shadow-2xl group transform-gpu translate-z-0">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{dict["about.g1bwny"] || "Verify"}</h4>
                <p className="text-white/80 leading-relaxed font-medium">{dict["about.xjr5ai"] || "We verify every caretaker before they join our network."}</p>
              </div>

              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 h-full transform transition-all hover:scale-105 hover:bg-white/20 duration-500 shadow-2xl group transform-gpu translate-z-0">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Camera size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{dict["about.k51ypq"] || "Document Care"}</h4>
                <p className="text-white/80 leading-relaxed font-medium">{dict["about.mk7xo6"] || "Each visit is confirmed with clear photo proof."}</p>
              </div>

              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 h-full transform transition-all hover:scale-105 hover:bg-white/20 duration-500 shadow-2xl group transform-gpu translate-z-0">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Heart size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{dict["about.twhsw8"] || "Support"}</h4>
                <p className="text-white/80 leading-relaxed font-medium">{dict["about.7mf0mf"] || "We ensure everything runs smoothly, from start to finish."}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. WHAT WE DON'T DO */}
      <section className="py-24 lg:py-32 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.35}>
            <div className="bg-[#50641B] rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl border border-white/10">
              {/* Cinematic Background Image & Luxury Overlays */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={pageImagesData.aboutWhatWeDontDo || "/about_what_we_dont_do.webp"} 
                  alt="Dignified Cemetery Park" 
                  className="w-full h-full object-cover" 
                />
                {/* Deep Green / Gold Luxury Overlay (Standardized for emotional resonance) */}
                <div className="absolute inset-0 bg-[#50641B]/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[#333]/25"></div>
                {/* Premium noise texture */}
                <div className="absolute inset-0 z-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
              </div>

              <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E09D00]/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#B6C485]/20 rounded-full blur-3xl animate-pulse-slow-reverse"></div>

              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-12 drop-shadow-lg">{dict["about.w395tm"] || "What we don't do"}</h2>

                <div className="space-y-10">
                  <div className="flex items-start justify-center gap-6 group">
                    <div className="w-10 h-10 rounded-full bg-[#E09D00] text-white border border-[#E09D00]/40 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <X size={24} strokeWidth={3} />
                    </div>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-left font-medium">
                      {dict["about.neplkz"] || "We do not perform grave care ourselves. We connect you with trusted local caretakers."}
                    </p>
                  </div>
                  <div className="flex items-start justify-center gap-6 group">
                    <div className="w-10 h-10 rounded-full bg-[#E09D00] text-white border border-[#E09D00]/40 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <X size={24} strokeWidth={3} />
                    </div>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-left font-medium">
                      {dict["about.uqz92y"] || "We do not employ service providers directly. All services are carried out by verified local partners."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="pb-32 pt-10 relative overflow-hidden z-10">
         <AnimatedSection delay={0.4}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl text-center group border border-[#E9C36B]/20 bg-[#FDFBF7]">
                  {/* Cinematic Background Image & Luxury Overlays */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={pageImagesData.aboutSeeHowBg || "/about_see_how_bg.webp"} 
                      alt="Care for grave" 
                      className="w-full h-full object-cover" 
                    />
                    {/* Contrast-enhancing Overlays for the light text layout */}
                    <div className="absolute inset-0 bg-[#333]/40"></div>
                    <div className="absolute inset-0 bg-[#50641B]/20 mix-blend-multiply"></div>
                    {/* Premium noise texture */}
                    <div className="absolute inset-0 z-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                  </div>

                  <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E09D00]/25 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#50641B]/20 rounded-full blur-3xl"></div>

                  <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-extrabold text-white tracking-tight relative z-10 max-w-4xl mx-auto drop-shadow-2xl">
                     {dict["about.re1vey"] || "See how it works"}
                  </h1>
                  <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto relative z-10 font-bold drop-shadow-lg">
                     {dict["about.5i94sz"] || "Understand the process from registration to photo proof."}
                  </p>

                  <div className="mt-14 relative z-10 flex flex-col sm:flex-row justify-center gap-6">
                     <Link href={`/${lang}/how-it-works`} className="px-12 py-6 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] !text-[#1a2308] hover:!text-white font-black text-xl hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg border border-white/20">
                        {dict["nav.howItWorks"] || "See how it works"} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                     </Link>
                  </div>
               </div>
            </div>
         </AnimatedSection>
      </section>

    </div>
  );
}
