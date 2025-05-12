# Exercise 1 : Convert lists into dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

output = zip(keys, values)

print(dict(output))

# Exercise 2 : Cinemax #2

# A movie theater charges different ticket prices depending on a person’s age.

# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# How much does each family member have to pay ?
# Print out the family’s total cost for the movies.

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

tickets_price = 0

for membre, age in family.items():
    if age > 12:
        tickets_price += 15
    elif age > 3 and age <= 12:
        tickets_price += 10
    else:
        tickets_price += 0

print(f"The family's total cost for the movies is ${tickets_price}")

# Bonus : Ask the user to input the names and ages instead of using the provided family variable 
# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

family ={}

family_count = int(input("How many membres of your family? "))

for i in range(family_count):
    name = input(f"Please Type the Name of your family membre N° {i + 1}: ")
    age = int(input(f"Please Type the age of your family membre N° {i + 1}: "))
    family[name] = age

tickets_price = 0

for membre, age in family.items():
    if age > 12:
        tickets_price += 15
    elif age > 3 and age <= 12:
        tickets_price += 10
    else:
        tickets_price += 0

print(f"The family's total cost for the movies is ${tickets_price}")


# Exercise 3: Zara

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
        "US": "pink, green"
        },
}

brand["number_stores"] = 2

print(f"The Clients of Zara are : {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]}, {brand['type_of_clothes'][2]}, {brand['type_of_clothes'][3]}")

brand["country_creation"] = "spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

brand.pop("creation_date")

print(f"The Last international competitor is : {brand['international_competitors'][-1]}.")

print(f"The major clothes colors in the US are : {brand["major_color"]["US"]}")

print(f"The lenght of the disctinary 'brand' is {len(brand)}")

print("The keys of dictionary brand are: ")
for key in brand:
    print(key)

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000,
}

brand.update(more_on_zara)

print(f"The number of stores is: {brand["number_stores"]}")
# The key number_stores got updated with the last item.


# Exercise 4 : Some Geography

def describe_city(city, country):
    print(f"{city} is in {country}")

describe_city("Mohammedia", "Morocco")


# Exercise 5 : Random
import random
def lottery(num):
    if num < 1 and num > 100:
        print("Number is not between of 1 and 100")
    ran = random.randrange(1, 100)
    if ran == num:
        print("Great job")
    else:
        print(f"Failed, Good luck next time, Numbers was : \nYour Number: {num}, The Random Number: {ran}")

lottery(10)

# Exercise 6 : Let’s create some personalized shirts !

def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")


make_shirt()
make_shirt("medium")
make_shirt(text="I Love One Piece")


# Exercise 7 : Temperature Advice
import random

def get_season_from_month():
    month = int(input("Enter a month (1-12): "))

    while month > 12 or month <= 0:
        print("Invalid month, Try again")
        month = int(input("Enter a month (1-12): "))

    if month in [3, 4, 5]:
        return "Spring"
    elif month in [6, 7, 8]:
        return "Summer"
    elif month in [9, 10, 11]:
        return "Autumn"
    elif month in [12, 1, 2]:
        return "Winter"

def get_random_temp(season = get_season_from_month()):
    match season:
        case "Winter": return round(random.uniform(-10, 16), 2)
        case "Spring": return round(random.uniform(16, 23), 2)
        case "Autumn" : return round(random.uniform(10, 30), 2)
        case "Summer" : return round(random.uniform(20, 40), 2)

def main():
    temperature = get_random_temp()
    print(f"The temperature right now is {temperature} degrees Celsius.")
    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temperature < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temperature <= 23:
        print("Don't wear your coat")
    elif 24 <= temperature < 32:
        print("Starting to get hot, drink water.")
    elif 32<= temperature <= 40:
        print("It's HOOOOT")


if __name__ == "__main__":
    main()

# Exercise 8 : Star Wars Quiz

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

answers_count = {
    "correct" : 0,
    "wrong": 0
}

user_answer = []

def questions():
    for question in data:
        print(f"Question: {question["question"]}")
        answer = input("What is your answer?: ")
        user_answer.append({"question": question["question"], "answer": answer})

def print_wrong_answers():
    print("The questions you answered wrong are:")

    for correct_item, user_item in zip(data, user_answer):
        if correct_item["answer"] == user_item["answer"]:
            answers_count["correct"] += 1
        else:
            answers_count["wrong"] += 1
            print(f"{correct_item['question']}: Correct Answer = {correct_item['answer']}, Your Answer = {user_item['answer']}")

    print(f"\nYour Correct answers count is: {answers_count["correct"]}")
    print(f"Your Wrong answers count is: {answers_count["wrong"]}")


while True:
    questions()
    print_wrong_answers()
    if answers_count["wrong"] > 3:
        answer = input("Do you want to play again. type Y for Yes, Any other Key for No: ")
        if answer != 'y' and answer != 'Y':
            break
    answers_count = {
        "correct" : 0,
        "wrong": 0
    }