//////////////////////////////////////////////////////////////////////////////////////////////
// A palindromic number reads the same both ways.                                           //
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.   //
// Find the largest palindrome made from the product of two 3-digit numbers.                //
//////////////////////////////////////////////////////////////////////////////////////////////

var maxPalindrome = 0;
var isPalindrome  = false;

for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
        
        var num = i * j;
        var strNum = String(num);
        
        for (var x = 0; x < strNum.length / 2; x++) {
            if (strNum.charAt(x) != strNum.charAt(strNum.length - 1 - x)) {
                isPalindrome = false;
                break;
            } else {
                isPalindrome = true;
            }    
        }

        if (isPalindrome) {
            if (num > maxPalindrome) {
                maxPalindrome = num;
            }
        }
    }
}

console.log(maxPalindrome);
