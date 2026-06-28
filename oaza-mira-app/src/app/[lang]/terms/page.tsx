import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Scale } from "lucide-react";

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang as Locale)) as any;

  return (
    <div className="page-wrapper relative overflow-hidden min-h-screen pt-32 pb-24 bg-white">
      <HeroBackgroundSVG />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9C36B]/30 text-[#50641B] font-bold text-sm mb-6 shadow-sm border border-[#E09D00]/50">
              <Scale size={16} />
              <span data-dict-key="terms.title">{dict["terms.title"] || "Terms of Service"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#333] mb-6 drop-shadow-sm">
              OAZA MIRA LLC
            </h1>
            <p className="text-lg md:text-xl text-[#B8AE9F] leading-relaxed font-semibold" data-dict-key="terms.effective">
              {dict["terms.effective"] || "Effective: April 1, 2026"}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/90 backdrop-blur-xl border border-[#B8AE9F]/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-[#333] prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#50641B] mt-0 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c1">
              {dict["terms.c1"] || "1. Acceptance of Terms"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c1t">{dict["terms.c1t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c2">
              {dict["terms.c2"] || "2. About the Platform"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c2t.p1">{dict["terms.c2t.p1"]}</p>
              <p data-dict-key="terms.c2t.p2">{dict["terms.c2t.p2"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c3">
              {dict["terms.c3"] || "3. User Accounts"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c3t">{dict["terms.c3t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c4">
              {dict["terms.c4"] || "4. Services and Booking"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c4t.p1">{dict["terms.c4t.p1"]}</p>
              <p data-dict-key="terms.c4t.p2">{dict["terms.c4t.p2"]}</p>
              <p data-dict-key="terms.c4t.p3">{dict["terms.c4t.p3"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c5">
              {dict["terms.c5"] || "5. Proof of Care"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c5t">{dict["terms.c5t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c6">
              {dict["terms.c6"] || "6. Pricing and Payment"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p data-dict-key="terms.c6t.p1">{dict["terms.c6t.p1"]}</p>
              <p data-dict-key="terms.c6t.p2">{dict["terms.c6t.p2"]}</p>
              <p data-dict-key="terms.c6t.p3">{dict["terms.c6t.p3"]}</p>
              {dict["terms.c6t.p4"] && (
                <p data-dict-key="terms.c6t.p4">{dict["terms.c6t.p4"]}</p>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c7">
              {dict["terms.c7"] || "7. Refund and Cancellation"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p data-dict-key="terms.c7t.p1">{dict["terms.c7t.p1"] || dict["terms.c7t"]}</p>
              {dict["terms.c7t.p2"] && (
                <p data-dict-key="terms.c7t.p2">{dict["terms.c7t.p2"]}</p>
              )}
              {dict["terms.c7t.p3"] && (
                <p data-dict-key="terms.c7t.p3">{dict["terms.c7t.p3"]}</p>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c8">
              {dict["terms.c8"] || "8. Platform Role and Liability"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p data-dict-key="terms.c8t.p1">{dict["terms.c8t.p1"]}</p>
              <p data-dict-key="terms.c8t.p2">{dict["terms.c8t.p2"]}</p>
              <p data-dict-key="terms.c8t.p3">{dict["terms.c8t.p3"]}</p>
              {dict["terms.c8t.p4"] && (
                <p data-dict-key="terms.c8t.p4">{dict["terms.c8t.p4"]}</p>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c9">
              {dict["terms.c9"] || "9. User Obligations"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li data-dict-key="terms.c9t.li1">{dict["terms.c9t.li1"]}</li>
                <li data-dict-key="terms.c9t.li2">{dict["terms.c9t.li2"]}</li>
                <li data-dict-key="terms.c9t.li3">{dict["terms.c9t.li3"]}</li>
                <li data-dict-key="terms.c9t.li4">{dict["terms.c9t.li4"]}</li>
                <li data-dict-key="terms.c9t.li5">{dict["terms.c9t.li5"]}</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c10">
              {dict["terms.c10"] || "10. Intellectual Property"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c10t">{dict["terms.c10t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c11">
              {dict["terms.c11"] || "11. Privacy"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c11t">{dict["terms.c11t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c12">
              {dict["terms.c12"] || "12. Termination"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c12t">{dict["terms.c12t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c13">
              {dict["terms.c13"] || "13. Applicable Law and Jurisdiction"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p data-dict-key="terms.c13t.p1">{dict["terms.c13t.p1"] || dict["terms.c13t"]}</p>
              {dict["terms.c13t.p2"] && (
                <p data-dict-key="terms.c13t.p2">{dict["terms.c13t.p2"]}</p>
              )}
              {dict["terms.c13t.p3"] && (
                <p data-dict-key="terms.c13t.p3">{dict["terms.c13t.p3"]}</p>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c14">
              {dict["terms.c14"] || "14. Dispute Resolution"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p data-dict-key="terms.c14t.p1">{dict["terms.c14t.p1"] || dict["terms.c14t"]}</p>
              {dict["terms.c14t.p2"] && (
                <p data-dict-key="terms.c14t.p2">{dict["terms.c14t.p2"]}</p>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c15">
              {dict["terms.c15"] || "15. Severability"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c15t">{dict["terms.c15t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c16">
              {dict["terms.c16"] || "16. Changes to the Terms"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="terms.c16t">{dict["terms.c16t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="terms.c17">
              {dict["terms.c17"] || "17. Contact"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-1">
              <p data-dict-key="terms.c17t.p1">{dict["terms.c17t.p1"] || dict["terms.c17t"]}</p>
              {dict["terms.c17t.p2"] && (
                <p data-dict-key="terms.c17t.p2" className="font-semibold">{dict["terms.c17t.p2"]}</p>
              )}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
