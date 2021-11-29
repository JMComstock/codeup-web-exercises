let stringToReverse = "Hardcore Software Developer";

let splitString = stringToReverse.split("");
console.log(splitString);

let reverseString = splitString.reverse();
console.log(reverseString);

let joinString = reverseString.join("");
console.log(joinString);

console.log("*******************************")

function reverseString1(string) {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

console.log(reverseString1("I am a software developer"));