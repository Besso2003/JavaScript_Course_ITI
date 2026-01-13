// Get the header element by its ID
var header = document.getElementById('header');

// Align the text inside the header to the right
header.style.textAlign = 'right';

// find an element with class 'center', then inside it find an element with id 'header', then find an <img> inside it
var image = document.querySelector('.center #header img');

console.log(image);

// cloneNode(true) by deep copy
var duplicateImage = image.cloneNode(true);

// Create a new <div> element
var footer = document.createElement('div');

footer.id = 'footer';

footer.appendChild(duplicateImage);

// Align the content inside the footer to the left
footer.style.textAlign = 'left';

// Add the footer to the body of the document, so it becomes visible
document.body.appendChild(footer);

// Get the element with id 'navigation', then select its first child element (<ul>)
var nav_list = document.getElementById('navigation').firstElementChild;

// Change the position of bullets to appear inside the content box
nav_list.style.listStylePosition = 'inside';
