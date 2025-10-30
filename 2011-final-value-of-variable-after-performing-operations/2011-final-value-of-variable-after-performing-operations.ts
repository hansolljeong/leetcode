function finalValueAfterOperations(operations: string[]): number {
    let output = 0;
    for (const op of operations) {
        if (op.includes('+')) output++;
        else output--;
    }
    return output;
};