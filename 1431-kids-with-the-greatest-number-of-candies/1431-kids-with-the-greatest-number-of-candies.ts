function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandiesCount = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandiesCount);
};