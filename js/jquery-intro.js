"use strict";

document.getElementById("heading"); //DOM



// jQuery
let myEl = $("p-one");
console.log(myEl);

let heading = $("#heading").text();
console.log(heading);
console.log($("#heading").html());

// add a class of "border" to the <p> tag

$( "#p-one" ).addClass("border");

// add a border to the heading if user is logged in
// check value of isLoggedIn
//grab the value of isLoggedIn
//save that value to a variable
// compare value of logged in to true
// add a border
//assign a class to the element if true

let user1 = {
    name: "jason",
    isLoggedIn: true,
    age: 40
}


let loginStatus = user1.isLoggedIn;
if(loginStatus === true) {
    $("#heading").addClass("border");
}

