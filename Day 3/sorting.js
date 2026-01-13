var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = Number(prompt("Enter value " + (i + 1)));
}

document.write("<h2>Sorting</h2>");
document.write("<hr>");

document.write("<p style='color:red'>u've entered the values of " + arr.join(", ") + "</p>");

// Sort descending
var desc = arr.slice().sort(function(a, b) {
    return b - a; // if result > 0, a comes after b
});
// Display the sorted desc array
document.write(
    "<p style='color:red'>ur values after being sorted descending " +
    desc.join(",") +
    "</p>"
);

// Sort ascending
var asc = arr.slice().sort(function(a, b) {
    return a - b; // if result > 0, b comes after a
});
// Display the sorted asc array
document.write(
    "<p style='color:red'>ur values after being sorted ascending " +
    asc.join(",") +
    "</p>"
);
