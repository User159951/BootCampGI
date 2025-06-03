let allBoldItems;

// Function to collect all bold elements
function getBoldItems() {
  allBoldItems = document.querySelectorAll("#text strong");
}

// Function to highlight bold items in blue
function highlight() {
  allBoldItems.forEach(item => {
    item.style.color = "blue";
  });
}

// Function to return bold items to black
function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = "black";
  });
}


getBoldItems();


const paragraph = document.getElementById("text");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
