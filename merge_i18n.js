const fs = require('fs');

const extracted = JSON.parse(fs.readFileSync('i18n_extracted.json', 'utf-8'));

const translations = {
  de: {
    "families.8obkup": "Erinnerung über alle Entfernungen hinweg.",
    "families.g98to4": "Mit Oaza Mira können Familien die Ruhestätten ihrer Liebsten auch aus der Ferne pflegen. Bestellen Sie Pflege, Dekoration oder besondere Gesten und erhalten Sie nach Abschluss einen Fotobeweis – einfach, würdevoll und transparent.",
    "families.qec43n": "Wie es funktioniert",
    "families.hxhsi0": "Laden Sie Ihre Familie ein – pflegen Sie gemeinsam.",
    "families.4rf7pp": "Laden Sie Ihre Familie zu Oaza Mira ein – um Erinnerungen zu teilen, in Verbindung zu bleiben und gemeinsam zu pflegen. Jeder kann seinen Teil beitragen, sodass das Gedenken ein gemeinsamer Akt der Liebe und Fürsorge wird.",
    "families.hj40w3": "Teilen Sie diese Seite per WhatsApp oder E-Mail mit ihnen – und lassen Sie sie wissen, dass Sie über Oaza Mira kommunizieren möchten, für eine einfachere, sicherere und schnellere Koordination – ohne zusätzliche Kosten.",
    "families.ffxrqu": "Wir sind hier um zu helfen",
    "families.rnq6i6": "Cookie-Richtlinie",
    "families.1vttbc": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Indem Sie weiter surfen, stimmen Sie unserer Datenschutzrichtlinie zu.",
    "btn.baz63n": "Für Newsletter anmelden",
    "btn.tajlr7": "Mit Familie teilen",
    "btn.kbxonb": "Jetzt an Ihren Dienstleister senden",
    "btn.ss7pm7": "Pre-Launch-App",
    "business.yucpi8": "Unterstützen Sie Ihr Team in dem, was wirklich zählt.",
    "business.jfxwf7": "Bieten Sie Ihren Mitarbeitern einen einfachen Weg, sich um ihre Liebsten zu kümmern. Mit Oaza Mira wird das Gedenken Teil des Corporate Wellbeings – und stärkt so Loyalität, Mitgefühl und die Gemeinschaft in Ihrem Unternehmen.",
    "business.2cyre1": "Unternehmensverantwortung mit echter Wirkung.",
    "business.ylyczm": "Arbeiten Sie mit Oaza Mira zusammen, um lokale Friedhöfe, kommunale Gedenkprojekte oder soziale Programme zu unterstützen. Gemeinsam schaffen wir bleibenden Wert – Würde, Fürsorge und Frieden, die die Werte Ihres Unternehmens widerspiegeln.",
    "business.ffxrqu": "Wir sind hier um zu helfen",
    "business.rnq6i6": "Cookie-Richtlinie",
    "business.1vttbc": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Indem Sie weiter surfen, stimmen Sie unserer Datenschutzrichtlinie zu.",
    "institutions.db2gj4": "Partnerschaften, die Vertrauen aufbauen.",
    "institutions.qapkqs": "Wir schließen langfristige Kooperationen mit Organisationen, die Transparenz und Verantwortlichkeit in öffentlichen Gedenkstätten schätzen. Oaza Mira bietet zentrale Management-Tools und Fotodokumentation für jede gepflegte Anlage.",
    "institutions.r1j4o5": "Starten Sie noch heute eine Kooperation – werden Sie Teil des Oaza Mira Netzwerks.",
    "institutions.3dylv3": "Abonnieren Sie unseren Newsletter, um über unsere institutionellen Lösungen auf dem Laufenden zu bleiben.",
    "institutions.rnq6i6": "Cookie-Richtlinie",
    "institutions.1vttbc": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Indem Sie weiter surfen, stimmen Sie unserer Datenschutzrichtlinie zu.",
    "btn.za3mim": "Kontaktieren Sie uns",
    "btn.wxrlhb": "Heute eine Kooperation starten",
    "providers.tgm1nq": "Wachsen Sie mit uns – vernetzen Sie Ihre Kunden schneller als andere.",
    "providers.1ep91": "Verwandeln Sie Einmalkäufer in treue Kunden und planen Sie wiederkehrende Einnahmen ganz unbesorgt. Seien Sie von Anfang an dabei und registrieren Sie so viele Kunden wie möglich, bevor Ihre Wettbewerber es tun.",
    "providers.ksvnmb": "Verpassen Sie keine Updates und Boni für Dienstleister.",
    "providers.sp7ush": "Kontaktieren Sie uns direkt – wir helfen Ihnen bei der Einrichtung Ihres Profils.",
    "providers.9qrh41": "Abonnieren Sie jetzt und lassen Sie sich benachrichtigen, wenn die App für Dienstleister veröffentlicht wird.",
    "providers.rnq6i6": "Cookie-Richtlinie",
    "providers.1vttbc": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Indem Sie weiter surfen, stimmen Sie unserer Datenschutzrichtlinie zu.",
    "btn.pjun8n": "Jetzt registrieren",
    "btn.pjtzif": "Jetzt registrieren"
  },
  hr: {
    "families.8obkup": "Sjećanje na daljinu.",
    "families.g98to4": "Uz Oaza Mira, obitelji mogu brinuti o počivalištima svojih najmilijih čak i izdaleka. Naručite održavanje, dekoracije ili posebne geste i primite fotografiju kao dokaz po završetku – jednostavno, dostojanstveno i transparentno.",
    "families.qec43n": "Kako funkcionira",
    "families.hxhsi0": "Pozovite obitelj – brinite zajedno.",
    "families.4rf7pp": "Pozovite svoju obitelj da se pridruži Oaza Mira – kako biste dijelili uspomene, ostali povezani i zajedno brinuli. Svatko može doprinijeti, čineći sjećanje zajedničkim činom ljubavi i brige.",
    "families.hj40w3": "Podijelite ovu stranicu s njima putem WhatsAppa ili e-maila – i obavijestite ih da želite komunicirati putem Oaza Mire za jednostavniju, sigurniju i bržu koordinaciju – bez dodatnih troškova.",
    "families.ffxrqu": "Ovdje smo da pomognemo",
    "families.rnq6i6": "Politika kolačića",
    "families.1vttbc": "Koristimo kolačiće kako bismo poboljšali vaše iskustvo. Nastavkom pregledavanja pristajete na našu Politiku privatnosti.",
    "btn.baz63n": "Prijavite se na newsletter",
    "btn.tajlr7": "Podijeli s obitelji",
    "btn.kbxonb": "Pošaljite svom pružatelju odmah",
    "btn.ss7pm7": "Pre-Launch-Aplikacija",
    "business.yucpi8": "Podržite svoj tim u onom što je uistinu važno.",
    "business.jfxwf7": "Ponudite svojim zaposlenicima jednostavan način brige o njihovim najmilijima. Uz Oaza Mira, sjećanje postaje dio korporativne dobrobiti – jačajući lojalnost, suosjećanje i zajedništvo unutar vaše tvrtke.",
    "business.2cyre1": "Korporativna odgovornost sa stvarnim utjecajem.",
    "business.ylyczm": "Surađujte s Oaza Mira kako biste podržali lokalna groblja, projekte sjećanja zajednice ili socijalne programe. Zajedno stvaramo trajnu vrijednost – dostojanstvo, brigu i mir koji odražavaju vrijednosti vaše tvrtke.",
    "business.ffxrqu": "Ovdje smo da pomognemo",
    "business.rnq6i6": "Politika kolačića",
    "business.1vttbc": "Koristimo kolačiće kako bismo poboljšali vaše iskustvo. Nastavkom pregledavanja pristajete na našu Politiku privatnosti.",
    "institutions.db2gj4": "Partnerstva koja grade povjerenje.",
    "institutions.qapkqs": "Uspostavljamo dugoročne suradnje s organizacijama koje cijene transparentnost i odgovornost na javnim mjestima sjećanja. Oaza Mira nudi centralizirane alate za upravljanje i fotodokumentaciju za svaku održavanu lokaciju.",
    "institutions.r1j4o5": "Započnite suradnju danas – pridružite se Oaza Mira mreži.",
    "institutions.3dylv3": "Pretplatite se na naš newsletter kako biste ostali informirani o institucionalnim rješenjima.",
    "institutions.rnq6i6": "Politika kolačića",
    "institutions.1vttbc": "Koristimo kolačiće kako bismo poboljšali vaše iskustvo. Nastavkom pregledavanja pristajete na našu Politiku privatnosti.",
    "btn.za3mim": "Kontaktirajte nas",
    "btn.wxrlhb": "Započnite suradnju već danas",
    "providers.tgm1nq": "Rastite s nama – povežite svoje klijente prije ostalih.",
    "providers.1ep91": "Pretvorite jednokratne kupce u vjerne klijente i bezbrižno planirajte ponavljajuće prihode. Budite tu od samog početka i registrirajte što je više moguće kupaca prije vaših konkurenata.",
    "providers.ksvnmb": "Ne propustite ažuriranja i bonuse za pružatelje usluga.",
    "providers.sp7ush": "Kontaktirajte nas izravno – pomoći ćemo vam u postavljanju vašeg profila.",
    "providers.9qrh41": "Pretplatite se sada i primite obavijest kada aplikacija za pružatelje usluga bude pokrenuta.",
    "providers.rnq6i6": "Politika kolačića",
    "providers.1vttbc": "Koristimo kolačiće kako bismo poboljšali vaše iskustvo. Nastavkom pregledavanja pristajete na našu Politiku privatnosti.",
    "btn.pjun8n": "Registrirajte se odmah",
    "btn.pjtzif": "Registriraj se sada"
  }
};

let i18nJs = fs.readFileSync('js/i18n.js', 'utf-8');

// Find the translations object
const varDecl = 'const translations = ';
const startIndex = i18nJs.indexOf(varDecl);

if (startIndex !== -1) {
  // A crude but effective object replacement: we evaluate existing and merge.
  let currentMatch = i18nJs.match(/const translations = ({[\s\S]*?});\n\nlet currentLang/);
  if(currentMatch) {
     let existingCode = currentMatch[1];
     let existingTranslations;
     // Evil eval to get the object safely without full AST parser
     eval('existingTranslations = ' + existingCode);
     
     // Merge EN
     Object.assign(existingTranslations.en, extracted.en);
     // Merge DE
     Object.assign(existingTranslations.de, translations.de);
     // Merge HR
     Object.assign(existingTranslations.hr, translations.hr);
     
     const newTranslationsStr = JSON.stringify(existingTranslations, null, 4);
     
     i18nJs = i18nJs.replace(currentMatch[1], newTranslationsStr);
     fs.writeFileSync('js/i18n.js', i18nJs);
     console.log('Successfully merged translations into js/i18n.js');
  } else {
     console.log('Regex match failed on js/i18n.js!');
  }
}
