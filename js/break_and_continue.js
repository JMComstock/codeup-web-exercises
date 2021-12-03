let userNumber = 0;
do {
    userNumber = Number(prompt("Enter an odd number between 1 and 50:"));
    if(userNumber < 1 || userNumber >50) {
        alert("Number out of bounds");
    } else if (userNumber % 2 === 0) {
        alert("Number is not an odd number");
    } else if (isNaN(userNumber)) {
        alert("That;s not a number");
    } else {
        alert("You entered a valid number");
        break;
    }
} while (true)

console.log("Number to skip is: " + userNumber);

for(let i=1; i<=50; i+=2) {
    if(i === userNumber) {
        console.log("Yikes! Skipping number: " + userNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}
