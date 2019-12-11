//////////////////////////////////////////////////////////////////////////////////////////////
// A palindromic number reads the same both ways.                                           //
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.   //
// Find the largest palindrome made from the product of two 3-digit numbers.                //
//////////////////////////////////////////////////////////////////////////////////////////////

var maxPalindrome = 0;
var isPalindrome  = false;

function checkPalindrome(input) {
    for (var x = 0; x < input.length / 2; x++) {
        if (input.charAt(x) != input.charAt(input.length - 1 - x)) {
            isPalindrome = false;
            break;
        } else {
            isPalindrome = true;
        }
    }
}

for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {

        var num   = i * j;
        var input = String(num);

        checkPalindrome(input);

        if (isPalindrome && num > maxPalindrome) {
            maxPalindrome = num;
        }
    }
}

console.log(maxPalindrome);


