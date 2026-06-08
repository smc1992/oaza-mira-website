import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Scale } from "lucide-react";

export default async function ImprintPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="page-wrapper relative overflow-hidden min-h-screen pt-32 pb-24 bg-white">
      <HeroBackgroundSVG />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9C36B]/30 text-[#50641B] font-bold text-sm mb-6 shadow-sm border border-[#E09D00]/50">
              <Scale size={16} />
              <span>{dict["imprint.bn9ct3"] || "Legal Notice / Impressum"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#333] mb-6 drop-shadow-sm">
              OAZA MIRA LLC
            </h1>
            <p className="text-lg md:text-xl text-[#B8AE9F] leading-relaxed font-semibold">
              Gültig ab: 1. April 2026
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/90 backdrop-blur-xl border border-[#B8AE9F]/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-[#333] prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#50641B] mt-0 mb-4 border-b border-[#B8AE9F]/20 pb-2">1. Plattformbetreiber</h2>
            <div className="space-y-2 text-[#4A4A4A]">
              <p><strong>Unternehmen:</strong> OAZA MIRA LLC</p>
              <p><strong>Adresse:</strong> c/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, USA</p>
              <p><strong>E-Mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a></p>
              <p><strong>Website:</strong> <a href="https://www.oaza-mira.app" target="_blank" rel="noopener noreferrer" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p>
              <p><strong>Gründungsstaat:</strong> Florida, USA</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">2. EU-Vertreter (Art. 27 DSGVO)</h2>
            <p className="text-[#4A4A4A] mb-4">
              Für Nutzer innerhalb der Europäischen Union wurde folgende Stelle als unser Vertreter gemäß Artikel 27 der Datenschutz-Grundverordnung (DSGVO) benannt:
            </p>
            <div className="space-y-2 text-[#4A4A4A] bg-[#F9F6F0] p-6 rounded-2xl border border-[#E9C36B]/30">
              <p><strong>Organisation:</strong> AEON – Vereinigung für Bildung und Organisation der Verbindung zwischen den Generationen</p>
              <p><strong>Adresse:</strong> Schönbrunner Straße 35/Top 4, 1050 Wien, Österreich</p>
              <p><strong>ZVR-Nummer:</strong> 1568721336</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">3. Art der Dienstleistungen</h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              Oaza Mira betreibt eine digitale Plattform, die Kunden mit unabhängigen Betreuern für Gedenk- und Grabpflegedienste verbindet. Oaza Mira agiert ausschließlich als Vermittler und ist kein Anbieter der physischen Pflegeleistungen. Alle Dienstleistungen werden von unabhängigen Auftragnehmern erbracht.
            </p>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">4. Haftungsausschluss</h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              Die Inhalte auf dieser Plattform dienen allgemeinen Informationszwecken. OAZA MIRA LLC übernimmt keine Gewährleistung oder Zusicherung hinsichtlich der Richtigkeit, Vollständigkeit oder Zuverlässigkeit der Inhalte auf der Plattform. Im größtmöglichen gesetzlich zulässigen Umfang schließt OAZA MIRA LLC jegliche Haftung für Schäden aus, die aus der Nutzung oder der Unmöglichkeit der Nutzung der Plattform entstehen.
            </p>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">5. Externe Links</h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              Diese Plattform kann Links zu externen Websites enthalten. OAZA MIRA LLC hat keine Kontrolle über die Inhalte externer Websites und übernimmt keine Verantwortung für deren Inhalte. Die jeweiligen Betreiber verlinkter Websites sind allein für deren Inhalte verantwortlich.
            </p>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">6. Geistiges Eigentum</h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              Alle Inhalte auf dieser Plattform, einschließlich Texte, Grafiken, Logos und Software, sind Eigentum von OAZA MIRA LLC oder ihren Lizenzgebern und durch geltendes Urheberrecht geschützt. Eine unbefugte Vervielfältigung oder Verbreitung ist untersagt.
            </p>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">7. Anwendbares Recht</h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              Dieses Impressum unterliegt dem Recht des Bundesstaates Florida, Vereinigte Staaten von Amerika, und wird in Übereinstimmung mit diesem ausgelegt. Alle Streitigkeiten, die sich aus diesem Impressum ergeben oder damit zusammenhängen, unterliegen der ausschließlichen Zuständigkeit der Gerichte in Fort Lauderdale, Florida.
            </p>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">8. Kontakt</h2>
            <p className="text-[#4A4A4A] mb-8">
              Für alle Anfragen kontaktieren Sie uns bitte unter: <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline font-bold">contact@oaza-mira.app</a>
            </p>

            <div className="mt-12 pt-8 border-t border-[#B8AE9F]/30 text-sm text-[#B8AE9F] text-center leading-loose">
              OAZA MIRA LLC · c/o 5 Flags Incubation LLC · 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, USA<br />
              <a href="mailto:contact@oaza-mira.app" className="hover:text-[#E09D00] transition-colors">contact@oaza-mira.app</a> · <a href="https://www.oaza-mira.app" className="hover:text-[#E09D00] transition-colors">www.oaza-mira.app</a><br />
              Zuletzt aktualisiert: 1. April 2026
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
