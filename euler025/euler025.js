let fibonacci_2 = BigInt(1);
let fibonacci_1 = BigInt(1);
let fibonacci = BigInt(2);
let fibonacciIndex = 2;
let fibonacciString = "1";
while (fibonacciString.length < 1000){
    fibonacciIndex++;
    fibonacci = fibonacci_1 + fibonacci_2;
    fibonacci_2 = fibonacci_1;
    fibonacci_1 = fibonacci;
    fibonacciString = fibonacci.toString();
}
console.log("The index of the first fibonacci number with 1000 digits is: " + fibonacciIndex);