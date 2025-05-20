// Exercise 3 :
let age = [20,5,12,43,98,55];

let sum = 0;
for (let i=0; i< age.length; i++) {
    sum += age[i];
}

console.log(`The sum of all the numbers in the age array is: ${sum}`);


let highestAge = age[0];
for (let i=1; i< age.length; i++) {
    if (age[i] > highestAge) {
        highestAge = age[i];
    }
}
console.log(`The highest age in the array is: ${highestAge}`);