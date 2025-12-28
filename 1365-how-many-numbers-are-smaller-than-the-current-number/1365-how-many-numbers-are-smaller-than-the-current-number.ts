function smallerNumbersThanCurrent(nums: number[]): number[] {
    return nums.map(num => nums.filter(n => n < num).length);
};