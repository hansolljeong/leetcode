function leftRightDifference(nums: number[]): number[] {
    const leftSum = nums.map((_, i) => nums.slice(0, i).reduce((acc, cur) => acc + cur, 0));
    const rightSum = nums.map((_, i) => nums.slice(i + 1).reduce((acc, cur) => acc + cur, 0));
    const answer = leftSum.map((v, i) => Math.abs(v - rightSum[i]));
    return answer;
};