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