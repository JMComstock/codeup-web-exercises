/*
function showMultiplicationTable(input) {
    for(let i = 1; i < 11; i++) {
        console.log(input + " * " + i + " = " + input*i);
    }
}
showMultiplicationTable(7);
*/


/*
function generateRandom() {
    for(let i=0;  i<=10; i++) {
        let random = Math.floor((Math.random() * 200) + 20);
        if(random % 2 == 0) {
            console.log(random + " is even");
        } else {
            console.log(random + " is odd");
        }
    }
}
generateRandom();
*/

for(let i=1; i<10; i++) {
    let done = "";
    for(let j=1; j <= i; j++) {
        done += i.toString();
    }
    console.log(done);
}



for(let i = 100; i >= 5; i-=5) {
    console.log(i);
}

