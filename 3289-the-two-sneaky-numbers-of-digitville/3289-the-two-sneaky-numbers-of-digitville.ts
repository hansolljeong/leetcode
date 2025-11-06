function getSneakyNumbers(nums: number[]): number[] {
    const seen = new Set();
    const result = [];
    for (const num of nums) {
        if (seen.has(num)) result.push(num);
        else seen.add(num);
    }
    return result;
};