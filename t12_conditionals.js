/****************************
Name of task: Task 12
Conditionals
****************************/
console.log("Running T12_conditionals.js")
console.log("Hi my name is Liam Chung")


/****************************
Functions
****************************/

function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  let userName = NAME_FIELD.value;
}




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


/*Task 12 ****************************/

function handleUserData() {
  // 1. Get references to the HTML elements
  const AGE_FIELD = document.getElementById("ageField");
  const MONEY_FIELD = document.getElementById("moneyField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  
  // 2. Extract the values from the inputs
  let userAge = Number(AGE_FIELD.value);
  let pocketMoney = Number(MONEY_FIELD.value);
  
  // 3. Conditional Logic for the chocolate bar
  let message = "A chocolate bar costs $4<br><br>";

  if (pocketMoney >= 4) {
    message += "You CAN afford a chocolate bar";
  } else {
    message += "Sorry you CAN'T afford a chocolate bar";
  }


}
