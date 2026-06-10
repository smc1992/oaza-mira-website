"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Building2, Building, HeartHandshake, Globe, X } from "lucide-react";
import MagneticPull from "@/components/ui/MagneticPull";

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWebAppModalOpen, setIsWebAppModalOpen] = useState(false);
  const pathname = usePathname();

  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const langMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 300);
  };

  const handleLangMenuEnter = () => {
    if (langMenuTimeoutRef.current) clearTimeout(langMenuTimeoutRef.current);
    setIsLangMenuOpen(true);
  };

  const handleLangMenuLeave = () => {
    langMenuTimeoutRef.current = setTimeout(() => {
      setIsLangMenuOpen(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsLangMenuOpen(false);
    setIsWebAppModalOpen(false);
  };

  const switchLanguage = (newLang: string) => {
    if (!pathname) return `/${newLang}`;
    const segments = pathname.split("/");
    segments[1] = newLang;
    return segments.join("/");
  };

  const safeLang = ["en", "de", "hr"].includes(lang) ? (lang as "en" | "de" | "hr") : "en";

  const targetGroupsText = {
    en: "Who We Serve",
    de: "Für wen wir da sind",
    hr: "Kome služimo",
  }[safeLang];

  const subDesc = {
    families: {
      en: "Private grave care plans.",
      de: "Private Grabpflege-Pläne.",
      hr: "Privatni planovi skrbi grobova.",
    },
    companies: {
      en: "Corporate memorial services.",
      de: "B2B Trauerfall- & Erinnerungsdienste.",
      hr: "Korporativne usluge komemoracije.",
    },
    institutions: {
      en: "Church & municipal care.",
      de: "Kirchen & kommunale Pflege.",
      hr: "Crkvena i općinska skrb.",
    },
    caretakers: {
      en: "Join our verified network.",
      de: "Werde Teil unseres Netzwerks.",
      hr: "Pridružite se našoj mreži.",
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      
      {/* FLOATING GLASS PILL CONTAINER */}
      <div 
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-[2.5rem] pointer-events-auto flex items-center justify-between relative ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-200/60 py-2.5 px-6 sm:px-8" 
            : "bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/30 py-3.5 sm:py-5 px-6 sm:px-8"
        } ${isMobileMenuOpen ? "bg-white rounded-[2rem] shadow-2xl" : ""}`}
      >
        
        {/* LOGO */}
        <Link href={`/${lang}/`} className="z-[110] flex-shrink-0" onClick={closeMenus}>
          <img
            src="/logo.png"
            alt="Oaza Mira Logo"
            className="h-10 sm:h-14 w-auto drop-shadow-sm"
          />
        </Link>

        {/* NAVIGATION WRAPPER */}
        <nav
          role="navigation"
          className={`lg:flex lg:items-center lg:justify-center lg:flex-1 lg:static absolute left-0 right-0 top-full mt-2 lg:mt-0 ${
            isMobileMenuOpen 
              ? "flex flex-col bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-slate-100 p-6 z-[100]" 
              : "!hidden lg:!flex"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8 w-full">
            
            <li>
              <Link
                href={`/${lang}/`}
                className="block py-3 lg:py-0 text-[#50641B] hover:text-[#E09D00] font-semibold transition-colors"
                onClick={closeMenus}
              >
                {dict["nav.home"] || "Home"}
              </Link>
            </li>

            <li>
              <Link
                href={`/${lang}/how-it-works`}
                className="block py-3 lg:py-0 text-[#50641B] hover:text-[#E09D00] font-semibold transition-colors"
                onClick={closeMenus}
              >
                {dict["nav.howItWorks"] || "How it Works"}
              </Link>
            </li>

            <li>
              <Link
                href={`/${lang}/about`}
                className="block py-3 lg:py-0 text-[#50641B] hover:text-[#E09D00] font-semibold transition-colors"
                onClick={closeMenus}
              >
                {dict["nav.about"] || "About"}
              </Link>
            </li>

            {/* MEGAMENU DROPDOWN CONTAINER */}
            <li
              className="lg:relative"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <div
                className="flex items-center gap-1 cursor-pointer py-3 lg:py-0 text-[#50641B] hover:text-[#E09D00] font-semibold transition-colors"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                {dict["nav.targetGroups"] || targetGroupsText}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isMegaMenuOpen ? "rotate-180 text-[#E09D00]" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="
                      lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[calc(100%+24px)] lg:w-[540px] lg:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] lg:border lg:border-slate-100 lg:p-4 lg:grid lg:grid-cols-2 lg:gap-3 lg:rounded-3xl lg:bg-white
                      flex flex-col pl-4 mt-2 mb-4 lg:pl-0 lg:mt-0 lg:mb-0
                    "
                  >
                    <Link
                      href={`/${lang}/families`}
                      onClick={closeMenus}
                      className="flex items-start gap-4 p-3 lg:p-4 rounded-2xl hover:bg-[#E9C36B]/20 transition-all duration-300 group/item"
                    >
                      <div className="bg-[#E9C36B]/30 p-3 rounded-xl text-[#E09D00] group-hover/item:scale-110 group-hover/item:bg-[#E09D00] group-hover/item:text-[#50641B] transition-all shadow-sm">
                        <Users size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#333] group-hover/item:text-[#50641B]">
                          {dict["nav.families"] || "Families"}
                        </h4>
                        <p className="!hidden lg:!block text-xs text-[#B8AE9F] mt-1 line-clamp-2 leading-relaxed font-medium">
                          {subDesc.families[safeLang]}
                        </p>
                      </div>
                    </Link>

                    <Link
                      href={`/${lang}/business`}
                      onClick={closeMenus}
                      className="flex items-start gap-4 p-3 lg:p-4 rounded-2xl hover:bg-[#E9C36B]/20 transition-all duration-300 group/item"
                    >
                      <div className="bg-[#E9C36B]/30 p-3 rounded-xl text-[#E09D00] group-hover/item:scale-110 group-hover/item:bg-[#E09D00] group-hover/item:text-[#50641B] transition-all shadow-sm">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#333] group-hover/item:text-[#50641B]">
                          {dict["nav.companies"] || "Companies"}
                        </h4>
                        <p className="!hidden lg:!block text-xs text-[#B8AE9F] mt-1 line-clamp-2 leading-relaxed font-medium">
                          {subDesc.companies[safeLang]}
                        </p>
                      </div>
                    </Link>

                    <Link
                      href={`/${lang}/institutions`}
                      onClick={closeMenus}
                      className="flex items-start gap-4 p-3 lg:p-4 rounded-2xl hover:bg-[#E9C36B]/20 transition-all duration-300 group/item"
                    >
                      <div className="bg-[#E9C36B]/30 p-3 rounded-xl text-[#E09D00] group-hover/item:scale-110 group-hover/item:bg-[#E09D00] group-hover/item:text-[#50641B] transition-all shadow-sm">
                        <Building size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#333] group-hover/item:text-[#50641B]">
                          {dict["nav.institutions"] || "Institutions"}
                        </h4>
                        <p className="!hidden lg:!block text-xs text-[#B8AE9F] mt-1 line-clamp-2 leading-relaxed font-medium">
                          {subDesc.institutions[safeLang]}
                        </p>
                      </div>
                    </Link>

                    <Link
                      href={`/${lang}/providers`}
                      onClick={closeMenus}
                      className="flex items-start gap-4 p-3 lg:p-4 rounded-2xl hover:bg-[#E9C36B]/20 transition-all duration-300 group/item"
                    >
                      <div className="bg-[#E9C36B]/30 p-3 rounded-xl text-[#E09D00] group-hover/item:scale-110 group-hover/item:bg-[#E09D00] group-hover/item:text-[#50641B] transition-all shadow-sm">
                        <HeartHandshake size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#333] group-hover/item:text-[#50641B]">
                          {dict["nav.caretakers"] || "Caretakers"}
                        </h4>
                        <p className="!hidden lg:!block text-xs text-[#B8AE9F] mt-1 line-clamp-2 leading-relaxed font-medium">
                          {subDesc.caretakers[safeLang]}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link
                href={`/${lang}/contact`}
                className="block py-3 lg:py-0 text-[#50641B] hover:text-[#E09D00] font-semibold transition-colors"
                onClick={closeMenus}
              >
                {dict["nav.contact"] || "Contact"}
              </Link>
            </li>
          </ul>

          <div className="flex flex-col lg:flex-row items-center gap-3 lg:ml-6 mt-6 lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-100 w-full lg:w-auto flex-shrink-0">
            {/* Log In Button: Gold background, Darkest Green text */}
            <MagneticPull strength={10} className="w-full lg:w-auto flex justify-center">
              <Link
                href="#login"
                className="inline-flex items-center justify-center px-6 py-2.5 font-black w-full lg:w-auto text-center whitespace-nowrap flex-shrink-0 rounded-full bg-[#E09D00] !text-[#1a2308] hover:bg-[#E9C36B] transition-all shadow-sm hover:shadow-md"
                onClick={closeMenus}
              >
                {dict["btn.login"] || "Log In"}
              </Link>
            </MagneticPull>
            
            {/* Sign Up Button: Green background, White text */}
            <MagneticPull strength={10} className="w-full lg:w-auto flex justify-center">
              <Link
                href="#signup"
                className="inline-flex items-center justify-center px-6 py-2.5 font-black w-full lg:w-auto text-center whitespace-nowrap flex-shrink-0 rounded-full bg-[#50641B] !text-white hover:bg-[#3d4d14] transition-all shadow-sm hover:shadow-md border border-white/10"
                onClick={closeMenus}
              >
                {dict["btn.signup"] || "Sign Up"}
              </Link>
            </MagneticPull>
          </div>
        </nav>

        {/* ========================================================= */}
        {/* RIGHT SIDE ACTIONS: LANGUAGE SWITCHER AND MOBILE HAMBURGER */}
        {/* ========================================================= */}
        <div className="flex items-center gap-3 sm:gap-4 z-[110] flex-shrink-0 lg:ml-6 xl:ml-8">
          
          {/* STUNNING DROPDOWN LANGUAGE SWITCHER */}
          <div 
            className="relative"
            onMouseEnter={handleLangMenuEnter}
            onMouseLeave={handleLangMenuLeave}
          >
            <button 
              className="flex items-center gap-1.5 sm:gap-2 bg-white/40 hover:bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm hover:shadow-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <span className="text-base sm:text-lg leading-none drop-shadow-sm">{lang === 'de' ? '🇩🇪' : lang === 'hr' ? '🇭🇷' : '🇬🇧'}</span>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase !text-slate-800">{lang === 'en' ? 'EN' : lang === 'de' ? 'DE' : 'HR'}</span>
              <ChevronDown size={14} className={`!text-slate-600 transition-transform duration-300 ${isLangMenuOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/60 p-1.5 rounded-2xl shadow-xl z-[120] min-w-[100px] flex flex-col gap-1"
                >
                  {[
                    { code: 'hr', flag: '🇭🇷', name: 'HR' },
                    { code: 'en', flag: '🇬🇧', name: 'EN' },
                    { code: 'de', flag: '🇩🇪', name: 'DE' },
                  ].map((l) => (
                    <Link 
                      key={l.code}
                      href={switchLanguage(l.code)} 
                      onClick={closeMenus} 
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${lang === l.code ? "bg-slate-100 !text-slate-900 font-extrabold shadow-sm border border-slate-200" : "!text-slate-600 hover:bg-slate-50 hover:!text-slate-900 font-semibold border border-transparent"}`}
                    >
                      <span className="text-lg sm:text-xl leading-none drop-shadow-sm">{l.flag}</span> 
                      <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">{l.name}</span>
                      {lang === l.code && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#E09D00] shadow-[0_0_8px_rgba(224,157,0,0.5)]"></div>}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* WEB APPLICATION NOTICE BUTTON */}
          <button 
            className="flex items-center gap-1.5 sm:gap-2 bg-white/40 hover:bg-blue-50/20 backdrop-blur-sm border-2 border-[#0066cc] shadow-sm hover:shadow-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer group active:scale-95"
            onClick={() => setIsWebAppModalOpen(true)}
          >
            <Globe size={16} className="text-[#50641B] group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-xs sm:text-sm font-bold tracking-wide !text-slate-800">{dict["nav.webApp"] || "Web App"}</span>
          </button>

          {/* MOBILE HAMBURGER ICON */}
          <div
            className="lg:hidden bg-slate-50 p-2.5 rounded-full border border-slate-200 shadow-sm hover:bg-slate-100 transition-colors flex-shrink-0"
            onClick={toggleMobileMenu}
            style={{ cursor: "pointer" }}
          >
            <div className={`w-5 h-0.5 bg-slate-800 mb-1 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-slate-800 mb-1 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-slate-800 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
          
        </div>

      </div>

      {/* WEB APPLICATION COMING SOON POPUP MODAL */}
      <AnimatePresence>
        {isWebAppModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWebAppModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="relative bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl pointer-events-auto overflow-hidden text-center"
            >
              {/* Decorative Background Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E9C36B]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#50641B]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsWebAppModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Icon Container */}
              <div className="relative mx-auto w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Globe className="text-[#0066cc] animate-pulse" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3 tracking-tight">
                {dict["popup.webAppTitle"] || "Web Application"}
              </h3>

              {/* Message */}
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                {dict["popup.webAppMessage"] || "Our Web Application will be available soon!"}
              </p>

              {/* Okay Button */}
              <button
                onClick={() => setIsWebAppModalOpen(false)}
                className="w-full py-3 px-6 rounded-full bg-[#E09D00] text-[#1a2308] hover:bg-[#E9C36B] font-black tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
              >
                {dict["popup.close"] || "Okay"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
