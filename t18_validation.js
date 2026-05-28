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

  // 4. New Validation: Block text that looks like a name (letters and spaces only)
  // This allows "2 apples" or "milk" but blocks "John" or "Mary Jane"
  const NAME_REGEX = /^[A-Za-z\s]+$/;
  if (NAME_REGEX.test(newItem)) {
    OUTPUT.innerHTML = "<p style='color: red;'>Names or plain text names are not allowed on this shopping list.</p>";
    return;
  }

  // 5. Add the item to the end of our shopping array
  shoppingList.push(newItem);

  // 6. Securely display the specific confirmation message (XSS Safe)
  OUTPUT.innerHTML = "<p>You have added <strong id='secureTarget'></strong> to the list.</p>";
  document.getElementById("secureTarget").textContent = newItem;

  // 7. Clear input box for next use
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

  // 2. Clear previous content and add the required heading string
  OUTPUT.innerHTML = "<h3>These are the items on your shopping list:</h3><div id='listContainer'></div>";
  const CONTAINER = document.getElementById("listContainer");

  // 3. Loop through the array and append each item securely using textContent
  for (let i = 0; i < shoppingList.length; i++) {
    const itemRow = document.createElement("div");
    itemRow.textContent = (i + 1) + ". " + shoppingList[i];
    CONTAINER.appendChild(itemRow);
  }
}



// Convert input to lowercase to catch "John" or "john"
if (BANNED_NAMES.includes(newItem.toLowerCase())) {
  OUTPUT.innerHTML = "<p style='color: red;'>Names or plain text names are not allowed on this shopping list.</p>";
  return;
}