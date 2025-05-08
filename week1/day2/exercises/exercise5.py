



import random

def guessnum(user_number):
    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("you got it dude")
    else:
        print(f"unfortuntly thats not the right number to guess it {random_number}")

numberG = int(input("enter a number between 1 and 100 : "))
guessnum(numberG)