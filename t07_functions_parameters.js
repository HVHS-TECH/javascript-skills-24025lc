/****************************
Name of task: Task 7
Functions and Parameters
****************************/
console.log("Running T7-parameters.js")
console.log("Hi my name is Liam Chung")




/****************************
Functions
****************************/
function displayProduct(_name, _price) {
  // Finds the HTML element where the text will be displayed
  let output = document.getElementById("spaceForJavaScriptOutput");
  
  
  output.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}

/****************************
Main Code
****************************/
// Calls the function three times with different arguments
displayProduct("Chocolate bar", "4");
displayProduct("Chips", "3");
displayProduct("Drink", "2.50");