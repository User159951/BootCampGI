# Challenge 1


number = int(input("Enter a number: "))
length = int(input("Enter a lenght: "))

mulitper = [i*number for i in range(1, length + 1)]

print(f"number: {number} - length {length} ➞  {mulitper}")

# Challenge 2


from itertools import groupby 
 
str1 = input("Enter a string: ")
def remove_duplicates(str1): 
    seen = set() 
    result = [] 
     
    for char in str1: 
        if char not in seen: 
            seen.add(char) 
            result.append(char) 
     
    return ''.join(result)
output_str = remove_duplicates(str1) 
print(f"user's word: {str1} ➞  {output_str}")