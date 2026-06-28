import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Link2, ShieldCheck, Camera, Heart, ArrowRight, X, Check } from "lucide-react";
import pageImagesData from "@/content/images.json";
import MagneticPull from "@/components/ui/MagneticPull";

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
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[90vh] -mb-px">
        {/* Background Image & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={(dict as any)["images.aboutHero"] || pageImagesData.aboutHero || "/About_Hero2.webp"}
            alt="Floral arrangement"
            className="w-full h-full object-cover"
            data-dict-key="images.aboutHero"
          />
          {/* Linear Gradient Overlay as per HTML1v2 design specification */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: "linear-gradient(100deg, rgba(20, 18, 12, 0.82) 0%, rgba(20, 18, 12, 0.55) 42%, rgba(20, 18, 12, 0.12) 75%, rgba(20, 18, 12, 0.05) 100%)"
            }}
          ></div>
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
              <ShieldCheck size={16} strokeWidth={2.5} /> <span data-dict-key="about.label">{dict["about.label"] || "About Oaza Mira"}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
               <span data-dict-key="about.title.part1">{dict["about.title.part1"] || "Trusted care. Verified caretakers. "}</span>
               <span data-dict-key="about.title.part2" className="font-sans font-extrabold not-italic text-[#E9C36B] block sm:inline mt-2 sm:mt-0">
                  {dict["about.title.part2"] || "Clear proof."}
               </span>
            </h1>

            <p data-dict-key="about.5i94sz" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["about.5i94sz"] || "Oaza Mira is a platform that connects families with trusted local grave care providers."}
            </p>

            <div className="mt-12 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
               <MagneticPull strength={15}>
                  <Link href={`/${lang}#portal`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] !text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
                     <span data-dict-key="home.cta.primary">{dict["home.cta.primary"] || "Start for free"}</span>
                     <ArrowRight size={20} />
                  </Link>
               </MagneticPull>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. PLATFORM EXPLANATION */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left side: Platform Description */}
            <AnimatedSection delay={0.2} className="flex flex-col items-start text-left w-full">
              <span data-dict-key="about.platform.eyebrow" className="text-[#E09D00] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
                {dict["about.platform.eyebrow"] || "Oaza Mira"}
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#333] tracking-tight mb-6 leading-tight">
                {dict["about.platform.title.part1"] || "Platforma, "}
                <span className="font-serif italic font-normal text-[#E09D00]">
                  {dict["about.platform.title.part2"] || "ne izvođač usluge."}
                </span>
              </h2>
              
              <p data-dict-key="about.platform.lead" className="text-[#7A7366] text-lg md:text-xl mb-4 leading-relaxed font-medium">
                {dict["about.platform.lead"] || "Povezujemo vas s provjerenim lokalnim cvjećarima i njegovateljima koji svaku uslugu obavljaju s pažnjom i poštovanjem. Oaza Mira osigurava da je svaki korak provjeren i jasno dokumentiran."}
              </p>

              <p data-dict-key="about.platform.subtext" className="text-[#7A7366]/80 text-base md:text-lg leading-relaxed font-medium">
                {dict["about.platform.subtext"] || "Prijavite grob, odaberite brigu i primite jasan fotodokaz nakon svakog posjeta. Jednostavno, transparentno i s dostojanstvom."}
              </p>
            </AnimatedSection>

            {/* Right side: Care Hands Image with overlay badge */}
            <AnimatedSection delay={0.3} className="relative aspect-[4/3] lg:aspect-[1.1] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E9C36B]/25 group w-full">
              <Image
                src={(dict as any)["images.aboutCareHands"] || pageImagesData.aboutCareHands || "/platform_not_a_provider_main.webp"}
                alt={dict["about.platform.badge"] || "Briga s poštovanjem"}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                data-dict-key="images.aboutCareHands"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none z-10"></div>
              <span data-dict-key="about.platform.badge" className="absolute bottom-6 left-6 text-white text-xs md:text-sm font-semibold tracking-wider bg-black/40 px-5 py-2.5 rounded-full backdrop-blur-md z-20">
                {dict["about.platform.badge"] || "Briga s poštovanjem"}
              </span>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        {/* Cinematic Background Image & Luxury Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={(dict as any)["images.aboutWhatWeDo"] || pageImagesData.aboutWhatWeDo || "/about_what_we_do.webp"} 
            alt="Oaza Mira Cemetery Garden" 
            className="w-full h-full object-cover" 
            data-dict-key="images.aboutWhatWeDo"
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
              <h2 data-dict-key="about.c8lysq" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
                {dict["about.c8lysq"] || "What we do"}
              </h2>
              <div className="h-1.5 w-24 bg-[#E9C36B] mx-auto mt-8 rounded-full shadow-lg"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Cards with Premium Glassmorphism (2% opacity, 2px blur) */}
              <div className="bg-white/[0.02] backdrop-blur-[2px] rounded-3xl p-8 border border-white/[0.06] h-full transform transition-all hover:scale-105 hover:bg-white/[0.06] duration-500 shadow-2xl group transform-gpu translate-z-0">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 border border-white/[0.06] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Link2 size={32} />
                </div>
                <h4 data-dict-key="about.19u3im" className="text-2xl font-bold text-white mb-3 tracking-tight">{dict["about.19u3im"] || "Connect"}</h4>
                <p data-dict-key="about.ffnspn" className="text-white/80 leading-relaxed font-medium">{dict["about.ffnspn"] || "We connect you with trusted local caretakers."}</p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-[2px] rounded-3xl p-8 border border-white/[0.06] h-full transform transition-all hover:scale-105 hover:bg-white/[0.06] duration-500 shadow-2xl group transform-gpu translate-z-0">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 border border-white/[0.06] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <ShieldCheck size={32} />
                </div>
                <h4 data-dict-key="about.g1bwny" className="text-2xl font-bold text-white mb-3 tracking-tight">{dict["about.g1bwny"] || "Verify"}</h4>
                <p data-dict-key="about.xjr5ai" className="text-white/80 leading-relaxed font-medium">{dict["about.xjr5ai"] || "We verify every caretaker before they join our network."}</p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-[2px] rounded-3xl p-8 border border-white/[0.06] h-full transform transition-all hover:scale-105 hover:bg-white/[0.06] duration-500 shadow-2xl group transform-gpu translate-z-0">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 border border-white/[0.06] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Camera size={32} />
                </div>
                <h4 data-dict-key="about.k51ypq" className="text-2xl font-bold text-white mb-3 tracking-tight">{dict["about.k51ypq"] || "Document Care"}</h4>
                <p data-dict-key="about.mk7xo6" className="text-white/80 leading-relaxed font-medium">{dict["about.mk7xo6"] || "Each visit is confirmed with clear photo proof."}</p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-[2px] rounded-3xl p-8 border border-white/[0.06] h-full transform transition-all hover:scale-105 hover:bg-white/[0.06] duration-500 shadow-2xl group transform-gpu translate-z-0">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E9C36B] mb-8 border border-white/[0.06] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Heart size={32} />
                </div>
                <h4 data-dict-key="about.twhsw8" className="text-2xl font-bold text-white mb-3 tracking-tight">{dict["about.twhsw8"] || "Support"}</h4>
                <p data-dict-key="about.7mf0mf" className="text-white/80 leading-relaxed font-medium">{dict["about.7mf0mf"] || "We ensure everything runs smoothly, from start to finish."}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. SINCERITY (DO/DON'T) */}
      <section className="py-24 lg:py-32 relative z-10 overflow-hidden bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span data-dict-key="about.sincerity.eyebrow" className="text-[#E09D00] font-bold tracking-widest uppercase text-sm mb-4 block">
                {dict["about.sincerity.eyebrow"] || "Clear boundary"}
              </span>
              <h2 data-dict-key="about.sincerity.title" className="text-3xl md:text-5xl font-extrabold text-[#333] tracking-tight mb-6">
                {dict["about.sincerity.title"] || "Honestly about who we are"}
              </h2>
              <p data-dict-key="about.sincerity.desc" className="text-xl text-[#7A7366] leading-relaxed">
                {dict["about.sincerity.desc"] || "We believe honesty is the foundation of trust — so let's be clear."}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* DO CARD */}
            <AnimatedSection delay={0.3}>
              <div className="bg-[#FDFBF7] rounded-[2rem] overflow-hidden shadow-xl border border-[#50641B]/10 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                <div className="h-60 relative w-full">
                  <Image
                    src={(dict as any)["images.aboutWhatWeDo"] || pageImagesData.aboutWhatWeDo || "/about_what_we_do.webp"}
                    alt="What we are"
                    fill
                    className="object-cover"
                    data-dict-key="images.aboutWhatWeDo"
                  />
                  <div className="absolute inset-0 bg-[#50641B]/10 mix-blend-multiply"></div>
                </div>
                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#50641B]/10 text-[#50641B]">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <h3 data-dict-key="about.sincerity.do.title" className="text-2xl font-bold text-[#333] ml-3">
                      {dict["about.sincerity.do.title"] || "What we are"}
                    </h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3">
                      <span className="text-[#50641B] font-bold text-xl flex-shrink-0 mt-[-2px]">+</span>
                      <p data-dict-key="about.sincerity.do.item1" className="text-lg text-[#7A7366] leading-relaxed">
                        {dict["about.sincerity.do.item1"] || "A platform that connects families with local partners."}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#50641B] font-bold text-xl flex-shrink-0 mt-[-2px]">+</span>
                      <p data-dict-key="about.sincerity.do.item2" className="text-lg text-[#7A7366] leading-relaxed">
                        {dict["about.sincerity.do.item2"] || "A system that verifies and documents every service."}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#50641B] font-bold text-xl flex-shrink-0 mt-[-2px]">+</span>
                      <p data-dict-key="about.sincerity.do.item3" className="text-lg text-[#7A7366] leading-relaxed">
                        {dict["about.sincerity.do.item3"] || "An intermediary with clear, transparent payment."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* DON'T CARD */}
            <AnimatedSection delay={0.4}>
              <div className="bg-[#FDFBF7] rounded-[2rem] overflow-hidden shadow-xl border border-[#E9C36B]/20 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                <div className="h-60 relative w-full">
                  <Image
                    src={(dict as any)["images.aboutWhatWeDontDo"] || pageImagesData.aboutWhatWeDontDo || "/about_what_we_dont_do.webp"}
                    alt="What we are not"
                    fill
                    className="object-cover"
                    data-dict-key="images.aboutWhatWeDontDo"
                  />
                  <div className="absolute inset-0 bg-[#333]/10 mix-blend-multiply"></div>
                </div>
                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-600">
                      <X size={18} strokeWidth={3} />
                    </div>
                    <h3 data-dict-key="about.sincerity.dont.title" className="text-2xl font-bold text-[#333] ml-3">
                      {dict["about.sincerity.dont.title"] || "What we are not"}
                    </h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold text-xl flex-shrink-0 mt-[-2px]">–</span>
                      <p data-dict-key="about.sincerity.dont.item1" className="text-lg text-[#7A7366] leading-relaxed">
                        {dict["about.sincerity.dont.item1"] || "We do not care for graves ourselves — verified local partners do that."}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold text-xl flex-shrink-0 mt-[-2px]">–</span>
                      <p data-dict-key="about.sincerity.dont.item2" className="text-lg text-[#7A7366] leading-relaxed">
                        {dict["about.sincerity.dont.item2"] || "We do not employ caretakers directly — services are performed by local partners."}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold text-xl flex-shrink-0 mt-[-2px]">–</span>
                      <p data-dict-key="about.sincerity.dont.item3" className="text-lg text-[#7A7366] leading-relaxed">
                        {dict["about.sincerity.dont.item3"] || "We are not a municipal utility or direct cemetery caretakers."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
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

                  {/* Redesigned Title from HTML1v2 */}
                  <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.15] font-extrabold text-white tracking-tight relative z-10 max-w-4xl mx-auto drop-shadow-xl mb-6">
                     {dict["home.cta.title.part1"] || "Spremni za "}
                     <span className="font-sans font-extrabold not-italic text-[#E9C36B]">
                        {dict["home.cta.title.part2"] || "početak?"}
                     </span>
                  </h2>
                  
                  {/* Localized Description from HTML1v2 */}
                  <p data-dict-key="home.cta.desc" className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto relative z-10 font-medium drop-shadow-sm">
                     {dict["home.cta.desc"]}
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
                     <MagneticPull strength={15}>
                        <Link href={`/${lang}#portal`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] !text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
                           <span data-dict-key="home.cta.primary">{dict["home.cta.primary"] || "Započnite besplatno"}</span>
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
