function recoverOrder(order: number[], friends: number[]): number[] {
    const output = [];
    for (const id of order) {
        if (friends.includes(id)) output.push(id);
    }
    return output;
};