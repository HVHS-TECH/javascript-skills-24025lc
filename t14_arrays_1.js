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


/*Task 13 ****************************/


