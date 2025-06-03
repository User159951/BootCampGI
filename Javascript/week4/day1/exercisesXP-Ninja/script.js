function mergeWords(string) {
  return function(nextString) {
    if (nextString === undefined) { 
      return string; 
    } else {
 
      return mergeWords(string + ' ' + nextString);
    }
  }
}


const result1 = mergeWords('Hello')();
console.log(`mergeWords('Hello')(): '${result1}'`); 


const result2 = mergeWords('There')('is')('no')('spoon.')();
console.log(`mergeWords('There')('is')('no')('spoon.')(): '${result2}'`); 

const addWord1 = mergeWords('Hello');
const addWord2 = addWord1('beautiful');
const addWord3 = addWord2('world');
const finalSentence = addWord3();
console.log(`Step-by-step merge: '${finalSentence}'`); 