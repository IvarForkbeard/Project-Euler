let iToString = "0123456789";
let howManyNoRepeatDigits = 0;
function norepeatdigits(string) {
    return new Set(string).size === string.length;
}
for (i = 123456789; i <= 816881688168; i++){
    iToString = i.toString();
    if (iToString.length < 10){
        iToString = "0" + iToString;
    }
    if (norepeatdigits(iToString)){
        howManyNoRepeatDigits++;
        if (howManyNoRepeatDigits === 1000000){
            console.log("The answer is " + iToString);
            break;
        }
    }
}