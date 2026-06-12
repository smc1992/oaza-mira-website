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

      {/* 3. HOW OAZA MIRA WORKS SECTION */}
      <section className="py-24 lg:py-32 bg-[#FDFCF9] relative overflow-hidden">
        {/* Decorative backdrop accents to match the premium warmth of the website */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[20%] left-[-10%] w-[45%] h-[45%] bg-[#E9C36B]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-[#50641B]/4 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20 lg:mb-24">
              <span className="text-[#E09D00] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
                {dict["home.steps.eyebrow"] || "JEDNOSTAVNO OBJAŠNJENO"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#333] tracking-tight mb-6">
                {dict["home.steps.title.part1"] || "Kako Oaza Mira "}
                <span className="font-serif italic font-normal text-[#E09D00]">
                  {dict["home.steps.title.part2"] || "funkcionira"}
                </span>
              </h2>
              <p className="text-[#7A7366] text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                {dict["home.steps.subtitle"] || "Tri koraka razdvajaju vas od mirne sigurnosti da je grob uređen."}
              </p>
              <div className="w-20 h-1 bg-[#E09D00] mx-auto mt-8 rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Step 1 */}
            <AnimatedSection delay={0.2} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-full mb-6 text-center">
                <span className="h-px w-10 bg-[#E9C36B]/40 block"></span>
                <span className="font-serif text-[#E09D00] text-sm md:text-base font-bold tracking-[0.2em] px-4">
                  01
                </span>
                <span className="h-px w-10 bg-[#E9C36B]/40 block"></span>
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#333] mb-4">
                {dict["home.steps.step1.title"] || "Vi naručite"}
              </h3>
              <p className="text-[#7A7366] text-base lg:text-lg leading-relaxed max-w-sm font-medium">
                {dict["home.steps.step1.desc"] || "Odaberete grob i uslugu — cvijeće, čišćenje ili svijeće — kroz aplikaciju."}
              </p>
            </AnimatedSection>

            {/* Step 2 */}
            <AnimatedSection delay={0.3} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-full mb-6 text-center">
                <span className="h-px w-10 bg-[#E9C36B]/40 block"></span>
                <span className="font-serif text-[#E09D00] text-sm md:text-base font-bold tracking-[0.2em] px-4">
                  02
                </span>
                <span className="h-px w-10 bg-[#E9C36B]/40 block"></span>
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#333] mb-4">
                {dict["home.steps.step2.title"] || "Lokalni partner brine"}
              </h3>
              <p className="text-[#7A7366] text-base lg:text-lg leading-relaxed max-w-sm font-medium">
                {dict["home.steps.step2.desc"] || "Provjereni cvjećar ili njegovatelj iz tog mjesta preuzima i obavlja posao."}
              </p>
            </AnimatedSection>

            {/* Step 3 */}
            <AnimatedSection delay={0.4} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-full mb-6 text-center">
                <span className="h-px w-10 bg-[#E9C36B]/40 block"></span>
                <span className="font-serif text-[#E09D00] text-sm md:text-base font-bold tracking-[0.2em] px-4">
                  03
                </span>
                <span className="h-px w-10 bg-[#E9C36B]/40 block"></span>
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#333] mb-4">
                {dict["home.steps.step3.title"] || "Vi dobivate dokaz"}
              </h3>
              <p className="text-[#7A7366] text-base lg:text-lg leading-relaxed max-w-sm font-medium">
                {dict["home.steps.step3.desc"] || "Fotografije prije i poslije stižu vam na telefon, gdje god se nalazili."}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3.5 MEDIATOR SECTION (Mi smo posrednik, ne izvođač) */}
      <section className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center py-20 lg:py-32">
        {/* Full-width Background Image & cinematic overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/about_what_we_do.webp"
            alt="Oaza Mira Mediator Background"
            className="w-full h-full object-cover"
          />
          {/* Olive Multiply & gradient overlay */}
          <div className="absolute inset-0 bg-[#50641B]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/40 via-black/25 to-black/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-center lg:justify-end">
          <AnimatedSection delay={0.2} className="w-full max-w-2xl">
            <div className="bg-[#FDFCF9]/95 backdrop-blur-xl border border-white/40 shadow-[0_30px_60px_rgba(0,0,0,0.25)] rounded-[2rem] p-8 md:p-12 lg:p-14">
              
              <span className="text-[#E09D00] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
                {dict["home.mediator.eyebrow"] || "WHAT IS OAZA MIRA"}
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#333] tracking-tight mb-6 leading-tight">
                {dict["home.mediator.title.part1"] || "We are an "}
                <span className="font-serif italic font-normal text-[#E09D00]">
                  {dict["home.mediator.title.part2"] || "intermediary"}
                </span>
                {dict["home.mediator.title.part3"] || ", not a contractor."}
              </h2>
              
              <p className="text-[#7A7366] text-base md:text-lg mb-8 leading-relaxed font-medium">
                {dict["home.mediator.desc"] || "Oaza Mira does not maintain graves directly. We connect you with verified local florists and caretakers — those who already know your cemetery — and ensure that every step is clear, agreed upon, and documented."}
              </p>

              <div className="space-y-6 mb-10">
                {/* Feature 1 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#50641B]/10 flex items-center justify-center text-[#50641B]">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#333] font-bold text-lg leading-tight mb-1">
                      {dict["home.mediator.feature1.title"] || "Verified Partners"}
                    </h4>
                    <p className="text-[#7A7366] text-sm md:text-base leading-relaxed font-medium">
                      {dict["home.mediator.feature1.desc"] || "Every florist and caretaker goes through verification before joining the network."}
                    </p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#50641B]/10 flex items-center justify-center text-[#50641B]">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#333] font-bold text-lg leading-tight mb-1">
                      {dict["home.mediator.feature2.title"] || "Photo Proof After Each Visit"}
                    </h4>
                    <p className="text-[#7A7366] text-sm md:text-base leading-relaxed font-medium">
                      {dict["home.mediator.feature2.desc"] || "See the actual results — before and after photos."}
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#50641B]/10 flex items-center justify-center text-[#50641B]">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#333] font-bold text-lg leading-tight mb-1">
                      {dict["home.mediator.feature3.title"] || "Secure & Transparent Payment"}
                    </h4>
                    <p className="text-[#7A7366] text-sm md:text-base leading-relaxed font-medium">
                      {dict["home.mediator.feature3.desc"] || "Pay safely through the app, with zero cash and complete clarity."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <Link 
                  href={`/${lang}/about`} 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#50641B] text-[#50641B] hover:bg-[#50641B] hover:text-white font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>{dict["home.mediator.cta"] || "More About Us"}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

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
