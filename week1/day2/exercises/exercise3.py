brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

print(f"zara clients are:",brand["type_of_clothes"])

brand["brand_creation"] = "spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

#brand.pop("creation_date")
del brand["creation_date"]

print("last comp is :",brand["international_competitors"][-1])

print(brand["major_color"]["US"])

print(len(brand))

print(brand.keys())

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print(brand["number_stores"])

