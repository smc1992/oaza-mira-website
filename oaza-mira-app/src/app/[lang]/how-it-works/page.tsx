import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
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
  Users,
  ArrowRight,
  Play,
  Star
} from "lucide-react";
import pageImagesData from "@/content/images.json";

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const steps = [
    {
      icon: Smartphone,
      number: "01",
      title: dict["howitworks.step1.title"] || "Get Started",
      description: dict["howitworks.step1.desc"] || "Download and create your account.",
    },
    {
      icon: Calendar,
      number: "02",
      title: dict["howitworks.step2.title"] || "Register & Choose",
      description: dict["howitworks.step2.desc"] || "Register your grave and select a care plan.",
    },
    {
      icon: CheckCircle2,
      number: "03",
      title: dict["howitworks.step3.title"] || "Care Delivery",
      description: dict["howitworks.step3.desc"] || "A trusted local caretaker takes over.",
    },
    {
      icon: Camera,
      number: "04",
      title: dict["howitworks.step4.title"] || "Stay Updated",
      description: dict["howitworks.step4.desc"] || "Receive before-and-after photos after each visit.",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: dict["howitworks.feature1.title"] || "Verified Providers",
      description: dict["howitworks.feature1.desc"] || "Every caretaker in our network is verified, ensuring trust and reliability.",
    },
    {
      icon: Flower2,
      title: dict["howitworks.feature2.title"] || "Fresh Floral Arrangements",
      description: dict["howitworks.feature2.desc"] || "Seasonal flowers and decorations to keep the resting place beautiful year-round.",
    },
    {
      icon: Camera,
      title: dict["howitworks.feature3.title"] || "Photo Documentation",
      description: dict["howitworks.feature3.desc"] || "Visual proof after every visit – transparency you can trust.",
    },
    {
      icon: Bell,
      title: dict["howitworks.feature4.title"] || "Real-Time Notifications",
      description: dict["howitworks.feature4.desc"] || "Get instant updates when care is completed or if any action is needed.",
    },
    {
      icon: MessageCircle,
      title: dict["howitworks.feature5.title"] || "Family Collaboration",
      description: dict["howitworks.feature5.desc"] || "Invite family members to view and contribute to the care together.",
    },
    {
      icon: Heart,
      title: dict["howitworks.feature6.title"] || "Compassionate Support",
      description: dict["howitworks.feature6.desc"] || "Our team is here to help whenever you need assistance.",
    },
  ];

  const testimonials = [
    {
      name: "Maria K.",
      location: "Vienna, Austria",
      text: dict["howitworks.testimonial1"] || "Living in Vienna while my mother's grave is in Croatia used to worry me constantly. Now I receive photos every month and have peace of mind.",
      rating: 5,
    },
    {
      name: "Thomas B.",
      location: "Munich, Germany",
      text: dict["howitworks.testimonial2"] || "The photo proof feature is incredible. I finally know that my father's grave is being well-maintained, even from 800km away.",
      rating: 5,
    },
    {
      name: "Ana M.",
      location: "Zagreb, Croatia",
      text: dict["howitworks.testimonial3"] || "We use Oaza Mira as a family. My siblings in Canada and I share the cost and the care. It's brought us closer together.",
      rating: 5,
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
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[90vh]">
        {/* Background Image & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={(dict as any)["images.howItWorksHero"] || pageImagesData.howItWorksHero || "/How_it_Works_Hero2.webp"}
            alt="Peaceful cemetery garden"
            className="w-full h-full object-cover"
            data-dict-key="images.howItWorksHero"
          />
          {/* Deep Green / Gold Luxury Overlay for crisp white text readability */}
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
              <Play size={16} strokeWidth={2.5} /> <span data-dict-key="howitworks.eyebrow">{dict["howitworks.eyebrow"] || "How It Works"}</span>
            </div>
            
            <h1 data-dict-key="howitworks.title" className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tighter text-white max-w-5xl mx-auto drop-shadow-2xl">
              {dict["howitworks.title"] || "Simple Care. Lasting Peace of Mind."}
            </h1>
            
            <p data-dict-key="howitworks.subtitle" className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
              {dict["howitworks.subtitle"] || "Getting started is simple. Follow a few clear steps to ensure ongoing, reliable care."}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. STEPS SECTION */}
      <section className="py-24 lg:py-32 relative z-10 overflow-hidden">
        {/* Warm abstract textured background for the steps section removed to let the page-wrapper bg show through with blobs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-20">
              <h2 data-dict-key="howitworks.steps.title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#333]">
                {dict["howitworks.steps.title"] || "How It Works"}
              </h2>
              <p data-dict-key="howitworks.steps.subtitle" className="mt-6 text-xl text-[#8E8675] max-w-2xl mx-auto font-medium">
                {dict["howitworks.steps.subtitle"] || "Getting started is simple. Follow a few clear steps to ensure ongoing, reliable care."}
              </p>
              <div className="w-24 h-1 bg-[#E09D00] mx-auto mt-6 rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <div className="bg-[#FDFBF7]/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-[#50641B]/5 border border-[#E9C36B]/20 hover:border-[#E09D00]/40 hover:shadow-2xl hover:shadow-[#E09D00]/15 transition-all duration-500 h-full relative group overflow-hidden">
                  {/* Subtle hover gradient inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E9C36B]/0 to-[#E9C36B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-extrabold text-[#E9C36B]/40 drop-shadow-sm">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-[#E9C36B]/40 to-[#E09D00]/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-white">
                        <step.icon className="text-[#A26D00]" size={28} />
                      </div>
                      <h3 data-dict-key={`howitworks.step${index + 1}.title`} className="text-xl font-bold text-[#333] mb-3">{step.title}</h3>
                      <p data-dict-key={`howitworks.step${index + 1}.desc`} className="text-[#7A7366] leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
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
              <h2 data-dict-key="howitworks.features.title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
                {dict["howitworks.features.title"] || "What Makes Oaza Mira Special"}
              </h2>
              <p data-dict-key="howitworks.features.subtitle" className="mt-6 text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
                {dict["howitworks.features.subtitle"] || "We've built a platform that prioritizes trust, transparency, and compassion."}
              </p>
              <div className="w-24 h-1 bg-[#E9C36B]/60 mx-auto mt-8 rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-[#E9C36B]/60 hover:bg-white/20 transition-all duration-500 h-full group shadow-xl shadow-black/10 transform-gpu translate-z-0">
                {/* Premium Icon Container */}
                <div className="bg-gradient-to-br from-[#E9C36B]/20 to-[#E9C36B]/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[#E9C36B]/30 shadow-[0_0_20px_rgba(233,195,107,0.15)] group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="text-[#E9C36B]" strokeWidth={1.5} size={30} />
                </div>
                <h3 data-dict-key={`howitworks.feature${index + 1}.title`} className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p data-dict-key={`howitworks.feature${index + 1}.desc`} className="text-white/80 text-sm md:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
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

      {/* 5. CTA SECTION */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-black">
        {/* Dark cinematic photographic background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80" 
            style={{ backgroundImage: `url('${(dict as any)["images.readyToBeginHero"] || pageImagesData.readyToBeginHero || "/How_it_Works_Ready_to_Begin.webp"}')` }}
            data-dict-key="images.readyToBeginHero"
            data-editor-type="image"
          ></div>
          {/* Deep green multiply for brand color integration without washing out */}
          <div className="absolute inset-0 mix-blend-multiply bg-[#1a2308]/60"></div>
          {/* Top-to-bottom dark gradient for maximum contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a360e]/40 via-black/20 to-black/70"></div>
          {/* Subtle noise texture */}
          <div className="absolute inset-0 z-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection delay={0.1}>
            <h2 data-dict-key="howitworks.cta.title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8">
              {dict["howitworks.cta.title"] || "Ready to Begin?"}
            </h2>
            <p data-dict-key="howitworks.cta.subtitle" className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              {dict["howitworks.cta.subtitle"] || "Join hundreds of families who trust Oaza Mira to care for their loved ones."}
            </p>
            <div className="flex justify-center">
              <Link 
                href="#portal" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#50641B] hover:!text-white font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(224,157,0,0.3)] transition-all duration-300 shadow-lg border border-white/20"
              >
                <span data-dict-key="howitworks.cta.primary">{dict["howitworks.cta.primary"] || "Download App & Register"}</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
