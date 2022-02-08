"use strict";

//PROMISES
// javascript object used as a placeholder, used often with requests

// function add(a, b) {
//     return a + b;
// }
// add(4, 6); // trigger immediately once it's called

// $.ajax("\"https://api.github.com/zen\"") // --> pending -->resolved --> rejected
// .done(function(res) {
//     console.log(res);
//}) // waits fot the response before its triggered/executed

// similar to a conditional, in that a function will not run unless X condition(typically timely ocndition is ready)

// PROMISE STATES
// PENDING - waiting for thr response / waiting for the condition to be met
// RESOLVED - condition we are waiting for is successfully met - your resolved function will execute
// REJECTED - when event happens, but the condition is not met successfully - trigger the function that will handle the failed error

// FETCH REQUESTS
// comes from fetch api, doesn't have to be embedded into our code to use

// GET REQUEST using FETCH API

// fetch()

// fetch("https://api.gthub.com/zn") // make the request // send info to make the request
// //
// // // how do we handle the response?  jason
// // // console.log(res);
// //
// //     // .then()
// //     // handle the response
// //     // accepts up to 2 parameters
// //     // 1. - callback function -> get executed only when the request comes back successfully --. state of the promise = resolved
// //         // -> always going to accept the successful response object from the request as a parameter
// //     // 2. callback function --> get executed only if the request is made but fails --> state of promise = rejected
// //     //  --> accept as a parameter? failed response / error
//     .then(
//         function (res) {
//             console.log(res);
//             console.log("successful");
//     }, // resolved
//       function (err) {
//             console.log(err);
//           console.log("failed");
//       } // rejected
// )

// fetch("https://www.boredapi.com/api/activity")
//     .then(function (data) {
//         console.log(data);
//     })

// fetch("https://www.boredapi.com/api/breeds/image/random")
//     .then(res => {
//         document.getElementById("dog").setAttribute("src", res.message);
//     },
//         err => {
//         console.log(err);
//         console.log("failed");
//         }
// )

// .catch() - handles any rejected response
// accepts a callback function
// that callback function accepts the error message as its parameter
// fetch("https://dog.ceo/api/breeds/image/random")
//     // the successful response object becomes the parameter for the callback function in the .then() method
//
//     .then(dogs => dogs.json())
//
//     // .then() accepts another callback function which accepts the returned item (the result) from the previous chain
//     .then((res) =>  {
//         document.getElementById("dog").setAttribute("src", res.message);
//
//     })
//
//     .catch(err => {console.log("error: ", err);
//     })

// let number = 0;
// let url = "";
//
// let myTodosRequest =
//     fetch(`https://jasonplaceholder.typicode.com/todos/${number}`)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         return 'hello'
//     })
//         .catch(err => {
//             console.log(err)
//         })
//
// function startApp(fn) {
//     fn()
// }
// startApp(myTodosRequest);

// CUSTOM PROMISES
// we create custom promises using the Promise object by initializing a new Promise object

const myPromise =
    new Promise((resolve, reject) => {
    setTimeout( () => {
        let randomNum = Math.random();
        if (randomNum > 0.5) {
            console.log("random number is: ", randomNum);
            resolve();
        } else {
            reject();
            console.log("random number is: ", randomNum);
        }
    }, 2500);

});
console.log(myPromise); // a pending promise

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));

