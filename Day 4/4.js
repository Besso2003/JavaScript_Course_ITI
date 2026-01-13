var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg"
];

var index = 0;
var timer = null;

var img = document.getElementById("photo");

function next() {
    if (index < images.length - 1) {
        index++;
        img.src = images[index];
    }
}

function prev() {
    if (index > 0) {
        index--;
        img.src = images[index];
    }
}

function slideshow() {
    if (timer !== null) return;

    timer = setInterval(function () {
        index++;
        if (index === images.length) {
            index = 0;
        }
        img.src = images[index];
    }, 2000); // 2 seconds
}

function stopShow() {
    clearInterval(timer);
    timer = null;
}
