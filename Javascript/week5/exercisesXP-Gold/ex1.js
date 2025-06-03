const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1,promise2,promise3])
    .then(value =>{
        console.log(value)
    })
    .catch(error => {
        console.error("One of the promises rejected:", error);
    });

// Why you receive this output: `Array [3, 42, "foo"]`

// * `promise1`: Is `Promise.resolve(3)`, so it immediately resolves with `3`.
// * `promise2`: Is the number `42`. `Promise.all()` treats this as an already-resolved promise with the value `42`.
// * `promise3`: Is a new Promise that resolves after `3000` milliseconds (3 seconds) with the string `'foo'`.

// Since all three inputs eventually resolve (two immediately, one after 3 seconds), `Promise.all()` waits for the slowest one (`promise3`) to complete. Once `promise3` resolves, `Promise.all()` collects all the resolved values (`3` from `promise1`, `42` from `promise2`, and `'foo'` from `promise3`) and returns them in an array, preserving their original order.

