function reverseDegree(s: string): number {
    return s.split("").map((letter, idx) => (123 - letter.charCodeAt(0)) * (idx + 1)).reduce((acc, cur) => acc + cur);
};