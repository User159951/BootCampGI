# Exercise 2 : Dogs

class Dog():
    def __init__(self, dog_name, dog_age, dog_weight):
        self.name = dog_name
        self.age = dog_age
        self.weight = dog_weight
    
    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        return self.weight / self.age * 10
    
    def fight(self, other_dog):
        return f"{self.name} won the fight" if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight else f"{other_dog.name} won the fight"

if __name__ == "__main__":
    rex = Dog("Rex", 10, 20)
    max = Dog("Max", 9, 60)
    leon = Dog("Leon", 14, 30)

    print(rex.bark())
    print(max.bark())
    print(leon.bark())

    print(rex.fight(max))
    print(max.fight(rex))
    print(leon.fight(rex))