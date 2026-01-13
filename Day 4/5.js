var marbles = document.querySelectorAll("#line img");
var current = 0;
var speed = 1000;
var timer;

marbles[0].src = "images/marble2.jpg";

function moveMarble() {
    marbles[current].src = "images/marble1.jpg";

    current = (current + 1) % marbles.length;

    marbles[current].src = "images/marble2.jpg";

    if (speed > 300) {
        speed -= 50;
        clearInterval(timer);
        startAnimation();
    }
}

function startAnimation() {
    timer = setInterval(moveMarble, speed);
}

marbles.forEach(function(m) {
    m.addEventListener("mouseenter", function() {
        clearInterval(timer);
    });

    m.addEventListener("mouseleave", function() {
        startAnimation();
    });
});

startAnimation();
