function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const a = fn(arr[i], i);
        newArr.push(a);
    }
    return newArr;
};