/*Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid? */

var WIDTH = 20;
var HEIGHT = 20;

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

var answer = BigInt(factorial(WIDTH + HEIGHT)) / (BigInt(factorial(WIDTH)) * BigInt(factorial(HEIGHT)));
console.log(answer);