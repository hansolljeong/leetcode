function removeDuplicates(nums: number[]): number {
    let target = 1;
    for (let observer = 1; observer < nums.length; observer++) {
        if (nums[target - 1] !== nums[observer]) {
            nums[target] = nums[observer];
            target++
        }
    }
    return target;
};