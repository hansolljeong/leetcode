function countConsistentStrings(allowed: string, words: string[]): number {
    return words.filter((word) => word.split("").every((s) => allowed.includes(s))).length;
};