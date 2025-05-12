# Exercise 5 : TheIncredibles Family
from Exercise_4 import Family

class TheIncredibles(Family):
    def __init__(self, members, last_name, power=None, incredible_name=None):
        super().__init__(members, last_name)
        self.power = power
        self.incredible_name = incredible_name

    def use_power(self, member_name):
        try :
            for member in self.members:
                if member['name'] == member_name:
                    if member['is_child']:
                        raise ValueError(f"{member_name} is a child and cannot use their power.")
                    else:
                        print(f"{member_name} is using their power: {member["power"]}")
                        return
            raise ValueError(f"{member_name} is not a member of the family.")
        except ValueError as e:
            print(e)

    def incredible_presentation(self):
        print("Here is our powerful family:")
        super().family_presentation()
        print("Superpowers and Hero Names:")
        for member in self.members:
            power = member.get('power', 'None')
            hero_name = member.get('incredible_name', 'None')
            print(f"{member['name']} a.k.a {hero_name}, Power: {power}")
            
# Example usage
family_2 = TheIncredibles(
        [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ], "smith"
)

family_2.incredible_presentation()
family_2.born(name="Baby Jack", gender = 'Female', age=0, is_child=True, power="Unkown Power", incredible_name="BabyJack")
family_2.incredible_presentation()