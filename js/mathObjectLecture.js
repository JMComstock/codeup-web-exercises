console.log("It's math time");

//generates value between 0 - 1
// console.log(Math.random());

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}



function getRandomInt(min, max) {
    const randomNumber = Math.random() * (max - min) + min;
    // console.log("before Floor || Ceil", randomNumber);
    // console.log("after Floor", Math.floor(randomNumber));
    // console.log("after Ceil", Math.ceil(randomNumber));
    // console.log("after rounding", Math.round(randomNumber));
    return Math.floor(randomNumber);
}
// console.log(getRandomInt(0, 10));

console.log(Math.pow(8, 10));

// this also does the same as Math.pow()
console.log(8 ** 10);

console.log("Pi",Math.PI);

console.log("E",Math.E);

