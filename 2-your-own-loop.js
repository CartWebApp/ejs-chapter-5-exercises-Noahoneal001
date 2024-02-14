// Your code here.

function myLoop(n, test, update, base) {
    while (test(n)) {
        base(n)
        n = update(n)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1