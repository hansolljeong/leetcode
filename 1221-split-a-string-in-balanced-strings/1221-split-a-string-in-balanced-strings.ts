function balancedStringSplit(s: string): number {
    let balance = 0;
    return s.split('').reduce((count, cur) => {
        if (cur === 'L') balance++;
        else balance--;

        if (balance === 0) count++;
        return count;
    }, 0)
};