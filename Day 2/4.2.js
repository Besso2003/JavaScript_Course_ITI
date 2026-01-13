function reverseParams(...args) {
    return args.reverse();
}

console.log(reverseParams(1, 2, 3, 4));          // [4, 3, 2, 1]
console.log(reverseParams("a", "b", "c"));       // ["c", "b", "a"]
console.log(reverseParams(true, false, true));   // [true, false, true]
console.log(reverseParams());                     // []
