function canConstruct(ransomNote: string, magazine: string): boolean {
    let matchCount = 0;
    const magazineArr = [...magazine];
    for (const e of [...ransomNote]) {
        const idx = magazineArr.findIndex(v => v === e);
        if (idx !== -1) {
            magazineArr.splice(idx, 1);
            matchCount++;
        } else {
            return false;
        }
    }
    return matchCount === ransomNote.length;
};