function kgToGrams(weight) {
    return weight * 1000;
}

console.log(kgToGrams(5)); 

const kgToGramsExpression = function(weight) {
    return weight * 1000;
};

console.log(kgToGramsExpression(3)); 

// Function declarations are hoisted, while function expressions are not.


const kgToGramsArrow = weight => weight * 1000;

console.log(kgToGramsArrow(2)); 


