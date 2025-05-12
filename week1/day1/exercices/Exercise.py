# Exercice 1 : Hello World

print("Hello World\n" * 4)

# Exercice 2 : Some Math

print((99 ** 3) * 8)

# Exercice 3 : What is your name ?

user_name = input("What is your name ?\n")
if user_name == "SHAB":
    print("we don't have the same name")
else:
    print("We have the same name")

# Exercise 4 : Tall enough to ride a roller coaster

user_height = int(input("What is your height in cm ?\n"))
if user_height > 145:
    print("You are tall enough to ride a roller coaster")
else:
    print("You need to grow a little more to ride a roller coaster")

# Exercise 5 : Favorite Numbers

my_favorite_number = {1, 3, 5, 7, 9, 11, 13}
my_favorite_number.add(15)
my_favorite_number.add(17)
my_favorite_number.remove(17)
friends_favorite_number = {2, 4, 6, 8, 10, 12, 14}
our_favorite_numbers = my_favorite_number.union(friends_favorite_number)
print(our_favorite_numbers)

# Exercise 6: Tuple

# Tuple cannot be changed, we cannot add more integers to the tuple.

# Exercise 7: List

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
print(f"They are {apple_count} apples in the basket")
basket.clear()
print(basket)

# Exercise 8 : Sandwich Orders

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich} sandwich")