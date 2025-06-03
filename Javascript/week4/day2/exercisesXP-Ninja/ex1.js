const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];


let totalDogHumanAgeLoop = 0;

data.forEach(animal => {
  if (animal.type === 'dog') {
    const dogHumanAge = animal.age * 7;
    totalDogHumanAgeLoop += dogHumanAge;
  }
});

console.log("Sum of dogs' ages in human years (using loop):", totalDogHumanAgeLoop); 



const totalDogHumanAgeReduce = data.reduce((accumulator, currentAnimal) => {
  if (currentAnimal.type === 'dog') {

    return accumulator + (currentAnimal.age * 7);
  } else {
 
    return accumulator;
  }
}, 0); 

console.log("Sum of dogs' ages in human years (using reduce):", totalDogHumanAgeReduce); 