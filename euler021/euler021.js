let divisorSumArray = new Array(10000);
let amicableSum = 0;
for (i = 1; i < divisorSumArray.length; i++) {
    divisorSumArray[i] = 1;
    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            divisorSumArray[i] += j;
        }
    }
}
for (i = 1; i < divisorSumArray.length; i++) {
    if ((divisorSumArray[divisorSumArray[i]] === i) && (divisorSumArray[i] !== i)) {
        amicableSum += i;
    }
}
console.log("The answer is: " + amicableSum);