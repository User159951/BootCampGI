def add_two_numbers(a, b):
    return a+b

print(add_two_numbers(3, 5))
print(add_two_numbers(10, 20))

def greet(name):
    print(f"Hello, {name}")

greet("Alice")
greet("Bob")

def check_even_odd(n):
    print("Even" if n % 2 == 0 else "Odd")

check_even_odd(4)
check_even_odd(7)

def sum_list(list):
    sum = 0
    for v in list:
        sum += v
    return sum

print(sum_list([1, 2, 3, 4]))  # Output: 10
print(sum_list([5, 5, 5]))  # Output: 15

def print_days():
    week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for day in week:
        print(day)
print_days()

def check_sign(n):
    if n > 0:
        print("Positive")
    elif n < 0:
        print("Negative")
    else:
        print("Zero")

check_sign(10)  # Output: "Positive"
check_sign(-5)  # Output: "Negative"
check_sign(0)   # Output: "Zero"

def repeat_word(word, n):
    while(n):
        print(word)
        n -=1

repeat_word("hello", 3)  
# Output:
# hello
# hello
# hello

repeat_word("goodbye", 2)  
# Output:
# goodbye
# goodbye