// Exercise 7 :

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];


const sortedNames = names.sort();
let secretScocietyName = '';
for (let i = 0; i < sortedNames.length; i++) {
    secretScocietyName += sortedNames[i][0];
}

console.log(secretScocietyName);