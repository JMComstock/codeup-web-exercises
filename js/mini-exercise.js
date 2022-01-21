// mini - exercise:
// using jquery:
"use strict";

// TODO: 1. give all table cells a black border
$("#table, tr, th, td").css("border", "1px solid black");

// TODO: 2. remove all bullet points from the unordered list items
$("ul").css("list-style-type", "none");
// TODO: 3. change the font family of the entire page to luxurious roman
// ---> <link rel=“preconnect” href=“https://fonts.googleapis.com”>
//     <link rel=“preconnect” href=“https://fonts.gstatic.com” crossorigin>
//     <link href=“https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Questrial&display=swap” rel=“stylesheet”>
//     --->font-family: ‘Abril Fatface’, cursive;
// font-family: ‘Questrial’, sans-serif;
$("html").css("font-family", "Luxurious Roman, cursive");
// TODO: 4. give each section a unique id
// done in html
// TODO: 5. using the unique id’s give each section a different background color
$("#nav-section").css("background-color", "#C38D94");
$("#header-section").css("background-color", "#A76571");
$("#p-one").css("background-color", "#D8DCFF");
$("#section-one").css("background-color", "#AEADF0");
// TODO: 6. give 3 elements the same class name of “highlight”
// done in html
// TODO: 7. give each of those 3 elements a bright yellow background
$(".highlight").css("background-color", "#F8F991");
// TODO: 8. BONUS: when you click on the image, make the image larger than what it currently is
$("img").click(function () {
    $(this).css({"height": "100%", "width": "100%"});
})