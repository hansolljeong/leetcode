function recoverOrder(order: number[], friends: number[]): number[] {
    const friendSet = new Set(friends);
    const result = [];
    for (const id of order) {
        if (friendSet.has(id)) result.push(id);
    }
    return result;
};