// CHANGE SPAN TO SAY THE INPUT USERNAME

// var promptAnswer = prompt("Please enter your name");

// var retrievedSpan = document.getElementById("name");
//
// console.log("prompt answer: ", promptAnswer);
// console.log("retrieved span: ", retrievedSpan);
//
// retrievedSpan.innerHTML = promptAnswer;

// --
// document --> the name of the DOM object
//METHODS THAT RETRIEVE OBJECTS FROM THE DOM
//getElementById() --> by id --> WILL (AND SHOULD) ONLY RETURN ONE ELEMENT
//getElementsByClass() --> by class --> COULD RETURN MANY ELEMENTS WITH sAME CLASS NAME
//getElementsByTagName() --> by element -->COULD RETURN MANY ELEMENTS

var changeParagraph = document.getElementById("red");
changeParagraph.innerHTML = "The weather is cold today";


// RETRIEVING MULTIPLE ELEMENTS:
// GOOGLE:  how to get elements by class using the DOM

// 1. declare a variable
// 2. document.getElementByClassName
// 3. specify the class we're looking for --> odd

var myElements = document.getElementsByClassName("odd");
console.log(myElements);  // RETURNS ARRAY each element in the array is each of the elements found with that class name

console.log(myElements[0]);

myElements.innerHTML = "hello world";
// GOOGLE: getElementsByClassName -- MDN
// GOOGLE: getElementsByClass Name contents not changing with innerHTML
// returns an array

// LOOP THROUGH AN ARRAY TO CHANGE EACH ELEMENT RETURNED
for(var i=0; i< myElements.length; i++) {
    //access to each individual element in the array (each element with that class name)
    myElements[i].innerHTML = "hello world";
}

// RETRIEVING FORM INPUT ELEMENTS:

// 1. create a variable to store input value
// 2. retrieve the input value
// 2a. object notation to retrieve that value

var userInput = document.forms.login.username;
console.log(userInput);
var inputVal = userInput.value;
console.log(userInput);

// LET'S CHANGE THE COLOR OF MY H1 TAG TO PURPLE
// 1. access the element we want to change
// 2. change the style(attribute) to purple
// 3.

var myH1 = document.getElementById("greeting");
// setAttribute("attribute name", "attribute new value");
purp.setAttribute("style", "color: purple");

// myH1.style.color = "purple";

myH1.setAttribute("class", "border");
