type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    if (arr.length === 0) return [];
    
    let stack = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
        if (stack.length === size || i === arr.length - 1) {
            result.push(stack);
            stack = [];
        }
    }
    return result;
};
