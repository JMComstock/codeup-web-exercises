
function tryToGetADrink(isAtBar, bac, age, cashOnHand) { // the function definition contains PARAMETERS

    let canHaveADrink = (isAtBar && bac < .08 && age >= 21 && cashOnHand >= 5.00)

    if (canHaveADrink) {
        console.log("Have a brewski my dude!");
    } else {
        console.log("Sorry buddy, no brew for you.")
    }
}

console.log("First invocation:")
tryToGetADrink(true, .07,20, 5.01);  //  when you CALL (invoke) the function, you pass ARGUMENTS

console.log("Second invocation:")
tryToGetADrink(true, .00,32,100.00);



function isTodayAGoodDayToFly(isCloudy, planesScheduledToFly) {

    if(!isCloudy && planesScheduledToFly < 10) {
        console.log("Today is a good day to fly!");
    } else {
        console.log("It is not a good day to fly.");
    }
}

isTodayAGoodDayToFly(false, 9);


function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let fullName = getFullName("Jason", "Comstock");
console.log(fullName);


function addSum(x, y) {
    return x + y;
}
console.log(addSum(1, 2));

function subtractSum(a, b) {
    return a - b;
}
console.log(subtractSum(4,2));

function multiplySum(a, b) {
    return a * b;
}
console.log(multiplySum(5,3));

function divideSum(c, d) {
    return c / d;
}
console.log(divideSum(10, 2));

function remainderReturn(x, y) {
    return x % y;
}
console.log(remainderReturn(6, 5));