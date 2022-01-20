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

let stringToFiler = "bJI*ENsd4fRAIR5VIrsRFA-ijgRar";
let i=0;
let character='';
while (i <= stringToFiler.length - 1){
    character = stringToFiler.charAt(i);
    if (!character.match(/[A-Za-z]/i)){
        console.log(character + " is not a character");
    }else{
        if (character === character.toUpperCase()) {
           console.log("letter " + character + " is uppercase");
        }
        if (character === character.toLowerCase()){
            console.log("letter " + character + " is lowercase");
        }
    }
    i++;
}
