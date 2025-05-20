// Exercise 2 :
let colors = ["red", "blue", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i +1} choice is ${colors[i]}`);
}


let suffix = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffix[i]} choice is ${colors[i]}`);
}