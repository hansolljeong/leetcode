function balancedStringSplit(s: string): number {
    let count = 0;
    let balance = 0;
    for (const ch of s) {
        if (ch === 'L') balance++;
        else balance--;

        if (balance === 0) count++;
    }
    return count;
};