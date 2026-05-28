/*******************************************************************************
 * Name of task: Task 18
 * Validation 
 ******************************************************************************/

console.log("Running T18_validation.js");

// Global array to store the shopping list items
let shoppingList = [];

// Wait for the DOM to load, then attach the form submit listener
document.addEventListener("DOMContentLoaded", () => {
  const FORM = document.getElementById("shoppingForm");
  if (FORM) {
    FORM.addEventListener("submit", handleFormSubmit);
  }
});

/**
 * Handles the form submission event, validates, and processes the item.
 */
function handleFormSubmit(event) {
  // Always prevent the default browser page reload first
  event.preventDefault(); 
  
  addItemToList();
}

/**
 * Validates the input field and adds the typed item to the global array.
 */
function addItemToList() {
  const ITEM_FIELD = document.getElementById("itemField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

  // 1. Extract the value and remove extra spacing
  let newItem = ITEM_FIELD.value.trim();

  // 2. HTML5 Validation Check: Stop processing if HTML restrictions fail
  if (!ITEM_FIELD.checkValidity()) {
    if (newItem === "") {
      OUTPUT.innerHTML = "<p style='color: red;'>Please type an item before clicking add.</p>";
    } else {
      OUTPUT.innerHTML = "<p style='color: red;'>Please use letters and spaces only.</p>";
    }
    return;
  }

  // 3. JavaScript Validation: Explicitly ensure the field is not a number
  if (!isNaN(newItem) || /[0-9]/.test(newItem)) {
    OUTPUT.innerHTML = "<p style='color: red;'>Numbers are not allowed. Please enter a valid item name.</p>";
    return;
  }

  // 4. JavaScript Validation: Check for duplicates (case-insensitive)
  if (shoppingList.some(item => item.toLowerCase() === newItem.toLowerCase())) {
    OUTPUT.innerHTML = "<p style='color: red;'>That item is already on your shopping list!</p>";
    return;
  }

  // 5. Success path: Add the item to the end of our shopping array
  shoppingList.push(newItem);

  // 6. Securely display the confirmation message (XSS Safe)
  OUTPUT.innerHTML = "<p>You have added <strong id='secureTarget'></strong> to the list.</p>";
  document.getElementById("secureTarget").textContent = newItem;

  // 7. Clear input box for next use
  ITEM_FIELD.value = ""; }






