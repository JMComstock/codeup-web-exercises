"use strict";
//
// document.getElementById("heading"); //DOM
//
//
//
// // jQuery
// let myEl = $("p-one");
// console.log(myEl);

// let heading = $("#heading").text();
// console.log(heading);
// console.log($("#heading").html());

// add a class of "border" to the <p> tag

// $( "#p-one" ).addClass("border");

// add a border to the heading if user is logged in
// check value of isLoggedIn
//grab the value of isLoggedIn
//save that value to a variable
// compare value of logged in to true
// add a border
//assign a class to the element if true

// let user1 = {
//     name: "jason",
//     isLoggedIn: true,
//     age: 40
// }
//
//
// let loginStatus = user1.isLoggedIn;
// if(loginStatus === true) {
//     $("#heading").addClass("border");
// }

// $(".blue-bg").css("background-color", "blue");
//
// $("li").css("font-size", "20px");
//
// let nthChild = $("ul li:nth-child(3)").text();
// console.log(nthChild);


// //chain properties
// // $("#p-one").css("font-size", "8px").css("color", "magenta")
// $("#p-one").css({"color": "red", "font-size": "12px"})
//
// // style multiple elements
// $("p, ul li").css("color", "purple");
//
// $("*").css("background-color", "lightblue");
// $("body, html").css("background-color", "white");

//document.getElementById ... blah blah blah
//DOM way to get elements

//$("") --> jQuery way to select elements from DOM
// # --> id
// . --> class
// element/tag name --> element/tag
// , --> select multiple elements
// :nth-child(n) --> select a child at the nth place
// parent/selected element
// .method().method() --> methods can be chained together
// .method(params) --> some methods accept one or more parameters

// .css("property", "value") // accepts two parameters
// .val()
// .text(optionalParam)