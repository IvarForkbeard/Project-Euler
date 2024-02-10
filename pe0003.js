var bigNumber = 600851475143;
var i = 4;
var isPrime = 1;
while (i <= bigNumber) {
    isPrime = 1;
    for (j = 3; j < i; j++) {
        if ((i % j) === 0) {
            isPrime = 0;
        }
    }
    if (((bigNumber % i) === 0) && (isPrime === 1)) {
        alert(i + " is a Prime factor for " + bigNumber + " so now I am going to set my bigNumber to " + (bigNumber / i));
        bigNumber = bigNumber / i;
    }
    if (bigNumber === 1) {
        alert ("The largest Prime Factor is: " + i);
    }
    i++;
}