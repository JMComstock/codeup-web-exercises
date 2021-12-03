"use strict";

/*
let x = 2;

while(x <= 65536) {
    console.log(x);
    x *= 2;
}
*/

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesToBuy = Math.floor(Math.random() * 5) + 1;

    if (conesToBuy <= allCones) {
        console.log(conesToBuy + " cones sold...");
        allCones -= conesToBuy;
    } else {
        console.log("Cannot sell you " + conesToBuy + " cones I only have " + allCones + "...");
    }
    console.log(allCones)
} while (allCones > 0)

console.log("Yay! I sold all the cones!");

