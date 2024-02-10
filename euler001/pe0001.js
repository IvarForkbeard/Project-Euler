var multiples = 0;
for (i=0; i < 1000; i++){
    if ((i % 3) === 0 || (i % 5) === 0){
        multiples = multiples + i;
    }
}
alert("The answer is " + multiples);