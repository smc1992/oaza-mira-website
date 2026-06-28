import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { ShieldCheck } from "lucide-react";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang as Locale)) as any;

  return (
    <div className="page-wrapper relative overflow-hidden min-h-screen pt-32 pb-24 bg-white">
      <HeroBackgroundSVG />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9C36B]/30 text-[#50641B] font-bold text-sm mb-6 shadow-sm border border-[#E09D00]/50">
              <ShieldCheck size={16} />
              <span data-dict-key="privacy.title">{dict["privacy.title"] || "Privacy Policy"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#333] mb-6 drop-shadow-sm">
              OAZA MIRA LLC
            </h1>
            <p className="text-lg md:text-xl text-[#B8AE9F] leading-relaxed font-semibold" data-dict-key="privacy.effective">
              {dict["privacy.effective"] || "Effective: April 1, 2026"}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/90 backdrop-blur-xl border border-[#B8AE9F]/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-[#333] prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#50641B] mt-0 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c1">
              {dict["privacy.c1"] || "1. Data Controller"}
            </h2>
            <div className="space-y-2 text-[#4A4A4A]">
              <p data-dict-key="privacy.c1t.p1">{dict["privacy.c1t.p1"]}</p>
              <p data-dict-key="privacy.c1t.p2">{dict["privacy.c1t.p2"]}</p>
              <p data-dict-key="privacy.c1t.p3">{dict["privacy.c1t.p3"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c2">
              {dict["privacy.c2"] || "2. EU Representative (Art. 27 GDPR)"}
            </h2>
            <div className="text-[#4A4A4A] mb-4">
              <p data-dict-key="privacy.c2t.p1">{dict["privacy.c2t.p1"]}</p>
              <div className="space-y-2 mt-4 text-[#4A4A4A] bg-[#F9F6F0] p-6 rounded-2xl border border-[#E9C36B]/30">
                <p data-dict-key="privacy.c2t.p2">{dict["privacy.c2t.p2"]}</p>
                <p data-dict-key="privacy.c2t.p3">{dict["privacy.c2t.p3"]}</p>
                <p data-dict-key="privacy.c2t.p4">{dict["privacy.c2t.p4"]}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c3">
              {dict["privacy.c3"] || "3. Data We Collect"}
            </h2>
            <div className="space-y-6 text-[#4A4A4A] leading-relaxed">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="space-y-1">
                  <h3 className="text-lg font-bold text-[#333]" data-dict-key={`privacy.c3t.s${num}_title`}>
                    {dict[`privacy.c3t.s${num}_title`]}
                  </h3>
                  <p data-dict-key={`privacy.c3t.s${num}_desc`}>
                    {dict[`privacy.c3t.s${num}_desc`]}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c4">
              {dict["privacy.c4"] || "4. Purpose and Legal Basis"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li data-dict-key="privacy.c4t.li1">{dict["privacy.c4t.li1"]}</li>
                <li data-dict-key="privacy.c4t.li2">{dict["privacy.c4t.li2"]}</li>
                <li data-dict-key="privacy.c4t.li3">{dict["privacy.c4t.li3"]}</li>
                <li data-dict-key="privacy.c4t.li4">{dict["privacy.c4t.li4"]}</li>
              </ul>
              {dict["privacy.c4t.p5"] && (
                <p data-dict-key="privacy.c4t.p5" className="mt-4">{dict["privacy.c4t.p5"]}</p>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c5">
              {dict["privacy.c5"] || "5. Data Recipients and Processors"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="privacy.c5t.p1">{dict["privacy.c5t.p1"]}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li data-dict-key="privacy.c5t.li1">{dict["privacy.c5t.li1"]}</li>
                <li data-dict-key="privacy.c5t.li2">{dict["privacy.c5t.li2"]}</li>
                <li data-dict-key="privacy.c5t.li3">{dict["privacy.c5t.li3"]}</li>
                <li data-dict-key="privacy.c5t.li4">{dict["privacy.c5t.li4"]}</li>
                {dict["privacy.c5t.li5"] && <li data-dict-key="privacy.c5t.li5">{dict["privacy.c5t.li5"]}</li>}
                {dict["privacy.c5t.li6"] && <li data-dict-key="privacy.c5t.li6">{dict["privacy.c5t.li6"]}</li>}
              </ul>
              <p className="mt-4" data-dict-key="privacy.c5t.p2">{dict["privacy.c5t.p2"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c6">
              {dict["privacy.c6"] || "6. International Data Transfers"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p data-dict-key="privacy.c6t.p1">{dict["privacy.c6t.p1"] || dict["privacy.c6t"]}</p>
              {dict["privacy.c6t.p2"] && (
                <p data-dict-key="privacy.c6t.p2">{dict["privacy.c6t.p2"]}</p>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c7">
              {dict["privacy.c7"] || "7. Storage Duration"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="privacy.c7t">{dict["privacy.c7t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c8">
              {dict["privacy.c8"] || "8. Your Rights (EU Users)"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="privacy.c8t.p1">{dict["privacy.c8t.p1"]}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li data-dict-key="privacy.c8t.li1">{dict["privacy.c8t.li1"]}</li>
                <li data-dict-key="privacy.c8t.li2">{dict["privacy.c8t.li2"]}</li>
                <li data-dict-key="privacy.c8t.li3">{dict["privacy.c8t.li3"]}</li>
                <li data-dict-key="privacy.c8t.li4">{dict["privacy.c8t.li4"]}</li>
                <li data-dict-key="privacy.c8t.li5">{dict["privacy.c8t.li5"]}</li>
                <li data-dict-key="privacy.c8t.li6">{dict["privacy.c8t.li6"]}</li>
                <li data-dict-key="privacy.c8t.li7">{dict["privacy.c8t.li7"]}</li>
              </ul>
              <p className="mt-4" data-dict-key="privacy.c8t.p2">{dict["privacy.c8t.p2"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c9">
              {dict["privacy.c9"] || "9. Newsletter"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="privacy.c9t">{dict["privacy.c9t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c10">
              {dict["privacy.c10"] || "10. Cookies"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="privacy.c10t">{dict["privacy.c10t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c11">
              {dict["privacy.c11"] || "11. Security"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="privacy.c11t">{dict["privacy.c11t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c12">
              {dict["privacy.c12"] || "12. Privacy of Minors"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="privacy.c12t">{dict["privacy.c12t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c13">
              {dict["privacy.c13"] || "13. Changes to this Privacy Policy"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="privacy.c13t">{dict["privacy.c13t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="privacy.c14">
              {dict["privacy.c14"] || "14. Contact"}
            </h2>
            <div className="text-[#4A4A4A] mb-8 space-y-2">
              <p data-dict-key="privacy.c14t.p1">{dict["privacy.c14t.p1"] || dict["privacy.c14t"]}</p>
              {dict["privacy.c14t.p2"] && (
                <p data-dict-key="privacy.c14t.p2" className="font-semibold">{dict["privacy.c14t.p2"]}</p>
              )}
              {dict["privacy.c14t.p3"] && (
                <p data-dict-key="privacy.c14t.p3" className="font-semibold">{dict["privacy.c14t.p3"]}</p>
              )}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
