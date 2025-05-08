
user_input = input("Enter a word with duplicate consecutive letters: ")


result = user_input[0] 


for char in user_input[1:]:
    if char != result[-1]:  
        result += char
       


print("Cleaned word:", result)
