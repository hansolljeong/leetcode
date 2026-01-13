function toLowerCase(s: string): string {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode > 64 && charCode < 97) result += String.fromCharCode(charCode + 32);
        else result += s[i];
    }
    return result;
};