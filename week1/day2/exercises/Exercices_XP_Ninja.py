# Exercise 1: Cars

companies_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

companies = [company.strip() for company in companies_str.split(",")]

print(f"Number of manufacturers: {len(companies)}")

print("Manufacturers in descending order (Z-A):")
print(sorted(companies, reverse=True))

o_count = sum(1 for company in companies if 'o' in company.lower())
print(f"Number of manufacturers with 'o' in the name: {o_count}")

no_i_count = sum(1 for company in companies if 'i' not in company.lower())
print(f"Number of manufacturers without 'i' in the name: {no_i_count}")

companies_with_duplicates = [
    "Honda", "Volkswagen", "Toyota", "Ford Motor",
    "Honda", "Chevrolet", "Toyota"
]

unique_companies = list(set(companies_with_duplicates))

print("\nCompanies without duplicates:")
print(", ".join(unique_companies))
print(f"Total unique companies: {len(unique_companies)}")

print("\nReversed names in A-Z order:")
for name in sorted(unique_companies):
    print(name[::-1])


# Exercise 2: What’s your name?

def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    
    return full_name.title()

# Exercise 3: From English to Morse

MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---', 
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', 
    '7': '--...', '8': '---..', '9': '----.', ' ': '/',
}

def text_to_morse(text):
    text = text.upper()
    return ' '.join(MORSE_CODE_DICT.get(char, '') for char in text)

MORSE_TO_TEXT_DICT = {v: k for k, v in MORSE_CODE_DICT.items()}

def morse_to_text(morse_code):
    words = morse_code.strip().split(' / ')
    decoded_words = []
    for word in words:
        letters = word.split()
        decoded_word = ''.join(MORSE_TO_TEXT_DICT.get(letter, '') for letter in letters)
        decoded_words.append(decoded_word)
    return ' '.join(decoded_words)
