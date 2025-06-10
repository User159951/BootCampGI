import peopleData from './data.js';

function calculateAverageAge(personsArray) {
  const totalAge = personsArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personsArray.length;

  return averageAge;
}

const average = calculateAverageAge(peopleData);

console.log(`The average age of all persons is: ${average.toFixed(0)} years`); 