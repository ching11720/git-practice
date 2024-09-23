function sum_foreach(ary) {
	let sum=0;
    ary.forEach((x) => sum+=x);
    return sum;
}

function sum_reduce(ary) {
    let sum=0;
    return ary.reduce((accumulator, current) => accumulator + current, sum);
}

function sum_sigma(n) {
    if (n==1)
        return 1;
    return n+sum_sigma(n-1);
}

console.log('sum by foreach: '+sum_foreach([1, 5, 3, 2])); // 11
console.log('sum by reduce: '+sum_reduce([1, 5, 3, 2])); // 11
console.log('sum by sigma: '+sum_sigma(5)); // 15
// 各種加總參考：https://blog.yowko.com/javascript-array-sum/