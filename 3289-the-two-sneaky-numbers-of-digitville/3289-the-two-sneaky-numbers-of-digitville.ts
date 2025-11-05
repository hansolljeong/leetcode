function getSneakyNumbers(nums: number[]): number[] {
    const result = [];
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) !== undefined) result.push(nums[i]);
        else map.set(nums[i], 1);
    }
    return result;
};