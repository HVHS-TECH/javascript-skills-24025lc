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
  
  // 2. Define the missing variables
  let currentYear = 2026;
  let userAge = prompt("Please enter your age:"); // Asks the user for input
  let answer = currentYear - userAge;
  
  // 3. Clear old text and display the new answer
  output.innerHTML = "<p>Your birth year is: " + answer + "</p>";
}
