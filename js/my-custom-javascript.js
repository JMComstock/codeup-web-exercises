"use strict";
//
// $(document).ready(function() {
//
//     alert('The DOM has finished loading!');
//
// });


let contents = $("#h1-id").html();
alert(contents);

// Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
$('.codeup').css('border', '1px solid red');

// Using jQuery, set the font-size of all li elements to 20px
$("li").css("font-size", "20px");

// Craft selectors that highlight all the h1, p, and li elements.
$("h1, p, li").effect("highlight", {color:"#669966"}, 5000);

// Create a jQuery statement to alert the contents of your h1 element(s).
let newAlert = $("h1").html();
alert(newAlert);