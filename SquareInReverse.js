
// Performing Square of each numbers and printing it in reverse direction

// First logic is without using function

let sqr;
let num = 10;

for (let i = num; i >= 0; i--) {
    sqr = i * i;
    console.log(`The square of ${i} is:`, sqr);

}

/* O/P1: The square of 10 is: 100
The square of 9 is: 81
The square of 8 is: 64
The square of 7 is: 49
The square of 6 is: 36
The square of 5 is: 25
The square of 4 is: 16
The square of 3 is: 9
The square of 2 is: 4
The square of 1 is: 1
The square of 0 is: 0 */
//**************************************************************************************

//Second logic is by using function

function isNumber(number) {
    let sqr2;

    for (let i = number; i >= 0; i--) {
        sqr2 = i * i;
        console.log(`The square of ${i} is:`, sqr2);
    }

}
isNumber(10);

/* O/P2: The square of 10 is: 100
The square of 9 is: 81
The square of 8 is: 64
The square of 7 is: 49
The square of 6 is: 36
The square of 5 is: 25
The square of 4 is: 16
The square of 3 is: 9
The square of 2 is: 4
The square of 1 is: 1
The square of 0 is: 0 */
