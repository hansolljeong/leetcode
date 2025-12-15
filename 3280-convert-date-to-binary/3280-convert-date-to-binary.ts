function convertDateToBinary(date: string): string {
    return date.split('-').map(e => parseInt(e).toString(2)).join('-');
};