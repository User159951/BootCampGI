
function allTruthy(...args) {
  
    return args.every(param => Boolean(param));
}


console.log("--- allTruthy Examples ---");

console.log(`allTruthy(true, true, true) ➞ ${allTruthy(true, true, true)}`);
// Expected: true

console.log(`allTruthy(true, false, true) ➞ ${allTruthy(true, false, true)}`);
// Expected: false

console.log(`allTruthy(5, 4, 3, 2, 1, 0) ➞ ${allTruthy(5, 4, 3, 2, 1, 0)}`);
// Expected: false (because 0 is falsy)

console.log(`allTruthy("hello", 1, true) ➞ ${allTruthy("hello", 1, true)}`);
// Expected: true

console.log(`allTruthy(null, "world", 10) ➞ ${allTruthy(null, "world", 10)}`);
// Expected: false (because null is falsy)

console.log(`allTruthy(undefined, 1, 2) ➞ ${allTruthy(undefined, 1, 2)}`);
// Expected: false (because undefined is falsy)

console.log(`allTruthy("", "a", "b") ➞ ${allTruthy("", "a", "b")}`);
// Expected: false (because "" (empty string) is falsy)

console.log(`allTruthy([], {}, "test") ➞ ${allTruthy([], {}, "test")}`);
// Expected: true (empty array and empty object are truthy)

console.log(`allTruthy(1) ➞ ${allTruthy(1)}`);
// Expected: true

console.log(`allTruthy() ➞ ${allTruthy()}`);
// Expected: true (an empty array of arguments, so 'every' returns true)

