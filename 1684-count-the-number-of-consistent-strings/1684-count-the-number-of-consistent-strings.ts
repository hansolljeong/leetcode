function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedSet = new Set(allowed);
    return words.filter(word => word.split("").every(s => allowedSet.has(s))).length;
};