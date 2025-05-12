# Exercise 4 : Family

class Family():
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} is born into the {self.last_name} family.")
    
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False  # Name not found
    
    def family_presentation(self):
        print(f"The {self.last_name} family has the following members:")
        for member in self.members:
            print(f"{member['name']} is a {member['age']} years old {member['gender']}.")

family_1 = Family(  [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ], "Smith")


if __name__ == "__main__":
    family_1.born(name="Alice", gender = 'Female', age=0, is_child=True)
    print(family_1.members)
    print(family_1.is_18("Alice"))
    print(family_1.is_18("Michael"))

    family_1.family_presentation()