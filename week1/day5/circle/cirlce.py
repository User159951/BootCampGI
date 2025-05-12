import math
import turtle

class Circle:
    def __init__(self, *, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area:.2f})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    

c1 = Circle(radius=20)
c2 = Circle(diameter=50)

print(c1)  # Circle(radius=5, diameter=10, area=78.54)
print(c2)  # Circle(radius=5, diameter=10, area=78.54)

c3 = c1 + c2
print(c3)  # Circle(radius=10, diameter=20, area=314.16)

print(c1 == c2)  # True
print(c1 < c3)   # True

circles = [c3, c1, c2]
circles.sort()
for c in circles:
    print(c)

def draw_circles(circle_list):
    turtle.speed(1)
    turtle.penup()
    x_pos = -200
    for circle in circle_list:
        turtle.goto(x_pos, 0 - circle.radius)
        turtle.pendown()
        turtle.circle(circle.radius)
        turtle.penup()
        x_pos += circle.diameter + 20
    turtle.done()

# Sort and draw
circles.sort()
draw_circles(circles)