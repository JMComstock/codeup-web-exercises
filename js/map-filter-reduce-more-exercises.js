const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

// Use map, filter, and reduce to:

// TODO: Create an array of the first letters of each fruit

let firstLetter = fruits.map((letter) => letter[0]).join("");
console.log("the first letter in the fruits array is: ", firstLetter);

// TODO: Create array of user objects based on the customers array of objects (each user object should just have name and age properties)

let userObject = customers.map(user => "Name: " + user.name + ", Age: " + user.age);
console.log(userObject);

// TODO: Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects

let civilServants = customers.filter(i => i.occupation === "Police Officer" || i.occupation === "Teacher");
let civilServantList = civilServants.map(user => "Name: " + user.name + ", Age: " + user.age);
console.log(civilServantList);

// TODO: Determine the average age of all the customers

let ages = customers.map(n => n.age);
console.log(ages);

let avgAge = ages.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
}, 0);
console.log("The average age of all customers is: ", avgAge / ages.length);

// TODO: Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }

function superPet (i) {
    let superPet = i.reduce((superPet, currentValue) => {

        superPet.name += currentValue.name;

        superPet.age += currentValue.age;

        superPet.breed += currentValue.breed;
        return superPet;

    }, {name: '', age: 0, breed: ''});
    console.log(superPet);
}
superPet(pets);



// TODO: Create a function that takes in an array of pets and returns an array of the length of first names for pugs only. Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'
