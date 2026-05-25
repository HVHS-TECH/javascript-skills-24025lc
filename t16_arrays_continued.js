/****************************
 * Name of task: Task 14
 * Arrays Part 1
 ****************************/
console.log("Running T14_arrays_1.js");
console.log("Hi my name is Liam Chung");

function displayChocolatePreference() {
  // 1. Get references to the HTML elements
  const RATING_FIELD = document.getElementById("ratingField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

  // 2. Extract and convert the value to a number index
  let ratingIndex = Number(RATING_FIELD.value);

  // 3. Create the array containing the 10 required messages
  let messages = [
    "You loathe chocolate",
    "Chocolate is meh",
    "Chocolate is bad",
    "Chocolate is bad",
    "Chocolate is bad",
    "Chocolate is ok",
    "Chocolate is ok",
    "Chocolate is ok",
    "Chocolate is pretty good",
    "Chocolate is pretty good",
    "Chocolate is the best thing EVER!!!!"
  ];

  // 4. Conditional safety logic to check if the index is valid 
  if (ratingIndex >= 0 && ratingIndex <= 10) {
    // Look up the exact array message matching the user's choice
    let chosenMessage = messages[ratingIndex];
    OUTPUT.innerHTML = "<p>" + chosenMessage + "</p>";
  } else {
    OUTPUT.innerHTML = "<p style='color: red;'>Please enter a valid number between 0 and 10.</p>";
  }

  // 5. Clear input field for clean next use
  RATING_FIELD.value = "";
}


/****************************
 * Name of task: Task 16
 * Arrays Part 2
 ****************************/

/*******************************************************************************
 * Name of task: Task 16
 * Arrays Part 2 - Shopping List Form
 ******************************************************************************/

console.log("Running T16_arrays_2.js");

// Global array to store the shopping list items
let shoppingList = [];

/**
 * Action 1: Adds a typed item to the global array and shows a confirmation.
 */
function addItemToList() {
  // 1. Get references to the HTML elements
  const ITEM_FIELD = document.getElementById("itemField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

  // 2. Extract the value and remove extra spacing
  let newItem = ITEM_FIELD.value.trim();

  // 3. Validation: Ensure the user didn't submit an empty box
  if (newItem === "") {
    OUTPUT.innerHTML = "<p style='color: red;'>Please type an item before clicking add.</p>";
    return;
  }

  // 4. Add the item to the end of our shopping array
  shoppingList.push(newItem);

  // 5. Display the specific confirmation message required
  OUTPUT.innerHTML = "<p>You have added <strong>" + newItem + "</strong> to the list.</p>";

  // 6. Clear input box for next use
  ITEM_FIELD.value = "";
}

/**
 * Action 2: Loops through the array and outputs every single item on a new line.
 */
function displayShoppingList() {
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

  // 1. Check if the list has any items in it first
  if (shoppingList.length === 0) {
    OUTPUT.innerHTML = "<p>Your shopping list is currently empty!</p>";
    return;
  }

  // 2. Create the required heading string
  let listHtml = "<h3>These are the items on your shopping list:</h3>";

  // 3. Loop through the array and append each item on a separate line using <br>
  for (let i = 0; i < shoppingList.length; i++) {
    listHtml += (i + 1) + ". " + shoppingList[i] + "<br>";
  }

  // 4. Output the finalized list blocks to the screen
  OUTPUT.innerHTML = listHtml;
}



