from flask import Flask, jsonify, request
from core.dish_manager import DishManager
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/dishes', methods=['GET'])
def get_dishes():
    return jsonify(DishManager.get_all_dishes())

@app.route('/api/dish', methods=['POST'])
def add_dish():
    data = request.json
    dish = DishManager.create_dish(data)
    return jsonify(dish), 201

@app.route('/api/dish/<dish_name>', methods=['GET', 'PUT', 'DELETE'])
def dish_ops(dish_name):
    if request.method == 'GET':
        return jsonify(DishManager.get_dish_by_name(dish_name))
    elif request.method == 'PUT':
        data = request.json
        return jsonify(DishManager.update_dish(dish_name, data))
    elif request.method == 'DELETE':
        return jsonify(DishManager.delete_dish(dish_name))

if __name__ == '__main__':
    app.run(debug=True)
