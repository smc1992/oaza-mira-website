import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { FileText } from "lucide-react";

export default async function RefundPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="page-wrapper relative overflow-hidden min-h-screen pt-32 pb-24 bg-white">
      <HeroBackgroundSVG />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9C36B]/30 text-[#50641B] font-bold text-sm mb-6 shadow-sm border border-[#E09D00]/50">
              <FileText size={16} />
              <span data-dict-key="refund.title">{dict["refund.title"] || "Refund Policy"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#333] mb-6 drop-shadow-sm">
              OAZA MIRA LLC
            </h1>
            <p className="text-lg md:text-xl text-[#B8AE9F] leading-relaxed font-semibold" data-dict-key="refund.effective">
              {dict["refund.effective"] || "Effective: April 1, 2026"}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/90 backdrop-blur-xl border border-[#B8AE9F]/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-[#333] prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#50641B] mt-0 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c1">
              {dict["refund.c1"] || "1. Scope"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c1t">{dict["refund.c1t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c2">
              {dict["refund.c2"] || "2. Nature of Services"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c2t.p1">{dict["refund.c2t.p1"]}</p>
              <p data-dict-key="refund.c2t.p2">{dict["refund.c2t.p2"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c3">
              {dict["refund.c3"] || "3. No Cash Refunds"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c3t">{dict["refund.c3t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c4">
              {dict["refund.c4"] || "4. Account Credit"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c4t">{dict["refund.c4t"]}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li data-dict-key="refund.c4t.li1">{dict["refund.c4t.li1"]}</li>
                <li data-dict-key="refund.c4t.li2">{dict["refund.c4t.li2"]}</li>
                <li data-dict-key="refund.c4t.li3">{dict["refund.c4t.li3"]}</li>
                <li data-dict-key="refund.c4t.li4">{dict["refund.c4t.li4"]}</li>
                <li data-dict-key="refund.c4t.li5">{dict["refund.c4t.li5"]}</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c5">
              {dict["refund.c5"] || "5. Right of Withdrawal"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c5t.p1">{dict["refund.c5t.p1"]}</p>
              <p data-dict-key="refund.c5t.p2">{dict["refund.c5t.p2"]}</p>
              <p data-dict-key="refund.c5t.p3">{dict["refund.c5t.p3"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c6">
              {dict["refund.c6"] || "6. Complaint Procedure"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c6t">{dict["refund.c6t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c7">
              {dict["refund.c7"] || "7. Payment Processing"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c7t">{dict["refund.c7t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c8">
              {dict["refund.c8"] || "8. Chargebacks"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c8t">{dict["refund.c8t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c9">
              {dict["refund.c9"] || "9. Applicable Law"}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p data-dict-key="refund.c9t">{dict["refund.c9t"]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2" data-dict-key="refund.c10">
              {dict["refund.c10"] || "10. Contact"}
            </h2>
            <div className="space-y-2 text-[#4A4A4A]">
              <p data-dict-key="refund.c10t.p1">{dict["refund.c10t.p1"]}</p>
              <p data-dict-key="refund.c10t.p2">{dict["refund.c10t.p2"]}</p>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
