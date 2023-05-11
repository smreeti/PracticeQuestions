function findFactorial(number) {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

function findFactorialRecursive(number) {
    if (number == 2) return 2;
    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorial(5)); //return 120
console.log(findFactorialRecursive(5));