var text = prompt("Enter a string:");

var considerCase = confirm("Do you want to consider case sensitivity?\nOK = Yes\nCancel = No");

if (!considerCase) {
    text = text.toLowerCase();
}

var reversed = "";
for (var i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

if (text === reversed) {
    alert("The string is a PALINDROME");
} else {
    alert("The string is NOT a palindrome");
}
