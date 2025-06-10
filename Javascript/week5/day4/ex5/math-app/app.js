const _ = require('lodash');
const math = require('./math');

const sum = math.add(15, 7);
console.log(`\nUsing custom math module:`);
console.log(`15 + 7 = ${sum}`); 

const product = math.multiply(8, 4);
console.log(`8 * 4 = ${product}`); 


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`\nUsing lodash:`);

const lodashSum = _.sum(numbers);
console.log(`Sum of numbers [1..10] using lodash: ${lodashSum}`);

const shuffledNumbers = _.shuffle(numbers);
console.log(`Shuffled numbers using lodash: [${shuffledNumbers}]`);

const lodashAverage = _.mean(numbers);
console.log(`Average of numbers [1..10] using lodash: ${lodashAverage}`);

const multipliedNumbers = _.map(numbers, num => math.multiply(num, 2));
console.log(`Numbers multiplied by 2: [${multipliedNumbers}]`);
const sumOfMultiplied = _.sum(multipliedNumbers);
console.log(`Sum of multiplied numbers using lodash: ${sumOfMultiplied}`);