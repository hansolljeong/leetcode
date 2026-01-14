function mirrorDistance(n: number): number {
    const reversed = Number(n.toString().split('').reverse().join(''));
    return Math.abs(n - reversed);
};