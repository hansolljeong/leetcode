function isValid(s: string): boolean {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (const bracket of s) {
        if (bracket in map) {
            if (stack.length === 0 || stack.pop() !== map[bracket]) return false;
        } else {
            stack.push(bracket);
        }
    }
    return stack.length === 0;
};