const fs = require("fs");
const data = fs.readFileSync("0022_names.txt", "utf-8");
let namesArray = data.slice(1, -1).split('","');
let currentName = "";
let currentNameLetterSum = 0;
let overallSum = 0;
namesArray.sort();
for (i = 0; i < namesArray.length; i++){
    currentNameLetterSum = 0;
    currentName = namesArray[i];
    for (j = 0; j < currentName.length; j++){
        currentNameLetterSum += (currentName.charCodeAt(j) - 64);
    }
    currentNameLetterSum *= (i + 1);
    overallSum += currentNameLetterSum;
}
console.log("The answer is: " + overallSum);