function twoSum(nums: number[], target: number): number[] {
    const complements = new Set();
    complements.add(target - nums[0]);
    for (let i = 1; i < nums.length; i++) {
      if (complements.has(nums[i])) return [nums.indexOf(target - nums[i]), i];
      complements.add(target - nums[i]);
    }
};