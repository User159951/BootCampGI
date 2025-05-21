class Dish:
    def __init__(self, name, description, price):
        self.name = name
        self.description = description
        self.price = price

    def to_dict(self):
        return {
            'name': self.name,
            'description': self.description,
            'price': self.price
        }
