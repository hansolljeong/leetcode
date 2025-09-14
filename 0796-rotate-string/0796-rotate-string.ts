function rotateString(s: string, goal: string): boolean {
    for (let i = 0; i < s.length; i++) {
        if (s === goal) return true;
        s = s.substring(1) + s.substring(0, 1);
    }
    return false;
};