function transformArray(nums: number[]): number[] {
    const transformed = nums.map(num => {
        if (num % 2 === 0) return 0;
        else return 1;
    }).sort((a, b) => a - b);
    return transformed;
};