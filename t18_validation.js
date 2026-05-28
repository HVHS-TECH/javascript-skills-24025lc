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

  // 3.5 Validation: Reject numbers and ensure only letters/spaces are allowed
  if (/[0-9]/.test(newItem)) {
    OUTPUT.innerHTML = "<p style='color: red;'>Numbers are not allowed. Please enter text only.</p>";
    return;
  }

  // 4. Validation: Check for duplicates (case-insensitive)
  if (shoppingList.some(item => item.toLowerCase() === newItem.toLowerCase())) {
    OUTPUT.innerHTML = "<p style='color: red;'>That item is already on your shopping list!</p>";
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
