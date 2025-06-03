let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};


const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};


displayGroceries();


const cloneGroceries = () => {
    let user = client;

    client = "betty";

    console.log("user",user);
    console.log("client",client);
      // user is not affected because strings are primitive and copied by value

    let shopping = groceries;

    shopping.totalPrice = "35$";
    shopping.other.paid = false;
    // groceries is affected because objects are copied by reference


};


cloneGroceries();