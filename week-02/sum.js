function sumForeach(ary) {
    let sum = 0;
    ary.forEach((x) => (sum += x));
    return sum;
}

function sumReduce(ary) {
    let sum = 0;
    return ary.reduce((accumulator, current) => accumulator + current, sum);
}

function sumSigma(n) {
    if (n == 1) return 1;
    return n + sumSigma(n - 1);
}

console.log('sum by foreach: ' + sumForeach([1, 5, 3, 2])); // 11
console.log('sum by reduce: ' + sumReduce([1, 5, 3, 2])); // 11
console.log('sum by sigma: ' + sumSigma(5)); // 15
// 各種加總參考：https://blog.yowko.com/javascript-array-sum/
