"use strict";

console.log("---------------------------------------------");
console.log("RESTful API REQUESTS");
console.log("---------------------------------------------");

// fetch Get request
// CONTENT-TYPE: application/json
// Method TYPE - what kind of action do you want to take with the api
    // get - getting information
        // REQUIRED FOR GET REQUEST
            // - url + endpoint
            // - api token
            // - sometimes and if of the data
    // WHAT WILL THE RESPONSE LOOK LIKE?
        //  response object => response.json()
        // {"id": 4, "username": "jason"}

    // POST - adding information / pushing data into the API (writing)
        // access keys (headers)
        // request body
        // data to be added
        // REQUIRED IN POST REQUEST
            // - url + endpoint
            // - what we're adding - JSON OBJECT
    // WHAT WILL THE RESPONSE LOOK LIKE?
        // - confirmation is not guaranteed
        // response object --> res => res.json() --> res.status \\ res.ok
        // err if err
        // we can either make a 2nd get request after the post request was made
        // we can look in to the data/api itself --> if you have access to it
        // trusting the status of the response

    // PUT - changes something that's already on the API (editing)
        // what should be sent with a PUT request
        // identify the data you're changing
        // what you're changing to -- JSON
        // where does the id go when making the request --> the end of the url
        // where do I add the obj that I'm changing the specified thing ot do? --> options object, which is the second parameter to my .fetch() inside of my 'body' property
    // WHAT WILL THE RESPONSE LOOK LIKE?
        // don't get actual data back, have to check the status or state

    // DELETE - delete a specific data from the API
        // REQUIRED IN DELETE REQUEST
            //  - id of what you're deleting

// EXAMPLE API - super simplified
// let restarauntData = {
//     'stars': 4,
//     'name' : 'mcdonalds',
//     'location': 'everywhere',
//     'id': 001
// }


// POST
// url
// content being added - json
// token - possibly
// endpoint - possibly
// method - type - specify we are making a POST request

// const url = 'https://codeup-restful-example.glitch.me/reviews'
// const reqBody = {
//     id: 248,
//     restaurant_id: 1,
//     name: "Jason",
//     createdAt: 1504095567183,
//     updatedAt: 1504095567183,
//     rating: "4",
//     comments: "This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!"
// }
// const options = {
//     method: 'POST',
//     headers : {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(reqBody)
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(jsonObj => console.log(jsonObj));


// // ================================================
// // PUT
// // ================================================
//
// let idOfThingToChange = 1;
//
// let newObj = {
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// }
//
// let options = {
//     method: "PUT",
//     body: JSON.stringify(newObj),
//     headers : {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }
//
// fetch(`https://jsonplaceholder.typicode.com/posts/${idOfThingToChange}`, options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// ================================================
// DELETE
// ================================================

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// });

// DELETING A SPECIFIC MOVIE
// unique id of the thing we're deleting
// how we're going to delete it --> button to click on
// button event listener
// on event trigger --> delete from API
// delete from API --> FETCH DELETE REQUEST
// -- what does that fetch delete request require?
    // where is the data located? --> url
    // unique id of the thing we're deleting --> end of url after endpoints
    // options (2nd parameter)
    // method type: DELETE
// before the fetch method --> grab the id of the movie that's being clicked on // data-id (attribute)

