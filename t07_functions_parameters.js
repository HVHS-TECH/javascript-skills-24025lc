/****************************
Name of task: Task 7
Functions and Parameters
****************************/
console.log("Running T7-parameters.js")
console.log("Hi my name is Liam Chung")




/****************************
Functions
****************************/
function displaywelcome(_name, _price){
  // Change OUTPUT to match your HTML ID exactly
  let output = document.getElementById("spaceForJavaScriptOutput");
  output.innerHTML += "<p>Chocolate Bar "+_price+"</p>";
  output.innerHTML += "<p>Chips "+_price+"</p>";
  output.innerHTML += "<p>Drink "+_price+"</p>";

}



/****************************
Main Code
****************************/
displayWelcome("Chocolate bar",4)
