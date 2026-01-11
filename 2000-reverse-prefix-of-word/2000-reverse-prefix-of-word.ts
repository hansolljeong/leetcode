function reversePrefix(word: string, ch: string): string {
    const chIdx = word.split('').indexOf(ch);
    return word.slice(0, chIdx + 1).split('').reverse().join('').concat(word.slice(chIdx + 1));
};