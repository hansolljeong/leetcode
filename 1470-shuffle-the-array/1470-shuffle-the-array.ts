function shuffle(nums: number[], n: number): number[] {
    const result = [];
    const firstHalf = nums.slice(0, n);
    const secondHalf = nums.slice(n);
    for (let i = 0; i < n; i++) {
        result.push(firstHalf[i]);
        result.push(secondHalf[i]);
    }
    return result;
};