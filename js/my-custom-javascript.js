"use strict";
//
// $(document).ready(function() {
//
//     alert('The DOM has finished loading!');
//
// });

//
// console.log("hello world");
// let contents = $("#h1-id").html();
// alert(contents);

//TODO: Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.

// $('.codeup').css('border', '1px solid red');

//TODO: Using jQuery, set the font-size of all li elements to 20px

// $("li").css("font-size", "20px");

// TODO:Craft selectors that highlight all the h1, p, and li elements.

// $(document).ready(function() {
//     $("h1, li, p").effect( "highlight", {color:"#669966"}, 3000 );
// });


//TODO: Create a jQuery statement to alert the contents of your h1 element(s).

// let newAlert = $("h1").html();
// alert(newAlert);

// TODO: Add jQuery code that will change the background color of an h1 element when clicked.

$("#h1-id").click(function () {
    $(this).css("background-color", "#006400");
})

//TODO: Make all paragraphs have a font size of 18px when they are double clicked.

$("p").dblclick(function () {
    $(this).css("font-size", "18px");
})

//TODO: Set all li text color to red when the mouse is hovering; reset to black when it is not.

$("li").hover(
    function () {
        $(this).css("color", "red");
    },
    function () {
        $(this).css("color", "black")
    }
);