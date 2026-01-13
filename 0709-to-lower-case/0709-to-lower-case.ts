function toLowerCase(s: string): string {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') {
            const charCode = s.charCodeAt(i);
            result += String.fromCharCode(charCode + 32);
        } else {
            result += s[i];
        }
    }
    return result;
};