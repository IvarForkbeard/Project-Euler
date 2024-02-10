const wordNumberOnesArray = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const wordNumberTensArray = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let bigArray = new Array(1000);
let letterCount = 0;
let hundreds = 0;
let tens = 0;
let ones = 0;
let numberAsWord = "zero";
for (let i = 1; i <= 1000; i++) {
    if ((i % 100) < 20) {
        numberAsWord = wordNumberOnesArray[(i % 100)];
    }
    else if ((i % 100) > 19 && (i % 100) < 100) {
        tens = Math.floor((i % 100) / 10);
        ones = ((i % 100) % 10);
        numberAsWord = wordNumberTensArray[tens];
        if (ones) {
            numberAsWord += wordNumberOnesArray[ones];
        }
    }
    if (i > 99 && i < 1000) {
        hundreds = Math.floor(i / 100);
        numberAsWord += wordNumberOnesArray[hundreds] + "hundred"
        if (i % 100) {
            numberAsWord += "and";
        }
    }
    else if (i > 999) {
        numberAsWord = "onethousand";
    }
    bigArray[i] = numberAsWord;
    console.log(bigArray[i]);
    letterCount += bigArray[i].length;
}
console.log("The answer to problem 17 is " + letterCount);