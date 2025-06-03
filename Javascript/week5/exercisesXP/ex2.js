const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

myPromise.then((result) => {
  console.log(result); 
});