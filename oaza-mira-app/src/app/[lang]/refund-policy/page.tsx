import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { FileText } from "lucide-react";

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const safeLang = ["en", "de", "hr"].includes(lang) ? (lang as "en" | "de" | "hr") : "en";

  const content = {
    en: {
      title: "Refund Policy",
      effective: "Effective: April 1, 2026",
      c1: "1. Scope",
      c1t: <p>This Refund Policy applies to all services booked via the Oaza Mira platform (www.oaza-mira.app), operated by OAZA MIRA LLC. By placing an order on our platform, you agree to the conditions set forth in this policy.</p>,
      c2: "2. Nature of Services",
      c2t: <><p>Oaza Mira acts as a digital intermediary platform connecting customers with independent care providers for memorial and grave care services. Upon placing an order, the request is immediately forwarded to a care provider for assignment and execution.</p><p><strong>Important:</strong> Due to the immediate assignment of orders to independent providers, all bookings are considered final once confirmed. The service execution process begins immediately upon order placement.</p></>,
      c3: "3. No Cash Refunds",
      c3t: <p>All payments made via the platform are non-refundable. We do not provide cash refunds, bank transfers, or credit card chargebacks under any circumstances. This applies to both individual bookings and subscription payments.</p>,
      c4: "4. Account Credit",
      c4t: <><p>In cases where a service was not provided or was provided in a significantly deficient manner (as determined solely by Oaza Mira based on Proof of Care verification), we may, at our sole discretion, issue an account credit to your Oaza Mira account. Account credits:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li>Can be used for future bookings on the platform</li><li>Are non-transferable and cannot be exchanged for cash</li><li>Cannot be withdrawn or paid out</li><li>Have no expiration date as long as your account remains active</li><li>Expire upon account termination</li></ul></>,
      c5: "5. Right of Withdrawal",
      c5t: <><p><strong>5.1 General</strong><br/>By placing an order on the platform, you acknowledge and accept that the ordered service is immediately forwarded to an independent provider for execution. Given the nature of the service as an intermediated, real-world service provided by third parties, the right of withdrawal does not apply once the order has been confirmed and assigned.</p><p className="mt-4"><strong>5.2 EU Customers</strong><br/>For customers within the European Union: By confirming your order, you explicitly consent to the immediate execution of the service and acknowledge that you lose your right of withdrawal pursuant to Article 16(a) of the EU Consumer Rights Directive (2011/83/EU) once the service has been fully performed. For services not yet fully performed, you explicitly request that execution begins before the expiration of the 14-day withdrawal period and acknowledge the resulting loss of your right of withdrawal.</p><p className="mt-4"><strong>5.3 Subscriptions</strong><br/>Subscription services can be canceled at any time for future billing periods. No refunds or credits are granted for the current billing period. Cancellation takes effect at the end of the current billing cycle.</p></>,
      c6: "6. Complaint Procedure",
      c6t: <p>If you are unsatisfied with a service, you may file a complaint within 48 hours of service delivery (evidenced by the uploaded Proof of Care). Complaints will be reviewed based on the submitted documentation. If a complaint is deemed justified, an account credit may be issued at our discretion.</p>,
      c7: "7. Payment Processing",
      c7t: <p>All payments are processed securely via Stripe. OAZA MIRA LLC does not store credit card or bank details. For questions regarding payment processing, please contact us at contact@oaza-mira.app.</p>,
      c8: "8. Chargebacks",
      c8t: <p>Initiating a chargeback or payment dispute without prior contact via the standard complaint procedure may result in the suspension or termination of your account. We reserve the right to pursue all available legal remedies for fraudulent chargebacks.</p>,
      c9: "9. Applicable Law",
      c9t: <p>This Refund Policy is governed by the laws of the State of Florida, United States of America. All disputes are subject to the exclusive jurisdiction of the courts in Fort Lauderdale, Florida.</p>,
      c10: "10. Contact",
      c10t: <><p>For questions regarding this policy, please contact us at:</p><p className="mt-2"><strong>Email:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Website:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
    },
    de: {
      title: "Rückerstattungsrichtlinie",
      effective: "Gültig ab: 1. April 2026",
      c1: "1. Geltungsbereich",
      c1t: <p>Diese Rückerstattungsrichtlinie gilt für alle über die Plattform Oaza Mira (www.oaza-mira.app) gebuchten Dienstleistungen, betrieben von OAZA MIRA LLC. Mit der Aufgabe einer Bestellung auf unserer Plattform stimmen Sie den in dieser Richtlinie festgelegten Bedingungen zu.</p>,
      c2: "2. Art der Dienstleistungen",
      c2t: <><p>Oaza Mira agiert als digitale Vermittlungsplattform, die Kunden mit unabhängigen Betreuern für Gedenk- und Grabpflegedienste verbindet. Nach Aufgabe einer Bestellung wird der Auftrag sofort an einen Betreuer weitergeleitet zur Zuweisung und Ausführung.</p><p><strong>Wichtig:</strong> Aufgrund der sofortigen Zuweisung von Bestellungen an unabhängige Betreuer gelten alle Buchungen nach Bestätigung als endgültig. Der Serviceausführungsprozess beginnt unmittelbar nach der Bestellaufgabe.</p></>,
      c3: "3. Keine Barrückerstattungen",
      c3t: <p>Alle über die Plattform geleisteten Zahlungen sind nicht erstattungsfähig. Wir leisten keine Barrückerstattungen, Banküberweisungen oder Kreditkartenrückbuchungen unter jeglichen Umständen. Dies gilt sowohl für Einzelbuchungen als auch für Abonnementzahlungen.</p>,
      c4: "4. Kontoguthaben",
      c4t: <><p>In Fällen, in denen eine Dienstleistung nicht erbracht wurde oder in wesentlich mangelhafter Weise erbracht wurde (wie von Oaza Mira allein auf Grundlage der Proof of Care-Überprüfung festgestellt), können wir nach eigenem Ermessen eine Kontogutschrift auf Ihr Oaza Mira-Konto ausstellen. Kontoguthaben:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li>Können für zukünftige Buchungen auf der Plattform verwendet werden</li><li>Sind nicht übertragbar und nicht in Bargeld umtauschbar</li><li>Können nicht abgehoben oder ausgezahlt werden</li><li>Haben kein Ablaufdatum, solange Ihr Konto aktiv bleibt</li><li>Verfallen bei Kontobeendigung</li></ul></>,
      c5: "5. Widerrufsrecht",
      c5t: <><p><strong>5.1 Allgemein</strong><br/>Mit der Aufgabe einer Bestellung auf der Plattform bestätigen und akzeptieren Sie, dass die bestellte Dienstleistung sofort an einen unabhängigen Betreuer zur Ausführung weitergeleitet wird. Angesichts der Natur der Dienstleistung als vermittelte, reale Dienstleistung, die von Drittanbietern erbracht wird, findet das Widerrufsrecht keine Anwendung, sobald die Bestellung bestätigt und zugewiesen wurde.</p><p className="mt-4"><strong>5.2 EU-Kunden</strong><br/>Für Kunden innerhalb der Europäischen Union: Mit der Bestätigung Ihrer Bestellung stimmen Sie ausdrücklich der sofortigen Ausführung der Dienstleistung zu und bestätigen, dass Sie Ihr Widerrufsrecht gemäß Artikel 16 Buchstabe a der EU-Verbraucherrechterichtlinie (2011/83/EU) verlieren, sobald die Dienstleistung vollständig erbracht wurde. Für noch nicht erbrachte Dienstleistungen verlangen Sie ausdrücklich, dass die Ausführung vor Ablauf der 14-tägigen Widerrufsfrist beginnt, und bestätigen den daraus resultierenden Verlust des Widerrufsrechts.</p><p className="mt-4"><strong>5.3 Abonnements</strong><br/>Abonnementdienste können jederzeit für zukünftige Abrechnungszeiträume gekündigt werden. Für den laufenden Abrechnungszeitraum werden keine Rückerstattungen oder Gutschriften gewährt. Die Kündigung wird zum Ende des aktuellen Abrechnungszyklus wirksam.</p></>,
      c6: "6. Beschwerdeverfahren",
      c6t: <p>Wenn Sie mit einer Dienstleistung unzufrieden sind, können Sie innerhalb von 48 Stunden nach Dienstleistungserbringung (nachgewiesen durch den hochgeladenen Proof of Care) eine Beschwerde einreichen. Beschwerden werden auf Grundlage der eingereichten Dokumentation geprüft. Wird eine Beschwerde als berechtigt befunden, kann nach unserem Ermessen eine Kontogutschrift ausgestellt werden.</p>,
      c7: "7. Zahlungsabwicklung",
      c7t: <p>Alle Zahlungen werden sicher über Stripe abgewickelt. OAZA MIRA LLC speichert keine Kreditkarten- oder Bankdaten. Bei Fragen zur Zahlungsabwicklung kontaktieren Sie uns bitte unter contact@oaza-mira.app.</p>,
      c8: "8. Rückbuchungen",
      c8t: <p>Die Einleitung einer Rückbuchung oder Zahlungsstreitigkeit ohne vorherige Kontaktaufnahme über das ordentliche Beschwerdeverfahren kann zur Sperrung oder Kündigung Ihres Kontos führen. Wir behalten uns das Recht vor, alle verfügbaren Rechtsmittel bei betrügerischen Rückbuchungen zu verfolgen.</p>,
      c9: "9. Anwendbares Recht",
      c9t: <p>Diese Rückerstattungsrichtlinie unterliegt dem Recht des Bundesstaates Florida, Vereinigte Staaten von Amerika. Alle Streitigkeiten unterliegen der ausschließlichen Zuständigkeit der Gerichte in Fort Lauderdale, Florida.</p>,
      c10: "10. Kontakt",
      c10t: <><p>Bei Fragen zu dieser Richtlinie kontaktieren Sie uns bitte unter:</p><p className="mt-2"><strong>E-Mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Website:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
    },
    hr: {
      title: "Politika povrata",
      effective: "Vrijedi od: 1. travnja 2026.",
      c1: "1. Područje primjene",
      c1t: <p>Ova Politika povrata odnosi se na sve usluge rezervirane putem platforme Oaza Mira (www.oaza-mira.app), kojom upravlja OAZA MIRA LLC. Slanjem narudžbe na našoj platformi, pristajete na uvjete navedene u ovoj politici.</p>,
      c2: "2. Priroda usluga",
      c2t: <><p>Oaza Mira djeluje kao digitalna posrednička platforma koja povezuje korisnike s nezavisnim pružateljima usluga za održavanje grobova i spomenika. Nakon slanja narudžbe, zahtjev se odmah prosljeđuje pružatelju usluge radi dodjele i izvršenja.</p><p><strong>Važno:</strong> Zbog trenutne dodjele narudžbi nezavisnim pružateljima usluga, sve rezervacije smatraju se konačnima nakon potvrde. Proces izvršenja usluge započinje odmah po zaprimanju narudžbe.</p></>,
      c3: "3. Nema povrata novca",
      c3t: <p>Sva plaćanja izvršena putem platforme su nepovratna. Ni pod kojim uvjetima ne vršimo povrat gotovine, bankovne prijenose ili storniranje plaćanja kreditnim karticama. Ovo se odnosi i na pojedinačne rezervacije i na pretplate.</p>,
      c4: "4. Sredstva na računu",
      c4t: <><p>U slučajevima kada usluga nije pružena ili je pružena na znatno manjkav način (što Oaza Mira utvrđuje isključivo na temelju provjere Proof of Care), možemo, prema vlastitom nahođenju, izdati kredit za vaš Oaza Mira račun. Krediti na računu:</p><ul className="list-disc pl-5 mt-2 space-y-1"><li>Mogu se koristiti za buduće rezervacije na platformi</li><li>Nisu prenosivi i ne mogu se zamijeniti za gotovinu</li><li>Ne mogu se povući ili isplatiti</li><li>Nemaju rok trajanja dokle god je vaš račun aktivan</li><li>Prestaju vrijediti po raskidu računa</li></ul></>,
      c5: "5. Pravo na odustajanje",
      c5t: <><p><strong>5.1 Općenito</strong><br/>Slanjem narudžbe na platformi potvrđujete i prihvaćate da se naručena usluga odmah prosljeđuje neovisnom pružatelju usluga na izvršenje. S obzirom na prirodu usluge kao posredovane, stvarne usluge koju pružaju treće strane, pravo na odustajanje se ne primjenjuje nakon što je narudžba potvrđena i dodijeljena.</p><p className="mt-4"><strong>5.2 Korisnici iz EU</strong><br/>Za korisnike unutar Europske unije: Potvrdom narudžbe izričito pristajete na trenutno izvršenje usluge i prepoznajete da gubite svoje pravo na odustajanje sukladno članku 16. stavku (a) Direktive EU-a o pravima potrošača (2011/83/EU) nakon što je usluga u potpunosti izvršena. Za usluge koje još nisu u potpunosti izvršene, izričito zahtijevate da izvršenje započne prije isteka roka za odustajanje od 14 dana i potvrđujete posljedični gubitak prava na odustajanje.</p><p className="mt-4"><strong>5.3 Pretplate</strong><br/>Pretplate se mogu otkazati u bilo kojem trenutku za buduća naplatna razdoblja. Ne odobravaju se povrati ili krediti za tekuće naplatno razdoblje. Otkazivanje stupa na snagu na kraju trenutnog ciklusa naplate.</p></>,
      c6: "6. Postupak prigovora",
      c6t: <p>Ako ste nezadovoljni uslugom, možete uložiti prigovor u roku od 48 sati od pružanja usluge (potvrđeno učitanim Proof of Care dokumentom). Žalbe će biti pregledane na temelju dostavljene dokumentacije. Ako se žalba smatra opravdanom, možemo prema vlastitom nahođenju odobriti kredit na račun.</p>,
      c7: "7. Obrada plaćanja",
      c7t: <p>Sva plaćanja sigurno obrađuje Stripe. OAZA MIRA LLC ne pohranjuje podatke o kreditnim karticama ili bankovnim podacima. U slučaju pitanja vezanih uz obradu plaćanja, kontaktirajte nas na contact@oaza-mira.app.</p>,
      c8: "8. Storniranja plaćanja (Chargebacks)",
      c8t: <p>Pokretanje storniranja plaćanja ili spora oko plaćanja bez prethodnog kontakta putem redovnog postupka za prigovore može rezultirati suspenzijom ili ukidanjem vašeg računa. Zadržavamo pravo poduzeti sve dostupne pravne lijekove u slučaju lažnih storniranja plaćanja.</p>,
      c9: "9. Mjerodavno pravo",
      c9t: <p>Ova Politika povrata u skladu je sa zakonom države Florida, Sjedinjene Američke Države. Svi sporovi podliježu isključivoj nadležnosti sudova u Fort Lauderdaleu, Florida.</p>,
      c10: "10. Kontakt",
      c10t: <><p>Za pitanja vezana uz ovu politiku, obratite nam se na:</p><p className="mt-2"><strong>E-mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Web stranica:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
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
              <FileText size={16} />
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
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c3t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c4}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
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

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
