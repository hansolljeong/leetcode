function findPermutationDifference(s: string, t: string): number {
    let pDiff = 0;
    for (let i = 0; i < s.length; i++) {
        pDiff += Math.abs(i - t.indexOf(s[i]));
    }
    return pDiff;
};