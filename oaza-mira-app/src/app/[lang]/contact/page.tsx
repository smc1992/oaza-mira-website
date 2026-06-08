import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import Script from "next/script";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="page-wrapper relative overflow-hidden min-h-screen pt-32 pb-24 bg-gradient-to-b from-[#FDFCF9] via-[#FCFAF2] to-[#FDFCF9]">
      <HeroBackgroundSVG />

      {/* Decorative Blobs for Warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[60%] h-[40%] bg-[#E9C36B]/15 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute top-[25%] right-[-10%] w-[50%] h-[50%] bg-[#50641B]/8 rounded-full blur-[120px] animate-pulse-slow-reverse"></div>
        <div className="absolute bottom-[15%] left-[-5%] w-[60%] h-[50%] bg-[#E9C36B]/12 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#50641B]/10 rounded-full blur-[110px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9C36B]/30 text-[#50641B] font-bold text-sm mb-6 shadow-sm border border-[#E09D00]/50 backdrop-blur-sm">
              <Mail size={16} />
              <span data-dict-key="contact.badge">{dict["contact.badge"]}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#333] mb-6 drop-shadow-sm">
              <span data-dict-key="contact.title1">{dict["contact.title1"]}</span> <span data-dict-key="contact.title2" className="text-transparent bg-clip-text bg-gradient-to-r from-[#E09D00] to-[#50641B]">{dict["contact.title2"]}</span>
            </h1>
            <p data-dict-key="contact.desc" className="text-xl text-[#8E8675] leading-relaxed font-semibold">
              {dict["contact.desc"]}
            </p>
          </div>
        </AnimatedSection>

        <div className="flex justify-center">
          
          {/* Contact Form Column */}
          <div className="w-full max-w-4xl">
            <AnimatedSection delay={0.4}>
              <div className="bg-[#FDFBF7]/90 backdrop-blur-3xl border border-[#E9C36B]/20 p-8 md:p-12 rounded-[3.5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9C36B]/30 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B6C485]/30 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                
                <div className="relative z-10">
                  <h3 data-dict-key="contact.form.title" className="text-3xl font-extrabold text-[#333] mb-2">{dict["contact.form.title"]}</h3>
                  <p data-dict-key="contact.form.desc" className="text-[#8E8675] mb-10 font-semibold">{dict["contact.form.desc"]}</p>
                  
                  <div className="w-full min-h-[863px]">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/gERG7kCHWfAPlglI5WyV"
                      style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px", minHeight: "863px" }}
                      id="inline-gERG7kCHWfAPlglI5WyV" 
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="2026-05-07 Contact Form_ms"
                      data-height="863"
                      data-layout-iframe-id="inline-gERG7kCHWfAPlglI5WyV"
                      data-form-id="gERG7kCHWfAPlglI5WyV"
                      title="2026-05-07 Contact Form_ms"
                    />
                    <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
        </div>

        {/* Newsletter Section */}
        <AnimatedSection delay={0.5}>
          <div className="mt-20 lg:mt-32 bg-gradient-to-br from-[#50641B] via-[#50641B] to-[#B6C485] p-10 md:p-16 rounded-[3.5rem] relative overflow-hidden shadow-[0_30px_70px_-15px_rgba(80,100,27,0.3)] border border-[#B6C485]">
            {/* Soft glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#E09D00]/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
              <div className="max-w-xl text-center lg:text-left">
                <h2 data-dict-key="contact.newsletter.title" className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  {dict["contact.newsletter.title"]}
                </h2>
                <p data-dict-key="contact.newsletter.desc" className="text-lg text-white/80 leading-relaxed font-semibold">
                  {dict["contact.newsletter.desc"]}
                </p>
              </div>
              <div className="w-full max-w-lg">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="name@email.com" 
                    className="flex-1 bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#E09D00]/50 focus:bg-white/10 transition-all font-semibold"
                  />
                  <button data-dict-key="contact.newsletter.btn" className="bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#50641B] hover:!text-white hover:scale-105 px-8 py-5 font-extrabold rounded-2xl whitespace-nowrap shadow-lg transition-all border border-white/20">
                    {dict["contact.newsletter.btn"]}
                  </button>
                </div>
                <p data-dict-key="contact.newsletter.disclaimer" className="text-sm font-medium text-white/60 mt-4 text-center lg:text-left">
                  {dict["contact.newsletter.disclaimer"]}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
