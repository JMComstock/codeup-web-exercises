"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if(color === 'red') {
        return "red is the color of an apple";
    } else if (color === 'orange') {
        return "orange is the color of the fruit with the same name";
    } else if (color === 'yellow') {
        return "yellow is the color of a lemon";
    } else if (color === 'green') {
        return "green is the color of the grass";
    } else if (color === 'blue') {
        return "blue is the color of the sky";
    } else if (color === 'indigo') {
        return "indigo is a blue/purple dye used to change the color of clothing";
    } else if (color === "violet") {
        return "violet is the color of a plum";
    } else {
        return "I don't know anything about " + color;
    }
}

console.log(analyzeColor("yellow"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

function analyzeColor(randomColor) {
    return randomColor;
}
console.log(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

let color = "red";
switch(color) {
    case "red":
        console.log("red is the color of an apple.");
        break;
    case "orange":
        console.log("orange is the color of the breakfast fruit of the same name.");
        break;
    case "yellow":
        console.log("yellow is the color of a banana.");
        break;
    case "green":
        console.log("green is the color of the grass.");
        break;
    case "blue":
        console.log("blue is the color of the sky");
        break;
    case "indigo":
        console.log("indigo is a blue/purple color used in dyes for clothing");
        break;
    case "violet":
        console.log("violet is the color of a plum");
        break;
    default:
        console.log("i don't know anything about " + color + ".");
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

let pickColor = prompt("Enter a color from the rainbow ", " ");
console.log("You entered " + analyzeColor);
alert(analyzeColor(pickColor));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount) {
    if(luckyNumber == 0) {
        return totalAmount;
    } else if (luckyNumber == 1) {
        return (totalAmount * 0.1);
    } else if (luckyNumber == 2) {
        return (totalAmount * .25);
    } else if (luckyNumber == 3) {
        return (totalAmount * .35);
    } else if (luckyNumber == 4) {
        return (totalAmount * .5)
    } else if (luckyNumber == 5) {
        return 0;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

let totalAmount = prompt("Enter your total bill: ", "");
console.log("Your bill amount entered is: " + totalAmount);
alert("Your lucky number is: " + luckyNumber + "! Your price before the discount is: $" + totalAmount + " Your price after the discount is: $" + (calculateTotal(luckyNumber, totalAmount)));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let number = "";

let confirmed = confirm("Would you like to enter a number?");
if(confirmed === true) {
    prompt("Enter a number: ", number);
    alert("The number you entered is an " + evenOrOdd() + " number.");
    alert("The number you entered plus 100 equals: " + add100());
    alert("The number you entered is a " + negativeOrPositive() + " number.");
} else {
    alert("Later , bye!");
}
console.log(confirmed);

function evenOrOdd() {
    let number1 = parseInt(number);
    if(number1 % 2 === 0) {
        return "even ";
    } else {
        return "odd ";
    }
}

function add100(number) {
    let number2 = parseInt(number);
    return number2 += 100;
}

function negativeOrPositive() {
    let number3 = parseInt(number);
    if(number3 >= 0) {
        return "positive";
    } else {
        return "negative";
    }
}

