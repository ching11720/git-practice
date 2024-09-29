function fib(n) {
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;

    let fib_1 = 1,
        fib_2 = 1;
    for (let i = 2; i < n; ++i) {
        temp = fib_1 + fib_2;
        fib_1 = fib_2;
        fib_2 = temp;
    }
    return fib_2;
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55
