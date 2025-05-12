# Exercise 1: Birthday Look-up

birthdays = {
    "Luffy": "2000/05/05",
    "zoro": "2001/11/11",
    "Namy": "2002/07/03",
    "Usopp": "2000/04/01",
    "Robin": "1995/02/06",
}

print("Welcome, YOu can look up the birthdays of the people in the list!")
name = input("Give me a name : ")
if name in birthdays:
    print(f"The Birthday of {name} is : {birthdays[name]}")


# Exercise 2: Birthdays Advanced

birthdays = {
    "Luffy": "2000/05/05",
    "zoro": "2001/11/11",
    "Namy": "2002/07/03",
    "Usopp": "2000/04/01",
    "Robin": "1995/02/06",
}

print("Welcome, YOu can look up the birthdays of the people in the list!")

for name in birthdays.items():
    print(name[0])

name = input("Give me a name : ")
if name in birthdays:
    print(f"The Birthday of {name} is : {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}")


# Exercise 3: Sum

def digit_sum(x):
    lst = [str(x)*i for i in range(1,5)]
    print(f"{sum(map(int, lst))} ({' + '.join(lst)})")

digit_sum(3)


# Exercise 4: Double Dice

import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    throw_count = 0
    while True:
        dice_1 = throw_dice()
        dice_2 = throw_dice()
        throw_count += 1
        if dice_1 == dice_2:
            break
    return throw_count

def main():
    results = []

    for _ in range(100):
        throws = throw_until_doubles()
        results.append(throws)

    total_throws = sum(results)
    average_throws = total_throws / len(results)

    print(f"Total throws to reach 100 doubles: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")

main()