var clockDiv = document.getElementById("clock");
var startBtn = document.getElementById("startBtn");
var timer = null;

function updateClock() {
    var now = new Date();
    clockDiv.textContent = now.toLocaleTimeString();
}

startBtn.onclick = function () {
    if (timer === null) {
        alert("Clock Started");
        updateClock();
        timer = setInterval(updateClock, 1000); //update every second
    }
};

document.addEventListener("keydown", function (e) {
    if (e.altKey && e.key.toLowerCase() === "w") {
        e.preventDefault();
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
            alert("Clock stopped");
        }
    }
});
