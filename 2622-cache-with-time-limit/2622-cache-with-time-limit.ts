class TimeLimitedCache {
    private cache: Record<string, number>;
    private timeoutIdObj;
    
    constructor() {
        this.cache = {};
        this.timeoutIdObj = {};
    }
    
    set(key: number, value: number, duration: number): boolean {
        if (this.cache[key] !== undefined) {
            clearTimeout(this.timeoutIdObj[key]);
            this.cache[key] = value;
            this.timeoutIdObj[key] = setTimeout(() => {
                delete this.cache[key];
            }, duration);
            return true;
        }

        this.cache[key] = value;
        
        this.timeoutIdObj[key] = setTimeout(() => {
            delete this.cache[key];
        }, duration);
        
        return false;
    }
    
    get(key: number): number {
        if (this.cache[key] === undefined) return -1;
        return this.cache[key];
    }
    
    count(): number {
        return Object.keys(this.cache).length;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */