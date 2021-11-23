// 1. For each of the following code blocks, read the code and predict what the result of evaluating it would be.

var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a); // = 3
console.log(b); // = 1
console.log(c); // = 3

 var d = "hello";
 var e = false;

 d++;
 e++;
 console.log(d);  // d is NaN
console.log(e);  // e si 1

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed); // perplexed = undefined

var price = 2.7;
price.toFixed(2);
console.log(price.toFixed(2)); // price = 2.70

/*var price = "2.7";
price.toFixed(2);
console.log(price); // TypeError: price.toFixed is not a function*/

isNaN(0)
console.log(isNaN(0)); // false

isNaN(1)
console.log(isNaN(0)); // false

isNaN("")
console.log(isNaN("")); // false

isNaN("string")
console.log(isNaN("string")); // true

isNaN("0")
console.log(isNaN("0")); // false

isNaN("1")
console.log(isNaN("1")); // false

isNaN("3.145")
console.log(isNaN("3.145")); // false

isNaN(Number.MAX_VALUE)
console.log(isNaN(Number.MAX_VALUE)); // false

isNaN(Infinity)
console.log(isNaN(Infinity)); // false

isNaN("true")
console.log(isNaN("true")); // true

isNaN(true)
console.log(isNaN(true)); // false

isNaN("false")
console.log(isNaN("false")); // true

isNaN(false)
console.log(isNaN(false)); // false

// to illustrate why the isNaN() function is needed:
NaN == NaN // false

!true // false

!false // true

!!true // true

!!false // false

!!0 // false

!!-0 // false

!!1 // true

!!-1 // true

!!0.1 // true

!!"hello" // true

!!"" // false

!!'' // false

!!"false" // true

!!"0" // true


//Execute the following statement in the Chrome JavaScript console and then follow the directions below.

var sample = "Hello Codeup";

// Use .length to find the number of characters in the string.
console.log(sample.length); // 12

// Try to make the sample string all upper or all lower case.
console.log(sample.toUpperCase()); // "HELLO CODEUP"
console.log(sample.toLowerCase()); // "hello codeup"

// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
var sample = "Hello Codeup";
sample += " Students";

// Replace "Students" with "Class".
var sample = "Hello Codeup Students"
console.log(sample.replace("Students", "Class")); // result = "Hello Codeup Class"

// Find the index of "c" using .indexOf(). What do you observe?
sample.indexOf("c"); // -1

// Find the index of "C" using .indexOf().
sample.indexOf("C"); // 6

// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
let cIndex = sample.indexOf("C");
console.log(sample.substring(cIndex, sample.indexOf("p") + 1));

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let littleMermaid = 3;
let brotherBear = 5;
let Hercules = 1;
console.log((littleMermaid + brotherBear + Hercules) * 3);

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let Google = 400;
let Amazon = 380;
let Facebook = 350;
console.log((Facebook*10) + (Google*6) + (Amazon*4));

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
let classNotFull = true;
let classScheduleNotConflicted = true;

if(classNotFull && classScheduleNotConflicted) {
     console.log("Welcome to class.");
} else {
     console.log("You can't sign up for class, there is a conflict with your schedule.")
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
let itemsBought = 3;
let offerExpired = false;
let isPremiumMember = false;
console.log((itemsBought >= 2 || isPremiumMember) && offerExpired);

// Use the following code to follow the instructions below:

var username = 'codeup';
var password = 'notastrongpassword';

// Create a variable that holds a boolean value for each of the following conditions:

// the password must be at least 5 characters
console.log(password.length >= 5);
// the password must not include the username
console.log(password.includes(username));
console.log(username.includes(password));
// the username must be no more than 20 characters
console.log(username.length <= 20);
// neither the username or password can start or end with whitespace
let result = username.startsWith(" ");
let result1 = username.endsWith(" ");
console.log(result, result1);
let result2 = password.startsWith(" ");
let result3 = password.endsWith(" ");
console.log(result2, result3);
