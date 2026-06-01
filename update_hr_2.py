import json

with open("oaza-mira-app/src/dictionaries/hr.json", "r") as f:
    hr_data = json.load(f)

hr_data["marquee.1"] = "Više od 100 provjerenih cvjećara diljem Hrvatske"
hr_data["marquee.2"] = "Dostupno u cijeloj Hrvatskoj"
hr_data["marquee.3"] = "Korisnička podrška 24/7"
hr_data["marquee.4"] = "Sigurna i transparentna dokumentacija"
hr_data["marquee.5"] = "Zajamčena dostojanstvena briga"

hr_data["footer.tagline"] = "Briga za svako počivalište, bez obzira na udaljenost — obavljena s dostojanstvom i povjerenjem."
hr_data["footer.copyright"] = "© 2026 OAZA MIRA LLC. Sva prava pridržana."
hr_data["seo.description"] = "Čuvanje uspomena kroz digitalnu brigu za grobove"

with open("oaza-mira-app/src/dictionaries/hr.json", "w") as f:
    json.dump(hr_data, f, indent=2, ensure_ascii=False)
