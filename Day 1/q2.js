var message = prompt("Enter your message:");

if (message !== null && message !== "") {  // check for cancel or empty
    for (var i = 1; i <= 6; i++) {
        document.write("<h" + i + ">" + message + "</h" + i + ">");
    }
} else {
    document.write("<p>No message entered.</p>");
}
