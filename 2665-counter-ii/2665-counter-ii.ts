type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let tmp = init;
    return {
        increment() {
            return ++tmp;
        },
        decrement() {
            return --tmp;
        },
        reset() {
            tmp = init;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */