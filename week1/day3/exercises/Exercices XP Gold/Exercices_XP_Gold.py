# Exercise 1 : Geometry
import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def get_area(self):
        return math.pi * self.radius * self.radius
    
    def get_perimeter(self):
        return 2 * math.pi * self.radius
    
    def get_geometrical(self):
        print(f"The Circle have a radius of : {self.radius}, and an area of {self.get_area()}, and a permimeter {self.get_perimeter()}")
circle_1 = Circle(5)

circle_1.get_geometrical()

# Exercise 2 : Custom List Class
import random

class MyList:
    def __init__(self, list=[]):
        self.list = list

    def get_reversed(self):
        reversed_list = self.list
        reversed_list.reverse()
        return reversed_list

    def get_sorted(self):
        sorted_list = self.list
        sorted_list.sort()
        return sorted_list

    def get_rand(self):
        new_list = []
        for i in self.list:
            new_list.append(random.randint(1, 100))
        return new_list
    
mylist = MyList([5,6,8,7,5,4,2,3,6,10])

print(list(mylist.get_reversed()))
print(list(mylist.get_sorted()))
print(mylist.get_rand())