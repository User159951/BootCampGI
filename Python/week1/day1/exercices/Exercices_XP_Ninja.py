# Exercise 1 :

x = (1 == True) # Output is x is True
y = (1 == False) # Output is y is False
a = True + 4 # Output is a is 5
b = False + 10  # Output is b is 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

#Exercise 2 :

previous_length = 0
new_length = 0

while 1:
    string = input("Enter the longest sentence you can without the character 'A':  ")

    if ('a' or 'A') not in string:
        new_length = len(string)
        if new_length > previous_length:
            previous_length = new_length
            print(f"Your longest sentence is: {new_length} characters long")


# Exercise 3: 

text = "It’s about searching for, finding, and sharing some truth. " \
"That’s what I’m looking for in everybody’s music, in every genre–having the truth exposed. " \
"A truth always comes out in art. I think comedy finds it, and I think good songwriting finds it. " \
"I believe that all art is about this truth, which is almost invisible at most other times, " \
"when we’re less aware, locked in the drudgery of our day-to-day existences, " \
"until art breaks through and points it out to us. " \
"Sometimes I think of it as a search for low-hanging fruit, " \
"even though I know that’s not quite the right simile–it’s something people walk by all the time, " \
"something so ingrained in our environment that it’s become invisible, " \
"something so obvious nobody sees it anymore, but then someone figures out how to say what it is, or how to see it, " \
"and everyone else says, “Of course! Why didn’t I say that? That’s exactly right. " \
"I always knew that was there,” or “That’s exactly how I feel.” Like when Bill Callahan sings, " \
"“Well, I can tell you about the river / Or we could just get in.”"

print("Number of characters:", len(text))
print("Number of sentences:", text.count(".") + text.count("!") + text.count("?"))
print("Number of words:", len(text.split()))
print("Number of unique words:", len(set(text.split())))
print("Number of non-whitespace characters:", len(text.replace(" ", "").replace("\n", "")))
print("The average amount of words per sentence is:", len(text.split()) / (text.count(".") + text.count("!") + text.count("?")))
print("The amount of non-unique words in the paragraph is:", len(text.split()) - len(set(text.split())))