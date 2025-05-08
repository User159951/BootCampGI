basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")

basket.append("kiwi")
basket.insert(0,"Apples")

apples_count = basket.count("Apples")
print(apples_count)

basket.clear()

print(basket)