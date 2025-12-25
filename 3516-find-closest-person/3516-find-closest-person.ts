function findClosest(x: number, y: number, z: number): number {
    const distFromX = Math.abs(x - z);
    const distFromY = Math.abs(y - z);
    if (distFromX === distFromY) return 0;
    else if (distFromX - distFromY > 0) return 2;
    else return 1;
};