list = [1, 2, 3, 4]

for num in list:
    print(num)

for val in list:
    print(val * 20)

names = ["Elie", "Tim", "Matt"]

new_name = [i[0] for i in names]

print(new_name)

new_list = [1, 2, 3, 4, 5, 6]

even_list = [val for val in new_list if val % 2 == 0]

print(even_list)

revers_names = [name.lower()[::-1] for name in names]

print(revers_names)

print(set("first") & set("third"))

divBy12 = [i for i in range(1, 100) if i % 12 == 0]

print(divBy12)

vowels = ['a', 'e', 'i', 'o', 'u']

new_list = [ch for ch in "amazing" if ch not in vowels]

print(new_list)

print([[i for i in range(3)] for _ in range(3)])

print([[i for i in range(10)] for _ in range(10)])