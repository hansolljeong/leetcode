function subtractProductAndSum(n: number): number {
    const arr = n.toString().split('').map(Number);
    const product = arr.reduce((acc, cur) => acc * cur, 1);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return product - sum;
};