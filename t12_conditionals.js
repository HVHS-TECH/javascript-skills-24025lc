/****************************
Name of task: Task 12
Conditionals
****************************/
console.log("Running T11_data_types.js")
console.log("Hi my name is Liam Chung")






/*Task 11 ****************************/

function handleUserData() {
  // 1. Get references to the HTML elements
  const AGE_FIELD = document.getElementById("ageField");
  const MONEY_FIELD = document.getElementById("moneyField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  
  // 2. Extract the values from the inputs
  let userAge = AGE_FIELD.value;
  let pocketMoney = MONEY_FIELD.value;
  
  // 3. Format the money value neatly to two decimal places
  let formattedMoney = Number(pocketMoney).toFixed(2);
}
