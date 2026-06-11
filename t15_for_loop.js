/****************************
Name of task: Task 1 
Put your header comment here!
****************************/
console.log("Running T1-intro.js")

//Variables
console.log("Hi my name is Liam Chung")



/****************************
 Main code 
 *****************************/





 /****************************
 Functions
 *****************************/


// This is a single line comment



/****************************
Name of task: Task 15
Put your header comment here!
****************************/

console.log("Running t15_for_loop.js")

/****************************
 Main code 
 *****************************/

/*******************************************************************************
 * Name of task: Task 15: For Loop (Bottles of Milk on the Web)
 * Description: Counts down the "99 Bottles of Milk" song safely onto the HTML page.
 * Author: Liam Chung
 * Date: May 2026
 ******************************************************************************/
console.log("Running t15_for_loop.js");

// Wait until the entire webpage is safe and ready
window.onload = function() {}
    
    // 1. Target the HTML output div
    let outputDiv = document.getElementById("spaceForJavaScriptOutput");

    // 2. Ask the user for the number of verses
    let input = prompt("Enter the starting number of bottles:", "99");
    let startNum = parseInt(input);

    // 3. Validate the input
    if (isNaN(startNum) || startNum <= 0) {
        outputDiv.innerHTML = "<p>Please refresh and enter a valid number greater than 0.</p>";
    } else {
        // Create a container string to hold all our HTML paragraphs
        let songHtml = "";

        // 4. Loop through the countdown
        for (let i = startNum; i > 0; i--) {
            let currentWord = (i === 1) ? "bottle" : "bottles";
            let nextWord = (i - 1 === 1) ? "bottle" : "bottles";
            let nextNum = i - 1;

            songHtml += `<p>${i} ${currentWord} of milk on the wall, ${i} ${currentWord} of milk.</p>`;
            
            if (nextNum > 0) {
                songHtml += `<p>Take one down and pass it around, ${nextNum} ${nextWord} of milk on the wall.</p><br>`;
            } else {
                songHtml += `<p>Take one down and pass it around, no more bottles of milk on the wall.</p><br>`;
            }
        }

        // 5. Final standard closing verse
        let finalBottles = "bottles";
        if (startNum == 1) {
            finalBottles = "bottle";
        }

        songHtml += `<p>No more bottles of milk on the wall, no more bottles of milk.</p>`;
        songHtml += `<p>Go to the store and buy some more, ${startNum} ${finalBottles} of milk on the wall.</p>`;

        // 6. Push everything into the web page safely
        outputDiv.innerHTML = songHtml;
    }

