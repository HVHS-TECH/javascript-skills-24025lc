/****************************
 * Name of task: Task 14
 * Arrays Part 1
 ****************************/
console.log("Running T14_arrays_1.js");
console.log("Hi my name is Liam Chung");

function displayChocolatePreference() {
  // 1. Get references to the HTML elements
  const RATING_FIELD = document.getElementById("ratingField");
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

  // 2. Extract and convert the value to a number index
  let ratingIndex = Number(RATING_FIELD.value);

  // 3. Create the array containing the 10 required messages
  let messages = [
    "You loathe chocolate",
    "Chocolate is meh",
    "Chocolate is bad",
    "Chocolate is bad",
    "Chocolate is bad",
    "Chocolate is ok",
    "Chocolate is ok",
    "Chocolate is ok",
    "Chocolate is pretty good",
    "Chocolate is pretty good",
    "Chocolate is the best thing EVER!!!!"
  ];

  // 4. Conditional safety logic to check if the index is valid 
  if (ratingIndex >= 0 && ratingIndex <= 10) {
    // Look up the exact array message matching the user's choice
    let chosenMessage = messages[ratingIndex];
    OUTPUT.innerHTML = "<p>" + chosenMessage + "</p>";
  } else {
    OUTPUT.innerHTML = "<p style='color: red;'>Please enter a valid number between 0 and 10.</p>";
  }

  // 5. Clear input field for clean next use
  RATING_FIELD.value = "";
}


