function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const allstrings = words.every(word => typeof word === 'string');

        if(allstrings){
            const uppercasedwords = words.map(word => word.toUpperCase());
            resolve(uppercasedwords);
        }else{
            reject("Error: All elements in the array must be strings.");
        }

    });
}


function sortWords(uppercasedwords){
    return new Promise((resolve, reject) => {
        if(uppercasedwords.length > 4){
            const sortedWords = [...uppercasedwords].sort();
            resolve(sortedWords);
        }else{
            reject("Error: Array length must be bigger than 4 to sort.");
        }
    });
}

//in this example, the catch method is executed, because the array contains a number
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed, because the array length is not bigger than 4
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))




