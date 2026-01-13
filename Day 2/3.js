var numbers = [];

for (var i = 0; i < 3; i++) {
    var num = Number(prompt("Enter number " + (i + 1) + ":"));
    numbers.push(num);
}

var [a, b, c] = numbers;

var sum = a + b + c;
var product = a * b * c;

var division;
if (b === 0 || c === 0) {
    division = "Cannot divide by zero";
} else {
    division = a / b / c;
}

document.write("<h3>Adding -- Multiplying -- and dividing 3 values</h3>");
document.write("<p style='color:red;'>sum of the 3 values " + a + "+" + b + "+" + c + " = " + sum + "</p>");
document.write("<p style='color:red;'>multiplication of the 3 values " + a + "*" + b + "*" + c + " = " + product + "</p>");
document.write("<p style='color:red;'>division of the 3 values " + a + "/" + b + "/" + c + " = " + division + "</p>");