# Menu Manager

class MenuManager:
    def __init__(self):
        self.menu = [
            {
                "name" : "Soup",
                "price" : 10,
                "spice" : "B",
                "gluten" : False,
            },
            {
                "name" : "Hamburger",
                "price" : 15,
                "spice" : "A",
                "gluten" : True,
            },
            {
                "name" : "Salad",
                "price" : 18,
                "spice" : "A",
                "gluten" : False,
            },
            {
                "name" : "French Fries",
                "price" : 5,
                "spice" : "C",
                "gluten" : False,
            },
            {
                "name" : "Beef bourguignon",
                "price" : 25,
                "spice" : "B",
                "gluten" : True,
            },
            
        ]

    def add_item(self, name, price, spice, gluten):
        self.menu.append({
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten,
            })

    def update_item(self, name, price, spice, gluten):
        for menu in self.menu:
            if menu["name"] == name:
                menu["price"] = price
                menu['spice'] = spice
                menu["gluten"] = gluten
                break
        else:
            print(f"No dish with the name {name} found to be updated.")

    def remove_item(self, name):
        for menu in self.menu:
            if menu["name"] == name:
                print(list(self.menu))
                break
        else:
            print(f"No dish with the name {name} found to be removed.")
menu_1 = MenuManager()

menu_1.add_item("Soup1", 101,'B', False,)
menu_1.update_item("Soupa", 510, 'B', True)
menu_1.remove_item("Soupaa")
