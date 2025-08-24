function isPalindrome(s: string): boolean {
    const aa = s.toLowerCase().split("").filter(e => (e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123) || (e.charCodeAt(0) > 47 && e.charCodeAt(0) < 58));
    const reverse = aa.toReversed();
    return aa.join("") == reverse.join("");
};