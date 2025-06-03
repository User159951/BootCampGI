
const resolvedPromise = Promise.resolve(3);

resolvedPromise
  .then(value => {
    console.log("Resolved value:", value); 
  })
  .catch(error => {
    console.log("This should not happen:", error); 

  });

const rejectedPromise = Promise.reject("Boo!");


rejectedPromise
  .then(value => {
    console.log("This should not happen:", value); 
  })
  .catch(error => {
    console.log("Rejected with error:", error); 
  });