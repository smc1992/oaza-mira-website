import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import AppTeaser from "@/components/ui/AppTeaser";
import MagneticPull from "@/components/ui/MagneticPull";
import { ShieldCheck, ArrowRight, Apple, Play, CheckCircle2, Star, Users } from "lucide-react";
import pageImagesData from "@/content/images.json";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const testimonials = [
    {
      name: "Maria K.",
      location: lang === "hr" ? "Beč, Austrija" : lang === "de" ? "Wien, Österreich" : "Vienna, Austria",
      text: dict["howitworks.testimonial1"] || "Living in Vienna while my mother's grave is in Croatia used to worry me constantly. Now I receive photos every month and have peace of mind.",
      rating: 5,
    },
    {
      name: "Thomas B.",
      location: lang === "hr" ? "München, Njemačka" : lang === "de" ? "München, Deutschland" : "Munich, Germany",
      text: dict["howitworks.testimonial2"] || "The photo proof feature is incredible. I finally know that my father's grave is being well-maintained, even from 800km away.",
      rating: 5,
    },
    {
      name: "Ana M.",
      location: lang === "hr" ? "Zagreb, Hrvatska" : lang === "de" ? "Zagreb, Kroatien" : "Zagreb, Croatia",
      text: dict["howitworks.testimonial3"] || "We use Oaza Mira as a family. My siblings in Canada and I share the cost and the care. It's brought us closer together.",
      rating: 5,
    },
  ];

  return (
    <div className="page-wrapper relative overflow-hidden z-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 min-h-[90vh] -mb-px page-hero-section">
        {/* Background Image & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={(dict as any)["images.homeHero"] || pageImagesData.homeHero || "/Home_hero2.webp"}
            alt="Oaza Mira Cemetery Background"
            className="w-full h-full object-cover"
            data-dict-key="images.homeHero"
          />
          {/* Linear Gradient Overlay as per HTML1v2 design specification */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              zIndex: 1,
              background: "linear-gradient(100deg, rgba(20, 18, 12, .82) 0%, rgba(20, 18, 12, .55) 42%, rgba(20, 18, 12, .12) 75%, rgba(20, 18, 12, .05) 100%)"
            }}
          ></div>
          {/* Bottom fade into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#FDFCF9] to-transparent pointer-events-none" style={{ zIndex: 2 }}></div>
        </div>

        {/* Ambient SVG Glow (Screen overlay to give it a magical touch) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none" style={{ zIndex: 2 }}>
          <HeroBackgroundSVG />
        </div>
        
        <AnimatedSection delay={0.1} className="w-full relative z-[3]">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
              
              {/* The Classic Dove Logo (Centered above the left-aligned block) */}
              <div className="mb-8 w-full flex justify-center">
                <img 
                  src="/logo.png" 
                  alt="Oaza Mira Logo" 
                  className="h-24 sm:h-30 lg:h-36 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
                />
              </div>
              
              <h1 data-dict-key="hero.title" className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white drop-shadow-2xl text-left">
                {(() => {
                  const titleText = dict["hero.title"] || "Grave care, |at any distance.";
                  const parts = titleText.split("|");
                  return (
                    <>
                      {parts[0]}
                      {parts[1] && <span className="font-sans font-extrabold not-italic text-[#E9C36B]">{parts[1]}</span>}
                    </>
                  );
                })()}
              </h1>
              
              <p data-dict-key="hero.subtitle" className="mt-6 text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-lg font-medium text-left">
                {(() => {
                  const subtitleText = dict["hero.subtitle"] || "Stay connected to what matters — we care for your loved ones’ resting place with dignity and consistency";
                  const parts = subtitleText.split(/\*\*(.*?)\*\*/g);
                  return parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-extrabold text-white">{part}</strong> : part);
                })()}
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-6 w-full">
                <MagneticPull strength={15}>
                  <Link 
                    href="https://app.oaza-mira.app" 
                    className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#E09D00] !text-white hover:bg-[#c48a00] hover:scale-105 hover:-translate-y-[3px] hover:shadow-[0_14px_38px_rgba(224,157,0,0.42)] transition-all duration-300 shadow-[0_8px_26px_rgba(224,157,0,0.30)] border border-white/10 group font-bold text-lg"
                  >
                    <span data-dict-key="hero.cta.primary">{dict["hero.cta.primary"] || "Start for free"}</span>
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </MagneticPull>
                <MagneticPull strength={15}>
                  <Link 
                    href={`/${lang}/how-it-works`} 
                    className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-transparent !text-white border-[1.5px] border-white/40 hover:bg-white/12 hover:scale-105 hover:-translate-y-[3px] hover:border-white transition-all duration-300 font-bold text-lg"
                  >
                    <span data-dict-key="hero.cta.secondary">{dict["hero.cta.secondary"] || "How it works"}</span>
                  </Link>
                </MagneticPull>
              </div>
              
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
      <section className="py-24 lg:py-32 bg-[#F3EEE2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
            
            {/* Left side: Mediator Image */}
            <AnimatedSection delay={0.1} className="relative aspect-[5/4] rounded-[22px] overflow-hidden shadow-lg bg-[#F3EEE2] group w-full">
              <img 
                src="/njegovatelj_na_groblju.jpeg" 
                alt="Brižni njegovatelj na groblju" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none z-10"></div>
              <span className="absolute bottom-4 left-4 text-white text-xs font-semibold tracking-wider bg-black/40 px-4 py-2 rounded-full backdrop-blur-md z-20">
                {dict["home.mediator.imageLabel"] || "Provjereni lokalni partneri"}
              </span>
            </AnimatedSection>

            {/* Right side: Mediator Description & Features */}
            <AnimatedSection delay={0.2} className="flex flex-col items-start text-left w-full">
              <span className="text-[#E09D00] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
                {dict["home.mediator.eyebrow"] || "WHAT IS OAZA MIRA"}
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[#333] tracking-tight mb-6 leading-tight">
                {dict["home.mediator.title.part1"] || "We are an "}
                <span className="font-serif italic font-normal text-[#E09D00]">
                  {dict["home.mediator.title.part2"] || "intermediary"}
                </span>
                {dict["home.mediator.title.part3"] || ", not a contractor."}
              </h2>
              
              <p className="text-[#7A7366] text-base md:text-lg mb-8 leading-relaxed font-medium">
                {dict["home.mediator.desc"] || "Oaza Mira does not maintain graves directly. We connect you with verified local florists and caretakers — those who already know your cemetery — and ensure that every step is clear, agreed upon, and documented."}
              </p>

              <div className="space-y-6 mb-10 w-full">
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
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 4. NEW APP TEASER PROMO */}
      <AppTeaser dict={dict} lang={lang} />

      {/* 6. JEDNA PLATFORMA, ČETIRI ULOGE SECTION */}
      <section className="py-24 lg:py-32 bg-[#FDFCF9] relative overflow-hidden">
        {/* Decorative backdrop accents to match the premium warmth of the website */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[45%] h-[45%] bg-[#E9C36B]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-[#50641B]/4 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20 lg:mb-24">
              <span data-dict-key="home.roles.eyebrow" className="text-[#E09D00] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
                {dict["home.roles.eyebrow"] || "ZA KOGA SMO"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#333] tracking-tight mb-6">
                {dict["home.roles.title.part1"] || "Jedna platforma, "}
                <span className="font-serif italic font-normal text-[#E09D00]">
                  {dict["home.roles.title.part2"] || "četiri uloge"}
                </span>
              </h2>
              <p data-dict-key="home.roles.subtitle" className="text-[#7A7366] text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                {dict["home.roles.subtitle"] || "Bilo da tražite brigu ili je pružate — ovdje je vaše mjesto."}
              </p>
              <div className="w-20 h-1 bg-[#E09D00] mx-auto mt-8 rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Obitelji */}
            <AnimatedSection delay={0.2}>
              <Link href={`/${lang}/families`} className="relative overflow-hidden rounded-[22px] min-h-[380px] flex flex-col justify-end p-8 shadow-md hover:shadow-xl translate-y-0 hover:-translate-y-2 group border border-[#E9C36B]/10 hover:border-[#E9C36B]/40 h-full smooth-card-hover">
                <img 
                  src="/hero_families.webp" 
                  alt="Obitelji" 
                  className="absolute inset-0 w-full h-full object-cover z-0 transform scale-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-107"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#14120c]/15 via-[#14120c]/55 to-[#14120c]/85 pointer-events-none"></div>
                
                <div className="relative z-20 flex flex-col items-start text-left">
                  <span data-dict-key="home.roles.role1.badge" className="text-[#E9C36B] text-xs font-bold tracking-[0.18em] uppercase mb-2">
                    {dict["home.roles.role1.badge"] || "OBITELJI"}
                  </span>
                  <h3 data-dict-key="home.roles.role1.title" className="text-white text-2xl lg:text-3xl font-serif font-semibold mb-2">
                    {dict["home.roles.role1.title"] || "Za obitelji"}
                  </h3>
                  <p data-dict-key="home.roles.role1.desc" className="text-white/85 text-sm mb-4 leading-relaxed font-medium">
                    {dict["home.roles.role1.desc"] || "Brinite o počivalištu najmilijih s bilo kojeg mjesta na svijetu — uz fotodokaz nakon svakog posjeta."}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-bold text-sm transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]">
                    <span data-dict-key="home.roles.cta">{dict["home.roles.cta"] || "Saznajte više"}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            {/* Card 2: Partneri */}
            <AnimatedSection delay={0.3}>
              <Link href={`/${lang}/providers`} className="relative overflow-hidden rounded-[22px] min-h-[380px] flex flex-col justify-end p-8 shadow-md hover:shadow-xl translate-y-0 hover:-translate-y-2 group border border-[#E9C36B]/10 hover:border-[#E9C36B]/40 h-full smooth-card-hover">
                <img 
                  src="/hero_caretakers.webp" 
                  alt="Partneri" 
                  className="absolute inset-0 w-full h-full object-cover z-0 transform scale-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-107"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#14120c]/15 via-[#14120c]/55 to-[#14120c]/85 pointer-events-none"></div>
                
                <div className="relative z-20 flex flex-col items-start text-left">
                  <span data-dict-key="home.roles.role2.badge" className="text-[#E9C36B] text-xs font-bold tracking-[0.18em] uppercase mb-2">
                    {dict["home.roles.role2.badge"] || "PARTNERI"}
                  </span>
                  <h3 data-dict-key="home.roles.role2.title" className="text-white text-2xl lg:text-3xl font-serif font-semibold mb-2">
                    {dict["home.roles.role2.title"] || "Cvjećari i njegovatelji"}
                  </h3>
                  <p data-dict-key="home.roles.role2.desc" className="text-white/85 text-sm mb-4 leading-relaxed font-medium">
                    {dict["home.roles.role2.desc"] || "Primajte redovite narudžbe iz svog kraja, bez marketinga — i gradite ugled provjerenim radom."}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-bold text-sm transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]">
                    <span data-dict-key="home.roles.cta">{dict["home.roles.cta"] || "Saznajte više"}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            {/* Card 3: Tvrtke */}
            <AnimatedSection delay={0.4}>
              <Link href={`/${lang}/business`} className="relative overflow-hidden rounded-[22px] min-h-[380px] flex flex-col justify-end p-8 shadow-md hover:shadow-xl translate-y-0 hover:-translate-y-2 group border border-[#E9C36B]/10 hover:border-[#E9C36B]/40 h-full smooth-card-hover">
                <img 
                  src="/hero_business.webp" 
                  alt="Tvrtke" 
                  className="absolute inset-0 w-full h-full object-cover z-0 transform scale-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-107"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#14120c]/15 via-[#14120c]/55 to-[#14120c]/85 pointer-events-none"></div>
                
                <div className="relative z-20 flex flex-col items-start text-left">
                  <span data-dict-key="home.roles.role3.badge" className="text-[#E9C36B] text-xs font-bold tracking-[0.18em] uppercase mb-2">
                    {dict["home.roles.role3.badge"] || "TVRTKE"}
                  </span>
                  <h3 data-dict-key="home.roles.role3.title" className="text-white text-2xl lg:text-3xl font-serif font-semibold mb-2">
                    {dict["home.roles.role3.title"] || "Za tvrtke"}
                  </h3>
                  <p data-dict-key="home.roles.role3.desc" className="text-white/85 text-sm mb-4 leading-relaxed font-medium">
                    {dict["home.roles.role3.desc"] || "Cvjećarnice i komunalni servisi — proširite doseg i upravljajte narudžbama na jednom mjestu."}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-bold text-sm transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]">
                    <span data-dict-key="home.roles.cta">{dict["home.roles.cta"] || "Saznajte više"}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            {/* Card 4: Ustanove */}
            <AnimatedSection delay={0.5}>
              <Link href={`/${lang}/institutions`} className="relative overflow-hidden rounded-[22px] min-h-[380px] flex flex-col justify-end p-8 shadow-md hover:shadow-xl translate-y-0 hover:-translate-y-2 group border border-[#E9C36B]/10 hover:border-[#E9C36B]/40 h-full smooth-card-hover">
                <img 
                  src="/hero_institutions.webp" 
                  alt="Ustanove" 
                  className="absolute inset-0 w-full h-full object-cover z-0 transform scale-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-107"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#14120c]/15 via-[#14120c]/55 to-[#14120c]/85 pointer-events-none"></div>
                
                <div className="relative z-20 flex flex-col items-start text-left">
                  <span data-dict-key="home.roles.role4.badge" className="text-[#E9C36B] text-xs font-bold tracking-[0.18em] uppercase mb-2">
                    {dict["home.roles.role4.badge"] || "USTANOVE"}
                  </span>
                  <h3 data-dict-key="home.roles.role4.title" className="text-white text-2xl lg:text-3xl font-serif font-semibold mb-2">
                    {dict["home.roles.role4.title"] || "Za ustanove"}
                  </h3>
                  <p data-dict-key="home.roles.role4.desc" className="text-white/85 text-sm mb-4 leading-relaxed font-medium">
                    {dict["home.roles.role4.desc"] || "Groblja i uprave — digitalizirajte brigu o grobovima i ponudite uslugu obiteljima."}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-bold text-sm transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]">
                    <span data-dict-key="home.roles.cta">{dict["home.roles.cta"] || "Saznajte više"}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#F3EFE4] to-[#E9DFCA]">
        {/* Warm abstract glowing orbs instead of an image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#E9C36B]/20 rounded-full blur-[120px] pointer-events-none opacity-70 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] bg-[#50641B]/15 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
          {/* Subtle noise texture to keep it from looking flat */}
          <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-20">
              <h2 data-dict-key="howitworks.testimonials.title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#2a360e]">
                {dict["howitworks.testimonials.title"] || "Families Trust Oaza Mira"}
              </h2>
              <p data-dict-key="howitworks.testimonials.subtitle" className="mt-6 text-xl text-[#50641B]/80 max-w-2xl mx-auto">
                {dict["howitworks.testimonials.subtitle"] || "See what families around Europe have to say about their experience."}
              </p>
              <div className="w-24 h-1 bg-[#E9C36B] mx-auto mt-8 rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <div className="bg-[#FDFBF7]/80 backdrop-blur-xl rounded-3xl p-8 border border-[#E9C36B]/20 hover:border-[#E9C36B]/60 transition-all duration-500 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(233,195,107,0.15)] flex flex-col justify-between group">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-[#E09D00] fill-[#E09D00]" size={18} />
                      ))}
                    </div>
                    <p data-dict-key={`howitworks.testimonial${index + 1}`} className="text-[#4A4A4A] leading-relaxed mb-8 italic text-lg">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E9C36B]/20 to-transparent rounded-full flex items-center justify-center border border-[#E9C36B]/30 group-hover:scale-110 transition-transform duration-500">
                      <Users className="text-[#E09D00]" strokeWidth={1.5} size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-[#2a360e] tracking-wide">{testimonial.name}</p>
                      <p className="text-sm text-[#50641B]/70">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HIGH-IMPACT EMOTIONAL CTA */}
      <section className="pt-32 lg:pt-40 pb-32 relative overflow-hidden px-4 z-10 bg-[#FDFCF9]">
         <AnimatedSection delay={0.3}>
            <div className="max-w-7xl mx-auto">
               <div className="relative rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-2xl shadow-[#50641B]/30 text-center group flex flex-col justify-center items-center min-h-[450px]">
                  
                  {/* Emotional Background Image */}
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

                  {/* Redesigned Title from HTML1v2 */}
                  <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.15] font-extrabold text-white tracking-tight relative z-10 max-w-4xl mx-auto drop-shadow-xl mb-6">
                     {dict["home.cta.title.part1"] || "Spremni za "}
                     <span className="font-serif italic font-normal text-[#E9C36B]">
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
                        <Link href="https://app.oaza-mira.app" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] !text-white font-extrabold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.4)] transition-all duration-300 shadow-xl border border-white/20">
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
