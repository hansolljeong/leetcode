function numIdenticalPairs(nums: number[]): number {
    let result = 0;
    const count = {};
    for (const num of nums) {
        if (count[num]) {
            result += count[num];
            count[num]++;
        } else {
            count[num] = 1;
        }
    }
    return result;
};