import json
import re

with open("oaza-mira-app/src/dictionaries/hr.json", "r") as f:
    hr_data = json.load(f)

# Update based on the provided document

# Home
hr_data["hero.title"] = "Briga za grobove — s bilo kojeg mjesta na svijetu."
hr_data["hero.subtitle"] = "Ostanite povezani s onim što je važno — s poštovanjem i dostojanstvom brinemo za počivalište Vaših najmilijih."
hr_data["hero.cta.primary"] = "Preuzmite aplikaciju i registrirajte se"
hr_data["hero.cta.secondary"] = "Pogledajte kako izgleda"

hr_data["teaser.badge"] = "Dostupno sada"
hr_data["teaser.title"] = "Blizu, bez obzira na udaljenost."
hr_data["teaser.desc"] = "Ostanite povezani s počivalištem Vaših najmilijih. Putem aplikacije Oaza Mira možete naručiti uslugu, pratiti svaki posjet i pregledati fotografije prije i poslije — sve jasno i jednostavno."
hr_data["teaser.feature1.title"] = "Jednostavno naručivanje"
hr_data["teaser.feature1.desc"] = "Odaberite uslugu u samo nekoliko koraka — brzo i bez komplikacija."
hr_data["teaser.feature2.title"] = "Fotodokaz svake narudžbe"
hr_data["teaser.feature2.desc"] = "Nakon svakog posjeta primate jasne fotografije stanja prije i poslije."
hr_data["teaser.feature3.title"] = "Sigurno i transparentno plaćanje"
hr_data["teaser.feature3.desc"] = "Upravljajte uslugama i pretplatama s potpunom sigurnošću."
hr_data["teaser.store.apple"] = "Uskoro dostupno"
hr_data["teaser.store.google"] = "Uskoro dostupno"

hr_data["app.title"] = "Pridružite se stotinama obitelji koje vjeruju Oazi Mira."
hr_data["btn.register"] = "Registrirajte se"

# How it Works
hr_data["howitworks.title"] = "Jednostavna briga. Trajni mir."
hr_data["howitworks.subtitle"] = "Saznajte kako Oaza Mira olakšava brigu o grobovima Vaših najmilijih — bez obzira gdje se nalazite na svijetu."
hr_data["howitworks.eyebrow"] = "Kako funkcionira"

hr_data["howitworks.steps.title"] = "Kako funkcionira"
hr_data["howitworks.steps.subtitle"] = "Početak je jednostavan. Slijedite nekoliko jasnih koraka i osigurajte kontinuiranu, pouzdanu brigu."
# The doc has 4 steps, but existing json has 6 steps (step1 to step6). Let's update first 4 and leave/adjust the rest if possible.
hr_data["howitworks.step1.title"] = "Početak"
hr_data["howitworks.step1.desc"] = "Preuzmite aplikaciju i kreirajte račun."
hr_data["howitworks.step2.title"] = "Registracija i odabir"
hr_data["howitworks.step2.desc"] = "Registrirajte grob i odaberite odgovarajući plan."
hr_data["howitworks.step3.title"] = "Provedba narudžbe"
hr_data["howitworks.step3.desc"] = "Preuzima provjereni lokalni cvjećar."
hr_data["howitworks.step4.title"] = "Ostanite informirani"
hr_data["howitworks.step4.desc"] = "Primajte fotografije stanja prije i poslije svakog posjeta."

hr_data["howitworks.features.title"] = "Što Oazu Mira čini posebnom"
hr_data["howitworks.features.subtitle"] = "Izgradili smo platformu koja stavlja povjerenje, transparentnost i suosjećanje na prvo mjesto."
hr_data["howitworks.feature1.title"] = "Provjereni cvjećari"
hr_data["howitworks.feature1.desc"] = "Svaki je cvjećar u našoj mreži provjeren — jamstvo povjerenja i pouzdanosti."
hr_data["howitworks.feature2.title"] = "Svježi cvjetni aranžmani"
hr_data["howitworks.feature2.desc"] = "Sezonsko cvijeće i ukrasi kako bi počivalište bilo lijepo kroz cijelu godinu."
hr_data["howitworks.feature3.title"] = "Fotografska dokumentacija"
hr_data["howitworks.feature3.desc"] = "Vizualni dokaz nakon svakog posjeta — transparentnost u koju možete vjerovati."
hr_data["howitworks.feature4.title"] = "Obavijesti u stvarnom vremenu"
hr_data["howitworks.feature4.desc"] = "Odmah doznajte kada je briga obavljena ili je li potrebna bila kakva intervencija."
hr_data["howitworks.feature5.title"] = "Obiteljska suradnja"
hr_data["howitworks.feature5.desc"] = "Pozovite članove obitelji da zajedno čuvaju uspomenu i sudjeluju u brizi o grobnom mjestu."
hr_data["howitworks.feature6.title"] = "Oaza Mira podrška"
hr_data["howitworks.feature6.desc"] = "Naš je tim tu kad god zatrebate pomoć."

hr_data["howitworks.testimonials.title"] = "Obitelji vjeruju Oazi Mira"
hr_data["howitworks.testimonials.subtitle"] = "Pogledajte što obitelji iz cijele Europe govore o svom iskustvu."
hr_data["howitworks.testimonial1"] = "„Živim u Beču, a majčin grob je u Hrvatskoj — to me neprestano brinulo. Sada svaki mjesec primam fotografije i napokon imam mir.“ – Maria K. · Beč, Austrija"
hr_data["howitworks.testimonial2"] = "„Funkcija fotografskog dokaza je nevjerojatna. Napokon znam da je očev grob uredno održavan, čak i s 800 km udaljenosti.“ – Thomas B. · München, Njemačka"
hr_data["howitworks.testimonial3"] = "„Oazu Mira koristimo kao obitelj. Moje sestre u Kanadi i ja dijelimo troškove i organizaciju brige. To nas je zbližilo.“ – Ana M. · Zagreb, Hrvatska"

hr_data["howitworks.cta.title"] = "Spremni za početak?"
hr_data["howitworks.cta.subtitle"] = "Pridružite se stotinama obitelji koje vjeruju Oazi Mira za brigu o počivalištima najmilijih."
hr_data["howitworks.cta.primary"] = "Preuzmite aplikaciju i registrirajte se"

# About
hr_data["about.lltg2z"] = "Pouzdana briga, provjereni partneri, Potvrda svake narudžbe"
hr_data["about.5i94sz"] = "Saznajte kako se svaka usluga dogovara, provodi i dokumentira - korak po korak"
hr_data["about.impact"] = "Oaza Mira"
hr_data["about.bmciuz"] = "Platforma, ne pružatelj usluga"
hr_data["about.fyalyk"] = "Povezujemo Vas s provjerenim lokalnim cvjećarima koji svaku uslugu obavljaju s pažnjom i poštovanjem. Oaza Mira osigurava da je svaki korak potvrđen i jasno dokumentiran."
hr_data["about.qje0vl"] = "Registrirajte grob, odaberite željenu uslugu i primite jasne fotografije nakon svakog posjeta. Jednostavno, transparentno i obavljeno s dostojanstvom."
hr_data["about.c8lysq"] = "Kako pomažemo"
hr_data["about.19u3im"] = "Povezujemo"
hr_data["about.ffnspn"] = "Spajamo Vas s provjerenim lokalnim cvjećarima."
hr_data["about.g1bwny"] = "Verificiramo"
hr_data["about.xjr5ai"] = "Svaki je cvjećar provjeren prije nego što postane dio naše mreže."
hr_data["about.k51ypq"] = "Dokumentiramo"
hr_data["about.mk7xo6"] = "Svaki je posjet potvrđen jasnim fotografskim dokazom."
hr_data["about.twhsw8"] = "Pružamo podršku"
hr_data["about.7mf0mf"] = "Osiguravamo da sve teče glatko — od prvog koraka do zadnjeg."
hr_data["about.w395tm"] = "Što ne radimo"
hr_data["about.neplkz"] = "Mi sami ne obavljamo usluge za grobove. Već vas povezujemo s provjerenim lokalnim cvjećarima i pružateljima usluga."
hr_data["about.uqz92y"] = "Ne zapošljavamo pružatelje usluga izravno. Sve usluge obavljaju provjereni lokalni partneri."

hr_data["btn.9urml2"] = "Kako funkcionira →"
hr_data["cta.final"] = "Pogledajte kako funkcionira"

# Families
hr_data["families.hero.badge"] = "Obitelji"
hr_data["families.hero.title1"] = "Sjećanje —"
hr_data["families.hero.title2"] = "neovisno o udaljenosti."
hr_data["families.hero.desc"] = "Brinite o počivalištu Vaših najmilijih s bilo kojeg mjesta. Svaki je posjet obavljen s poštovanjem i potvrđen jasnim fotografijama."
hr_data["families.hero.cta"] = "Registrirajte se"

hr_data["families.how.title"] = "Kako funkcionira"
hr_data["families.how.1.title"] = "Registrirajte grob"
hr_data["families.how.1.desc"] = "Dodajte grob Vašeg najmilijeg u sustav Oaze Mira."
hr_data["families.how.2.title"] = "Odaberite usluge"
hr_data["families.how.2.desc"] = "Odaberite čišćenje, uređenje, postavu svijeća ili cvijeća."
hr_data["families.how.3.title"] = "Potvrdite narudžbu"
hr_data["families.how.3.desc"] = "Pregledajte i potvrdite zahtjev za uslugom."
hr_data["families.how.4.title"] = "Primite fotografski dokaz"
hr_data["families.how.4.desc"] = "Dobijte fotografije čim je Vaša narudžba izvršena."

hr_data["families.invite.title"] = "Pozovite obitelj — brinite zajedno."
hr_data["families.invite.desc"] = "Pozovite svoju obitelj da se pridruži Oazi Mira — kako biste dijelili uspomene, ostali povezani i zajedno brinuli. Svaki može dati svoj doprinos, pretvarajući sjećanje u zajednički čin ljubavi."
hr_data["btn.tajlr7"] = "Podijelite s obitelji"

hr_data["families.know.title"] = "Već imate svojeg cvjećara?"
hr_data["families.know.desc"] = "Podijelite s njima Oazu Mira i pojednostavite koordinaciju — jasna komunikacija, potvrđen rad, sve na jednom mjestu."
hr_data["families.know.cta"] = "Pozovite Vašeg cvjećara"

# Companies
hr_data["business.hero.badge"] = "Tvrtke"
hr_data["business.hero.title1"] = "Suosjećanje kao dio"
hr_data["business.hero.title2"] = "kulture Vaše tvrtke."
hr_data["business.hero.desc"] = "Podržite zaposlenike, klijente i zajednicu promišljenom, pouzdanom brigom — ostvarenom jasno i s poštovanjem."
hr_data["business.hero.cta"] = "Kontaktirajte nas"

hr_data["business.pillar1.title"] = "Podržite Vaš tim u onome što je zaista važno."
hr_data["business.pillar1.desc"] = "Ponudite zaposlenicima jednostavan način brige za njihove najmilije. Uz Oazu Mira, sjećanje postaje dio korporativne dobrobiti — jačajući lojalnost, suosjećanje i zajednicu unutar Vaše tvrtke."

hr_data["business.pillar2.title"] = "Korporativna odgovornost s pravim učinkom."
hr_data["business.pillar2.desc"] = "Partnerstvom s Oazom Mira podržite lokalna groblja, projekte komemoracije u zajednici ili socijalne programe. Zajedno stvaramo trajnu vrijednost — dostojanstvo, briga i mir koji odražavaju vrijednosti Vaše tvrtke."

hr_data["business.cta.title"] = "Tu smo za Vas."
hr_data["business.cta.desc"] = "Razgovarajmo o korporativnoj suradnji. Izrađujemo prilagođena rješenja za zaposleničke benefite i programe korporativne društvene odgovornosti."
hr_data["business.cta.btn"] = "Kako funkcionira →"

# Institutions
hr_data["institutions.hero.badge"] = "Institucije"
hr_data["institutions.hero.title1"] = "Odgovornost s"
hr_data["institutions.hero.title2"] = "apsolutnim dostojanstvom."
hr_data["institutions.hero.desc"] = "Oaza Mira podržava institucije, tvrtke, općine, udruge i tijela državne uprave u transparentnoj i poštovanoj brizi za grobove, spomen-obilježja i memorijalna mjesta. Omogućujemo digitalno planiranje, dokumentaciju i suradnju — svugdje gdje su važni ljudi i sjećanje."
hr_data["institutions.hero.cta"] = "Kontaktirajte naš B2G tim"

hr_data["institutions.steps.title"] = "Kako funkcionira za institucije"
hr_data["institutions.step1.title"] = "Konzultacija"
hr_data["institutions.step1.desc"] = "Analiziramo potrebe Vaše općine ili institucije kako bismo definirali opseg brige za spomen-mjesta ili obnove memorijalnih obilježja."
hr_data["institutions.step2.title"] = "Integracija"
hr_data["institutions.step2.desc"] = "Povežite postojeće partnere ili pristupite našoj mreži provjerenih lokalnih cvjećara putem namjenskog portala za upravljanje."
hr_data["institutions.step3.title"] = "Upravljanje"
hr_data["institutions.step3.desc"] = "Pratite napredak digitalno: fotografski dokaz, automatsko izvješćivanje i centralizirana dokumentacija za svaku lokaciju."

hr_data["institutions.register.cta"] = "Registrirajte se kao institucija"
hr_data["institutions.cta.btn"] = "Registracija →"

# Caretakers
hr_data["providers.hero.badge"] = "Pružatelji usluga"
hr_data["providers.hero.title1"] = "Rad sa svrhom."
hr_data["providers.hero.title2"] = "Zarada s dostojanstvom."
hr_data["providers.hero.desc"] = "Pridružite se mreži Oaza Mira i primajte jasne, pouzdane narudžbe za usluge. Gradite svoju reputaciju provjerenim radom i dosljednom kvalitetom."
hr_data["providers.hero.cta"] = "Registrirajte se kao pružatelj usluga"

hr_data["providers.adv.title"] = "Vaše prednosti"
hr_data["providers.adv.1.title"] = "Stalne narudžbe"
hr_data["providers.adv.1.desc"] = "Bez marketinga — narudžbe dolaze do Vas."
hr_data["providers.adv.2.title"] = "Redoviti prihod"
hr_data["providers.adv.2.desc"] = "Stabilan i predvidiv posao."
hr_data["providers.adv.3.title"] = "Jednostavno upravljanje"
hr_data["providers.adv.3.desc"] = "Sve jasno organizirano na jednom mjestu."
hr_data["providers.adv.4.title"] = "Automatska isplata"
hr_data["providers.adv.4.desc"] = "Obrada bez ručnog fakturiranja."

hr_data["providers.cta.title"] = "Registrirajte se kao pružatelj usluga"
hr_data["providers.cta.desc"] = "Pridružite se našoj verificiranoj mreži profesionalnih pružatelja usluga. Primajte narudžbe, upravljajte uslugama i pružajte mir obiteljima diljem svijeta."
hr_data["btn.pjun8n"] = "Registrirajte se"

# Nav and Footer
hr_data["nav.home"] = "Početna"
hr_data["nav.howItWorks"] = "Kako funkcionira"
hr_data["nav.about"] = "O nama"
hr_data["nav.targetGroups"] = "Kome služimo"
hr_data["nav.contact"] = "Kontakt"
hr_data["nav.families"] = "Obiteljima"
hr_data["nav.companies"] = "Tvrtkama"
hr_data["nav.institutions"] = "Institucijama"
hr_data["nav.caretakers"] = "Pružateljima usluga"

hr_data["btn.login"] = "Prijava"
hr_data["btn.signup"] = "Registracija"

with open("oaza-mira-app/src/dictionaries/hr.json", "w") as f:
    json.dump(hr_data, f, indent=2, ensure_ascii=False)
