from .dish import Dish

class DishManager:
    _dishes = []

    @classmethod
    def get_all_dishes(cls):
        return [dish.to_dict() for dish in cls._dishes]

    @classmethod
    def create_dish(cls, data):
        dish = Dish(data['name'], data['description'], data['price'])
        cls._dishes.append(dish)
        return dish.to_dict()

    @classmethod
    def update_dish(cls, name, data):
        for dish in cls._dishes:
            if dish.name == name:
                dish.description = data.get('description', dish.description)
                dish.price = data.get('price', dish.price)
                return dish.to_dict()
        return {'error': 'Dish not found'}

    @classmethod
    def delete_dish(cls, name):
        for i, dish in enumerate(cls._dishes):
            if dish.name == name:
                cls._dishes.pop(i)
                return {'status': 'Deleted'}
        return {'error': 'Dish not found'}

    @classmethod
    def get_dish_by_name(cls, name):
        for dish in cls._dishes:
            if dish.name == name:
                return dish.to_dict()
        return {'error': 'Dish not found'}
