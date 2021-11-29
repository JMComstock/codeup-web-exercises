"use strict";
//what would you wear if the weather changes.
// sunny
// I would wear a t-shirt
//
// rainy
// I would wear a rain coat
//
// snowy
// I would wear my ski jacket


// let weather = "sunny";
// if(weather === "sunny") {
//     console.log("wear shirt")
// } else if (weather === "rainy") {
//     console.log("bring umbrella");
// } else if (weather === "snowy") {
//     console.log("wear ski-jacket")
// } else {
//     console.log("wear whatever");
// }

//
// let myAge = 40;
// let actualAge = 21;
// // params
// function checkAge(givenAge, realAge) {
//     console.log("givenAge: ", givenAge);
//     console.log("myAge: ", myAge);
//     console.log("realAge: ", realAge);
//     console.log("actualAge: ", actualAge);
//     if (givenAge == realAge) {
//         console.log("myAge is my actual age")
//     } else {
//         console.log("that's cool!")
//     }
// }
// // arguments
// checkAge(37, actualAge);


/*let jasonsGrade = 99;
let laurasGrade = 89;
let thermansGrade = 79;
let jacobsGrade = 69;
let christiansGrade = 59;

function gradeLetter(grade) {
    if (grade > 90) {
        return "A";
    } else if (grade >= 80 && grade <=89) {
        return "B";
    } else if (grade >= 70 && grade <=79) {
        return "C";
    } else if (grade >= 60 && grade <= 69) {
        return "D";
    } else {
        return "F";
    }
}
console.log("Jason's grade is " + jasonsGrade + " and he received a letter grade of " + gradeLetter(jasonsGrade));
console.log("Laura's grade is " + laurasGrade + " and she received a letter grade of " + gradeLetter(laurasGrade));
console.log("Therman's grade is " + thermansGrade + " and he received a letter grade of " + gradeLetter(thermansGrade));
console.log("Jacob's grade is " + jacobsGrade + " and he received a letter grade of " + gradeLetter(jacobsGrade));
console.log("Christian's grade is " + christiansGrade + " and he received a letter grade of " + gradeLetter(christiansGrade));*/

// == checks value
// === checks type and value

// ternary operator with multiple statements, it works from inside to outside  **best practice to use only one layer(?)**
// (condition) {true do this} else {do this}
// condition ? if true - do this : not true - do this

/*
let weather = "sunny";
let temp = 90;
weather  === "sunny"
    ? temp == "90"
        ? console.log("matches")
    : console.log("not matches")
    : console.log("it's sunny");*/

// let jasonsGrade = 99;
// let laurasGrade = 89;
// let thermansGrade = 79;
// let jacobsGrade = 69;
// let christiansGrade = 59;
// grade >= 90 ? console.log("you have an A")
//     : grade < 90 && grade >= 80 ? console.log("you have a B")
//         : grade < 80 && grade >= 70 ? console.log("you have a C")
//         : grade  < 70 && grade >= 60 ? console.log("you have a D")
//             :grade < 60 ? console.log("you got a F")

// switch statements

/*let weather = "rainy";
switch(weather) {
    case "sunny":
        console.log("wear sunglasses");
        break;
    case "rainy":
        console.log("take an umbrella");
        break;
    case "snowy":
        console.log("wear ski-jacket")
        break;
    case "tornado":
        console.log("hide");
        break;
    default:
        console.log("wear anything");
        break;
}*/

/*
let grade = "A";
let jasonsGrade = 99;
let laurasGrade = 89;
let thermansGrade = 79;
let jacobsGrade = 69;
let christiansGrade = 59;

switch(grade) {
    case "A":
        console.log("grade of A");
        break;
    case "B":
        console.log("grade of B");
        break;
    case "C":
        console.log("grade of C");
        break;
    case "D":
        console.log("grade of D");
        break;
    case "christiansGrade":
        console.log("grade aof F");
        break;
}
console.log("Jason scored a " + jasonsGrade + " and the letter grade is A");
console.log("Laura scored a " + laurasGrade + " and the letter grade is B");
console.log("Therman sored a " + thermansGrade + " and the letter grade is C");
console.log("Jacob scored a " + jacobsGrade + " and the letter grade is D");
console.log("Christian scored a " + christiansGrade + " and the letter grade is F");*/

let num1 = 15;

switch (num1) {
    case 10:
        console.log("ten!");
    case 15:
        console.log("fifteen!");
        num1 += 5;
    case 20:
        console.log("twenty!");
}