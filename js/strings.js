let sentence1 = "My name is Jason Comstock.\n";
let sentence2 = "I am a Marine Veteran who likes to code.\n";
let sentence3 = "I am looking forward to a career in tech after Codeup!";

console.log(sentence1 + sentence2 + sentence3);

/*
let myName = "jason";
let charArr = myName.split('');
let firstLetter = charArr.shift().toUpperCase();
console.log(firstLetter);
console.log(charArr);

console.log(firstLetter + charArr.join(''));
*/

let myName = "jason";
let firstLetter = myName.charAt(0).toUpperCase();
myName = myName.substr(1,4);
console.log(firstLetter + myName);


