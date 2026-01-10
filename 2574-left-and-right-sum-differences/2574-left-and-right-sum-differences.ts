function leftRightDifference(nums: number[]): number[] {
    const answer = [];
    const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < nums.length; i++) {
        rightSum = totalSum - leftSum - nums[i];
        answer.push(Math.abs(leftSum - rightSum));
        leftSum += nums[i];
    }
    return answer;
};
