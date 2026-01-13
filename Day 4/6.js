document.addEventListener("keydown", function(event) {
    var ascii = event.keyCode || event.which;

    alert("ASCII Code: " + ascii);

    var modifiers = [];
    if (event.altKey) modifiers.push("Alt");
    if (event.ctrlKey) modifiers.push("Ctrl");
    if (event.shiftKey) modifiers.push("Shift");

    if (modifiers.length > 0) {
        alert("Modifier key pressed: " + modifiers.join(", "));
    }
});
