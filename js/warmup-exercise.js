'use strict';

// TODO: Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"]
//  and returns a new array that contains only those whose name have only 4 letters in them.
//
// let arrayToFilter = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];
//
// let result = arrayToFilter.filter(word => word.length === 4);
// console.log(result);

// TODO: write a function that accepts a string and checks whether each character in the string is upperCase or lowerCase and returns "letter [insert letter] is uppercase/lowercase", accordingly.
//  Bonus: return "is not a character" if it's not a letter
//
// TODO: input example: "bJI*ENsd4fRAIR5VIrsRFA-ijgRar"

// let stringToFiler = "bJI*ENsd4fRAIR5VIrsRFA-ijgRar";
// let i=0;
// let character='';
// while (i <= stringToFiler.length - 1){
//     character = stringToFiler.charAt(i);
//     if (!character.match(/[A-Za-z]/i)){
//         console.log(character + " is not a character");
//     } else {
//         if (character === character.toUpperCase()) {
//            console.log("letter " + character + " is uppercase");
//         }
//         if (character === character.toLowerCase()){
//             console.log("letter " + character + " is lowercase");
//         }
//     }
//     i++;
// }

// TODO: PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34

let input1 = "42958372";
let input2 = "917485";
let arr1 = input1.split('');
let arr2 = input2.split('');
let numArr1 = [];
let numArr2 = [];
arr1.forEach(num => {
    num = Number(num);
    numArr1.push(num);
})
console.log(numArr1);

arr2.forEach(num => {
    num = Number(num);
    numArr2.push(num);
})
console.log(numArr2);

// Using reduce function to find the sum
let sum = numArr1.reduce(function (x,y) {
    return x + y;
}, 0);  // return a single value

let sum2 = numArr2.reduce(function (x,y) {
    return x + y;
}, 0)
//
// document.write("Sum using Reduce method: " + sum);
console.log("The sum of input1 is: " + sum);
console.log("The sum of input2 is: " + sum2);
