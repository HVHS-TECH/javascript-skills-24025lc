/****************************
Name of task: Task 11
Data Types
****************************/
console.log("Running T11_data_types.js")
console.log("Hi my name is Liam Chung")




/****************************
Functions
****************************/

function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  let userName = NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}

/*Task 10 ****************************/

function getFormInput(){
  // 1. Get the HTML elements
  const NAME_FIELD = document.getElementById("nameField");
  let output = document.getElementById("spaceForJavaScriptOutput");
  
  // 2. Extract the text value entered by the user
  let userName = NAME_FIELD.value;
  
  // 3. Clear old text and display the dynamic greeting
  output.innerHTML = "<p>Your name is " + userName + "</p>";
  
  // 4. Clear the input box so it is empty for the next entry
  NAME_FIELD.value = "";
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
  
  // 3. Convert string data types into proper numeric types
  let ageNumber = parseInt(userAge);
  let moneyNumber = parseFloat(pocketMoney);
  
  // 4. Validate numbers and display the data on the page
  if (isNaN(ageNumber) || isNaN(moneyNumber)) {
    OUTPUT.innerHTML = "<p style='color: red;'>Error: Please enter valid numbers for both fields.</p>";
  } else {
    // Format the money value neatly to two decimal places
    let formattedMoney = moneyNumber.toFixed(2);
    
    // Output the results to the page
    OUTPUT.innerHTML = "<p>Age: " + ageNumber + " years old</p>" +
                       "<p>Pocket Money: $" + formattedMoney + "</p>";
                       
    // 5. Clear both input boxes for the next entry
    AGE_FIELD.value = "";
    MONEY_FIELD.value = "";
  }
}


