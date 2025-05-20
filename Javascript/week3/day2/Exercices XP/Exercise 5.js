// Exercise 5 : 
const family = {
    lastName: "Touimy",
    firstName: "Mehdi",
    age: 23,
    isMarried: false,
    children: [],
}

// 2 -
for (let key in family) {
    console.log(key);
}

// 3 -
for (let key in family) {
    console.log(family[key]);
}