import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Cookie } from "lucide-react";

export default async function CookiePolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="page-wrapper relative overflow-hidden min-h-screen pt-32 pb-24 bg-white">
      <HeroBackgroundSVG />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9C36B]/30 text-[#50641B] font-bold text-sm mb-6 shadow-sm border border-[#E09D00]/50">
              <Cookie size={16} />
              <span data-dict-key="cookie.title">{dict["cookie.title"] || "Cookie Policy"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#333] mb-6 drop-shadow-sm">
              OAZA MIRA LLC
            </h1>
            <p className="text-lg md:text-xl text-[#B8AE9F] leading-relaxed font-semibold" data-dict-key="cookie.effective">
              {dict["cookie.effective"] || "Effective: April 1, 2026"}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/90 backdrop-blur-xl border border-[#B8AE9F]/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-[#333] prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#50641B] mt-0 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="cookie.c1">
              {dict["cookie.c1"] || "1. Introduction"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="cookie.c1t">{dict["cookie.c1t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="cookie.c2">
              {dict["cookie.c2"] || "2. What are Cookies?"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="cookie.c2t">{dict["cookie.c2t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="cookie.c3">
              {dict["cookie.c3"] || "3. Types of Cookies We Use"}
            </h2>
            <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="cookie.c3t.p1">{dict["cookie.c3t.p1"]}</p>
              <p data-dict-key="cookie.c3t.p2">{dict["cookie.c3t.p2"]}</p>
              <p data-dict-key="cookie.c3t.p3">{dict["cookie.c3t.p3"]}</p>
              <p data-dict-key="cookie.c3t.p4">{dict["cookie.c3t.p4"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="cookie.c4">
              {dict["cookie.c4"] || "4. Cookie Consent"}
            </h2>
            <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="cookie.c4t.p1">{dict["cookie.c4t.p1"]}</p>
              <p data-dict-key="cookie.c4t.p2">{dict["cookie.c4t.p2"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="cookie.c5">
              {dict["cookie.c5"] || "5. Managing Cookies"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="cookie.c5t">{dict["cookie.c5t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="cookie.c6">
              {dict["cookie.c6"] || "6. Data Processing"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="cookie.c6t">{dict["cookie.c6t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="cookie.c7">
              {dict["cookie.c7"] || "7. Changes to this Policy"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="cookie.c7t">{dict["cookie.c7t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="cookie.c8">
              {dict["cookie.c8"] || "8. Contact"}
            </h2>
            <div className="space-y-2 text-[#4A4A4A]">
              <p data-dict-key="cookie.c8t.p1">{dict["cookie.c8t.p1"]}</p>
              <p data-dict-key="cookie.c8t.p2">{dict["cookie.c8t.p2"]}</p>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
