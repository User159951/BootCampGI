# Exercise 1: Cats

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
        print(f"Cat is created, Name is {self.name}, Age is : {self.age}")

def oldest_cat(cat_1, cat_2, cat_3):
    oldest_cat = cat_1 if (cat_1.age >= cat_2.age and cat_1.age >= cat_3.age) else (cat_2 if cat_3.age >= cat_3 else cat_3)
    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


cat_1 = Cat("shiro", 10)
cat_2 = Cat("kuro", 5)
cat_3 = Cat("midori", 7)

oldest_cat(cat_1, cat_2, cat_3)


# Exercise 2 : Dogs

class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes woof!")    

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm hight!")
    

davids_dog = Dog("Rex", 50)

davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)

sarahs_dog.bark()
sarahs_dog.jump()

if sarahs_dog.height > davids_dog.height:
    print(f"{sarahs_dog.name} is bigger!")
else:
    print(f"{davids_dog.name} is bigger!")

# Exercise 3 : Who’s the song producer?

class Song:
    def __init__(self, lyrics=[]):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for word in self.lyrics:
            print(word)


stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal in self.animals:
            pass
        else:
            self.animals.append(new_animal)
    
    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"Animal is not in Zoo : {self.name}")

    def sort_animals(self):
        grouped = {}
        for animal in sorted(self.animals):
            first_letter = animal[0].upper()
            if first_letter in grouped:
                grouped[first_letter].append(animal)
            else:
                grouped[first_letter] = [animal]
        return grouped

    def get_groups(self):
        print(self.sort_animals())
        for key, group in self.sort_animals().items():
            print(f"Group {key}: {group}")


new_york_zoo = Zoo("Zoo 1")
new_york_zoo.add_animal(input("Wich animal should we add to the zoo: "))
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Not")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")


new_york_zoo.sell_animal("Not")
new_york_zoo.sell_animal("Lol")

new_york_zoo.get_groups()
