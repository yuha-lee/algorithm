/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

var i = 3;

outer:
while(true){
    for (var j = 1; j < i; j++){
        for(var k = 1; k < j; k++){
            
            var squareI = i * i;
            var squareJ = j * j;
            var squareK = k * k;

            var sum     = i + j + k;

            if (squareI === squareJ + squareK && sum === 1000){
                console.log( i * j * k );
                break outer;
            }
        }
    }
    i++;
}