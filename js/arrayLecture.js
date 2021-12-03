// --ARRAYS--

// let students = ["Gerald", "Mark", "Mina", "Jason", "Mina", "Justin"];
// let indexOfMina = students.indexOf("Mina");
// console.log("indexOfMina: " + indexOfMina);
// let otherIndexOfMina = students.lastIndexOf("Mina")
// console.log("lastIndexOfMina: " + otherIndexOfMina);
// console.log(students.length);
// console.log(students[3]);
// console.log(students[5]);

// concatenate the last name to the first name
// access Justin's value
// re-assign that value to equal justin + lastName
// console.log(students[5]); // Justin
// students[5] = students[5] + " Sebastian";
// console.log(students[5]); // Justin Sebastian

// give each of your favorite foods a rating 1 - 5
// let favoriteFoods = ["Chicken Wings", "Ribeye", "Shrimp", "Chiliqueles", "Beer"];
// console.log(favoriteFoods);
// favoriteFoods[0] += " 1🍗";
// favoriteFoods[1] += " 2🥩";
// favoriteFoods[2] += " 3🍤";
// favoriteFoods[3] += " 4🌶";
// favoriteFoods[4] += " 5🍺";
// console.log("Favorite foods with ratings: ", favoriteFoods);
//
// let faveAnimals = ["frog", "lion", "penguin"];
// let laura = ["Laura", 31, "San Antonio", "mac", ["pizza", "french fries", "ice cream"], 2021, faveAnimals];
// let age = laura[1];
// console.log("Laura's age is: ",age);
// let innerArr = laura[4];
// console.log("The inner array in the laura array is: ", innerArr);
// console.log(innerArr[1]);
// console.log(laura[4][1]);
// console.log(laura[6]);
// console.log(laura);
//let indexOfAge = laura.indexOf(31);

// function desiredAge(num) {
//     return num - 10;
// }
// console.log("Laura's desired age is ", desiredAge(age));

let ages = [14, 23, 89, 5, 25, 36];
for(let i=0; i<=ages.length-1; i++) {
    console.log(ages[i] *= 2);
}


// --FUNCTIONS--
function sayHello() {
    console.log("Hello!");
}
function nameOfFunction(num1, randomFunction) {
    console.log("doing background task");
    randomFunction();
    return num1;
}
console.log(sayHello);

// console.log(nameOfFunction(4, function () {
//     console.log("hey there!");
// }));

nameOfFunction(1, sayHello);




// --METHODS--


// ACCESSING Elements from AN ARRAY
// nameOfArray[position within the array] 💡 arrays always start at zero
