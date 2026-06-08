import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { Scale } from "lucide-react";

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const safeLang = ["en", "de", "hr"].includes(lang) ? (lang as "en" | "de" | "hr") : "en";

  const content = {
    en: {
      title: "Terms of Service",
      effective: "Effective: April 1, 2026",
      c1: "1. Acceptance of Terms",
      c1t: <p>By accessing or using the Oaza Mira platform (www.oaza-mira.app), operated by OAZA MIRA LLC (&quot;we&quot;, &quot;us&quot;, or &quot;the Platform&quot;), you agree to these Terms of Service. If you do not agree, do not use the Platform.</p>,
      c2: "2. About the Platform",
      c2t: <><p>Oaza Mira is a digital intermediary platform connecting customers (&quot;Customers&quot;) with independent local care providers (&quot;Providers&quot;) for memorial and grave care services. The Platform facilitates the booking, communication, payment, and quality assurance processes between Customers and Providers.</p><p><strong>Important:</strong> OAZA MIRA LLC acts solely as an intermediary. We do not provide physical care services ourselves. All care services are provided by independent contractors who are solely responsible for the quality and execution of their work.</p></>,
      c3: "3. User Accounts",
      c3t: <p>To use the Platform, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your login credentials. You must be at least 18 years old to create an account. We reserve the right to suspend or terminate accounts that violate these Terms.</p>,
      c4: "4. Services and Booking",
      c4t: <><p><strong>4.1 Service Description</strong><br/>The Platform facilitates the booking of memorial and grave care services, including but not limited to grave cleaning, flower placement, candle placement, and related care services.</p><p className="mt-4"><strong>4.2 Booking Process</strong><br/>Upon placing an order, the request is forwarded to registered Providers in the respective area. Providers may accept or reject orders at their own discretion. The Platform does not guarantee the availability of Providers or the acceptance of a specific order.</p><p className="mt-4"><strong>4.3 Service Level</strong><br/>Standard orders are to be completed within 72 business hours. Scheduled orders must be executed on the requested date. These timeframes are subject to Provider availability and local conditions.</p></>,
      c5: "5. Proof of Care",
      c5t: <p>Upon completion, Providers upload before-and-after photos with GPS metadata and timestamps (&quot;Proof of Care&quot;) for quality assurance. Customers have a 48-hour review period to confirm the service or file a complaint. If no complaint is raised within 48 hours, the service is deemed accepted (tacit approval).</p>,
      c6: "6. Pricing and Payment",
      c6t: <><p><strong>6.1 Platform Fee</strong><br/>The Platform charges a service fee of up to 25% of the total order value. This fee covers platform operations, customer acquisition, payment processing, quality assurance, dispute resolution, and administrative infrastructure.</p><p className="mt-4"><strong>6.2 Payment Processing</strong><br/>All payments are processed securely via Stripe. By placing an order, you authorize the collection of the full order amount. The payment is held until service completion and verification.</p><p className="mt-4"><strong>6.3 Subscriptions</strong><br/>The Platform offers subscription-based booking options. Subscriptions automatically renew at the end of each billing cycle unless canceled prior to renewal. Cancellation takes effect at the end of the current billing period.</p></>,
      c7: "7. Refund and Cancellation",
      c7t: <p>All payments are non-refundable. Account credits may be issued at our discretion for deficient services. Cash refunds are not granted. For full details, please refer to our Refund Policy.</p>,
      c8: "8. Platform Role and Liability",
      c8t: <><p><strong>8.1 Intermediary Status</strong><br/>OAZA MIRA LLC acts solely as a digital intermediary. There is no employment, agency, or partnership relationship between the Platform and any Provider. The Platform is not responsible for the acts, omissions, or conduct of Providers.</p><p className="mt-4"><strong>8.2 Limitation of Liability</strong><br/>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OAZA MIRA LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE PLATFORM. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.</p><p className="mt-4"><strong>8.3 No Warranties</strong><br/>THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p></>,
      c9: "9. User Obligations",
      c9t: <ul className="list-disc pl-5 mt-2 space-y-1"><li>Provide accurate and truthful information</li><li>Use the Platform only for its intended purpose</li><li>Do not attempt to bypass the Platform to hire Providers directly</li><li>Do not upload any harmful, illegal, or inappropriate content</li><li>Comply with all applicable laws and regulations</li></ul>,
      c10: "10. Intellectual Property",
      c10t: <p>All content on the Platform, including text, graphics, logos, and software, is the property of OAZA MIRA LLC. By uploading content (including photos), you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content in connection with Platform operations.</p>,
      c11: "11. Privacy",
      c11t: <p>Your use of the Platform is subject to our Privacy Policy, which describes how we collect, use, and protect your personal data.</p>,
      c12: "12. Termination",
      c12t: <p>We may suspend or terminate your access to the Platform at any time, with or without cause, and with or without notice. Upon termination, your right to use the Platform immediately ceases. Account credits expire upon termination.</p>,
      c13: "13. Applicable Law and Jurisdiction",
      c13t: <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, United States of America. All disputes arising from or related to these Terms are subject to the exclusive jurisdiction of the courts in Fort Lauderdale, Florida.</p>,
      c14: "14. Dispute Resolution",
      c14t: <p>Before initiating legal action, you agree to first contact us at contact@oaza-mira.app and attempt to resolve the dispute informally. If the dispute cannot be resolved within 30 days, either party may pursue legal action in accordance with Section 13.</p>,
      c15: "15. Severability",
      c15t: <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>,
      c16: "16. Changes to the Terms",
      c16t: <p>We reserve the right to modify these Terms at any time. Changes will be posted on the Platform with an updated effective date. Continued use of the Platform after changes constitutes acceptance of the modified Terms.</p>,
      c17: "17. Contact",
      c17t: <><p><strong>Email:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Website:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
    },
    de: {
      title: "Nutzungsbedingungen",
      effective: "Gültig ab: 1. April 2026",
      c1: "1. Annahme der Bedingungen",
      c1t: <p>Durch den Zugriff auf oder die Nutzung der Plattform Oaza Mira (www.oaza-mira.app), betrieben von OAZA MIRA LLC („wir&quot;, „uns&quot; oder „die Plattform&quot;), erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie nicht zustimmen, nutzen Sie die Plattform nicht.</p>,
      c2: "2. Über die Plattform",
      c2t: <><p>Oaza Mira ist eine digitale Vermittlungsplattform, die Kunden („Kunden&quot;) mit unabhängigen lokalen Betreuern („Betreuer&quot;) für Gedenk- und Grabpflegedienste verbindet. Die Plattform erleichtert die Buchungs-, Kommunikations-, Zahlungs- und Qualitätssicherungsprozesse zwischen Kunden und Betreuern.</p><p><strong>Wichtig:</strong> OAZA MIRA LLC agiert ausschließlich als Vermittler. Wir erbringen die physischen Pflegeleistungen nicht selbst. Alle Pflegeleistungen werden von unabhängigen Auftragnehmern erbracht, die allein für die Qualität und Ausführung ihrer Arbeit verantwortlich sind.</p></>,
      c3: "3. Benutzerkonten",
      c3t: <p>Zur Nutzung der Plattform müssen Sie ein Konto erstellen und genaue, vollständige Informationen angeben. Sie sind für die Wahrung der Vertraulichkeit Ihrer Zugangsdaten verantwortlich. Sie müssen mindestens 18 Jahre alt sein, um ein Konto zu erstellen. Wir behalten uns das Recht vor, Konten zu sperren oder zu kündigen, die gegen diese Bedingungen verstoßen.</p>,
      c4: "4. Dienstleistungen und Buchung",
      c4t: <><p><strong>4.1 Leistungsbeschreibung</strong><br/>Die Plattform vermittelt die Buchung von Gedenk- und Grabpflegediensten, einschließlich, aber nicht beschränkt auf Grabreinigung, Blumenablage, Kerzenablage und damit verbundene Pflegeleistungen.</p><p className="mt-4"><strong>4.2 Buchungsprozess</strong><br/>Nach Aufgabe einer Bestellung wird der Auftrag an registrierte Betreuer im jeweiligen Gebiet weitergeleitet. Betreuer können Aufträge nach eigenem Ermessen annehmen oder ablehnen. Die Plattform garantiert nicht die Verfügbarkeit von Betreuern oder die Annahme eines bestimmten Auftrags.</p><p className="mt-4"><strong>4.3 Servicelevel</strong><br/>Standardaufträge sind innerhalb von 72 Arbeitsstunden zu erledigen. Terminierte Aufträge müssen am gewünschten Datum ausgeführt werden. Diese Fristen unterliegen der Verfügbarkeit der Betreuer und den örtlichen Bedingungen.</p></>,
      c5: "5. Proof of Care",
      c5t: <p>Nach Abschluss laden Betreuer Vorher-Nachher-Fotos mit GPS-Metadaten und Zeitstempeln („Proof of Care&quot;) zur Qualitätssicherung hoch. Kunden haben eine 48-Stunden-Überprüfungsfrist, um die Leistung zu bestätigen oder eine Beschwerde einzureichen. Wird innerhalb von 48 Stunden keine Beschwerde erhoben, gilt die Leistung als angenommen (stillschweigende Genehmigung).</p>,
      c6: "6. Preise und Zahlung",
      c6t: <><p><strong>6.1 Plattformgebühr</strong><br/>Die Plattform erhebt eine Servicegebühr von bis zu 25% des Gesamtbestellwerts. Diese Gebühr deckt Plattformbetrieb, Kundenakquise, Zahlungsabwicklung, Qualitätssicherung, Streitbeilegung und administrative Infrastruktur.</p><p className="mt-4"><strong>6.2 Zahlungsabwicklung</strong><br/>Alle Zahlungen werden sicher über Stripe abgewickelt. Mit der Aufgabe einer Bestellung autorisieren Sie die Einziehung des vollen Bestellbetrags. Die Zahlung wird bis zur Leistungserbringung und Überprüfung einbehalten.</p><p className="mt-4"><strong>6.3 Abonnements</strong><br/>Die Plattform bietet abonnementbasierte Buchungsoptionen an. Abonnements verlängern sich automatisch am Ende jedes Abrechnungszyklus, sofern sie nicht vor der Verlängerung gekündigt werden. Die Kündigung wird zum Ende des laufenden Abrechnungszeitraums wirksam.</p></>,
      c7: "7. Rückerstattung und Stornierung",
      c7t: <p>Alle Zahlungen sind nicht erstattungsfähig. Kontogutschriften können nach unserem Ermessen für mangelhafte Leistungen ausgestellt werden. Barrückerstattungen werden nicht gewährt. Vollständige Details entnehmen Sie bitte unserer Rückerstattungsrichtlinie.</p>,
      c8: "8. Plattformrolle und Haftung",
      c8t: <><p><strong>8.1 Vermittlerstatus</strong><br/>OAZA MIRA LLC agiert ausschließlich als digitaler Vermittler. Zwischen der Plattform und einem Betreuer besteht kein Arbeits-, Agentur- oder Partnerschaftsverhältnis. Die Plattform ist nicht verantwortlich für Handlungen, Unterlassungen oder das Verhalten von Betreuern.</p><p className="mt-4"><strong>8.2 Haftungsbeschränkung</strong><br/>IM GRÖSSTMÖGLICHEN GESETZLICH ZULÄSSIGEN UMFANG HAFTET OAZA MIRA LLC NICHT FÜR INDIREKTE, ZUFÄLLIGE, BESONDERE, FOLGE- ODER STRAFSCHÄDEN, DIE SICH AUS ODER IM ZUSAMMENHANG MIT IHRER NUTZUNG DER PLATTFORM ERGEBEN. UNSERE GESAMTHAFTUNG ÜBERSTEIGT NICHT DEN BETRAG, DEN SIE UNS IN DEN ZWÖLF (12) MONATEN VOR DEM HAFTUNGSAUSLÖSENDEN EREIGNIS GEZAHLT HABEN.</p><p className="mt-4"><strong>8.3 Keine Gewährleistungen</strong><br/>DIE PLATTFORM WIRD „WIE BESEHEN&quot; UND „WIE VERFÜGBAR&quot; BEREITGESTELLT. WIR SCHLIESSEN ALLE GEWÄHRLEISTUNGEN AUS, AUSDRÜCKLICH ODER STILLSCHWEIGEND, EINSCHLIESSLICH GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG.</p></>,
      c9: "9. Nutzerpflichten",
      c9t: <ul className="list-disc pl-5 mt-2 space-y-1"><li>Genaue und wahrheitsgemäße Informationen bereitstellen</li><li>Die Plattform nur für den bestimmungsgemäßen Zweck nutzen</li><li>Nicht versuchen, die Plattform zu umgehen, um Betreuer direkt zu beauftragen</li><li>Keine schädlichen, illegalen oder unangemessenen Inhalte hochladen</li><li>Alle geltenden Gesetze und Vorschriften einhalten</li></ul>,
      c10: "10. Geistiges Eigentum",
      c10t: <p>Alle Inhalte auf der Plattform, einschließlich Texte, Grafiken, Logos und Software, sind Eigentum von OAZA MIRA LLC. Durch das Hochladen von Inhalten (einschließlich Fotos) gewähren Sie uns eine nicht-exklusive, weltweite, gebührenfreie Lizenz zur Nutzung, Anzeige und Verbreitung solcher Inhalte im Zusammenhang mit dem Plattformbetrieb.</p>,
      c11: "11. Datenschutz",
      c11t: <p>Ihre Nutzung der Plattform unterliegt unserer Datenschutzerklärung, die beschreibt, wie wir Ihre personenbezogenen Daten erheben, nutzen und schützen.</p>,
      c12: "12. Kündigung",
      c12t: <p>Wir können Ihren Zugang zur Plattform jederzeit sperren oder kündigen, mit oder ohne Grund und mit oder ohne Vorankündigung. Bei Kündigung erlischt Ihr Recht zur Nutzung der Plattform sofort. Kontoguthaben verfallen bei Kündigung.</p>,
      c13: "13. Anwendbares Recht und Gerichtsstand",
      c13t: <p>Diese Nutzungsbedingungen unterliegen dem Recht des Bundesstaates Florida, Vereinigte Staaten von Amerika, und werden in Übereinstimmung mit diesem ausgelegt. Alle Streitigkeiten, die sich aus diesen Bedingungen ergeben oder damit zusammenhängen, unterliegen der ausschließlichen Zuständigkeit der Gerichte in Fort Lauderdale, Florida.</p>,
      c14: "14. Streitbeilegung",
      c14t: <p>Bevor Sie rechtliche Schritte einleiten, verpflichten Sie sich, uns zunächst unter contact@oaza-mira.app zu kontaktieren und den Streit informell beizulegen. Kann der Streit nicht innerhalb von 30 Tagen beigelegt werden, kann jede Partei gemäß Abschnitt 13 gerichtlich vorgehen.</p>,
      c15: "15. Salvatorische Klausel",
      c15t: <p>Sollte eine Bestimmung dieser Bedingungen als nicht durchsetzbar befunden werden, bleiben die übrigen Bestimmungen in vollem Umfang wirksam.</p>,
      c16: "16. Änderungen der Bedingungen",
      c16t: <p>Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen werden auf der Plattform mit einem aktualisierten Gültigkeitsdatum veröffentlicht. Die weitere Nutzung der Plattform nach Änderungen gilt als Zustimmung zu den geänderten Bedingungen.</p>,
      c17: "17. Kontakt",
      c17t: <><p><strong>E-Mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Website:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
    },
    hr: {
      title: "Uvjeti korištenja",
      effective: "Vrijedi od: 1. travnja 2026.",
      c1: "1. Prihvaćanje uvjeta",
      c1t: <p>Pristupanjem ili korištenjem platforme Oaza Mira (www.oaza-mira.app), kojom upravlja OAZA MIRA LLC (&quot;mi&quot;, &quot;nas&quot; ili &quot;Platforma&quot;), pristajete na ove Uvjete korištenja. Ako se ne slažete, nemojte koristiti Platformu.</p>,
      c2: "2. O Platformi",
      c2t: <><p>Oaza Mira je digitalna posrednička platforma koja povezuje korisnike (&quot;Korisnici&quot;) s nezavisnim lokalnim pružateljima usluga (&quot;Pružatelji usluga&quot;) za održavanje grobova i spomenika. Platforma olakšava procese rezervacije, komunikacije, plaćanja i osiguranja kvalitete između Korisnika i Pružatelja usluga.</p><p><strong>Važno:</strong> OAZA MIRA LLC djeluje isključivo kao posrednik. Mi sami ne pružamo fizičke usluge održavanja. Sve usluge održavanja pružaju nezavisni izvođači koji su isključivo odgovorni za kvalitetu i izvođenje svog rada.</p></>,
      c3: "3. Korisnički računi",
      c3t: <p>Za korištenje Platforme morate otvoriti račun i navesti točne, potpune podatke. Odgovorni ste za čuvanje povjerljivosti vaših pristupnih podataka. Morate imati najmanje 18 godina za otvaranje računa. Zadržavamo pravo suspenzije ili ukidanja računa koji krše ove Uvjete.</p>,
      c4: "4. Usluge i rezervacija",
      c4t: <><p><strong>4.1 Opis usluge</strong><br/>Platforma posreduje u rezervaciji usluga održavanja grobova i spomenika, uključujući, ali ne ograničavajući se na čišćenje grobova, postavljanje cvijeća, paljenje svijeća i srodne usluge održavanja.</p><p className="mt-4"><strong>4.2 Proces rezervacije</strong><br/>Nakon slanja narudžbe, zahtjev se prosljeđuje registriranim Pružateljima usluga na odgovarajućem području. Pružatelji usluga mogu prihvatiti ili odbiti narudžbe prema vlastitom nahođenju. Platforma ne jamči dostupnost Pružatelja usluga ili prihvaćanje određene narudžbe.</p><p className="mt-4"><strong>4.3 Razina usluge</strong><br/>Standardne narudžbe trebaju biti dovršene u roku od 72 radna sata. Zakazane narudžbe moraju se izvršiti na traženi datum. Ovi vremenski okviri podliježu dostupnosti Pružatelja usluga i lokalnim uvjetima.</p></>,
      c5: "5. Proof of Care (Dokaz o skrbi)",
      c5t: <p>Nakon završetka, Pružatelji usluga učitavaju fotografije &quot;prije i poslije&quot; s GPS metapodacima i vremenskim oznakama (&quot;Proof of Care&quot;) radi osiguranja kvalitete. Korisnici imaju rok od 48 sati za pregled kako bi potvrdili uslugu ili uložili prigovor. Ako se unutar 48 sati ne podnese prigovor, smatra se da je usluga prihvaćena (prešutno odobrenje).</p>,
      c6: "6. Cijene i plaćanje",
      c6t: <><p><strong>6.1 Naknada za Platformu</strong><br/>Platforma naplaćuje naknadu za uslugu do 25% ukupne vrijednosti narudžbe. Ova naknada pokriva rad Platforme, akviziciju korisnika, obradu plaćanja, osiguranje kvalitete, rješavanje sporova i administrativnu infrastrukturu.</p><p className="mt-4"><strong>6.2 Obrada plaćanja</strong><br/>Sva plaćanja sigurno se obrađuju putem Stripea. Slanjem narudžbe ovlašćujete naplatu cjelokupnog iznosa narudžbe. Plaćanje se zadržava do završetka usluge i provjere.</p><p className="mt-4"><strong>6.3 Pretplate</strong><br/>Platforma nudi mogućnosti rezervacije putem pretplate. Pretplate se automatski obnavljaju na kraju svakog ciklusa naplate osim ako ne budu otkazane prije obnove. Otkazivanje stupa na snagu krajem tekućeg obračunskog razdoblja.</p></>,
      c7: "7. Povrat i otkazivanje",
      c7t: <p>Sva plaćanja su nepovratna. Krediti na račun mogu se izdati prema našem nahođenju za manjkave usluge. Povrat u gotovini se ne odobrava. Za sve pojedinosti pogledajte našu Politiku povrata.</p>,
      c8: "8. Uloga i odgovornost Platforme",
      c8t: <><p><strong>8.1 Status posrednika</strong><br/>OAZA MIRA LLC djeluje isključivo kao digitalni posrednik. Između Platforme i bilo kojeg Pružatelja usluga ne postoji radni, agencijski ni partnerski odnos. Platforma nije odgovorna za postupke, propuste ili ponašanje Pružatelja usluga.</p><p className="mt-4"><strong>8.2 Ograničenje odgovornosti</strong><br/>U NAJVEĆOJ MJERI DOPUŠTENOJ ZAKONOM, OAZA MIRA LLC NEĆE BITI ODGOVORNA ZA BILO KAKVU NEIZRAVNU, SLUČAJNU, POSEBNU, POSLJEDIČNU ILI KAZNENU ŠTETU KOJA PROIZLAZI IZ ILI JE POVEZANA S VAŠIM KORIŠTENJEM PLATFORME. NAŠA UKUPNA ODGOVORNOST NEĆE PREMASITI IZNOS KOJI STE NAM PLATILI U DVANAEST (12) MJESECI KOJI PRETHODE DOGAĐAJU KOJI JE DOVEO DO ODGOVORNOSTI.</p><p className="mt-4"><strong>8.3 Nema jamstava</strong><br/>PLATFORMA SE PRUŽA &quot;KAKVA JEST&quot; I &quot;KAKVA JE DOSTUPNA&quot;. ODRICEMO SE SVIH JAMSTAVA, IZRIČITIH ILI IMPLICITNIH, UKLJUČUJUĆI JAMSTVA POGODNOSTI ZA PRODAJU, PRIKLADNOSTI ZA ODREĐENU SVRHU I NEKRŠENJA PRAVA.</p></>,
      c9: "9. Obveze korisnika",
      c9t: <ul className="list-disc pl-5 mt-2 space-y-1"><li>Pružiti točne i istinite informacije</li><li>Koristiti Platformu samo za njezinu predviđenu svrhu</li><li>Ne pokušavati zaobići Platformu radi izravnog angažiranja Pružatelja usluga</li><li>Ne učitavati nikakav štetan, nezakonit ili neprikladan sadržaj</li><li>Pridržavati se svih važećih zakona i propisa</li></ul>,
      c10: "10. Intelektualno vlasništvo",
      c10t: <p>Vlasnik svih sadržaja na Platformi, uključujući tekst, grafiku, logotipe i softver, jest OAZA MIRA LLC. Prijenosom sadržaja (uključujući fotografije), dajete nam neisključivu, globalnu, besplatnu licencu za korištenje, prikazivanje i distribuciju takvog sadržaja u vezi s radom Platforme.</p>,
      c11: "11. Privatnost",
      c11t: <p>Vaše korištenje Platforme podliježe našoj Politici privatnosti koja opisuje kako prikupljamo, koristimo i štitimo vaše osobne podatke.</p>,
      c12: "12. Prekid",
      c12t: <p>Vaš pristup Platformi možemo obustaviti ili prekinuti u bilo kojem trenutku, s razlogom ili bez njega, te s ili bez prethodne obavijesti. Nakon raskida, vaše pravo na korištenje Platforme odmah prestaje. Sredstva na računu istječu gubitkom prava na račun.</p>,
      c13: "13. Mjerodavno pravo i nadležnost",
      c13t: <p>Ovi Uvjeti korištenja bit će regulirani i tumačeni u skladu sa zakonima države Florida, Sjedinjene Američke Države. Svi sporovi koji proizlaze iz ili su povezani s ovim Uvjetima podliježu isključivoj nadležnosti sudova u Fort Lauderdaleu, Florida.</p>,
      c14: "14. Rješavanje sporova",
      c14t: <p>Prije pokretanja pravnog postupka, pristajete da nas najprije kontaktirate na contact@oaza-mira.app i pokušate spor riješiti neslužbeno. Ako se spor ne može riješiti unutar 30 dana, bilo koja strana može pokrenuti pravni postupak u skladu s odjeljkom 13.</p>,
      c15: "15. Djelomična ništavost (Severability)",
      c15t: <p>Ako se bilo koja odredba ovih Uvjeta pokaže neprovedivom, preostale odredbe ostaju u potpunosti na snazi i djelotvorne.</p>,
      c16: "16. Izmjene Uvjeta",
      c16t: <p>Zadržavamo pravo izmjene ovih Uvjeta u bilo kojem trenutku. Promjene će biti objavljene na Platformi s ažuriranim datumom stupanja na snagu. Nastavak korištenja Platforme nakon promjena predstavlja prihvaćanje izmijenjenih Uvjeta.</p>,
      c17: "17. Kontakt",
      c17t: <><p><strong>E-mail:</strong> <a href="mailto:contact@oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">contact@oaza-mira.app</a><br/><strong>Web stranica:</strong> <a href="https://www.oaza-mira.app" className="text-[#E09D00] hover:text-[#50641B] underline">www.oaza-mira.app</a></p></>
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
              <Scale size={16} />
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
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c14t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c15}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c15t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c16}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c16t}
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">{t.c17}</h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              {t.c17t}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
