const fs = require("fs");
const data = fs.readFileSync("data.txt", "utf-8");
let bigNumber = BigInt(data);
let answer = 1n;
while (bigNumber > 0n){
    answer *= bigNumber;
    bigNumber--;
}
let bigNumberString = answer.toString()
.slice(0, -1)
.split("")
.reduce(function(x, y){
    return +x + +y;
});
console.log("The answer is: " + bigNumberString);