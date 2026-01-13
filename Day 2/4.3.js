function sumNumbers(...args) {
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] !== "number" || isNaN(args[i])) {
            throw new Error("Invalid parameter at position " + (i + 1) + ": " + args[i] + " is not a number");
        }
    }

    var sum = 0;
    for (var j = 0; j < args.length; j++) {
        sum += args[j];
    }
    return sum;
}

try {
    console.log(sumNumbers(1, 2, 3, 4));  // 10
    console.log(sumNumbers(5, 10, 15));   // 30
    console.log(sumNumbers(2, "a", 3));   // Throws error
} catch (error) {
    console.error(error.message);
}
