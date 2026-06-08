import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { ShieldCheck } from "lucide-react";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const safeLang = ["en", "de", "hr"].includes(lang) ? (lang as "en" | "de" | "hr") : "en";

  const content = {
    en: {
      title: "Privacy Policy",
      effective: "Effective: April 1, 2026",
      c1: "1. Data Controller",
      c1t: <><p><strong>Company:</strong> OAZA MIRA LLC</p><p><strong>Address:</strong> c/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, USA</p><p><strong>Email:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a></p></>,
      c2: "2. EU Representative (Art. 27 GDPR)",
      c2t: <><p>Since OAZA MIRA LLC is established outside the European Union and processes personal data of EU data subjects, we have appointed the following representative in accordance with Article 27 of the General Data Protection Regulation (GDPR):</p><div className="space-y-2 mt-4 text-[#4A4A4A] bg-[#F9F6F0] p-6 rounded-2xl border border-[#E9C36B]/30"><p><strong>Organization:</strong> AEON – Vereinigung für Bildung und Organisation der Verbindung zwischen den Generationen</p><p><strong>Address:</strong> Schönbrunner Straße 35/Top 4, 1050 Wien, Österreich</p><p><strong>ZVR Number:</strong> 1568721336</p></div></>,
      c3: "3. Data We Collect",
      c3t: <><p><strong>3.1 Account Data</strong><br/>Name, email address, and access data provided during registration.</p><p><strong>3.2 Payment Data</strong><br/>Payment information is processed by our payment provider Stripe. We do not store any credit card data on our servers.</p><p><strong>3.3 Order Data</strong><br/>Information about your bookings, including grave location, service type, and communication with care providers.</p><p><strong>3.4 Usage Data</strong><br/>IP address, browser type, device information, pages visited, and general interaction data collected by analytics tools including Google Analytics.</p><p><strong>3.5 Communication Data</strong><br/>Information you provide when contacting us or subscribing to our newsletter.</p></>,
      c4: "4. Purpose and Legal Basis",
      c4t: <><p><strong>Contract Fulfillment (Art. 6 (1) (b) GDPR):</strong> Processing your bookings, account management, payment processing, facilitating communication between customers and care providers.</p><p><strong>Legitimate Interest (Art. 6 (1) (f) GDPR):</strong> Improving our platform, analytics, fraud prevention, quality assurance (Proof of Care verification).</p><p><strong>Consent (Art. 6 (1) (a) GDPR):</strong> Marketing communication, newsletter, marketing cookies. You can revoke your consent at any time.</p><p><strong>Legal Obligation (Art. 6 (1) (c) GDPR):</strong> Tax retention, legal compliance, responding to lawful requests.</p></>,
      c5: "5. Data Recipients and Processors",
      c5t: <><p>We share personal data with the following categories of recipients as necessary for the operation of our platform:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li><strong>Stripe, Inc.</strong> – Payment processing</li><li><strong>GoHighLevel</strong> – Customer relationship management and communication</li><li><strong>Google Analytics</strong> – Website analytics</li><li><strong>Other Service Providers</strong> – For hosting, email delivery, and operational support as needed</li></ul><p className="mt-4">Data is only shared to the extent necessary for the respective purpose. All processors are contractually obligated to handle data in accordance with applicable data protection laws.</p></>,
      c6: "6. International Data Transfers",
      c6t: <><p><strong>Important:</strong> Our servers and primary data processing operations are located in the United States. OAZA MIRA LLC is not certified under the EU-U.S. Data Privacy Framework. By using our platform, you acknowledge that your personal data is transferred to and processed in the United States. We implement appropriate safeguards, including Standard Contractual Clauses, where applicable, to protect your data during such transfers.</p></>,
      c7: "7. Storage Duration",
      c7t: <><p>We retain personal data for as long as your account is active or as necessary to provide our services. Upon account termination, we retain data in accordance with applicable tax and commercial law regulations or as necessary to resolve disputes. Data processed for marketing purposes is stored until you revoke your consent.</p></>,
      c8: "8. Your Rights (EU Users)",
      c8t: <><p>If you are located within the European Union, you have the following rights under the GDPR:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li><strong>Right of Access (Art. 15 GDPR)</strong> – Request information about your processed data</li><li><strong>Right to Rectification (Art. 16 GDPR)</strong> – Correct inaccurate data</li><li><strong>Right to Erasure (Art. 17 GDPR)</strong> – Request deletion of your data</li><li><strong>Right to Restriction of Processing (Art. 18 GDPR)</strong> – Restrict the processing of your data</li><li><strong>Right to Data Portability (Art. 20 GDPR)</strong> – Receive your data in a portable format</li><li><strong>Right to Object (Art. 21 GDPR)</strong> – Object to processing based on legitimate interests</li><li><strong>Right to Withdraw Consent (Art. 7 (3) GDPR)</strong> – Revoke consent at any time</li></ul><p className="mt-4">To exercise your rights, contact us at contact@oaza-mira.app. We will respond within 30 days. You also have the right to lodge a complaint with a supervisory authority in the EU Member State of your habitual residence.</p></>,
      c9: "9. Newsletter",
      c9t: <><p>If you subscribe to our newsletter, we process your email address based on your consent. You can unsubscribe at any time using the unsubscribe link in every email or by contacting us.</p></>,
      c10: "10. Cookies",
      c10t: <><p>Detailed information about our use of cookies can be found in our Cookie Policy.</p></>,
      c11: "11. Security",
      c11t: <><p>We use industry-standard technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. Payment data is processed exclusively via PCI-DSS compliant providers.</p></>,
      c12: "12. Privacy of Minors",
      c12t: <><p>Our platform is not directed at persons under 18 years of age. We do not knowingly collect personal data from minors.</p></>,
      c13: "13. Changes to this Privacy Policy",
      c13t: <><p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on the platform with an updated effective date. Continued use of the platform is deemed acceptance of the modified Privacy Policy.</p></>,
      c14: "14. Contact",
      c14t: <><p>For all privacy-related inquiries:<br/><strong>Email:</strong> contact@oaza-mira.app<br/><strong>EU Representative:</strong> AEON, Schönbrunner Straße 35/Top 4, 1050 Wien, Österreich</p></>
    },
    de: {
      title: "Datenschutzerklärung",
      effective: "Gültig ab: 1. April 2026",
      c1: "1. Verantwortlicher",
      c1t: <><p><strong>Unternehmen:</strong> OAZA MIRA LLC</p><p><strong>Adresse:</strong> c/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, USA</p><p><strong>E-Mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a></p></>,
      c2: "2. EU-Vertreter (Art. 27 DSGVO)",
      c2t: <><p>Da OAZA MIRA LLC außerhalb der Europäischen Union niedergelassen ist und personenbezogene Daten von EU-Betroffenen verarbeitet, haben wir gemäß Artikel 27 DSGVO folgenden Vertreter benannt:</p><div className="space-y-2 mt-4 text-[#4A4A4A] bg-[#F9F6F0] p-6 rounded-2xl border border-[#E9C36B]/30"><p><strong>Organisation:</strong> AEON – Vereinigung für Bildung und Organisation der Verbindung zwischen den Generationen</p><p><strong>Adresse:</strong> Schönbrunner Straße 35/Top 4, 1050 Wien, Österreich</p><p><strong>ZVR-Nummer:</strong> 1568721336</p></div></>,
      c3: "3. Daten, die wir erheben",
      c3t: <><p><strong>3.1 Kontodaten</strong><br/>Name, E-Mail-Adresse und Zugangsdaten, die bei der Registrierung angegeben werden.</p><p><strong>3.2 Zahlungsdaten</strong><br/>Zahlungsinformationen werden von unserem Zahlungsanbieter Stripe verarbeitet. Wir speichern keine Kreditkartendaten auf unseren Servern.</p><p><strong>3.3 Bestelldaten</strong><br/>Informationen zu Ihren Buchungen, einschließlich Grabstandort, Serviceart und Kommunikation mit Betreuern.</p><p><strong>3.4 Nutzungsdaten</strong><br/>IP-Adresse, Browsertyp, Geräteinformationen, besuchte Seiten und allgemeine Interaktionsdaten, die durch Analysetools einschließlich Google Analytics erhoben werden.</p><p><strong>3.5 Kommunikationsdaten</strong><br/>Informationen, die Sie bei der Kontaktaufnahme oder bei der Anmeldung zu unserem Newsletter bereitstellen.</p></>,
      c4: "4. Zweck und Rechtsgrundlage",
      c4t: <><p><strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):</strong> Bearbeitung Ihrer Buchungen, Kontoverwaltung, Zahlungsabwicklung, Vermittlung der Kommunikation zwischen Kunden und Betreuern.</p><p><strong>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO):</strong> Verbesserung unserer Plattform, Analysen, Betrugsprävention, Qualitätssicherung (Proof of Care-Überprüfung).</p><p><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Marketingkommunikation, Newsletter, Marketing-Cookies. Sie können Ihre Einwilligung jederzeit widerrufen.</p><p><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):</strong> Steuerliche Aufbewahrung, rechtliche Compliance, Beantwortung rechtmäßiger Anfragen.</p></>,
      c5: "5. Datenempfänger und Auftragsverarbeiter",
      c5t: <><p>Wir teilen personenbezogene Daten mit folgenden Kategorien von Empfängern, soweit dies für den Betrieb unserer Plattform erforderlich ist:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li><strong>Stripe, Inc.</strong> – Zahlungsabwicklung</li><li><strong>GoHighLevel</strong> – Kundenbeziehungsmanagement und Kommunikation</li><li><strong>Google Analytics</strong> – Website-Analysen</li><li><strong>Weitere Dienstleister</strong> – Für Hosting, E-Mail-Zustellung und operative Unterstützung nach Bedarf</li></ul><p className="mt-4">Daten werden nur in dem für den jeweiligen Zweck erforderlichen Umfang weitergegeben. Alle Auftragsverarbeiter sind vertraglich verpflichtet, Daten gemäß den geltenden Datenschutzgesetzen zu behandeln.</p></>,
      c6: "6. Internationale Datenübermittlungen",
      c6t: <><p><strong>Wichtig:</strong> Unsere Server und primären Datenverarbeitungsvorgänge befinden sich in den Vereinigten Staaten. OAZA MIRA LLC ist nicht im Rahmen des EU-U.S. Data Privacy Frameworks zertifiziert. Durch die Nutzung unserer Plattform nehmen Sie zur Kenntnis, dass Ihre personenbezogenen Daten in die Vereinigten Staaten übermittelt und dort verarbeitet werden. Wir implementieren angemessene Schutzmaßnahmen, einschließlich Standardvertragsklauseln, soweit anwendbar, um Ihre Daten bei solchen Übermittlungen zu schützen.</p></>,
      c7: "7. Speicherdauer",
      c7t: <><p>Wir bewahren personenbezogene Daten so lange auf, wie Ihr Konto aktiv ist oder wie es für die Bereitstellung unserer Dienste erforderlich ist. Nach Kontobeendigung bewahren wir Daten gemäß den geltenden steuer- und handelsrechtlichen Vorschriften oder soweit zur Beilegung von Streitigkeiten erforderlich auf. Daten, die zu Marketingzwecken verarbeitet werden, werden bis zum Widerruf Ihrer Einwilligung gespeichert.</p></>,
      c8: "8. Ihre Rechte (EU-Nutzer)",
      c8t: <><p>Wenn Sie sich innerhalb der Europäischen Union befinden, haben Sie folgende Rechte gemäß der DSGVO:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li><strong>Auskunftsrecht (Art. 15 DSGVO)</strong> – Informationen über Ihre verarbeiteten Daten anfordern</li><li><strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong> – Unrichtige Daten korrigieren</li><li><strong>Recht auf Löschung (Art. 17 DSGVO)</strong> – Löschung Ihrer Daten verlangen</li><li><strong>Recht auf Einschränkung (Art. 18 DSGVO)</strong> – Verarbeitung Ihrer Daten einschränken</li><li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong> – Ihre Daten in einem übertragbaren Format erhalten</li><li><strong>Widerspruchsrecht (Art. 21 DSGVO)</strong> – Der Verarbeitung auf Grundlage berechtigter Interessen widersprechen</li><li><strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</strong> – Einwilligung jederzeit widerrufen</li></ul><p className="mt-4">Um Ihre Rechte auszuüben, kontaktieren Sie uns unter contact@oaza-mira.app. Wir werden innerhalb von 30 Tagen antworten. Sie haben außerdem das Recht, eine Beschwerde bei einer Aufsichtsbehörde im EU-Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts einzureichen.</p></>,
      c9: "9. Newsletter",
      c9t: <><p>Wenn Sie unseren Newsletter abonnieren, verarbeiten wir Ihre E-Mail-Adresse auf Grundlage Ihrer Einwilligung. Sie können sich jederzeit über den Abmeldelink in jeder E-Mail oder durch Kontaktaufnahme mit uns abmelden.</p></>,
      c10: "10. Cookies",
      c10t: <><p>Detaillierte Informationen über unsere Verwendung von Cookies finden Sie in unserer Cookie-Richtlinie.</p></>,
      c11: "11. Sicherheit",
      c11t: <><p>Wir setzen branchenübliche technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Veränderung zu schützen. Zahlungsdaten werden ausschließlich über PCI-DSS-konforme Anbieter verarbeitet.</p></>,
      c12: "12. Datenschutz für Minderjährige",
      c12t: <><p>Unsere Plattform richtet sich nicht an Personen unter 18 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Minderjährigen.</p></>,
      c13: "13. Änderungen dieser Datenschutzerklärung",
      c13t: <><p>Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Änderungen werden auf der Plattform mit einem aktualisierten Gültigkeitsdatum veröffentlicht. Die weitere Nutzung der Plattform gilt als Zustimmung zur geänderten Datenschutzerklärung.</p></>,
      c14: "14. Kontakt",
      c14t: <><p>Für alle datenschutzbezogenen Anfragen:<br/><strong>E-Mail:</strong> contact@oaza-mira.app<br/><strong>EU-Vertreter:</strong> AEON, Schönbrunner Straße 35/Top 4, 1050 Wien, Österreich</p></>
    },
    hr: {
      title: "Politika privatnosti",
      effective: "Stupa na snagu: 1. travnja 2026.",
      c1: "1. Voditelj obrade podataka",
      c1t: <><p><strong>Tvrtka:</strong> OAZA MIRA LLC</p><p><strong>Adresa:</strong> c/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, SAD</p><p><strong>E-mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a></p></>,
      c2: "2. Predstavnik u EU (Čl. 27. GDPR)",
      c2t: <><p>S obzirom na to da je OAZA MIRA LLC osnovana izvan Europske unije i obrađuje osobne podatke građana EU-a, imenovali smo sljedećeg predstavnika u skladu s člankom 27. Opće uredbe o zaštiti podataka (GDPR):</p><div className="space-y-2 mt-4 text-[#4A4A4A] bg-[#F9F6F0] p-6 rounded-2xl border border-[#E9C36B]/30"><p><strong>Organizacija:</strong> AEON – Vereinigung für Bildung und Organisation der Verbindung zwischen den Generationen</p><p><strong>Adresa:</strong> Schönbrunner Straße 35/Top 4, 1050 Wien, Austrija</p><p><strong>ZVR broj:</strong> 1568721336</p></div></>,
      c3: "3. Podaci koje prikupljamo",
      c3t: <><p><strong>3.1 Podaci o računu</strong><br/>Ime, e-mail adresa i pristupni podaci primljeni tijekom registracije.</p><p><strong>3.2 Podaci o plaćanju</strong><br/>Informacije o plaćanju obrađuje naš partner Stripe. Ne pohranjujemo podatke o kreditnim karticama na našim poslužiteljima.</p><p><strong>3.3 Podaci o narudžbi</strong><br/>Informacije o vašim rezervacijama, uključujući lokaciju groba, vrstu usluge i komunikaciju s pružateljima usluga.</p><p><strong>3.4 Podaci o korištenju</strong><br/>IP adresa, vrsta preglednika, informacije o uređaju, posjećene stranice i opći podaci o interakciji prikupljeni analitičkim alatima, uključujući Google Analytics.</p><p><strong>3.5 Komunikacijski podaci</strong><br/>Informacije koje pružite pri kontaktu s nama ili pri prijavi na naš newsletter.</p></>,
      c4: "4. Svrha i pravna osnova",
      c4t: <><p><strong>Ispunjenje ugovora (Čl. 6. st. 1. točka b GDPR):</strong> Obrada vaših rezervacija, upravljanje računom, obrada plaćanja, omogućavanje komunikacije između kupaca i pružatelja usluga.</p><p><strong>Legitimni interes (Čl. 6. st. 1. točka f GDPR):</strong> Poboljšanje naše platforme, analitika, prevencija prijevara, osiguranje kvalitete (provjera Proof of Care).</p><p><strong>Privola (Čl. 6. st. 1. točka a GDPR):</strong> Marketinška komunikacija, newsletter, marketinški kolačići. Svoju privolu možete povući u bilo kojem trenutku.</p><p><strong>Pravna obveza (Čl. 6. st. 1. točka c GDPR):</strong> Porezno zadržavanje, pravna usklađenost, odgovori na zakonite zahtjeve.</p></>,
      c5: "5. Primatelji i izvršitelji obrade podataka",
      c5t: <><p>Osobne podatke dijelimo s navedenim kategorijama primatelja koliko je to neophodno za rad naše platforme:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li><strong>Stripe, Inc.</strong> – Obrada plaćanja</li><li><strong>GoHighLevel</strong> – Upravljanje odnosima sa kupcima i komunikacija</li><li><strong>Google Analytics</strong> – Analitika web stranice</li><li><strong>Ostali pružatelji usluga</strong> – Za hosting, dostavu e-pošte i operativnu podršku prema potrebi</li></ul><p className="mt-4">Podaci se dijele samo u mjeri potrebnoj za određenu svrhu. Svi izvršitelji ugovorno su obvezani rukovati podacima u skladu s važećim zakonima o zaštiti podataka.</p></>,
      c6: "6. Međunarodni prijenosi podataka",
      c6t: <><p><strong>Važno:</strong> Naši poslužitelji i primarni postupci obrade podataka nalaze se u SAD-u. OAZA MIRA LLC nije certificirana u sklopu Okvira za zaštitu privatnosti podataka između EU i SAD-a. Korištenjem naše platforme, svjesni ste da se vaši osobni podaci prenose i obrađuju u SAD-u. Primjenjujemo odgovarajuće sigurnosne mjere, uključujući Standardne ugovorne klauzule, gdje je primjenjivo, kako bismo zaštitili vaše podatke tijekom takvih prijenosa.</p></>,
      c7: "7. Trajanje pohrane",
      c7t: <><p>Zadržavamo osobne podatke dokle god je vaš račun aktivan ili koliko je potrebno za pružanje naših usluga. Po prekidu računa, podatke zadržavamo u skladu s primjenjivim poreznim i trgovinskim zakonskim obvezama ili prema potrebi za rješavanje sporova. Podaci obređivani za marketinške svrhe čuvaju se dok ne povučete privolu.</p></>,
      c8: "8. Vaša prava (EU korisnici)",
      c8t: <><p>Ako se nalazite unutar Europske unije, prema GDPR-u imate sljedeća prava:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li><strong>Pravo na pristup (Čl. 15. GDPR)</strong> – Zahtijevajte informacije o vašim obrađenim podacima</li><li><strong>Pravo na ispravak (Čl. 16. GDPR)</strong> – Ispravak netočnih podataka</li><li><strong>Pravo na brisanje (Čl. 17. GDPR)</strong> – Zatražite brisanje vaših podataka</li><li><strong>Pravo na ograničenje obrade (Čl. 18. GDPR)</strong> – Ograničavanje obrade vaših podataka</li><li><strong>Pravo na prenosivost podataka (Čl. 20. GDPR)</strong> – Primanje vaših podataka u prenosivom formatu</li><li><strong>Pravo na prigovor (Čl. 21. GDPR)</strong> – Prigovorite na obradu temeljenu na legitimnim interesima</li><li><strong>Pravo na povlačenje privole (Čl. 7. st. 3. GDPR)</strong> – Povucite privolu u bilo kojem trenutku</li></ul><p className="mt-4">Kako biste ostvarili svoja prava, kontaktirajte nas na contact@oaza-mira.app. Odgovorit ćemo u roku od 30 dana. Također imate pravo podnijeti pritužbu nadzornom tijelu u EU državi članici u kojoj imate prebivalište.</p></>,
      c9: "9. Newsletter",
      c9t: <><p>Ako se pretplatite na naš newsletter, vašu e-mail adresu obrađujemo na temelju vaše privole. U bilo kojem trenutku možete se odjaviti klikom na opciju odjave u e-mailu ili kontaktirajući nas.</p></>,
      c10: "10. Kolačići",
      c10t: <><p>Detaljne informacije o korištenju kolačića nalaze se u našoj Politici o kolačićima.</p></>,
      c11: "11. Sigurnost",
      c11t: <><p>Koristimo industrijske tehničke i organizacijske mjere kako bismo zaštitili vaše osobne podatke od neovlaštenog pristupa, gubitka ili mijenjanja. Podaci o plaćanju isključivo se obrađuju putem certificiranih PCI-DSS pružatelja.</p></>,
      c12: "12. Privatnost maloljetnika",
      c12t: <><p>Naša platforma nije namijenjena osobama mlađim od 18 godina. Svjesno ne prikupljamo osobne podatke od maloljetnika.</p></>,
      c13: "13. Izmjene ove Politike privatnosti",
      c13t: <><p>Zadržavamo pravo ažuriranja ove Politike privatnosti u bilo kojem trenutku. Izmjene će biti objavljene na platformi uz ažurirani datum stupanja na snagu. Nastavak korištenja platforme znači prihvaćanje izmijenjene Politike privatnosti.</p></>,
      c14: "14. Kontakt",
      c14t: <><p>Za sva pitanja vezana uz zaštitu privatnosti:<br/><strong>E-mail:</strong> contact@oaza-mira.app<br/><strong>Predstavnik u EU:</strong> AEON, Schönbrunner Straße 35/Top 4, 1050 Wien, Austrija</p></>
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
              <ShieldCheck size={16} />
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
            <div className="space-y-2 text-[#4A4A4A]">
              {t.c1t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c2}</h2>
            <div className="text-[#4A4A4A] mb-4">
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
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c8t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c9}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c9t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c10}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c10t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c11}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c11t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c12}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c12t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c13}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c13t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c14}</h2>
            <div className="text-[#4A4A4A] mb-8">
              {t.c14t}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
