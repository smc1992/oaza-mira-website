import json

with open("oaza-mira-app/src/dictionaries/hr.json", "r") as f:
    hr_data = json.load(f)

hr_data["providers.app.title"] = "Registrirajte se kao pružatelj usluga"
hr_data["providers.app.desc"] = "Pridružite se našoj verificiranoj mreži profesionalnih pružatelja usluga. Primajte narudžbe, upravljajte uslugama i pružajte mir obiteljima diljem svijeta."
hr_data["providers.app.cta"] = "Registrirajte se"

hr_data["cookie-policy.ab1cd2"] = "Politika kolačića"

# Check if there are other footer items we missed
hr_data["nav.contact"] = "Kontakt"

with open("oaza-mira-app/src/dictionaries/hr.json", "w") as f:
    json.dump(hr_data, f, indent=2, ensure_ascii=False)
