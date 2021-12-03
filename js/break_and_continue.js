
let enterOdd = prompt("Enter an odd number between 1 and 50: ", "");
while(enterOdd % 2 === 0 || enterOdd < 1 || enterOdd > 50) {
    alert("You did not enter an odd number between 1 and 50...");
    enterOdd = prompt("Please enter an odd number between 1 and 50.");
    if((enterOdd % 2 != 0) && enterOdd > 0 && enterOdd < 50) {
        break;
    }
}
alert("You entered an odd number between 1 and 50!");

let numSkip = prompt("Enter a number to skip: ", "");

do {
    for(let i=1; i < 51; i++) {
        if (i % 1 === 0) {
            console.log("Here is an odd number: " + i);
        }
    }
} while(numSkip) {
    console.log("Yikes! skipping number: " + numSkip);
}
alert("Number to skip is: " + numSkip);

