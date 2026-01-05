class TimeLimitedCache {
    private cache: Map<number, number>;
    private timeout;
    
    constructor() {
        this.cache = new Map();
        this.timeout = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        if (this.cache.has(key)) {
            clearTimeout(this.timeout.get(key));
            this.cache.set(key, value);
            const timeoutId = setTimeout(() => {
                this.cache.delete(key);
            }, duration);
            this.timeout.set(key, timeoutId);
            return true;
        }

        this.cache.set(key, value);

        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.timeout.set(key, timeoutId);
        return false;
    }
    
    get(key: number): number {
        if (!this.cache.has(key)) return -1;
        return this.cache.get(key);
    }
    
    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */