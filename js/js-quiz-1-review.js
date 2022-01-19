// -- JS REVIEW ---

// OBJECTS

// declaring an object:

let USA = {
    printStates: function () {
        console.log(this.Texas);
    },
    Texas : {
        size: "big",
        flower: "bluebonnet",
        bird: "mockingbird",
        people: 30,
        //method
        addPeople: function() {
            let nowPeople = this.people
            console.log(this.people); // 30
        }
    }
}

let sirius = {
    // properties
    numStudents: 29,
    city: [
        "Dallas",
        "Houston",
        ["downtown", "rim", "north central", ",museum district"],
        "Fort Worth",
        {city: "Austin", numPeople: 40, lake: true, weird: true}
    ],
    inPerson: false,
    theBest: true,

    // methods - storage that store functions
    returnCity : function () {
        console.log(8 + 8); // 16
        console.log("hello world"); // hello world
        return this.city[4].city; // Austin1
    }
}

// return the value of weird
console.log(sirius.city[4].weird);  // true

console.log(sirius.city[2][2]); // north central

console.log(sirius.city[0]); // returns Dallas
console.log(sirius.city[sirius.city.length -1]);  // { city: 'Austin', numPeople: 40, lake: true, weird: true }

console.log(sirius.inPerson); // false
console.log("**********************************");
let cities = [
    {city: "San Antonio", people: 30, isGreat: true, team: "spurs"},
    {city: "Dallas", people: 40, isGreat: true, team: "mavericks"},
    {city: "Houston", people: 50, isGreat: false, team: "rockets"},
    {city: "Austin", people: 30, isGreat: true, team: "keepItWeird"},
]

// forEach
cities.forEach(function(city) {
    console.log("is " + city.city + " great?: " + city.isGreat); // concatenation
    console.log(`is ${city.city} great?: ${city.isGreat}`)  // template literal
})

console.log("**********************************");

let sports = ["spurs", "mavericks", "rockets", "bucks"];
sports.forEach(function (team) {
    console.log("current team: " + team);
})

// for Loop
console.log("for loop iteration");

for (let i=0; i <= sports.length-1; i++) {
    console.log("current team: " + sports[i]);
}

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

let sportTeams = ["spurs", "mavericks", "rockets", "bucks"];

// loop thought the array using forEach
// check something --> conditional statement
// how to find the first letter of a string
// charAt()
// check if first letter of a team is "r"

sports.forEach(function (team) {
   let firstLetter = team.charAt(0);
   console.log(firstLetter);
   if(firstLetter == "r") {
       console.log("yup, team name does start with the letter R");
   } else {
       console.log("nope, team name doesn't start with the letter R");
   }
})


