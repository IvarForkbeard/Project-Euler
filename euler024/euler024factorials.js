let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let digitsLength = digits.length;
let factorials = [1];
let queensDuck = 0;
let position = 999999;
let answer = "";
for (i = 1; i < digitsLength; i++){
    factorials.push(factorials[i -1] * i);
}
for (i = (digitsLength - 1); i > -1; i--){
    queensDuck = position / factorials[i] | 0;
    console.log(queensDuck);
    position = position % factorials[i];
    answer += digits[queensDuck];
    digits.splice(queensDuck, 1);
console.log(digits);
}
console.log("The answer might be "+ answer);