function scoreOfString(s: string): number {
    const transformedToASCII = [...s].map(char => char.charCodeAt(0));
    let score = 0;
    for (let i = 1; i < s.length; i++) {
        score += Math.abs(transformedToASCII[i] - transformedToASCII[i - 1]);
    }
    return score;
};