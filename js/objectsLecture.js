console.log("welcome to objects");

// let array = [1,2,3,true,false];
//
// // let person = new Object();
//
// let birthdayObject = {
//     month: "November",
//     day: 22,
//     getDetails : function () {
//         return this.month + "," + this.day
//     }
// }
//
// let person = {
//     name: "Jack",
//     birthday: birthdayObject,
//     isTall: false
// };
//
function createPerson(name) {
    return {
        firstName: name,
        greeting: function() {
            console.log("Hello, my name is " + this.firstName);
        }
    }
}

let personTwo = createPerson("Laura");
let personThree = createPerson("Ry");
// console.log(person);

let dog = {
    breed: "Huskey",
    colors: ["brown", "black", "white"],
    sex: "f",
    name: "Luna",
    isFloofer: true,
    bark: function (loud) {
        if(loud) {
            console.log("Woof Woof!!");
        } else {
            console.log("ruff ruff");
        }
    },
    getDetails: function () {
        return this.colors[0] + " " + this.breed + " named " + this.name;
    }
};

function createDog(name, colors, breed) {
    return {
        breed: breed,
        colors: colors,
        sex: "f",
        name: name,
        isFloofer: true,
        bark: function (loud) {
            if (loud) {
                console.log("Woof Woof!!");
            } else {
                console.log("ruff ruff");
            }
        },
        getDetails: function () {
            return this.colors[0] + " " + this.breed + " named " + this.name;
        }
    }
}

let collectionOfDogs = [];

collectionOfDogs.push(createDog('Knuckles', ['black', 'white'], 'mutt'));
collectionOfDogs.push(createDog('Roxy', ['brown', 'black'], 'German Shepard'));
collectionOfDogs.push(createDog('Boob', ['brown', 'black'], 'poodle'));
collectionOfDogs.push(createDog('Camper', ['brown', 'white'], 'Collie'));

collectionOfDogs.forEach(function (dog) {
    console.log(dog.getDetails())
})





