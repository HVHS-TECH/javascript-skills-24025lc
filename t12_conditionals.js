/****************************
Name of task: Task 12
Conditionals
****************************/
console.log("Running T12_conditionals.js");
console.log("Hi my name is Liam Chung");

/*Task 12 ****************************/

function checkAffordability() {
  // 1. Get references to the HTML elements
  const AGE_FIELD = document.getElementById("ageField");
  const MONEY_FIELD = document.getElementById("moneyField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  
  // 2. Extract and convert values to numbers
  let userAge = Number(AGE_FIELD.value);
  let pocketMoney = Number(MONEY_FIELD.value);
  
  // 3. Conditional Logic to check affordability
  let message = "";

  if (pocketMoney >= 4) {
    message = "A chocolate bar costs $4<br><br>You CAN afford a chocolate bar";
  } else {
    message = "A chocolate bar costs $4<br><br>Sorry you CAN'T afford a chocolate bar";
  }

  // 4. Output the result directly to your page layout
  OUTPUT.innerHTML = "<p>" + message + "</p>";
  
  // 5. Clear input fields for clean next use
  AGE_FIELD.value = "";
  MONEY_FIELD.value = "";
}