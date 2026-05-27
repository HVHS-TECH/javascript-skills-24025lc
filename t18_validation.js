
/*******************************************************************************
 * Name of task: Task 18
 * Validation
 ******************************************************************************/

console.log("Running T18_validation.js");

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



