// let landscape = function() {

//  let result = "";

//  let flat = function(x) {
//    for(let count = 0; count<x; count++){
//      result = result + "_";
//    }
//  }

//  let mountain = function(x) {
//    result = result + "/"
//    for(let counter = 0; counter<x; counter++){
//      result = result + "'"
//    }
//    result = result + "\\"
//  }

//  flat(4);
//  mountain(4);
//  flat(4)

//  return result;
// }

// landscape()

// the output : ____/''''\____

// let result = "";: When landscape() is called, the result variable is initialized as an empty string.
// flat(4);:
// The flat function is called with x = 4.
// The for loop runs 4 times. In each iteration, an underscore _ is appended to result.
// After this call, result will be: ____ (four underscores).
// mountain(4);:
// The mountain function is called with x = 4.
// First, a forward slash / is appended to result. result becomes: ____/
// Then, the for loop runs 4 times. In each iteration, an apostrophe ' is appended to result.
// result becomes: ____/''''
// Finally, a backslash \ is appended to result. result becomes: ____/''''\
// flat(4):
// The flat function is called again with x = 4.
// The for loop runs 4 more times. In each iteration, another underscore _ is appended to the current result.
// result becomes: ____/''''\____
// return result;: The landscape() function then returns the final value of result.
// Therefore, the predicted output is ____/''''\____.

//--------------------------------------------------------------------------------------------------------------------
//2

let landscape = () => { 

  let result = "";

  let flat = (x) => { 
    for(let count = 0; count < x; count++){
      result = result + "_";
    }
  }; 

  let mountain = (x) => { 
    result = result + "/"
    for(let counter = 0; counter < x; counter++){
      result = result + "'"
    }
    result = result + "\\"
  }; 

  flat(4);
  mountain(4);
  flat(4); 

  return result;
}; 

console.log(landscape()); 