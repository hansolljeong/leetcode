function subsetXORSum(nums: number[]): number {
    const orValue = nums.reduce((acc, cur) => acc | cur, 0);
    return orValue * Math.pow(2, nums.length - 1);
};