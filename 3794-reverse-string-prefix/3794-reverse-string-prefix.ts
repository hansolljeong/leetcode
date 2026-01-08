function reversePrefix(s: string, k: number): string {
    const left = s.slice(0, k);
    const right = s.slice(k);
    return left.split("").reverse().join("").concat(right);
};