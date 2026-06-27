const fs = require('fs');

const secondaryTranslations = {
  de: {
    "about.lltg2z": "Frieden, Würde und menschliche Nähe in Gedenken und Pflege bringen.",
    "about.5i94sz": "Oaza Mira vereint Gedenken und Pflege – digital, menschlich und vertrauensvoll. Wir befähigen Familien, ihre Liebsten zu ehren, unabhängig davon, wo sie leben.",
    "about.qje0vl": "Was einst großen Aufwand erforderte, wird durch Oaza Mira einfach, würdevoll und transparent. Jeder Gedenkakt wird dokumentiert – so entsteht sichtbares Vertrauen.",
    "about.bmciuz": "Unser Zweck – Frieden, Würde und menschliche Nähe in das Gedenken bringen.",
    "about.fyalyk": "Wir existieren, um das Gedenken wieder menschlich zu machen – den Pflegenden Seelenfrieden zu geben und Nähe über Entfernungen hinweg zu schaffen.",
    "about.c8lysq": "Unsere Werte",
    "about.19u3im": "Frieden",
    "about.ffnspn": "Wir bringen Ruhe und Vertrauen in das Gedenken.",
    "about.g1bwny": "Würde",
    "about.xjr5ai": "Jeder Akt der Fürsorge verdient Respekt.",
    "about.k51ypq": "Verbindung",
    "about.mk7xo6": "Technologie, die Menschen verbindet, nicht ersetzt.",
    "about.twhsw8": "Transparenz",
    "about.7mf0mf": "Sichtbare Beweise schaffen Vertrauen.",
    "about.w395tm": "Bleiben Sie in Verbindung – wir stehen am Anfang.",
    "about.neplkz": "Abonnieren Sie unseren Newsletter für Updates zum Launch.",
    "about.uqz92y": "Kontaktieren Sie uns – wir freuen uns auf Sie.",
    "about.re1vey": "Unsere Werte",
    "about.rnq6i6": "Cookie-Richtlinie",
    "about.1vttbc": "Wir nutzen Cookies, um Ihr Erlebnis zu verbessern.",
    "btn.9urml2": "Begleiten Sie uns",
    "contact.1tr8yh": "Abonnieren Sie den Newsletter für Launch-Updates.",
    "contact.frg0dp": "Nachricht senden & Gespräch beginnen.",
    "contact.rnq6i6": "Cookie-Richtlinie",
    "contact.1vttbc": "Wir nutzen Cookies.",
    "imprint.cnghov": "Unternehmen: OAZA MIRA LLC\n\nHauptgeschäftssitz (Principal Office):\n3834 Powerline Road, Fort Lauderdale, FL 33309, USA\n\nPostadresse (Mailing Address):\n261 North University Drive, Suite 500, Plantation, FL 33324, USA\n\nZustellungsbevollmächtigter (Registered Agent):\nc/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, USA\n\nEmail: contact@oaza-mira.app",
    "imprint.jjo9k2": "Verantwortlich für den Inhalt: OAZA MIRA LLC",
    "imprint.1vttbc": "Wir nutzen Cookies.",
    "privacy-policy.hop62e": "Datenschutzrichtlinie",
    "privacy-policy.if995r": "1. Verantwortlicher",
    "privacy-policy.ry02dm": "2. Gesammelte Daten",
    "privacy-policy.eniysn": "Wir verarbeiten personenbezogene Daten nur zur Erbringung unserer Dienste.",
    "privacy-policy.jh3mop": "3. Zweck und Rechtsgrundlage",
    "privacy-policy.1tw77k": "Ihre Daten werden verarbeitet für:",
    "privacy-policy.spkljn": "4. Nutzung von HubSpot",
    "privacy-policy.7rv48p": "Ihre Daten werden verwendet für:",
    "privacy-policy.ecgqqb": "5. Datenaustausch",
    "privacy-policy.2h4v5g": "Wir nutzen sorgfältig ausgewählte Dienstleister für Hosting, E-Mail, Analytics und Marketing.",
    "privacy-policy.mbws6u": "6. Cookies & Tracking",
    "privacy-policy.n7kh4j": "Unsere Website nutzt nur technisch notwendige Cookies.",
    "privacy-policy.qvfur5": "7. Speicherdauer",
    "privacy-policy.ls2tnc": "Personenbezogene Daten werden nur so lange aufbewahrt wie nötig.",
    "privacy-policy.ow8rze": "Sie haben das Recht auf Auskunft, Berichtigung und Löschung. Um diese Rechte auszuüben, senden Sie eine E-Mail an contact@oaza-mira.app. Sie können sich auch an die zuständige Datenschutzbehörde in Florida, Vereinigte Staaten, oder in Ihrem Wohnsitzland wenden.",
    "privacy-policy.n99qdx": "9. Datensicherheit",
    "privacy-policy.ytl33c": "Wir schützen Daten durch technische Maßnahmen.",
    "privacy-policy.51069v": "10. Änderungen",
    "privacy-policy.txt85s": "Diese Richtlinie kann gelegentlich aktualisiert werden.",
    "privacy-policy.1vttbc": "Wir nutzen Cookies.",
    "disclaimer-page.uwtyyt": "Haftungsausschluss",
    "disclaimer-page.op3kb1": "Gültig für www.oaza-mira.app",
    "disclaimer-page.ahbulr": "1. Allgemeine Informationen",
    "disclaimer-page.24ddz8": "Alle Inhalte dienen allgemeinen Informationszwecken.",
    "disclaimer-page.6b333p": "2. Haftung für Inhalte",
    "disclaimer-page.hhl8tl": "Wir übernehmen keine Haftung für Schäden.",
    "disclaimer-page.s9aat9": "3. Externe Links",
    "disclaimer-page.350ksq": "Wir übernehmen keine Haftung für externe Inhalte.",
    "disclaimer-page.numnp6": "4. Drittanbieter",
    "disclaimer-page.aa0fux": "Oaza Mira ist eine Vermittlungsplattform.",
    "disclaimer-page.l0g468": "5. Urheberrecht",
    "disclaimer-page.8kpta6": "Alle Inhalte sind urheberrechtlich geschützt.",
    "disclaimer-page.k5328e": "Es gilt das Recht des Staates Florida, Vereinigte Staaten. Soweit gesetzlich zulässig, ist der Gerichtsstand der Sitz der OAZA MIRA LLC in Florida.",
    "disclaimer-page.ef13ox": "7. Änderungen",
    "disclaimer-page.4vq4j4": "Der Haftungsausschluss kann angepasst werden.",
    "disclaimer-page.rnq6i6": "Cookie-Richtlinie",
    "disclaimer-page.1vttbc": "Wir nutzen Cookies."
  },
  hr: {
    "about.lltg2z": "Donosimo mir, dostojanstvo i ljudsku povezanost u sjećanje i njegu.",
    "about.5i94sz": "Oaza Mira ujedinjuje sjećanje i brigu. Osnažujemo obitelji da poštuju svoje najmilije bez obzira na udaljenost.",
    "about.qje0vl": "Svaki čin sjećanja se dokumentira – stvarajući vidljivo povjerenje.",
    "about.bmciuz": "Naša svrha – unijeti mir i dostojanstvo u način na koji pamtimo.",
    "about.fyalyk": "Oaza Mira ujedinjuje ljude, tehnologiju i suosjećanje.",
    "about.c8lysq": "Naše vrijednosti",
    "about.19u3im": "Mir",
    "about.ffnspn": "Donosimo mir i povjerenje u sjećanje.",
    "about.g1bwny": "Dostojanstvo",
    "about.xjr5ai": "Svaki čin brige zaslužuje poštovanje.",
    "about.k51ypq": "Povezanost",
    "about.mk7xo6": "Tehnologija koja spaja ljude.",
    "about.twhsw8": "Transparentnost",
    "about.7mf0mf": "Vidljivi dokazi grade povjerenje.",
    "about.w395tm": "Ostanite povezani – na početku smo.",
    "about.neplkz": "Pretplatite se za novosti o lansiranju.",
    "about.uqz92y": "Stupite u kontakt.",
    "about.re1vey": "Naše vrijednosti",
    "about.rnq6i6": "Politika kolačića",
    "about.1vttbc": "Koristimo kolačiće.",
    "btn.9urml2": "Pridružite se",
    "contact.1tr8yh": "Prijavite se na newsletter za ažuriranja.",
    "contact.frg0dp": "Pošaljite poruku i započnite razgovor.",
    "contact.rnq6i6": "Politika kolačića",
    "contact.1vttbc": "Koristimo kolačiće.",
    "imprint.bn9ct3": "Impresum",
    "imprint.5vhr4f": "Impresum:",
    "imprint.cnghov": "Tvrtka: OAZA MIRA LLC\n\nGlavni ured (Principal Office):\n3834 Powerline Road, Fort Lauderdale, FL 33309, SAD\n\nPoštanska adresa (Mailing Address):\n261 North University Drive, Suite 500, Plantation, FL 33324, SAD\n\nRegistrirani zastupnik (Registered Agent):\nc/o 5 Flags Incubation LLC, 2880 West Oakland Park Blvd, Suite 118, Fort Lauderdale, FL 33311, SAD\n\nEmail: contact@oaza-mira.app",
    "imprint.jjo9k2": "Odgovorni za sadržaj: OAZA MIRA LLC",
    "imprint.1vttbc": "Koristimo kolačiće.",
    "privacy-policy.hop62e": "Politika privatnosti",
    "privacy-policy.if995r": "1. Voditelj obrade",
    "privacy-policy.ry02dm": "2. Prikupljeni podaci",
    "privacy-policy.eniysn": "Osobne podatke obrađujemo isključivo za pružanje naših usluga.",
    "privacy-policy.jh3mop": "3. Svrha i pravni temelj",
    "privacy-policy.1tw77k": "Vaši podaci se obrađuju za:",
    "privacy-policy.spkljn": "4. Korištenje HubSpot-a",
    "privacy-policy.7rv48p": "Vaši podaci koriste se za:",
    "privacy-policy.ecgqqb": "5. Dijeljenje podataka",
    "privacy-policy.2h4v5g": "Koristimo pouzdane pružatelje usluga.",
    "privacy-policy.mbws6u": "6. Kolačići i praćenje",
    "privacy-policy.n7kh4j": "Naša web stranica koristi samo tehnički nužne kolačiće.",
    "privacy-policy.qvfur5": "7. Razdoblje pohrane",
    "privacy-policy.ls2tnc": "Osobni podaci čuvaju se samo koliko je potrebno.",
    "privacy-policy.ow8rze": "Imate pravo na pristup, ispravak i brisanje. Da biste ostvarili ova prava, pošaljite e-poruku na contact@oaza-mira.app. Također se možete obratiti nadležnom tijelu za zaštitu podataka u državi Florida, Sjedinjene Američke Države ili zemlji vašeg prebivališta.",
    "privacy-policy.n99qdx": "9. Sigurnost podataka",
    "privacy-policy.ytl33c": "Vaše podatke štitimo tehničkim mjerama.",
    "privacy-policy.51069v": "10. Izmjene politike",
    "privacy-policy.txt85s": "Ova se politika može povremeno ažurirati.",
    "privacy-policy.1vttbc": "Koristimo kolačiće.",
    "disclaimer-page.uwtyyt": "Odricanje od odgovornosti",
    "disclaimer-page.op3kb1": "Primjenjivo na www.oaza-mira.app",
    "disclaimer-page.ahbulr": "1. Opće informacije",
    "disclaimer-page.24ddz8": "Svi sadržaji isključivo su informativnog karaktera.",
    "disclaimer-page.6b333p": "2. Odgovornost za sadržaj",
    "disclaimer-page.hhl8tl": "Ne preuzimamo odgovornost za štetu.",
    "disclaimer-page.s9aat9": "3. Vanjske poveznice",
    "disclaimer-page.350ksq": "Ne preuzimamo odgovornost za vanjske sadržaje.",
    "disclaimer-page.numnp6": "4. Pružatelji trećih strana",
    "disclaimer-page.aa0fux": "Oaza Mira je isključivo platforma za posredovanje.",
    "disclaimer-page.l0g468": "5. Autorsko pravo",
    "disclaimer-page.8kpta6": "Sav sadržaj zaštićen je autorskim pravom.",
    "disclaimer-page.k5328e": "Ovo odricanje od odgovornosti regulirano je zakonima države Florida, Sjedinjene Američke Države. Gdje je to zakonski dopušteno, mjesto nadležnosti bit će registrirano sjedište OAZA MIRA LLC na Floridi.",
    "disclaimer-page.ef13ox": "7. Izmjene",
    "disclaimer-page.4vq4j4": "Ovo odricanje podložno je izmjenama.",
    "disclaimer-page.rnq6i6": "Politika kolačića",
    "disclaimer-page.1vttbc": "Koristimo kolačiće."
  }
};

const extracted = JSON.parse(fs.readFileSync('i18n_extracted.json', 'utf-8'));
let i18nJs = fs.readFileSync('js/i18n.js', 'utf-8');

const match = i18nJs.match(/const translations = ({[\s\S]*?});\n\nlet currentLang/);
if(match) {
    let existingCode = match[1];
    let existingTranslations;
    eval('existingTranslations = ' + existingCode);
    
    // Merge EN (extracted from i18n_extracted.json automatically adds EN keys)
    Object.keys(extracted.en).forEach(key => {
        if (!existingTranslations.en[key]) existingTranslations.en[key] = extracted.en[key];
    });

    Object.assign(existingTranslations.de, secondaryTranslations.de);
    Object.assign(existingTranslations.hr, secondaryTranslations.hr);

    const newTranslationsStr = JSON.stringify(existingTranslations, null, 4);
    i18nJs = i18nJs.replace(match[1], newTranslationsStr);
    fs.writeFileSync('js/i18n.js', i18nJs);
    console.log('Successfully merged secondary translations into js/i18n.js');
}
