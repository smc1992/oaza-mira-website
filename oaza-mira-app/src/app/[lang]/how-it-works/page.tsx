import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import MagneticPull from "@/components/ui/MagneticPull";
import { 
  Smartphone, 
  UserPlus, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Camera, 
  Heart,
  ShieldCheck,
  MessageCircle,
  Flower2,
  Bell,
  ArrowRight,
  Play
} from "lucide-react";
import pageImagesData from "@/content/images.json";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const steps = [
    {
      icon: MapPin,
      number: "01",
      title: dict["howitworks.step1.title"] || "Register the grave",
      description: dict["howitworks.step1.desc"] || "Add the grave of your loved one to the Oaza Mira system.",
    },
    {
      icon: Flower2,
      number: "02",
      title: dict["howitworks.step2.title"] || "Choose a service",
      description: dict["howitworks.step2.desc"] || "Flowers, cleaning, candles or special care — you choose.",
    },
    {
      icon: CheckCircle2,
      number: "03",
      title: dict["howitworks.step3.title"] || "Confirm order",
      description: dict["howitworks.step3.desc"] || "Review and confirm your service request.",
    },
    {
      icon: Camera,
      number: "04",
      title: dict["howitworks.step4.title"] || "Receive photo proof",
      description: dict["howitworks.step4.desc"] || "Photos arrive as soon as the order is completed.",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      image: (dict as any)["images.howItWorksFeature1"] || pageImagesData.howItWorksFeature1 || "/invite_caretaker_fv.avif",
      imageKey: "images.howItWorksFeature1",
      title: dict["howitworks.feature1.title"] || "Verified Providers",
      description: dict["howitworks.feature1.desc"] || "Every caretaker in our network is verified, ensuring trust and reliability.",
    },
    {
      icon: Flower2,
      image: (dict as any)["images.howItWorksFeature2"] || pageImagesData.howItWorksFeature2 || "/about_hero_floral.png",
      imageKey: "images.howItWorksFeature2",
      title: dict["howitworks.feature2.title"] || "Fresh Floral Arrangements",
      description: dict["howitworks.feature2.desc"] || "Seasonal flowers and decorations to keep the resting place beautiful year-round.",
    },
    {
      icon: Camera,
      image: (dict as any)["images.howItWorksFeature3"] || pageImagesData.howItWorksFeature3 || "/about_what_we_do.webp",
      imageKey: "images.howItWorksFeature3",
      title: dict["howitworks.feature3.title"] || "Photo Documentation",
      description: dict["howitworks.feature3.desc"] || "Visual proof after every visit – transparency you can trust.",
    },
    {
      icon: Bell,
      image: (dict as any)["images.howItWorksFeature4"] || pageImagesData.howItWorksFeature4 || "/App_Teaser_BG.webp",
      imageKey: "images.howItWorksFeature4",
      title: dict["howitworks.feature4.title"] || "Real-Time Notifications",
      description: dict["howitworks.feature4.desc"] || "Get instant updates when care is completed or if any action is needed.",
    },
    {
      icon: MessageCircle,
      image: (dict as any)["images.howItWorksFeature5"] || pageImagesData.howItWorksFeature5 || "/Family_Collaboration.webp",
      imageKey: "images.howItWorksFeature5",
      title: dict["howitworks.feature5.title"] || "Family Collaboration",
      description: dict["howitworks.feature5.desc"] || "Invite family members to view and contribute to the care together.",
    },
    {
      icon: Heart,
      image: (dict as any)["images.howItWorksFeature6"] || pageImagesData.howItWorksFeature6 || "/platform_not_a_provider_main.webp",
      imageKey: "images.howItWorksFeature6",
      title: dict["howitworks.feature6.title"] || "Compassionate Support",
      description: dict["howitworks.feature6.desc"] || "Our team is here to help whenever you need assistance.",
    },
  ];


  return (
    <div className="page-wrapper relative overflow-hidden bg-gradient-to-b from-[#FDFCF9] via-[#FCFAF2] to-[#FDFCF9] min-h-screen z-0">
      {/* Decorative Blobs for Warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[60%] h-[40%] bg-[#E9C36B]/15 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#50641B]/8 rounded-full blur-[120px] animate-pulse-slow-reverse"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[50%] bg-[#E9C36B]/12 rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-[#50641B]/10 rounded-full blur-[110px]"></div>
      </div>
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[90vh] -mb-px page-hero-section">
        {/* Background Image & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={(dict as any)["images.howItWorksHero"] || pageImagesData.howItWorksHero || "/How_it_Works_Hero2.webp"}
            alt="Peaceful cemetery garden"
            className="w-full h-full object-cover"
            data-dict-key="images.howItWorksHero"
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
              <Play size={16} strokeWidth={2.5} /> <span data-dict-key="howitworks.eyebrow">{dict["howitworks.eyebrow"] || "How It Works"}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              <span className="block" data-dict-key="howitworks.title.part1">{dict["howitworks.title.part1"] || "Simple Care. "}</span>
              <span data-dict-key="howitworks.title.part2" className="block font-sans font-extrabold not-italic text-[#E9C36B] mt-2">
                {dict["howitworks.title.part2"] || "Lasting peace of mind."}
              </span>
            </h1>
            
            <p data-dict-key="howitworks.subtitle" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["howitworks.subtitle"] || "Getting started is simple. Follow a few clear steps to ensure ongoing, reliable care."}
            </p>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
              <MagneticPull strength={15}>
                <Link 
                  href="https://app.oaza-mira.app" 
                  className="group inline-flex items-center justify-center gap-[9px] py-[15px] px-[30px] rounded-full text-[15px] font-semibold tracking-[0.01em] bg-[#E09D00] text-white hover:bg-[#c48a00] hover:-translate-y-[3px] shadow-[0_8px_26px_rgba(224,157,0,0.3)] hover:shadow-[0_14px_38px_rgba(224,157,0,0.42)] transition-all duration-350 ease-[cubic-bezier(0.22,0.61,0.36,1)] border-none"
                >
                  <span data-dict-key="howitworks.hero.cta">{dict["howitworks.hero.cta"] || "Start for free"}</span>
                  <span className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-[4px]">→</span>
                </Link>
              </MagneticPull>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. STEPS SECTION */}
      <section className="py-24 lg:py-32 relative z-10 overflow-hidden">
        {/* Warm abstract textured background for the steps section removed to let the page-wrapper bg show through with blobs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-20">
              <span data-dict-key="howitworks.steps.eyebrow" className="text-[#E09D00] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
                {dict["howitworks.steps.eyebrow"] || "KORAK PO KORAK"}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#333] mb-6">
                <span data-dict-key="howitworks.steps.title.part1">{dict["howitworks.steps.title.part1"] || "Četiri jasna "}</span>
                <span data-dict-key="howitworks.steps.title.part2" className="font-serif italic font-normal text-[#E09D00]">
                  {dict["howitworks.steps.title.part2"] || "koraka"}
                </span>
              </h2>
              <p data-dict-key="howitworks.steps.subtitle" className="mt-6 text-xl text-[#8E8675] max-w-2xl mx-auto font-medium">
                {dict["howitworks.steps.subtitle"] || "Početak je jednostavan. Slijedite nekoliko jasnih koraka do redovite, pouzdane brige."}
              </p>
              <div className="w-24 h-1 bg-[#E09D00] mx-auto mt-6 rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)} className="relative">
                <div className="bg-[#FDFBF7]/80 backdrop-blur-xl rounded-3xl p-8 border border-[#E9C36B]/20 hover:border-[#E09D00]/40 hover:shadow-2xl hover:shadow-[#E09D00]/15 h-full relative group overflow-hidden flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 smooth-card-hover">
                  {/* Subtle hover gradient inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E9C36B]/0 to-[#E9C36B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col items-start text-left">
                    <span className="font-serif text-5xl font-semibold italic text-[#E09D00] opacity-60 mb-6 leading-none block">{step.number}</span>
                    <h3 data-dict-key={`howitworks.step${index + 1}.title`} className="text-xl font-bold text-[#333] mb-3">{step.title}</h3>
                    <p data-dict-key={`howitworks.step${index + 1}.desc`} className="text-[#7A7366] text-sm md:text-base leading-relaxed font-medium">{step.description}</p>
                  </div>
                </div>
                {index < 3 && (
                  <span className="hidden lg:block absolute top-[56px] -right-[16px] -translate-y-1/2 translate-x-1/2 text-[18px] text-[#E09D00] opacity-30 font-bold select-none z-20 pointer-events-none">
                    →
                  </span>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISIBILITY / SLIDER SECTION */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-[#FDFCF9]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#E9C36B]/8 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#50641B]/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Slider Column */}
            <AnimatedSection delay={0.1}>
              <div className="w-full">
                <BeforeAfterSlider
                  beforeImage="/home_slider_2_before.avif"
                  afterImage="/home_slider_1_after.avif"
                  beforeAlt={dict["howitworks.slider.before"] || "Prije"}
                  afterAlt={dict["howitworks.slider.after"] || "Poslije"}
                  beforeLabel={dict["howitworks.slider.before"] || "Prije"}
                  afterLabel={dict["howitworks.slider.after"] || "Poslije"}
                />
              </div>
            </AnimatedSection>

            {/* Text Column */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-start text-left lg:pl-6">
                <span data-dict-key="howitworks.slider.eyebrow" className="text-[#E09D00] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
                  {dict["howitworks.slider.eyebrow"] || "TRANSPARENTNOST"}
                </span>
                
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#333] mb-6 leading-tight">
                  <span data-dict-key="howitworks.slider.title.part1">{dict["howitworks.slider.title.part1"] || "Vidite "}</span>
                  <span data-dict-key="howitworks.slider.title.part2" className="font-serif italic font-normal text-[#E09D00]">
                    {dict["howitworks.slider.title.part2"] || "svaki korak."}
                  </span>
                </h2>
                
                <p data-dict-key="howitworks.slider.desc" className="text-[#7A7366] text-lg md:text-xl font-medium leading-relaxed mb-8">
                  {dict["howitworks.slider.desc"] || "Od trenutka kad naručite do fotografija nakon posjeta — sve je jasno vidljivo. Bez nejasnoća, bez čekanja u neizvjesnosti. Znate tko brine o grobu, kada i kako."}
                </p>

                <div className="flex">
                  <Link 
                    href={`/${lang}/families`} 
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-[#50641B] text-[#50641B] hover:bg-[#50641B] hover:text-white font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <span data-dict-key="howitworks.slider.cta">{dict["howitworks.slider.cta"] || "Za obitelji"}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Lighter, warmer image background with soft green overlays */}
        <div className="absolute inset-0 z-0 bg-[#3A4A13]">
          <Image 
            src={(dict as any)["images.howItWorksCtaBg"] || pageImagesData.howItWorksCtaBg || "/cta-bg.png"}
            alt="Oaza Mira special approach"
            fill
            className="object-cover opacity-80"
            data-dict-key="images.howItWorksCtaBg"
          />
          {/* Lighter multiply for the warm green brand feel without completely darkening the image */}
          <div className="absolute inset-0 mix-blend-multiply bg-[#50641B]/60"></div>
          {/* Gentle gradient to ensure top/bottom readability without going pure black */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a360e]/50 via-[#3A4A13]/10 to-[#2a360e]/70"></div>
          {/* Noise texture overlay */}
          <div className="absolute inset-0 z-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
                <span data-dict-key="howitworks.features.title.part1">{dict["howitworks.features.title.part1"] || "What Makes Us "}</span>
                <span data-dict-key="howitworks.features.title.part2" className="font-sans font-extrabold not-italic text-[#E9C36B]">
                  {dict["howitworks.features.title.part2"] || "Special"}
                </span>
              </h2>
              <p data-dict-key="howitworks.features.subtitle" className="mt-6 text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
                {dict["howitworks.features.subtitle"] || "We've built a platform that prioritizes trust, transparency, and compassion."}
              </p>
              <div className="w-24 h-1 bg-[#E9C36B]/60 mx-auto mt-8 rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-6 border border-white/15 hover:border-[#E9C36B]/60 hover:bg-white/15 transition-all duration-500 h-full group shadow-xl shadow-black/15 transform-gpu translate-z-0 flex flex-col justify-between">
                <div>
                  {/* Card Image Container */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-3xl mb-6 shadow-md border border-white/10 group-hover:border-[#E9C36B]/40 transition-all duration-500">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      data-dict-key={feature.imageKey}
                    />
                    {/* Elegant Dark Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75"></div>
                    
                    {/* Floating badge for icon */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 shadow-lg text-[#E9C36B] group-hover:scale-110 transition-transform duration-500">
                      <feature.icon strokeWidth={1.5} size={24} />
                    </div>
                  </div>

                  <h3 data-dict-key={`howitworks.feature${index + 1}.title`} className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#E9C36B] transition-colors duration-300">{feature.title}</h3>
                  <p data-dict-key={`howitworks.feature${index + 1}.desc`} className="text-white/80 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. CTA SECTION */}
      <section className="pt-32 lg:pt-40 pb-32 relative overflow-hidden px-4 z-10 bg-[#FDFCF9]">
         <AnimatedSection delay={0.3}>
            <div className="max-w-7xl mx-auto">
               <div className="relative rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-24 overflow-hidden shadow-2xl shadow-[#50641B]/30 text-center group flex flex-col justify-center items-center min-h-[450px]">
                  
                  {/* Emotional Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={(dict as any)["images.readyToBeginHero"] || pageImagesData.readyToBeginHero || "/How_it_Works_Ready_to_Begin.webp"} 
                      alt="Oaza Mira Care" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] select-none pointer-events-none" 
                      data-dict-key="images.readyToBeginHero"
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
