type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        let value = x;
        for (const fn of functions.toReversed()) {
            value = fn(value);
        }
        return value;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */