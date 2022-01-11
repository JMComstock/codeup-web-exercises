'use strict';
//          BOM Intro
let sirius = {
    numStudents: 30,
    classroom: "Pendernales/remote",
    // methods - functions stored inside of an object
    takeAttendance: function () {
        prompt("how many students?");
        return this.numStudents;
    },
}


var favoriteNumber = 18;

function add(num1) {
    var num2 = 10;
    return num1 + num2;
}
console.log(add(favoriteNumber));

let name = prompt("what's your name?");
console.log("your name is:", name);

let numStudents = prompt("how many students are in your class?");

function takeAttendance(students) {
    return 30 - students;
}

console.log("this many students are absent today",takeAttendance(numStudents));


// -- BOM METHODS --
//  functions living inside objects
//  beware of infinite loops


//        SYSTEM DIALOGUE


// SET INTERVAL (after a set amount of time)

var count = 0;
var max = 10;
var interval = 1000;

var intervalId =
    setInterval(
        function () {
            if (count >= max) {
                clearInterval(intervalId);
                console.log('All done');
            } else {
                count++;
                console.log("Repeating this line " + count);
            }
        },
        interval);

// SET TIMEOUT

var delay = 5000;

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);

// WINDOW LOCATION

window.location = 'https://java.codeup.com';

var delay = 5000;

var timeoutId = setTimeout(function () {
    return window.location = "https://java.codeup.com";
}, delay);





