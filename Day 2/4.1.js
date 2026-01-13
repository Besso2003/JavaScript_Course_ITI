function strictTwoParams(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Function requires exactly 2 parameters");
    }

    return `Parameter 1: ${a}, Parameter 2: ${b}`;
}

try {
    console.log(strictTwoParams(10, 20)); // 10 20
    console.log(strictTwoParams(10)); // Throw error
    console.log(strictTwoParams(10, 20, 30));  // Throw error
} catch (error) {
    console.error(error.message);
}
