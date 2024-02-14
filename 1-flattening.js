let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function arrayFlattener (inputArrays) {
    return inputArrays.reduce((a, b) => a.concat(b))
}

console.log(arrayFlattener(arrays))

// → [1, 2, 3, 4, 5, 6]