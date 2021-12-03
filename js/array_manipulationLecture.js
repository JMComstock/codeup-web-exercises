"use strict";

let samsDogs = ["blue", "luna", "scamp"];

console.log("before",samsDogs);

samsDogs.unshift("spot");

console.log("after unshift",samsDogs);

samsDogs.push("rex");

console.log("after push", samsDogs);

console.log("removing last index using pop()");

samsDogs.pop();

console.log("after pop",samsDogs);

console.log("running shift() method")

samsDogs.shift();

console.log("After shift", samsDogs);

console.log("fetching index of \"luna\"...");

console.log("Luna's index is", samsDogs.indexOf("luna"));

console.log("filter method by letter u", samsDogs.filter(function(dog) {
    return dog.includes("u") ;
}));

// let sliced = samsDogs.slice(1,2);
//
// console.log("sliced",sliced);

console.log("original", samsDogs);

console.log("reversing array");

samsDogs.reverse()  // modifies the array

console.log("reversed", samsDogs);


let nums = [1, 64, 80, 4, 13];

console.log(nums);

console.log("nums sort()", nums.sort());

console.log("sort() dogs", samsDogs.sort());

console.log("samsDogs as a string", samsDogs.join("<br>"));

let searchTerm = "soup,tomato,no-garlic,1Hour"

let parsedSearchTerms = searchTerm.split(",");

console.log("Parsed Search Terms",parsedSearchTerms);

let myName = "Jason";

console.log("flipped Name", myName.split("").reverse().join(""));

console.log([...samsDogs, ...nums]);

console.log([9.2, ...nums]);

console.log([...nums, 9.2]);

nums = [1.3, ...nums];

console.log(nums);

