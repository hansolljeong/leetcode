function runningSum(nums: number[]): number[] {
    let acc = 0;
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        output.push(acc);
    }
    return output;
};