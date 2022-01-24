// TODO: give all paragraphs a border

// grab all the p elements
// change the css

$(".border").css("border", "2px solid black");

//TODO: change h1 to say happy monday

// grab the element
// chain a method onto that element
// pass in the value that I want to change it to

// SETTERS
// .html() getting? or setting?  SETTING!
console.log($("h1").html()); // returns Hello World // getting
$("h1").html("Happy Monday"); // setting

// GETTERS
// .html() getting or setting?  // GETTING
console.log($("h1").html());  // returns Happy Monday // getting


// TODO: add a class of border to my h2

$("#red").addClass("border"); // setter
console.log($("#red"));
$("#red").removeClass("border"); // setter
console.log($("#red"))

// .toggleClass()

// toggle our h1 to be highlighted on an event
//TODO: toggle the h1 to be highlighted on event

// grab the element we want to change
// grab the element that's listening for the click
// change the css (.css())
// toggle it

$("h1").click(function () {
    $(this).toggleClass("highlight");
})


