"use strict";


// quicker way than Math.pow(2, 8)

// let x = 2 ** 8
// console.log(x);

// constants - can't be changed once assigned, and have to be assigned

// const MY_CONST = 1;


// var vs let  scope matters more with let than var

// if(true) {
//     var test1 = "bob";
//     let test3 = "jason";
// }
// console.log(test1);
// console.log(test3);
//
// function foo1() {
//     var test2 = "lou";
//     let test4 = "jessica";
// }
// foo1();
// console.log(test2);
// console.log(test4);

// template strings - allows for interpolation in strings
//
// let fullName = "Jason";
// let age = 40;
// let gender = "Male";
// let job = "Developer";
//
// console.log("Name: " + fullName + " Age: " + age + " Gender: " + gender + " Job: " + job); // not template
// console.log(`Name: ${fullName} Age ${age} Gender ${gender} Job: ${job}`);
// console.log(`Name: ${fullName}
//         Age ${age}
//         Gender ${gender}
//         Job: ${job}`);

//
// let fruits = [
//     {
//         name: "apple",
//         qty: 4
//     },
//     {
//         name: "pear",
//         qty: 2
//     },
//     {
//         name: "banana",
//         qty: 5
//     },
//     {
//         name: "grape",
//         qty: 3
//     }
// ]
//
// for (let fruit of fruits) {
//     if(fruit.name === "banana") {
//         break;
//     }
//     console.log("This is for fruit ", fruit);
//     // fruit = "asdfasdf";
//     fruit.qty = 99;
//     fruit.color = "red";
// }
// console.log("This is for fruits ", fruits);


// arrow function

// function foo2(x) {
//     return x + "!";
// }
//
// const foo3 = x => x + "!";
// console.log(foo3("bob"));



// $("#myButton").click( function (event) {
//     event.preventDefault();
//
//     console.log(this.value);
//     if(validateData) {
//         processData();
//     }
// });
//
// $("#myButton").click( (event) => {
//     event.preventDefault();
//
//     console.log(this.value);
//     if(validateData) {
//         processData();
//     }
// });

// Default Function Parameter Values

// old way
// function sayHello(name = 'World!') {
//     // if (typeof name === 'undefined') {
//     //     name = 'World';
//     // }
//     return 'Hello, ' + name + '!';
// }
//
// sayHello(); // "Hello, World!"
// sayHello('codeup'); // "Hello, codeup!"


let fullName = "Jason";
let age = 40;
let gender = "Male";
let job = "Developer";

var person = {
    fn: fullName,
    a: age,
    g: gender,
    j: job
}

//
// let person = {
//     fullName,
//     age,
//     gender,
//     job
// }
// console.log(person);

// Object Destructuring
//
// var fn = person.fullName;
//
// var {fn, a, g, j} = person;
// console.log(fn, a, g, j);

const food = [`olive`, 'pizza', `pasta`, `banana`]

const [a, b, c, d] = food;
console.log(a + " " + b);


















