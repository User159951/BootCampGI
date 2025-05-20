const people = ["Greg", "Mary", "Devon", "James"];

// Exercise 1 :
people.splice(0, 1);
console.log(people);


people[2] = "Jason";
console.log(people);


people.push("Mehdi");
console.log(people);


console.log(people.indexOf("Mary"));



copyPoeple = people.slice(1, 3);


console.log(people.indexOf("Foo")); 


let last = people[people.length - 1];
console.log(last);



for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}


for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}