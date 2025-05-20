// Exercise 3 : Repeat the question

// 1- Prompt the user for a number
let number = prompt("Please enter a number:");
console.log(`The type of the data is ${typeof number}`);

// 2- While the number is smaller than 10 continue asking the user for a new number.
do {
    number = prompt("Please enter a number:");
    if (number < 10) {
        console.log("The number is smaller than 10, please try again.");
    }
} while (number < 10);