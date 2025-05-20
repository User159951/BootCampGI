// Exercise 6 : 
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}


let str = '';
for (let key in details) {
  str += key + ' ' +details[key] + ' ';
}
console.log(`${str.trim()}`);
