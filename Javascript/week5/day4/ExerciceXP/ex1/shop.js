const products = require('./products');

function findProductByName(productName){
    return products.find(product => product.name.toLowerCase() === productName.toLowerCase());
}

const product1 = findProductByName('Laptop');
if (product1) {
  console.log(`Found product: ${product1.name}, Price: $${product1.price}, Category: ${product1.category}`);
} else {
  console.log("Product 'Laptop' not found.");
}

const product2 = findProductByName('Keyboard');
if (product2) {
  console.log(`Found product: ${product2.name}, Price: $${product2.price}, Category: ${product2.category}`);
} else {
  console.log("Product 'Keyboard' not found.");
}

const product3 = findProductByName('Desk Lamp'); 
if (product3) {
  console.log(`Found product: ${product3.name}, Price: $${product3.price}, Category: ${product3.category}`);
} else {
  console.log("Product 'Desk Lamp' not found.");
}

const product4 = findProductByName('WEBCAM'); 
if (product4) {
  console.log(`Found product: ${product4.name}, Price: $${product4.price}, Category: ${product4.category}`);
} else {
  console.log("Product 'WEBCAM' not found.");
}