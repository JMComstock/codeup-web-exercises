// loops
"use strict";


// -- WHILE --


/*
let numberOfCars = 20;
let usedSpots = 20;
let parked = false;
let counter = 0;

while(!parked) {
    console.log("we're on loop: " + counter + "-----------------------")
    if(usedSpots == numberOfCars) {
        console.log("there's no parking");
        numberOfCars--;
        console.log("num of cars: ", numberOfCars);
        counter++;
        console.log("counter: ", counter);
    } else {
        parked = true;
        console.log("you found a parking spot");
        console.log("num of cars: ", numberOfCars);
        console.log("counter: ", counter);
    }
}
*/

/*
let usedSpots = 20;
while(usedSpots > 0) {
    usedSpots--;
    console.log(`There are ${20 - usedSpots} available.`);
}
*/

/*
let parkingSpots = 20;
let emptyParkingSpotNum = Math.floor(Math.random() * 20);
let i = 0;

while (i <= parkingSpots) {
    console.log("-----------------")
    i++;
    if(i === emptyParkingSpotNum) {
        console.log("park in spot " + i);
        break;
    }
    console.log(i);
}
*/

// loop until our number reaches 15;

/*
let i =0;
while(i <= 15) {
    console.log("------------------")
    console.log("i before i++: ", i);
    i++;
    console.log("i after i++: ", i);
}
*/

/*
let i=0;
while (i <= 10) {
    console.log("i before i++ ", i);
    i++;
    console.log("i after i++ ", i)
}
console.log(i);
*/


// -- DO WHILE -- always run code first before it checks conditional

/*
let i = 0;
do {
    console.log("------------------")
    console.log("i before i++: ", i);
    i++;
    console.log("i after i++: ", i);
} while (i <= 15);
*/

// loop through numbers 0 - 50  by 2's
/*
let i = 0;
do {
    console.log("-------------");
    console.log("i before i++: ", i);
    i += 2;
    console.log("i after i++: ", i)
} while (i <= 50);
*/

/*
let x = 0
do {
    console.log("before x++", x);
    x++;
    console.log("after x++", x);
} while (x <= 10);

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// TODO: correct password is given.

let pass = "12345";
let input = prompt("Enter password: ", "");
while(input !== pass) {
    alert("Incorrect password, try again...");
    input = prompt("Try the password again")
}
alert("password correct");
*/

// // -- FOR LOOPS --
// for(1; 2; 3) {
//     code to execute
// }
// 1. starting point
// 2. stopping point
// 3. how to iterate

/*
for(let i=0; i<=15; i+=3) {
    console.log("my favorite number is: ", i);
}*/

let dozens = 0;
// need 4 dozen

for(let eggs=1; eggs <= 48; eggs++) {
    if(eggs % 12 ===0) {
        dozens++;
    }
    console.log("dozens: ",dozens);
    console.log("eggs: ", eggs);
}

// -- NESTED LOOPS --
// count 1 to 5
for(let counter = 1; counter <= 5; counter++) {
    console.log("FIRST counter: " + counter);
    for(let counterTwo = 5; counterTwo > 0; counterTwo--) {
        console.log("SECOND counter: " + counterTwo);
    }
    // counts from 5 to 1
}

