function alternatingSum(nums: number[]): number {
    return nums.reduce((acc, cur, idx) => acc + (idx % 2 === 0 ? cur : -cur));
};