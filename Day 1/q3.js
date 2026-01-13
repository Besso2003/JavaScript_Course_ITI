var sum = 0;
var value;

while (true) {
    value = prompt("Enter a number (0 to stop):");

    // Check if input is numeric
    if (isNaN(value)) {
        alert("Please enter a numeric value!");
        continue;
    }

    value = Number(value);

    // Stop if user enters 0
    if (value == 0) {
        break;
    }

    sum += value;

    // Stop if sum exceeds 100
    if (sum > 100) {
        break;
    }
}

alert("Total sum = " + sum);
