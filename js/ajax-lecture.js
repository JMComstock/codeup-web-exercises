'use strict';
// AJAX

// AJAX - asynchronous JavaScript and XML
// asynchronous - not at the same time --> multiple things going on at different start and stop times
// synchronous - at the same time --> wait for each step to finish (ex. event listener)
// xml - Extensible Markup Language -> markup language similar to HTML, but without predefined tags to use. Instead, you define your own tags designed specifically for your needs.
//      designed to store and transport data.

// js --> the best

// Web Server --> location where your website is saved to
// software: handle requests, sends data, understands URLs, allows us to interact with the servers, host files
// hardware: computers storing data

// HTTP Server --> software that understands URLs (addresses) and is able to communicate with the browser to view webpages
// JSON - JavaScript Object Notation
// {
//   "team": "spurs",
//   "wins": "7",
// }

// API - application programming interface

// AJAX Request (jquery syntax)
// get information from our random dog API

// $.ajax("https://dog.ceo/api/breeds/image/random"); // jquery syntax for AJAX GET method

$(document).ready(function () {
    console.log("ready");
    // console.log($.ajax("https://dog.ceo/api/breeds/image/random")); // GET
    //
    // console.log($.ajax("https://jsonplaceholder.typicode.com/posts", {
    //     type: "POST",
    //     //data we want to save to the server
    //     body: JSON.stringify({
    //         title: "EXAMPLE",
    //         body: "EXAMPLE",
    //         userId: 1,
    //     })
    // }));
    //
    // console.log($.ajax("https://jsonplaceholder.typicode.com/posts", {
    //     type: "GET",
    //     //data we want to save to the server
    //     body: JSON.stringify({
    //         title: "EXAMPLE",
    //         body: "EXAMPLE",
    //         userId: 1,
    //     })
    // }));


    // REQUESTS:
    // GET - receiving info from a server
    // POST - sending info (JSON) to be stored on the server
    // DELETE - send information about the thing you want to delete. // no response needed if successful
    // PUT - (edit) - send info about the thing you're editing, and you'll receive the edited thing back

    // DOCUMENTATION

    // $.ajax("url");
    //
    // $.ajax("url", {
    //     type: "POST", // type of request
    //     data: { // if POST, PUT, DELETE: Send info with the request
    //         username: 'jasonComstock',
    //         post: "I love javascript",
    //     }
    // })


    // GET- RESPONSE
    // $.ajax("https://dog.ceo/api/breeds/image/random").done(function (data, status) {
    //     console.log("request is DONE");
    //     console.log("---DATA---");
    //     console.log(data);
    //     console.log("---How'd it go?---");
    //     console.log(status);
    // });

    // $.ajax("https://dog.ceo/api/breeds/image/ranom").fail(function () {
    //     console.log("Your request has failed");
    // })

    // TODO:request an image of a dog from DOG CEO API and render it dynamically on my html page
    // select the element we wana to change
    // change its src attribute and give it a value
    // retrieve data from API
    // handle the response
    // retrieve the actual item we need from the response // data.message --> string
    // pass the string retrieved into the value of the src being changed


    // send the request
    // $.ajax("https://dog.ceo/api/breeds/image/random")
    //     .done(function (data, status) {
    //         console.log(data.message);
    //         console.log(status);
    //         $("#doggo").attr("src", data.message);
    //     })
    //     .fail(function () {
    //         console.log("sorry your request failed");
    //     })
    //     .always(function () {
    //
    //     });

    // $.ajax("https://dog.ceo/api/breeds/image/random") // sends a get request
    //     .fail(function () {
    //         $("h2").html("SORRY YOUR REQUEST FAILED");
    //         console.log("sorry yom your request failed!");
    //     })
    //     .always(function () {
    //         $("h3").html("thanks for visiting!")
    //     })
    //     .done(function (data, status) {
    //         $("img").attr("src", data.message);
    //         $("p").html(status);
    //     })

    // console.log("imgStr: " + imgStr);

    // .DONE --> triggers the callback function only if successful
    // .FAIL --> Triggers the callback function only if fail
    // .ALWAYS --> triggers the callback function on success or fail

    // $.ajax("https://dog.ceo/api/breeds/image/random", {
    //     type: "POST",
    //     data: {
    //         message: "hello this is your message"
    //     }
    // })
    //     .done(function (data, staatus) {
    //         console.log('request successful')
    //     })
    //     .fail(function () {
    //         console.log("request failed")
    //     })
    //     .always(function () {
    //         console.log("woohoo we're making requests")
    //     })

    //get
    // $.get("")
    // $.ajax("url")

    //post
    // $.post()
    // $.ajax("url", options)

    // MORE AJAX

    // -- posts https://jsonplaceholder.typicode.com/comments

    // - get the url - using an AJAX request
    // - loop through the array of data
    // get actual names of the comments
    // .done() method -- to capture the data when it's returned
    // append to element
    // select or find the element that we want to append to
    // create an element

    $.get("https://jsonplaceholder.typicode.com/posts")
        .done(function (data) {
            console.log(data); // confirm if the data is an object or an array
            // here we have access to the data returned

            // loop through data returned (an array from console.logging it)
            $.each(data, function (i, comment) {
                console.log(comment.title);

                //select element we're appending to,
                // append going to add whatever we pass in as child
                // lements to the element selected
                let newEl = document.createElement("h1");
                let title = comment.title;
                newEl.innerHTML= title;
                $(".container").append(newEl);
            })
        })

    // .ajax(url, options) // by default - GET || specifiy TYPE
    // in the options
    // .get(url) --> GET only
    // .post(url, options)

})