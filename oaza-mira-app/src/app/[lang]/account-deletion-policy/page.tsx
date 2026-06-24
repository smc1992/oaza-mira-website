import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroBackgroundSVG from "@/components/ui/HeroBackgroundSVG";
import { UserX } from "lucide-react";

export default async function AccountDeletionPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const t = {
    title: {
      en: "Account and Data Deletion Policy",
      de: "Konto- und Datenlöschungsrichtlinie",
      hr: "Pravila o brisanju računa i podataka",
    },
    effective: {
      en: "Effective: June 18, 2026",
      de: "In Kraft getreten am: 18. Juni 2026",
      hr: "Stupa na snagu: 18. lipnja 2026",
    },
    company_lbl: {
      en: "Company",
      de: "Unternehmen",
      hr: "Tvrtka",
    },
    website_lbl: {
      en: "Website",
      de: "Website",
      hr: "Web-mjesto",
    },
    email_lbl: {
      en: "Contact Email",
      de: "Kontakt-E-Mail",
      hr: "E-pošta za kontakt",
    },
    effective_lbl: {
      en: "Effective Date",
      de: "In Kraft getreten am",
      hr: "Datum stupanja na snagu",
    },
    version_lbl: {
      en: "Version",
      de: "Version",
      hr: "Verzija",
    },
    intro: {
      en: "This document explains how users of Oaza Mira can request deletion of their account and personal data, what happens after deletion, and which limited records may be retained where legally permitted or required.",
      de: "Dieses Dokument erklärt, wie Benutzer von Oaza Mira die Löschung ihres Kontos und ihrer personenbezogenen Daten beantragen können, was nach der Löschung geschieht und welche eingeschränkten Aufzeichnungen aufbewahrt werden können, sofern dies gesetzlich zulässig oder erforderlich ist.",
      hr: "Ovaj dokument objašnjava kako korisnici Oaze Mira mogu zatražiti brisanje svog računa i osobnih podataka, što se događa nakon brisanja i koji se ograničeni zapisi mogu zadržati ako je to zakonski dopušteno ili propisano.",
    },
    c1: {
      en: "1. Who this policy applies to",
      de: "1. Für wen diese Richtlinie gilt",
      hr: "1. Na koga se primjenjuju ova pravila",
    },
    c1t: {
      en: "This policy applies to users of the Oaza Mira app and web app. Oaza Mira is operated by OAZA MIRA LLC, c/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, USA.",
      de: "Diese Richtlinie gilt für Nutzer der Oaza Mira App und Web-App. Oaza Mira wird von OAZA MIRA LLC betrieben, c/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, USA.",
      hr: "Ova se pravila primjenjuju na korisnike aplikacije i web-aplikacije Oaza Mira. Oazom Mira upravlja tvrtka OAZA MIRA LLC, c/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, SAD.",
    },
    c2: {
      en: "2. How to delete your account",
      de: "2. So löschen Sie Ihr Konto",
      hr: "2. Kako izbrisati svoj račun",
    },
    c2t_intro: {
      en: "You may request account deletion in either of the following ways:",
      de: "Sie können die Löschung Ihres Kontos auf eine der folgenden Arten beantragen:",
      hr: "Zahtjev za brisanje računa možete podnijeti na jedan od sljedećih načina:",
    },
    c2t_app: {
      en: "Inside the app or web app: Profile > Profile settings > Delete account",
      de: "In der App oder Web-App: Profil > Profileinstellungen > Konto löschen",
      hr: "Unutar aplikacije ili web-aplikacije: Profil > Postavke profila > Obriši račun",
    },
    c2t_email: {
      en: "By email: send your request to contact@oaza-mira.app",
      de: "Per E-Mail: Senden Sie Ihre Anfrage an contact@oaza-mira.app",
      hr: "E-poštom: pošaljite svoj zahtjev na contact@oaza-mira.app",
    },
    c2t_verification: {
      en: "Verification requirement: To protect your account, deletion requests require password confirmation. If the request is submitted by email, Oaza Mira may take reasonable steps to verify that the requester is the authorized account holder before processing deletion.",
      de: "Verifizierungsanforderung: Zum Schutz Ihres Kontos erfordern Löschanfragen eine Passwortbestätigung. Wenn die Anfrage per E-Mail eingereicht wird, kann Oaza Mira angemessene Schritte unternehmen, um zu überprüfen, ob der Antragsteller der autorisierte Kontoinhaber ist, bevor die Löschung verarbeitet wird.",
      hr: "Zahtjev za provjeru: Radi zaštite vašeg računa, zahtjevi za brisanje zahtijevaju potvrdu lozinke. Ako se zahtjev podnosi e-poštom, Oaza Mira može poduzeti razumne korake kako bi provjerila je li podnositelj zahtjeva ovlašteni vlasnik računa prije obrade brisanja.",
    },
    c2t_footer: {
      en: "Account deletion is permanent and cannot be reversed once confirmed. If you believe you have submitted a deletion request in error, contact us immediately at contact@oaza-mira.app before the deletion is processed.",
      de: "Die Kontolöschung ist dauerhaft und kann nach der Bestätigung nicht rückgängig gemacht werden. Wenn Sie glauben, dass Sie eine Löschanfrage irrtümlich eingereicht haben, kontaktieren Sie uns bitte unverzüglich unter contact@oaza-mira.app, bevor die Löschung verarbeitet wird.",
      hr: "Brisanje računa je trajno i ne može se poništiti nakon potvrde. Ako smatrate da ste zahtjev za brisanje podnijeli pogreškom, odmah nas kontaktirajte na contact@oaza-mira.app prije nego što se brisanje obradi.",
    },
    c3: {
      en: "3. What happens when your account is deleted",
      de: "3. Was geschieht, wenn Ihr Konto gelöscht wird",
      hr: "3. Što se događa kada se vaš račun izbriše",
    },
    c3t_intro: {
      en: "Once your deletion request is successfully confirmed, Oaza Mira will process the deletion immediately. Complete removal of your personal data from all active systems will occur within 30 days of the confirmed request. A confirmation may be provided both in the app or web app and by email.",
      de: "Sobald Ihre Löschanfrage erfolgreich bestätigt wurde, wird Oaza Mira die Löschung unverzüglich verarbeiten. Die vollständige Entfernung Ihrer personenbezogenen Daten aus allen aktiven Systemen erfolgt innerhalb von 30 Tagen nach dem bestätigten Antrag. Eine Bestätigung kann sowohl in der App oder Web-App als auch per E-Mail bereitgestellt werden.",
      hr: "Nakon što je vaš zahtjev za brisanje uspješno potvrđen, Oaza Mira će odmah obraditi brisanje. Potpuno uklanjanje vaših osobnih podataka iz svih aktivnih sustava dogodit će se u roku od 30 dana od potvrđenog zahtjeva. Potvrda se može poslati i unutar aplikacije ili web-aplikacije i e-poštom.",
    },
    c3t_bullet1: {
      en: "Your account access is terminated.",
      de: "Ihr Kontozugriff wird beendet.",
      hr: "Pristup vašem računu se prekida.",
    },
    c3t_bullet2: {
      en: "Your ongoing subscription, if any, is cancelled (see Section 8 for platform-specific details).",
      de: "Ihr laufendes Abonnement, falls vorhanden, wird gekündigt (siehe Abschnitt 8 für plattformspezifische Details).",
      hr: "Vaša trenutna pretplata, ako postoji, otkazuje se (pogledajte odjeljak 8 za detalje specifične za platformu).",
    },
    c3t_bullet3: {
      en: "No further charges will be made after account deletion.",
      de: "Nach der Kontolöschung erfolgen keine weiteren Abbuchungen.",
      hr: "Nakon brisanja računa više se neće vršiti nikakve naplate.",
    },
    c3t_bullet4: {
      en: "Any paid orders already placed before deletion may still be delivered.",
      de: "Bereits vor der Löschung bezahlte Bestellungen können weiterhin geliefert werden.",
      hr: "Sve plaćene narudžbe koje su već izvršene prije brisanja i dalje se mogu isporučiti.",
    },
    c3t_apple: {
      en: "On Apple devices, account deletion initiated through the app complies with Apple App Store Review Guideline 5.1.1(v).",
      de: "Auf Apple-Geräten entspricht die über die App initiierte Kontolöschung der Apple App Store Review Richtlinie 5.1.1(v).",
      hr: "Na Apple uređajima brisanje računa pokrenuto putem aplikacije u skladu je sa smjernicom Apple App Store Review 5.1.1(v).",
    },
    c4: {
      en: "4. Data that is deleted",
      de: "4. Daten, die gelöscht werden",
      hr: "4. Podaci koji se brišu",
    },
    c4t_intro: {
      en: "Subject to the limited retention rules described below, Oaza Mira will delete the personal data associated with the deleted account, including as applicable:",
      de: "Vorbehaltlich der unten beschriebenen Richtlinien zur eingeschränkten Aufbewahrung löscht Oaza Mira die mit dem gelöschten Konto verknüpften personenbezogenen Daten, einschließlich, sofern zutreffend:",
      hr: "Ovisno o pravilima o ograničenom zadržavanju opisanima u nastavku, Oaza Mira će izbrisati osobne podatke povezane s izbrisanim računom, uključujući po potrebi:",
    },
    c4t_bullets: {
      en: [
        "account profile information;",
        "login credentials and access data;",
        "saved preferences;",
        "communications associated only with that account;",
        "booking and order information linked only to that user account;",
        "newsletter and marketing-related data associated with that account; and",
        "other user-generated account data that is not required to be retained by law or for limited operational purposes described in this policy."
      ],
      de: [
        "Kontoprofilinformationen;",
        "Anmeldedaten und Zugriffsdaten;",
        "gespeicherte Einstellungen;",
        "Kommunikationen, die nur mit diesem Konto verknüpft sind;",
        "Buchungs- und Bestellinformationen, die nur mit diesem Benutzerkonto verknüpft sind;",
        "Newsletter- und marketingbezogene Daten, die mit diesem Konto verknüpft sind; und",
        "andere benutzergenerierte Kontodaten, die nicht gesetzlich oder für die in dieser Richtlinie beschriebenen eingeschränkten betrieblichen Zwecke aufbewahrt werden müssen."
      ],
      hr: [
        "podatke o profilu računa;",
        "vjerodajnice za prijavu i pristupne podatke;",
        "spremljene postavke;",
        "komunikaciju povezanu isključivo s tim računom;",
        "podatke o rezervacijama i narudžbama povezane isključivo s tim korisničkim računom;",
        "podatke povezane s biltenom (newsletter) i marketingom povezane s tim računom; i",
        "ostale podatke računa koje je generirao korisnik, a koje nije potrebno zadržati zakonom ili za ograničene operativne svrhe opisane u ovim pravilima."
      ]
    },
    c5: {
      en: "5. Limited retention of grave and memorial records",
      de: "5. Eingeschränkte Aufbewahrung von Grab- und Gedenkdaten",
      hr: "5. Ograničeno zadržavanje zapisa o grobnim mjestima i spomenima",
    },
    c5t_important: {
      en: "Important: In limited cases, certain grave-level and memorial-related records may be retained separately from the deleted account, where legally permitted and operationally necessary.",
      de: "Wichtig: In seltenen Fällen können bestimmte grabbezogene und gedenkbezogene Aufzeichnungen getrennt vom gelöschten Konto aufbewahrt werden, sofern dies gesetzlich zulässig und betrieblich notwendig ist.",
      hr: "Važno: U ograničenim slučajevima, određeni zapisi povezani s grobnim mjestom i spomenom mogu se zadržati odvojeno od izbrisanog računa, gdje je to zakonski dopušteno i operativno nužno.",
    },
    c5t_desc: {
      en: "Because a grave may be referenced by multiple authorized family members or other authorized users, Oaza Mira may retain the following records in a non-account-linked, minimized, shared, or otherwise legally permissible form:",
      de: "Da auf ein Grab von mehreren autorisierten Familienmitgliedern oder anderen autorisierten Nutzern verwiesen werden kann, kann Oaza Mira die folgenden Aufzeichnungen in einer nicht mit dem Konto verknüpften, minimierten, geteilten oder anderweitig gesetzlich zulässigen Form aufbewahren:",
      hr: "Budući da na grobno mjesto može upućivati više ovlaštenih članova obitelji ili drugih ovlaštenih korisnika, Oaza Mira može zadržati sljedeće zapise u obliku koji nije povezan s računom, koji je minimiziran, podijeljen ili na drugi način zakonski dopušten:",
    },
    c5t_bullets: {
      en: [
        "grave location records;",
        "deceased memorial profiles associated with that grave; and",
        "related grave-level service context needed to allow other authorized users to continue accessing or arranging care for the same grave."
      ],
      de: [
        "Aufzeichnungen über den Grabstandort;",
        "Profile des Verstorbenen, die mit diesem Grab verknüpft sind; und",
        "zugehörige Grabpflege-Dienstleistungskontexte, die erforderlich sind, damit andere autorisierte Benutzer weiterhin auf dasselbe Grab zugreifen oder Pflege dafür arrangieren können."
      ],
      hr: [
        "zapise o lokaciji grobnog mjesta;",
        "profile sjećanja na pokojnika povezane s tim grobnim mjestom; i",
        "povezani kontekst usluge na razini groba potreban kako bi se drugim ovlaštenim korisnicima omogućio nastavak pristupa ili organiziranje brige za isto grobno mjesto."
      ]
    },
    c5t_footer: {
      en: "Where such records are retained, Oaza Mira will aim to remove or disconnect the deleted user's direct personal account identifiers to the extent legally possible and operationally appropriate. Retention of these records will be limited to circumstances where it is legally permitted, necessary to preserve shared grave-related functionality, necessary to complete already-paid orders, or required by applicable law.",
      de: "Wenn solche Aufzeichnungen aufbewahrt werden, bemüht sich Oaza Mira, die direkten persönlichen Identifikatoren des gelöschten Benutzers im gesetzlich möglichen und betrieblich angemessenen Umfang zu entfernen oder zu trennen. Die Aufbewahrung dieser Aufzeichnungen beschränkt sich auf Fälle, in denen sie gesetzlich zulässig ist, zur Aufrechterhaltung der gemeinsamen grabbezogenen Funktionalität erforderlich ist, zur Erfüllung bereits bezahlter Bestellungen erforderlich ist oder durch geltendes Recht vorgeschrieben ist.",
      hr: "Tamo gdje se takvi zapisi zadrže, Oaza Mira će nastojati ukloniti ili odvojiti izravne osobne identifikatore računa izbrisanog korisnika u onoj mjeri u kojoj je to zakonski moguće i operativno prikladno. Zadržavanje ovih zapisa bit će ograničeno na okolnosti u kojima je to zakonski dopušteno, nužno za očuvanje zajedničke funkcionalnosti povezane s grobom, nužno za dovršenje već plaćenih narudžbi ili zahtijevano primjenjivim zakonom.",
    },
    c6: {
      en: "6. Data that may also be retained for legal or compliance reasons",
      de: "6. Daten, die aus rechtlichen oder Compliance-Gründen aufbewahrt werden können",
      hr: "6. Podaci koji se također mogu zadržati iz pravnih razloga ili razloga usklađenosti",
    },
    c6t_intro: {
      en: "Even after account deletion, Oaza Mira may retain limited records for as long as required by applicable law or as reasonably necessary for legitimate compliance and operational purposes, including:",
      de: "Auch nach der Kontolöschung kann Oaza Mira begrenzte Aufzeichnungen so lange aufbewahren, wie dies nach geltendem Recht erforderlich oder für legitime Compliance- und Betriebszwecke vernünftigerweise notwendig ist, einschließlich:",
      hr: "Čak i nakon brisanja računa, Oaza Mira može zadržati ograničene zapise onoliko dugo koliko to zahtijeva primjenjivi zakon ili koliko je razumno potrebno za legitimne svrhe usklađenosti i operativne svrhe, uključujući:",
    },
    c6t_bullets: {
      en: [
        "transaction and payment-related records;",
        "tax, accounting, and commercial-law records;",
        "complaint, dispute-resolution, and fraud-prevention records;",
        "security and system integrity logs; and",
        "records necessary to comply with lawful requests or enforce legal rights."
      ],
      de: [
        "Transaktions- und zahlungsbezogene Aufzeichnungen;",
        "Steuer-, Buchhaltungs- und handelsrechtliche Aufzeichnungen;",
        "Aufzeichnungen zur Beschwerde, Streitbeilegung und Betrugsprävention;",
        "Protokolle zur Sicherheits- und Systemintegrität; und",
        "Aufzeichnungen, die erforderlich sind, um gesetzlichen Anforderungen nachzukommen oder gesetzliche Rechte durchzusetzen."
      ],
      hr: [
        "zapise o transakcijama i plaćanjima;",
        "porezne, računovodstvene i trgovačko-pravne zapise;",
        "zapise o pritužbama, rješavanju sporova i sprječavanju prijevara;",
        "dnevnike sigurnosti i integriteta sustava; i",
        "zapise potrebne za postupanje po zakonitim zahtjevima ili za provođenje zakonskih prava."
      ]
    },
    c6t_footer: {
      en: "Such retained information will be held only for the period required by applicable law or for the period reasonably necessary for the relevant purpose.",
      de: "Solche aufbewahrten Informationen werden nur für den gesetzlich vorgeschriebenen Zeitraum oder für den für den jeweiligen Zweck vernünftigerweise erforderlichen Zeitraum aufbewahrt.",
      hr: "Tako zadržani podaci čuvat će se samo tijekom razdoblja zahtijevanog primjenjivim zakonom ili tijekom razdoblja razumno potrebnog za relevantnu svrhu.",
    },
    c7: {
      en: "7. Backups",
      de: "7. Sicherungskopien (Backups)",
      hr: "7. Sigurnosne kopije (Backup)",
    },
    c7t: {
      en: "Deletion may not result in the immediate removal of data from all backup systems. Residual copies may remain in secure backups for a period not exceeding 90 days, after which they are permanently deleted in the ordinary course of business.",
      de: "Die Löschung führt möglicherweise nicht zur sofortigen Entfernung der Daten aus allen Backup-Systemen. Verbleibende Kopien können für einen Zeitraum von maximal 90 Tagen in sicheren Backups verbleiben. Danach werden sie im Rahmen des ordnungsgemäßen Geschäftsbetriebs dauerhaft gelöscht.",
      hr: "Brisanje ne mora rezultirati trenutnim uklanjanjem podataka iz svih sigurnosnih kopija (backup sustava). Preostale kopije mogu ostati u sigurnim kopijama tijekom razdoblja koje ne prelazi 90 dana, nakon čega se trajno brišu u redovnom tijeku poslovanja.",
    },
    c8: {
      en: "8. Subscriptions, existing orders, and credits",
      de: "8. Abonnements, bestehende Bestellungen und Guthaben",
      hr: "8. Pretplate, postojeće narudžbe i krediti",
    },
    c8t: {
      en: "Any active subscription is cancelled upon account deletion. For subscriptions managed through Google Play, cancellation is processed through Google Play's billing system. For subscriptions managed through the Apple App Store, cancellation is handled exclusively through Apple — users can cancel at any time via Settings > Apple ID > Subscriptions. Oaza Mira does not have the ability to cancel App Store subscriptions on behalf of the user.",
      de: "Jedes aktive Abonnement wird bei der Kontolöschung gekündigt. Für über Google Play verwaltete Abonnements wird die Kündigung über das Abrechnungssystem von Google Play verarbeitet. Für über den Apple App Store verwaltete Abonnements erfolgt die Kündigung ausschließlich über Apple — Benutzer können jederzeit über Einstellungen > Apple-ID > Abonnements kündigen. Oaza Mira hat nicht die Möglichkeit, App Store-Abonnements im Namen des Benutzers zu kündigen.",
      hr: "Svaka aktivna pretplata otkazuje se nakon brisanja računa. Za pretplate kojima se upravlja putem usluge Google Play, otkazivanje se obrađuje putem sustava naplate Google Play. Za pretplate kojima se upravlja putem trgovine Apple App Store, otkazivanjem upravlja isključivo Apple — korisnici mogu otkazati u bilo kojem trenutku putem Postavke > Apple ID > Pretplate. Oaza Mira nema mogućnost otkazivanja pretplata na App Store u ime korisnika.",
    },
    c8t_bullets: {
      en: [
        "No further subscription or account-related charges will be made after deletion.",
        "Orders already paid before deletion may still be fulfilled.",
        "If any account credits are present, they are no longer usable after account deletion and are considered expired upon account termination."
      ],
      de: [
        "Nach der Löschung erfolgen keine weiteren Abonnement- oder kontobezogenen Gebühren.",
        "Bereits vor der Löschung bezahlte Bestellungen können weiterhin ausgeführt werden.",
        "Falls Kontoguthaben vorhanden sind, sind diese nach der Kontolöschung nicht mehr verwendbar und gelten mit der Kontokündigung als abgelaufen."
      ],
      hr: [
        "Nakon brisanja neće se vršiti nikakve daljnje naknade povezane s pretplatom ili računom.",
        "Narudžbe koje su već plaćene prije brisanja i dalje se mogu ispuniti.",
        "Ako postoje bilo kakvi krediti na računu, oni se više ne mogu koristiti nakon brisanja računa i smatraju se isteklima nakon prestanka računa."
      ]
    },
    c9: {
      en: "9. Your privacy rights",
      de: "9. Ihre Datenschutzrechte",
      hr: "9. Vaša prava na privatnost",
    },
    c9t: {
      en: "If you are located in the European Union, you may have rights under the General Data Protection Regulation (GDPR), including the right to request access, rectification, erasure, restriction, portability, objection, and withdrawal of consent where applicable.",
      de: "Wenn Sie sich in der Europäischen Union befinden, haben Sie möglicherweise Rechte gemäß der Datenschutz-Grundverordnung (DSGVO), einschließlich des Rechts auf Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit, Widerspruch und gegebenenfalls Widerruf der Einwilligung.",
      hr: "Ako se nalazite u Europskoj uniji, možete ostvariti prava prema Općoj uredbi o zaštiti podataka (GDPR), uključujući pravo na pristup, ispravak, brisanje, ograničenje, prenosivost, prigovor i povlačenje privole tamo gdje je primjenjivo.",
    },
    c9t_rep: {
      en: "For privacy-related requests, contact contact@oaza-mira.app. Oaza Mira's EU Representative under Article 27 GDPR is AEON – Association for Education and Organization of the Connection between Generations, Schönbrunner Straße 35/Top 4, 1050 Vienna, Austria, ZVR Number 1568721336.",
      de: "Für datenschutzbezogene Anfragen wenden Sie sich an contact@oaza-mira.app. Der EU-Vertreter von Oaza Mira gemäß Artikel 27 DSGVO ist AEON – Association for Education and Organization of the Connection between Generations, Schönbrunner Straße 35/Top 4, 1050 Wien, Österreich, ZVR-Nummer 1568721336.",
      hr: "Za zahtjeve povezane s privatnošću obratite se na contact@oaza-mira.app. Predstavnik Oaze Mira u EU prema članku 27. GDPR-a je AEON – Association for Education and Organization of the Connection between Generations, Schönbrunner Straße 35/Top 4, 1050 Beč, Austrija, ZVR broj 1568721336.",
    },
    c10: {
      en: "10. Related legal documents",
      de: "10. Zugehörige rechtliche Dokumente",
      hr: "10. Povezani pravni dokumenti",
    },
    c10t: {
      en: "Privacy Policy, Cookie Policy, Refund Policy, Terms of Service, Imprint / Legal Notice",
      de: "Datenschutzerklärung, Cookie-Richtlinie, Rückerstattungsrichtlinie, Nutzungsbedingungen, Impressum / Rechtliche Hinweise",
      hr: "Pravila o privatnosti, Politika kolačića, Pravila o povratu, Uvjeti korištenja, Impressum / Pravna obavijest",
    },
    c11: {
      en: "11. Contact",
      de: "11. Kontakt",
      hr: "11. Kontakt",
    },
    footer_text: {
      en: "This policy is intended to explain Oaza Mira's account and data deletion process in a clear and user-friendly manner. It should be read together with Oaza Mira's Privacy Policy, Terms of Service, Refund Policy, Cookie Policy, and Imprint.",
      de: "Diese Richtlinie soll den Konto- und Datenlöschungsprozess von Oaza Mira klar und benutzerfreundlich erklären. Sie sollte zusammen mit der Datenschutzerklärung, den Nutzungsbedingungen, der Rückerstattungsrichtlinie, der Cookie-Richtlinie und dem Impressum von Oaza Mira gelesen werden.",
      hr: "Ova pravila imaju za cilj objasniti postupak brisanja računa i podataka na Oazi Mira na jasan i korisniku prilagođen način. Treba ih čitati zajedno s Pravilima o privatnosti, Uvjetima korištenja, Pravilima o povratu sredstava, Politikom kolačića i Impressumom Oaze Mira.",
    },
    footer_meta: {
      en: "Oaza Mira · Account and Data Deletion Policy · Effective June 18, 2026 · Version 1.1",
      de: "Oaza Mira · Konto- und Datenlöschungsrichtlinie · Gültig ab 18. Juni 2026 · Version 1.1",
      hr: "Oaza Mira · Pravila o brisanju računa i podataka · Stupa na snagu 18. lipnja 2026. · Verzija 1.1",
    }
  };

  const safeLang = ["en", "de", "hr"].includes(lang) ? (lang as "en" | "de" | "hr") : "en";

  return (
    <div className="page-wrapper relative overflow-hidden min-h-screen pt-32 pb-24 bg-white">
      <HeroBackgroundSVG />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9C36B]/30 text-[#50641B] font-bold text-sm mb-6 shadow-sm border border-[#E09D00]/50">
              <UserX size={16} />
              <span>{t.title[safeLang]}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#333] mb-6 drop-shadow-sm">
              OAZA MIRA LLC
            </h1>
            <p className="text-lg md:text-xl text-[#B8AE9F] leading-relaxed font-semibold">
              {t.effective[safeLang]}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/90 backdrop-blur-xl border border-[#B8AE9F]/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-[#333] prose prose-lg max-w-none">
            
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-medium mb-8">
              {t.intro[safeLang]}
            </p>

            {/* Document Info Table */}
            <div className="overflow-x-auto mb-12 rounded-2xl border border-[#B8AE9F]/30">
              <table className="min-w-full divide-y divide-[#B8AE9F]/20">
                <tbody className="bg-transparent divide-y divide-[#B8AE9F]/20 text-sm">
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#50641B] bg-[#FCFAF2]/50 w-1/3">{t.company_lbl[safeLang]}</td>
                    <td className="px-6 py-4 text-[#4A4A4A]">OAZA MIRA LLC</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#50641B] bg-[#FCFAF2]/50">{t.website_lbl[safeLang]}</td>
                    <td className="px-6 py-4 text-[#4A4A4A]">www.oaza-mira.app</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#50641B] bg-[#FCFAF2]/50">{t.email_lbl[safeLang]}</td>
                    <td className="px-6 py-4 text-[#4A4A4A]">contact@oaza-mira.app</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#50641B] bg-[#FCFAF2]/50">{t.effective_lbl[safeLang]}</td>
                    <td className="px-6 py-4 text-[#4A4A4A]">June 18, 2026</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#50641B] bg-[#FCFAF2]/50">{t.version_lbl[safeLang]}</td>
                    <td className="px-6 py-4 text-[#4A4A4A]">1.1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sections */}
            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c1[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p>{t.c1t[safeLang]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c2[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p>{t.c2t_intro[safeLang]}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{t.c2t_app[safeLang]}</strong></li>
                <li><strong>{t.c2t_email[safeLang]}</strong></li>
              </ul>
              <div className="p-5 rounded-2xl bg-[#FCFAF2] border border-[#E9C36B]/30 text-sm text-[#7A7366] font-medium leading-relaxed my-6">
                {t.c2t_verification[safeLang]}
              </div>
              <p>{t.c2t_footer[safeLang]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c3[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p>{t.c3t_intro[safeLang]}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.c3t_bullet1[safeLang]}</li>
                <li>{t.c3t_bullet2[safeLang]}</li>
                <li>{t.c3t_bullet3[safeLang]}</li>
                <li>{t.c3t_bullet4[safeLang]}</li>
              </ul>
              <p className="text-sm text-[#7A7366] italic">{t.c3t_apple[safeLang]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c4[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p>{t.c4t_intro[safeLang]}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.c4t_bullets[safeLang].map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c5[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <div className="p-5 rounded-2xl bg-[#FCFAF2] border border-[#E9C36B]/30 text-sm text-[#7A7366] font-medium leading-relaxed my-6">
                {t.c5t_important[safeLang]}
              </div>
              <p>{t.c5t_desc[safeLang]}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.c5t_bullets[safeLang].map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <p>{t.c5t_footer[safeLang]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c6[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p>{t.c6t_intro[safeLang]}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.c6t_bullets[safeLang].map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <p>{t.c6t_footer[safeLang]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c7[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p>{t.c7t[safeLang]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c8[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p>{t.c8t[safeLang]}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.c8t_bullets[safeLang].map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c9[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              <p>{t.c9t[safeLang]}</p>
              <p>{t.c9t_rep[safeLang]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c10[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed">
              <p>{t.c10t[safeLang]}</p>
            </div>

            <h2 className="text-2xl font-bold text-[#50641B] mt-10 mb-4 border-b border-[#B8AE9F]/20 pb-2">
              {t.c11[safeLang]}
            </h2>
            <div className="text-[#4A4A4A] leading-relaxed font-semibold">
              <p>OAZA MIRA LLC</p>
              <p className="font-normal text-sm text-[#7A7366] leading-relaxed mt-2">
                c/o 5 Flags Incubation LLC<br/>
                2880 West Oakland Park Blvd, Suite 118<br/>
                Fort Lauderdale, FL 33311, USA<br/>
                Email: contact@oaza-mira.app<br/>
                Website: www.oaza-mira.app
              </p>
            </div>

            {/* Policy Deletion Footer Info */}
            <div className="pt-8 mt-12 border-t border-[#B8AE9F]/20 text-xs text-[#7A7366] font-medium leading-relaxed space-y-3">
              <p>{t.footer_text[safeLang]}</p>
              <p className="font-bold">{t.footer_meta[safeLang]}</p>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
