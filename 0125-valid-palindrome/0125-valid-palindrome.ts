function isPalindrome(s: string): boolean {
    const filtered = s.toLowerCase().split("").filter(e => (e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123) || (e.charCodeAt(0) > 47 && e.charCodeAt(0) < 58));
    return filtered.join("") == filtered.toReversed().join("");
};