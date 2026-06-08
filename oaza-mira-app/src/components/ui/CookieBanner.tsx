"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner({ lang }: { lang: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already decided on cookies
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      // Small delay for animation effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  const getTexts = () => {
    switch (lang) {
      case "de":
        return {
          title: "Wir respektieren Ihre Privatsphäre",
          desc: "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige sind essentiell, während andere uns helfen, diese Website zu verbessern.",
          accept: "Alle akzeptieren",
          decline: "Nur essenzielle",
          policy: "Cookie-Richtlinie",
        };
      case "hr":
        return {
          title: "Poštujemo vašu privatnost",
          desc: "Koristimo kolačiće kako bismo vam pružili najbolje moguće iskustvo na našoj web stranici. Neki su neophodni, dok nam drugi pomažu u poboljšanju ove web stranice.",
          accept: "Prihvati sve",
          decline: "Samo neophodne",
          policy: "Politika o kolačićima",
        };
      case "en":
      default:
        return {
          title: "We respect your privacy",
          desc: "We use cookies to provide you with the best possible experience on our website. Some are essential, while others help us improve this website.",
          accept: "Accept all",
          decline: "Essential only",
          policy: "Cookie Policy",
        };
    }
  };

  const t = getTexts();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-center">
      <div className="pointer-events-auto w-full max-w-4xl bg-white/90 backdrop-blur-xl border border-[#B8AE9F]/30 p-5 md:p-6 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transform translate-y-0 transition-transform duration-500 ease-out">
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#E9C36B]/20 flex items-center justify-center flex-shrink-0">
            <Cookie size={20} className="text-[#E09D00]" />
          </div>
          <div>
            <h3 className="font-bold text-[#333] text-base mb-1">{t.title}</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-xl">
              {t.desc}{" "}
              <Link 
                href={`/${lang}/cookie-policy`} 
                className="text-[#E09D00] hover:text-[#50641B] underline font-medium whitespace-nowrap"
              >
                {t.policy}
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#B8AE9F]/30 text-[#4A4A4A] font-medium text-sm hover:bg-[#B8AE9F]/10 transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#50641B] text-white font-medium text-sm hover:bg-[#E09D00] transition-colors whitespace-nowrap shadow-md shadow-[#50641B]/20"
          >
            {t.accept}
          </button>
          
          <button 
            onClick={handleDecline}
            className="absolute top-4 right-4 text-[#B8AE9F] hover:text-[#333] transition-colors md:hidden"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}
