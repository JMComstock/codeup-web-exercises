

// CONDITIONAL STATEMENTS

// < less than
// > greater than
// <= less than or equal
// >= greater than or equal
// || or
// && and
// == checks equal value
// === checks equal type and value

// 2 === "2" // false  -- comparing a number and a string
// 2 == "2" // true -- comapring the idea of the number

// let sportTeams = ["spurs", "mavericks", "rockets", "bucks"];

// loop thought the array using forEach
// check something --> conditional statement
// how to find the first letter of a string
// charAt()
// check if first letter of a team is "r"
//
// sports.forEach(function (team) {
//    let firstLetter = team.charAt(0);
//    console.log(firstLetter);
//    if(firstLetter == "r") {
//        console.log("yup, team name does start with the letter R");
//    } else {
//        console.log("nope, team name doesn't start with the letter R");
//    }
// })

let band = {};

band.shred = function() {
    console.log('RAAAAAAAAAA!!!!');
}

band.shred();
