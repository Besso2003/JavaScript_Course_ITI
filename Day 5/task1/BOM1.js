let childWindow = window.open("", "Child Window");
childWindow.document.write("<h1>This is the child window</h1>");
setTimeout(() => {
    childWindow.close();
}, 5000); // 5 seconds