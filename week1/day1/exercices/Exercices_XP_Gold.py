# Exercise 1: What is the Season?

# Ask the user to input a month (1 to 12).

# Display the season of the month received:

# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

month = int(input("Enter a month (1-12): "))

if month in [3, 4, 5]:
    print("Spring")
elif month in [6, 7, 8]:
    print("Summer")
elif month in [9, 10, 11]:
    print("Autumn")
elif month in [12, 1, 2]:
    print("Winter")
else:
    print("Invalid month. Please enter a number between 1 and 12.")


# Exercise 2: For Loop

# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20 (inclusive), print out every element which has an even index.

for i in range (1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)


# Exercise 3: While Loop

while input("Please enter a name:") != "SHAB":
    print("Wrong name, please try again")

# Exercise 4: Check the index

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter a name: ")
if user_name in names:
    print(names.index(user_name))

# Exercise 5: Greatest Number

print("The greatest number is: ", max(int(input("Enter 1st number: ")), int(input("Enter 2nd number: ")), int(input("Enter 3nd number: "))))

# Exercise 6: Random number

import random

number = int(input("Enter a number between 1 and 9: "))

right_number = random.randint(1, 9)

number_of_tries_lost = 0
number_of_tries_won = 0

while 1:
    print("The right number is", right_number)
    if number == right_number:
        print("Winner")
        number_of_tries_won += 1
        right_number = random.randint(1, 9)
    else:
        print("Try again") 
        number_of_tries_lost += 1 
    print("Do you want to play again? (yes/no)")
    play_again = input().lower()
    if play_again != "yes":
        print("Thanks for playing! you played", number_of_tries_lost + number_of_tries_won, "times")
        print("You won", number_of_tries_won, "times and lost", number_of_tries_lost, "times")
        break
    number = int(input("Enter a number between 1 and 9: "))