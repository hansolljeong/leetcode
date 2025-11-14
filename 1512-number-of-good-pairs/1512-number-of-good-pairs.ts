function numIdenticalPairs(nums: number[]): number {
    let result = 0;
    const count = {};

    for (const num of nums) {
        if (count[num]) result += count[num];
        count[num] = (count[num] || 0) + 1;
    }
    return result;
};