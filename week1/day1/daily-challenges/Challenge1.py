
number = int(input("Input a number to loop: "))
number_length = int(input("Input length of the list: "))

listofnumber = []
i = 1


while len(listofnumber) < number_length:
    listofnumber.append(number * i)
    i += 1


print(listofnumber)
