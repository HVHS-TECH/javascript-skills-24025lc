/****************************
Name of task: Task 9
Active Via Button
****************************/
console.log("Running T9-active_via_button.js")
console.log("Hi my name is Liam Chung")

/****************************
Functions
****************************/
function welcome(){
  // Change OUTPUT to match your HTML ID exactly
  let output = document.getElementById("spaceForJavaScriptOutput");
  output.innerHTML += "<p>Welcome to the Shop</p>";
}




/*Task 9 ****************************/



function start() {
  // 1. Get the HTML element
  let output = document.getElementById("spaceForJavaScriptOutput");
  
  // 2. Define variables and get input
  let currentYear = 2026;
  let userAge = prompt("Please enter your age:"); 
  
  // Convert text input to a number
  let ageNumber = parseInt(userAge);
  
  // 3. Validate and calculate
  if (isNaN(ageNumber)) {
    output.innerHTML = "<p style='color: red;'>Error: Please enter a valid number.</p>";
  } else {
    let answer = currentYear - ageNumber;
    // Single '=' overwrites the text clean on every button click
    output.innerHTML = "<p>Your birth year is: " + answer + "</p>";
  }
}