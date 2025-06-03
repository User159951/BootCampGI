const letters = ['x', 'y', 'z', 'z'];

const countsForLoop = {};

for (const letter of letters) {
    if (countsForLoop[letter]) {
        countsForLoop[letter]++;
    } else {
        countsForLoop[letter] = 1;
    }
}

console.log(countsForLoop);


const countsReduce = letters.reduce((accumulator, currentLetter) => {
    
    if (accumulator[currentLetter]) {

        accumulator[currentLetter]++;
    } else {
        accumulator[currentLetter] = 1;
    }
    return accumulator;
}, {}); 

console.log(countsReduce); 