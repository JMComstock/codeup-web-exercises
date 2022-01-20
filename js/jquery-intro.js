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



// EVENT LISTENERS
//DOM
// select -> add event listener --> tell it which event listernet to listen for --> here;s the funtction to run when event happens
//
// document.getElementById("heading")
//     .addEventListener("click", function () {
//     console.log("clicked by DOM");
// })

// jQuery
// $("#heading").click(function () {
//     console.log("clicked by jQuery");
// })

// when the first paragraph gets clicked on,
// let it create a border around the second paragraph
// 1 el) listening for the event
// 2 el) what's being affected by the event

// - call the first paragraph element
// - create the click event
// - make the function you want to execute
// - call the element that needs to be changed (2nd paragraph)
// - do the actual thing we want to happen (create a border)

// $("#p-one").click(function () {
//     $("#p-two").css("border", "1px solid purple");
// })

// let's put this things into variable to make it a bit cleaner
// - p1
// - function
// - p2
//  css value

// let p1 = $("#p-one");
// let p2 = $("#p-two");
// let cssVal = "3px dotted purple "
// let purpleBorder = function () {
//     p2.css("border", cssVal);
// }
//
// p1.click(purpleBorder);

// DOUBLE CLICK
// - find element that I'm going to work on
// - give element an id
// - put it into variables
// - create a function
// - when button is double clicked, change background dark color, change text to light color
// - select element that will be changed

// let myBtn = $("#my-button");
//
// myBtn.dblclick(function () {
//     $("*").css({"background-color":"darkblue", "color":"white"});
// })

// when hovering over a li, change the background color to light blue,
// when you hover out of it, change background color to lightgreen

// - identify the element(li)
// - hover event
// - function for event (hover on)
// --> change bg color to blue
// function for event (hover off)
// --> change the g color to green

let onHover = function () {
    $(this).css("background-color" ,"lightblue");
}
let offHover = function () {
    $(this).css("background-color", "lightgreen");
}

// $("li").hover(function () {
//     $(this).css("background-color" ,"lightblue");
// }, function () {
//     $(this).css("background-color", "lightgreen");
// });

$("li").hover(onHover, offHover);

$("#heading").hover(onHover, offHover);