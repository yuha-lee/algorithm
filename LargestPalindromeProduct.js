//////////////////////////////////////////////////////////////////////////////////////////////
// A palindromic number reads the same both ways.                                           //
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.   //
// Find the largest palindrome made from the product of two 3-digit numbers.                //
//////////////////////////////////////////////////////////////////////////////////////////////

var maxPalindrome = 0;

function isPalindrome(numStr){
    for (var k = 0; k < numStr.length / 2; k++){
        if (numStr.charAt(k) != numStr.charAt(numStr.length - 1 - k) ){
            return false;
        }
    }
    return true;
}

for (var i = 100; i <= 999; i++){
    for (var j = 100; j <= 999; j++){

        var num = i * j;
        var numStr = String(num);

        if (isPalindrome(numStr) && num > maxPalindrome){
            maxPalindrome = num;
        }
    }
}

console.log(maxPalindrome);




