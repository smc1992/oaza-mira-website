"use client";

import Link from "next/link";
import { Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  const currentYear = new Date().getFullYear();
  const safeLang = ["en", "de", "hr"].includes(lang) ? (lang as "en" | "de" | "hr") : "en";

  const t = {
    vision: {
      en: "Care for every resting place, no matter the distance — handled with dignity and trust.",
      de: "Pflege für jede Ruhestätte, unabhängig von der Entfernung — mit Würde und Vertrauen.",
      hr: "Briga za svako počivalište, bez obzira na udaljenost — s dostojanstvom i povjerenjem.",
    },
    serve: {
      en: "Who We Serve",
      de: "Für wen wir da sind",
      hr: "Kome služimo",
    },
    quick: {
      en: "Quick Links",
      de: "Schnelllinks",
      hr: "Brzi linkovi",
    },
    legal: {
      en: "Legal",
      de: "Rechtliches",
      hr: "Pravno",
    },
    rights: {
      en: "All rights reserved.",
      de: "Alle Rechte vorbehalten.",
      hr: "Sva prava pridržana.",
    },
    follow: {
      en: "Follow Us",
      de: "Folge uns",
      hr: "Pratite nas",
    }
  };

  return (
    <footer className="relative text-white/90 pt-16 pb-8 overflow-hidden bg-[#3A4A13] border-t border-[#A8B67D]/20">
      {/* Warm natural gradients & Noise overlay instead of AI solid color */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2a360e] via-[#3a4914] to-[#4a5d1b] z-0"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E09D00]/15 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E9C36B]/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0 bg-[url('https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/68fbba15f917df9a07152003_Noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-8 lg:col-span-2 lg:pr-8">
            <Link href={`/${lang}`} className="inline-block transition-transform hover:scale-105 active:scale-95 duration-200">
              <img
                src="/logo.png"
                className="h-28 md:h-32 w-auto brightness-110 drop-shadow-md"
                alt="Oaza Mira Logo"
              />
            </Link>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Oaza Mira</h3>
              <p className="text-white/80 leading-relaxed max-w-sm text-base">
                {t.vision[safeLang]}
              </p>
            </div>
            <div className="space-y-4 text-sm text-white/70 pt-2">
              <div className="flex items-start gap-4">
                <Mail size={18} className="mt-0.5 text-[#E9C36B]" />
                <a href="mailto:contact@oaza-mira.app" className="hover:text-white transition-colors">contact@oaza-mira.app</a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5 text-[#E9C36B]" />
                <span className="leading-relaxed">3834 Powerline Road<br/>Fort Lauderdale, FL 33309<br/>United States</span>
              </div>
            </div>
          </div>

          {/* Target Groups / Who We Serve */}
          <div className="space-y-8 lg:mt-8 lg:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em]">
              {t.serve[safeLang]}
            </h4>
            <ul className="space-y-4">
              {[
                { href: `/${lang}/families`, label: dict["nav.families"] || "Families" },
                { href: `/${lang}/providers`, label: dict["nav.caretakers"] || "Care Takers" },
                { href: `/${lang}/business`, label: dict["nav.companies"] || "Companies" },
                { href: `/${lang}/institutions`, label: dict["nav.institutions"] || "Institutions" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-[#E9C36B] text-sm transition-all hover:translate-x-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 lg:mt-8 lg:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em]">
              {t.quick[safeLang]}
            </h4>
            <ul className="space-y-4">
              {[
                { href: `/${lang}/`, label: dict["nav.home"] || "Home" },
                { href: `/${lang}/how-it-works`, label: dict["nav.howItWorks"] || "How it Works" },
                { href: `/${lang}/about`, label: dict["nav.about"] || "About" },
                { href: `/${lang}/contact`, label: dict["nav.contact"] || "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-[#E9C36B] text-sm transition-all hover:translate-x-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-8 lg:mt-8 lg:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em]">
              {t.follow[safeLang]}
            </h4>
            <ul className="space-y-4">
              {[
                { icon: <Facebook size={16} />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61581985903747" },
                { icon: <Instagram size={16} />, label: "Instagram", href: "https://www.instagram.com/oaza_mira_app/" },
                { icon: <Youtube size={16} />, label: "YouTube", href: "https://www.youtube.com/@oaza_mira_app" },
              ].map((social, i) => (
                <li key={i}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/60 hover:text-[#E9C36B] transition-all hover:-translate-y-0.5 inline-flex"
                  >
                    <span className="text-[#E9C36B]">{social.icon}</span> {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-8 lg:mt-8 lg:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em]">
              {t.legal[safeLang]}
            </h4>
            <ul className="space-y-4">
              {[
                { href: `/${lang}/imprint`, key: "imprint.bn9ct3", defaultLabel: "Imprint" },
                { href: `/${lang}/privacy-policy`, key: "privacy-policy.hop62e", defaultLabel: "Privacy Policy" },
                { href: `/${lang}/cookie-policy`, key: "cookie-policy.ab1cd2", defaultLabel: "Cookie Policy" },
                { href: `/${lang}/refund-policy`, key: "refund-policy.xyz890", defaultLabel: "Refund Policy" },
                { href: `/${lang}/terms`, key: "terms.of.service.k92nsi", defaultLabel: "Terms of Service" },
                { href: `/${lang}/account-deletion-policy`, key: "account-deletion-policy.a7d2e1", defaultLabel: "Account Deletion Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#E9C36B] text-sm transition-all hover:translate-x-1 inline-block"
                  >
                    {dict[link.key] || link.defaultLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs tracking-wider">
            &copy; {currentYear} OAZA MIRA LLC. {t.rights[safeLang]}
          </p>
        </div>
      </div>
    </footer>
  );
}
