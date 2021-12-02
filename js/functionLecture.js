"use strict";
// function tryToGetADrink(isAtBar, bac, age, cashOnHand) { // the function definition contains PARAMETERS
//
//     let canHaveADrink = (isAtBar && bac < .08 && age >= 21 && cashOnHand >= 5.00)
//
//     if (canHaveADrink) {
//         console.log("Have a brewski my dude!");
//     } else {
//         console.log("Sorry buddy, no brew for you.")
//     }
// }
//
// console.log("First invocation:")
// tryToGetADrink(true, .07,20, 5.01);  //  when you CALL (invoke) the function, you pass ARGUMENTS
//
// console.log("Second invocation:")
// tryToGetADrink(true, .00,32,100.00);
//
//
//
// function isTodayAGoodDayToFly(isCloudy, planesScheduledToFly) {
//
//     if(!isCloudy && planesScheduledToFly < 10) {
//         console.log("Today is a good day to fly!");
//     } else {
//         console.log("It is not a good day to fly.");
//     }
// }
//
// isTodayAGoodDayToFly(false, 9);
//
//
// function getFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
// let fullName = getFullName("Jason", "Comstock");
// console.log(fullName);
//
//
// function addSum(x, y) {
//     return x + y;
// }
// console.log(addSum(1, 2));
//
// function subtractSum(a, b) {
//     return a - b;
// }
// console.log(subtractSum(4,2));
//
// function multiplySum(a, b) {
//     return a * b;
// }
// console.log(multiplySum(5,3));
//
// function divideSum(c, d) {
//     return c / d;
// }
// console.log(divideSum(10, 2));
//
// function remainderReturn(x, y) {
//     return x % y;
// }
// console.log(remainderReturn(6, 5));


// FUNCTION SCOPING

// function tellMeIfDoggoWasGood() {
//     var isAGoodDog = isAGoodDog;
//     return isAGoodDog
//         ? "Such a good boy!"
//         : "Eh, hes had better days";
// }
// function wereTheyReallyAGoodDog() {
//     var isAGoodDog = true;
//     return isAGoodDog;
// }
// console.log(wereTheyReallyAGoodDog());
// console.log(tellMeIfDoggoWasGood());


// Write a function that accepts the top three bowling scores and returns the average.

let first = 300;
let second = 185;
let third = 256;

function avgScore(score1, score2, score3) {
    let average = (score1 + score2 + score3) / 3;
    return average;
}
console.log("The average score is " + avgScore(first, second, third));


// Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
let highScore = 300;

function bestScore() {
    if(highScore % 3 ==0 && highScore % 5 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(bestScore());

// Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case
// BONUS:write a function that returns “TheBestBowlingPlaceEver” and return it all lowercase with a space between each word

let bowlingPlace = "ThEbEsTbOwLiNgPlAcEever";

function makeLowerCase() {
    return bowlingPlace.toLowerCase();
}
console.log(makeLowerCase(bowlingPlace));


// Write a function that returns the type of each of the variables (call the function once per variable)
let score = 109;
let name = "bowling Is Fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"];

function tellType(thing) {
    return typeof thing;
}

console.log(tellType(score));
console.log(tellType(name));
console.log(tellType(isBowlingFun));
console.log(tellType(players));


// Write a function that executes all of the above functions

function executeAll() {
    avgScore();
    bestScore();
    makeLowerCase();
    tellType();
}
executeAll();

// Execute the following functions, and find the Error: (Hint: try console logging the result)
let firstName = "Jason";
let lastName = "Comstock";

function myFunction() {
    return (firstName + " " + lastName);
}
console.log(myFunction());

let greatness = "Laura";
function thatsNotMyName(name) {
    if (name = "Laura") {
        return "that's me!, I'm " + name;
    } else {
        return "that's not my name";
    }
}

console.log(thatsNotMyName(greatness));

