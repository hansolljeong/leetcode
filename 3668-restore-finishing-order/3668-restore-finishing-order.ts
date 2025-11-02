function recoverOrder(order: number[], friends: number[]): number[] {
    const friendSet = new Set(friends);
    const output = [];
    for (const id of order) {
        if (friendSet.has(id)) output.push(id);
    }
    return output;
};