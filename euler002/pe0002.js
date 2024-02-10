var fibonacci1 = 0;
var fibonacci2 = 1;
var fibonacci3 = 0;
var sumEven = 0;
while (fibonacci1 < 4000000){
    if (((fibonacci3 % 2) === 0) && (fibonacci3 < 4000000)) {
        sumEven = sumEven + fibonacci3;
    }
    fibonacci3 = fibonacci2 + fibonacci1;
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacci3;
}
alert ("The answer is: " + sumEven);