let abundantArray = new Array();
let abundantSum = 0;
let currentFactors = 0;
const abundantConstant = 28124;
let allTheNumbers = new Array(abundantConstant);
for (i = 1; i < abundantConstant; i++) {
    for (j = 1; j < i; j++) {
        if (i % j === 0) {
            currentFactors += j;
        }
    }
    if (currentFactors > i) {
        abundantArray.push(i);
    }
    currentFactors = 0;
}
for (i = 0; i < abundantConstant; i++) {
    for (j = 0; j < abundantConstant; j++) {
        allTheNumbers[abundantArray[i] + abundantArray[j]] = 1;
    }
}
for (i = 1; i < abundantConstant; i++) {
    if (allTheNumbers[i] !== 1) {
        abundantSum += i;
    }
}
console.log("The answer is: " + abundantSum);