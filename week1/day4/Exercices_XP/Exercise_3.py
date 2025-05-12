from Exercise_2 import Dog
import random

class PetDog(Dog):
    def __init__(self, dog_name, dog_age, dog_weight):
        super().__init__(dog_name, dog_age, dog_weight)
        self.trained = False
    
    def train(self):
        self.bark()
        self.trained = True
    
    @staticmethod
    def play(*dog_names):
        print(f"{dog_names} Play together.")
    
    def do_a_trick(self):
        trciks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        tricks_num = random.randint(0, len(trciks) - 1)
        if self.trained:
            print(f"{self.name} {trciks[tricks_num]}")
        else:
            print(f"{self.name} is not trained to do tricks")

            
# Example usage
dog_1 = PetDog("Rex", 10, 20)

dog_2 = PetDog("Max", 9, 60)

print(f"Dog 1 is {dog_1.trained} trained")
dog_2.trained = True
print(f"Dog 1 is {dog_2.trained} trained")

dog_1.play(dog_1.name, dog_2.name)

dog_2.do_a_trick()
