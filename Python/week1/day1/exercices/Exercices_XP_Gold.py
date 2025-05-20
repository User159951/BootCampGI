# Exercise 1:

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


# Exercise 2:

for i in range (1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)


# Exercise 3: 

while input("Please enter a name:") != "Touimy":
    print("Wrong name, please try again")

# Exercise 4: 

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter a name: ")
if user_name in names:
    print(names.index(user_name))

# Exercise 5: 

print("The greatest number is: ", max(int(input("Enter 1st number: ")), int(input("Enter 2nd number: ")), int(input("Enter 3nd number: "))))

# Exercise 6: 

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