function fizzBuzz(n: number): string[] {
    return Array.from({ length: n }, (x, i) => {
        if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) return "FizzBuzz";
        else if ((i + 1) % 3 === 0) return "Fizz";
        else if ((i + 1) % 5 === 0) return "Buzz";
        else return String(i + 1);
    })
};