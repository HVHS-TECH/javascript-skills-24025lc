/****************************
Name of task: Task 10
Input from HTML 
****************************/
console.log("Running T10-input_from_HTML_js")
console.log("Hi my name is Liam Chung")




/****************************
Functions
****************************/
function displaywelcome(_name, _price){
  // Change OUTPUT to match  HTML ID exactly
  let output = document.getElementById("spaceForJavaScriptOutput");
  output.innerHTML += "<p>Chocolate Bar "+_price+"</p>";
  output.innerHTML += "<p>Chips "+_price+"</p>";
  output.innerHTML += "<p>Drink "+_price+"</p>";

}

function start() {
  spaceForJavaScriptOutput.innerHTML
  spaceForJavaScriptOutput.innerHTML
  answer = currentYear - userAge;
  spaceForJavaScriptOutput
}

/****************************
Main Code
****************************/
displayWelcome("Chocolate bar",4)



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


/*Task 10 ****************************/

function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  let userName = NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}
