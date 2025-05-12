# Exercise 1 : Outputs

# Predict the output of the following code snippets:

# 3 <= 3 < 9
# Output is True

# 3 == 3 == 3
# Output is True

# bool(0)
# Output is False

# bool(5 == "5")
# Output is False

#bool(4 == 4) == bool("4" == "4")
# Output is True

# bool(bool(None))
# Output is False

x = (1 == True) # Output is x is True
y = (1 == False) # Output is y is False
a = True + 4 # Output is a is 5
b = False + 10  # Output is b is 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

#Exercise 2 : Longest word without a specific character

# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.


previous_length = 0
new_length = 0

while 1:
    string = input("Enter the longest sentence you can without the character 'A':  ")

    if ('a' or 'A') not in string:
        new_length = len(string)
        if new_length > previous_length:
            previous_length = new_length
            print(f"Your longest sentence is: {new_length} characters long")


# Exercise 3: Working on a paragraph

# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.
# Let’s analyze the paragraph. Print out a nicely formatted message saying:

# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.

# Bonus: How many non-whitespace characters it contains.
# Bonus: The average amount of words per sentence in the paragraph.
# Bonus: the amount of non-unique words in the paragraph.

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