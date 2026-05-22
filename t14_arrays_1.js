/****************************
Name of task: Task 13
Function with Return Values
****************************/
console.log("Running T14_arrays_1.js");
console.log("Hi my name is Liam Chung");






/*Task 13 ****************************/

// 1. The required function that calculates and returns change
function calculateChange(_money, _price) {
  let changeAmount = _money - _price;
  return changeAmount;
}

// 2. The main function linked to your HTML button
function checkAffordability() {
  // Get references to the HTML elements
  const AGE_FIELD = document.getElementById("ageField");
  const MONEY_FIELD = document.getElementById("moneyField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  
  // Extract and convert values to numbers
  let userAge = Number(AGE_FIELD.value);
  let pocketMoney = Number(MONEY_FIELD.value);
  let chocolatePrice = 4;
  
  let message = "";

  // Conditional Logic to check affordability
  if (pocketMoney >= chocolatePrice) {
    // Call the function using your parameters and save the returned value
    let change = calculateChange(pocketMoney, chocolatePrice);
    
    message = "A chocolate bar costs $4<br><br>You CAN afford a chocolate bar<br>You will get $" + change + " change";
  } else {
    message = "A chocolate bar costs $4<br><br>Sorry you CAN'T afford a chocolate bar";
  }

  // Output the result directly to your page layout
  OUTPUT.innerHTML = "<p>" + message + "</p>";
  
  // Clear input fields for clean next use
  AGE_FIELD.value = "";
  MONEY_FIELD.value = "";
}


/*Task 14 ****************************/

function displayChocolatePreference() {
  // 1. Get references to the HTML elements
  const RATING_FIELD = document.getElementById("ratingField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  
  // 2. Extract and convert the value to a number index
  let ratingIndex = Number(RATING_FIELD.value);
  
  // 3. Create the array containing the four required messages
  let messages = [
    "You loath chocolate",
    "Chocolate is meh",
    "Chocolate is pretty good",
    "Chocolate is the best thing EVER!!!!"
  ];
  
  // 4. Conditional safety logic to check if the index is valid (0, 1, 2, or 3)
  if (ratingIndex >= 0 && ratingIndex <= 3) {
    // Look up the exact array message matching the user's choice
    let chosenMessage = messages[ratingIndex];
    OUTPUT.innerHTML = "<p>" + chosenMessage + "</p>";
  } else {
    OUTPUT.innerHTML = "<p>Please enter a valid number between 0 and 3.</p>";
  }
  
  // 5. Clear input field for clean next use
  RATING_FIELD.value = "";
}


