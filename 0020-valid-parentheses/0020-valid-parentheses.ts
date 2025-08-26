function isValid(s: string): boolean {
    const stack = [];
    for (const bracket of s) {
        if (stack.length === 0) {
            stack.push(bracket);
        } else if (stack.at(-1) === "(" && bracket === ")" || stack.at(-1) === "{" && bracket === "}" || stack.at(-1) === "[" && bracket === "]") {
            stack.pop();
        } else {
            stack.push(bracket);
        }
    }
    return stack.length === 0;
};