sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
removed_san = "Pastrami sandwich"

while removed_san in sandwich_orders:
    sandwich_orders.remove(removed_san)
print(sandwich_orders)


finished_sandwiches = []

while sandwich_orders:
    finished_sandwiches.append(sandwich_orders.pop(0))
print(finished_sandwiches)


for sandwiches in finished_sandwiches:
    print(f" i made your {sandwiches}")

