interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const arr = this;
    let obj = {};
    for (const e of arr) {
        const key = fn(e);
        if (obj[key] === undefined) {
            obj[key] = [e];
        } else {
            obj[key].push(e);
        }
    }
    return obj;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */