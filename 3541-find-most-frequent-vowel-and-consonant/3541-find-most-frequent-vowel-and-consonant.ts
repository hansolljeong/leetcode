function maxFreqSum(s: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap: Record<string, number> = {};
    const nonVowelMap: Record<string, number> = {};
    for (const char of s) {
        if (vowels.includes(char)) {
            vowelMap[char] = vowelMap[char] ? vowelMap[char] + 1 : 1;
        } else {
            nonVowelMap[char] = nonVowelMap[char] ? nonVowelMap[char] + 1 : 1;
        }
    }
    const maxVowelFreq = Math.max(0, ...Object.values(vowelMap));
    const maxUnVowelFreq = Math.max(0, ...Object.values(nonVowelMap));
    return maxVowelFreq + maxUnVowelFreq;
};