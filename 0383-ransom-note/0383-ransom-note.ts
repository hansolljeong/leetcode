function canConstruct(ransomNote: string, magazine: string): boolean {
    let magazineLettersMap = new Map();
    for (let i = 0; i < magazine.length; i++) {
        const m = magazine[i];
        magazineLettersMap[m] = magazineLettersMap[m] === undefined ? 1 : magazineLettersMap[m] + 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const r = ransomNote[i];
        if (!magazineLettersMap[r]) return false;

        magazineLettersMap[r]--;
    }
    return true;
};