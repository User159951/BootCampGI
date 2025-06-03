// [2] === [2] false 
// {} === {} false

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number);//4
console.log(object3.number);//4
console.log(object4.number);//5

// object2.number and object3.number will both reflect the change made via object1 because they are all looking at the same underlying object.
// object4.number took 5 cuz there is no change 


class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Class Mammal that extends from the Animal class
class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");

// Call the sound method on the farmerCow object
console.log(farmerCow.sound("Moooo"));
