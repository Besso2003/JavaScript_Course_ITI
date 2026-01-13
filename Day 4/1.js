function getRandomColor() {
    return "rgb(" +
        Math.floor(Math.random() * 256) + "," +
        Math.floor(Math.random() * 256) + "," +
        Math.floor(Math.random() * 256) + ")";
}

function cloneDiv(event) {
    var clickedDiv = event.target;

    var clone = clickedDiv.cloneNode(true);

    clone.style.backgroundColor = getRandomColor();

    clone.onclick = cloneDiv;

    document.body.appendChild(clone);
}

document.querySelector(".box").onclick = cloneDiv;
