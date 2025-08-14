function containsDuplicate(nums: number[]): boolean {
    let map: Record<string, number> = {};
    for (const num of nums) {
        if (map[num] !== undefined) return true;
        map[num] = 0;
    }
    return false;
};