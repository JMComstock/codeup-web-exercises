'use script'

// TODO: Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"]
//  and returns a new array that contains only those whose name have only 4 letters in them.

let arrayToFilter = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

arrayToFilter.forEach(name => console.log(name));
if(name.length < 4 || name.length > 4) {
    arrayToFilter.delete(name);
}
console.log(arrayToFilter);