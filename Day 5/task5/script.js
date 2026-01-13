function getMinMax(...numbers) {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

var result = getMinMax(10, 5, 20, 3, 50, 1);

console.log("Min value:", result.min);
console.log("Max value:", result.max);
