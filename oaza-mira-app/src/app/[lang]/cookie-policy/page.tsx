import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Cookie } from "lucide-react";

export default async function CookiePolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const safeLang = ["en", "de", "hr"].includes(lang) ? (lang as "en" | "de" | "hr") : "en";

  const content = {
    en: {
      title: "Cookie Policy",
      effective: "Effective: April 1, 2026",
      c1: "1. Introduction",
      c1t: <p>This Cookie Policy explains how OAZA MIRA LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies on our website www.oaza-mira.app (the &quot;Platform&quot;). By continuing to use the Platform, you consent to the use of cookies in accordance with this Policy.</p>,
      c2: "2. What are Cookies?",
      c2t: <p>Cookies are small text files that are stored on your device when you visit a website. They help us to provide, improve, and secure our services. Cookies can be &quot;session cookies&quot; (deleted when the browser is closed) or &quot;persistent cookies&quot; (remain on your device for a specific period).</p>,
      c3: "3. Types of Cookies We Use",
      c3t: <><p><strong>3.1 Strictly Necessary Cookies</strong><br/>These cookies are essential for the proper functioning of the Platform. They enable core functionalities such as user authentication, session management, and security. These cookies cannot be disabled.</p><p><strong>3.2 Analytics Cookies</strong><br/>We use analytics tools, including Google Analytics, to understand how visitors interact with our Platform. These cookies collect information such as visited pages, time spent on the Platform, and general usage patterns. This data helps us improve our services.</p><p><strong>3.3 Marketing Cookies</strong><br/>We may use marketing cookies to display relevant advertisements and measure the effectiveness of our marketing campaigns. These cookies may track your browsing activity across different websites.</p><p><strong>3.4 Third-Party Cookies</strong><br/>Some cookies may be set by third-party providers that we use to operate and improve our Platform. These third parties have their own privacy policies regarding their use of cookies.</p></>,
      c4: "4. Cookie Consent",
      c4t: <><p>When you visit our Platform for the first time, a cookie consent banner will be displayed, allowing you to accept cookies or manage your cookie preferences. You can adjust your preferences at any time via the cookie settings on our Platform.</p><p><em>Note:</em> Strictly necessary cookies do not require consent as they are essential for the functionality of the Platform.</p></>,
      c5: "5. Managing Cookies",
      c5t: <p>You can manage or delete cookies via your browser settings. Please note that disabling certain cookies may affect the functionality of the Platform. Further information on managing cookies can be found in your browser&apos;s help documentation.</p>,
      c6: "6. Data Processing",
      c6t: <p>Data collected through cookies may be processed and stored on servers in the United States. For more information on how we handle your personal data, please refer to our Privacy Policy.</p>,
      c7: "7. Changes to this Policy",
      c7t: <p>We reserve the right to update this Cookie Policy at any time. Changes will be effective upon posting on the Platform. We encourage you to review this Policy regularly.</p>,
      c8: "8. Contact",
      c8t: <><p>If you have any questions about this Cookie Policy, please contact us at:</p><p><strong>Email:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Website:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
    },
    de: {
      title: "Cookie-Richtlinie",
      effective: "Gültig ab: 1. April 2026",
      c1: "1. Einleitung",
      c1t: <p>Diese Cookie-Richtlinie erläutert, wie OAZA MIRA LLC („wir&quot;, „uns&quot; oder „unser&quot;) Cookies und ähnliche Tracking-Technologien auf unserer Website www.oaza-mira.app (die „Plattform&quot;) verwendet. Durch die weitere Nutzung der Plattform stimmen Sie der Verwendung von Cookies gemäß dieser Richtlinie zu.</p>,
      c2: "2. Was sind Cookies?",
      c2t: <p>Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen uns, unsere Dienste bereitzustellen, zu verbessern und zu sichern. Cookies können „Sitzungs-Cookies&quot; (werden beim Schließen des Browsers gelöscht) oder „persistente Cookies&quot; (verbleiben für einen bestimmten Zeitraum auf Ihrem Gerät) sein.</p>,
      c3: "3. Arten von Cookies, die wir verwenden",
      c3t: <><p><strong>3.1 Unbedingt erforderliche Cookies</strong><br/>Diese Cookies sind für das ordnungsgemäße Funktionieren der Plattform unerlässlich. Sie ermöglichen Kernfunktionen wie Benutzerauthentifizierung, Sitzungsverwaltung und Sicherheit. Diese Cookies können nicht deaktiviert werden.</p><p><strong>3.2 Analyse-Cookies</strong><br/>Wir verwenden Analysetools, einschließlich Google Analytics, um zu verstehen, wie Besucher mit unserer Plattform interagieren. Diese Cookies erfassen Informationen wie besuchte Seiten, Verweildauer auf der Plattform und allgemeine Nutzungsmuster. Diese Daten helfen uns, unsere Dienste zu verbessern.</p><p><strong>3.3 Marketing-Cookies</strong><br/>Wir können Marketing-Cookies verwenden, um relevante Werbung zu schalten und die Wirksamkeit unserer Marketingkampagnen zu messen. Diese Cookies können Ihre Browsing-Aktivität über verschiedene Websites hinweg verfolgen.</p><p><strong>3.4 Cookies von Drittanbietern</strong><br/>Einige Cookies können von Drittanbietern gesetzt werden, die wir für den Betrieb und die Verbesserung unserer Plattform nutzen. Diese Drittanbieter haben eigene Datenschutzrichtlinien für ihre Verwendung von Cookies.</p></>,
      c4: "4. Cookie-Einwilligung",
      c4t: <><p>Wenn Sie unsere Plattform zum ersten Mal besuchen, wird ein Cookie-Einwilligungsbanner angezeigt, über das Sie Cookies akzeptieren oder Ihre Cookie-Einstellungen verwalten können. Sie können Ihre Einstellungen jederzeit über die Cookie-Einstellungen auf unserer Plattform anpassen.</p><p><em>Hinweis:</em> Unbedingt erforderliche Cookies benötigen keine Einwilligung, da sie für die Funktionalität der Plattform essenziell sind.</p></>,
      c5: "5. Verwaltung von Cookies",
      c5t: <p>Sie können Cookies über Ihre Browsereinstellungen verwalten oder löschen. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität der Plattform beeinträchtigen kann. Weitere Informationen zur Verwaltung von Cookies finden Sie in der Hilfe-Dokumentation Ihres Browsers.</p>,
      c6: "6. Datenverarbeitung",
      c6t: <p>Durch Cookies erhobene Daten können auf Servern in den Vereinigten Staaten verarbeitet und gespeichert werden. Weitere Informationen zum Umgang mit Ihren personenbezogenen Daten finden Sie in unserer Datenschutzerklärung.</p>,
      c7: "7. Änderungen dieser Richtlinie",
      c7t: <p>Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu aktualisieren. Änderungen werden mit der Veröffentlichung auf der Plattform wirksam. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen.</p>,
      c8: "8. Kontakt",
      c8t: <><p>Bei Fragen zu dieser Cookie-Richtlinie kontaktieren Sie uns bitte unter:</p><p><strong>E-Mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Website:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
    },
    hr: {
      title: "Politika o kolačićima",
      effective: "Vrijedi od: 1. travnja 2026.",
      c1: "1. Uvod",
      c1t: <p>Ova Politika o kolačićima objašnjava kako tvrtka OAZA MIRA LLC (&quot;mi&quot;, &quot;nas&quot; ili &quot;naš&quot;) koristi kolačiće i slične tehnologije praćenja na našoj web stranici www.oaza-mira.app (&quot;Platforma&quot;). Daljnjim korištenjem Platforme pristajete na korištenje kolačića u skladu s ovom Politikom.</p>,
      c2: "2. Što su kolačići?",
      c2t: <p>Kolačići su male tekstualne datoteke koje se pohranjuju na vaš uređaj kada posjetite web stranicu. Pomažu nam u pružanju, poboljšanju i osiguravanju naših usluga. Kolačići mogu biti &quot;sesijski kolačići&quot; (brišu se zatvaranjem preglednika) ili &quot;trajni kolačići&quot; (ostaju na vašem uređaju određeno vrijeme).</p>,
      c3: "3. Vrste kolačića koje koristimo",
      c3t: <><p><strong>3.1 Neophodni kolačići</strong><br/>Ovi kolačići ključni su za pravilno funkcioniranje Platforme. Omogućuju osnovne funkcije poput autentifikacije korisnika, upravljanja sesijama i sigurnosti. Ove kolačiće nije moguće onemogućiti.</p><p><strong>3.2 Analitički kolačići</strong><br/>Koristimo analitičke alate, uključujući Google Analytics, kako bismo razumjeli način na koji posjetitelji stupaju u interakciju s našom Platformom. Ovi kolačići prikupljaju informacije poput posjećenih stranica, vremena provedenog na Platformi te općenitih obrazaca korištenja. Ovi podaci pomažu nam u poboljšanju naših usluga.</p><p><strong>3.3 Marketinški kolačići</strong><br/>Možemo koristiti marketinške kolačiće kako bismo prikazali relevantne oglase i mjerili učinkovitost naših marketinških kampanja. Ovi kolačići mogu pratiti vašu aktivnost pregledavanja na različitim web stranicama.</p><p><strong>3.4 Kolačići trećih strana</strong><br/>Neke kolačiće mogu postaviti treće strane čije usluge koristimo za rad i poboljšanje naše Platforme. Ove treće strane imaju vlastite politike privatnosti u vezi s upotrebom kolačića.</p></>,
      c4: "4. Privola za kolačiće",
      c4t: <><p>Prilikom prvog posjeta našoj Platformi prikazat će se natpis (banner) o privoli za kolačiće koji vam omogućuje prihvaćanje kolačića ili upravljanje vašim postavkama. Svoje postavke možete prilagoditi u bilo kojem trenutku putem postavki kolačića na našoj Platformi.</p><p><em>Napomena:</em> Neophodni kolačići ne zahtijevaju privolu jer su ključni za rad Platforme.</p></>,
      c5: "5. Upravljanje kolačićima",
      c5t: <p>Kolačićima možete upravljati ili ih izbrisati putem postavki vašeg preglednika. Imajte na umu da onemogućavanje određenih kolačića može utjecati na funkcionalnost Platforme. Više informacija o upravljanju kolačićima potražite u dokumentaciji pomoći vašeg preglednika.</p>,
      c6: "6. Obrada podataka",
      c6t: <p>Podaci prikupljeni putem kolačića mogu se obrađivati i pohranjivati na poslužiteljima u Sjedinjenim Američkim Državama. Za više informacija o načinu na koji obrađujemo vaše osobne podatke, pogledajte našu Politiku privatnosti.</p>,
      c7: "7. Izmjene ove Politike",
      c7t: <p>Zadržavamo pravo ažuriranja ove Politike o kolačićima u bilo kojem trenutku. Izmjene će stupiti na snagu objavom na Platformi. Preporučujemo da redovito pregledavate ovu Politiku.</p>,
      c8: "8. Kontakt",
      c8t: <><p>Ukoliko imate pitanja u vezi ove Politike o kolačićima, kontaktirajte nas putem:</p><p><strong>E-mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Web stranica:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
    }
  };

  const t = content[safeLang];

  return (
    <div className="page-wrapper relative overflow-hidden min-h-screen pt-32 pb-24 bg-white">
      <HeroBackgroundSVG />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9C36B]/30 text-[#50641B] font-bold text-sm mb-6 shadow-sm border border-[#E09D00]/50">
              <Cookie size={16} />
              <span>{t.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#333] mb-6 drop-shadow-sm">
              OAZA MIRA LLC
            </h1>
            <p className="text-lg md:text-xl text-[#B8AE9F] leading-relaxed font-semibold">
              {t.effective}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/90 backdrop-blur-xl border border-[#B8AE9F]/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-[#333] prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#50641B] mt-0 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c1}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c1t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c2}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c2t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c3}</h2>
            <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
              {t.c3t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c4}</h2>
            <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
              {t.c4t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c5}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c5t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c6}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c6t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c7}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c7t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c8}</h2>
            <div className="space-y-2 text-[#4A4A4A]">
              {t.c8t}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
