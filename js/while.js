"use strict";

let x = 2;

while(x < 65536) {
    console.log(x);
    x += Math.pow(2, 2);
}


let allCones = Math.floor(Math.random() * 50) + 50;
console.log("There is " + allCones + " total cones.")
let conesLeft = "";
do {
    let cones = Math.floor(Math.random() * 5) + 1;
    console.log("The client wants " + cones + " cones");
    if(allCones < cones) {
        console.log("Cannot sell " + cones + " cones. I only have " + allCones);
    } else {
        conesLeft = allCones - cones;
        console.log(cones + " cone(s) sold...");
        continue;
    }
} while (allCones === 0) {
    console.log("Yay! You sold them all!");
}
