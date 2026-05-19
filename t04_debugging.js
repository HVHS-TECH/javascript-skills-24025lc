
var length = 8;
var width = 10; // Fixed: Added missing semicolon

console.log("Task 4 - Debugging"); // Fixed: Typo in console.log and brackets

// 2. Calculate the area (Fixed: Changed + to *)
var area = length * width;

// 3. Calculate the perimeter (Fixed: Added missing *)
var perimeter = 2 * length + 2 * width; 

// 4. Display the results
console.log("An area of a piece of paper with a length of " + length + ", and a width of " + width + " is " + area);
console.log("The same piece of paper has a perimeter of " + perimeter);

// 5. Check the result (Fixed: Corrected logic sign and missing quote)
if (area > perimeter){
    console.log("Yay, your area is larger, this is right for this example");
} else {
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example");
}