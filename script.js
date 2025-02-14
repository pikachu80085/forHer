document.getElementById("yesButton").addEventListener("click", function() {
    this.classList.add("large");
    document.getElementById("noButton").classList.add("small");
    displayMessage("Yes! You're my valentine! ❤️");
});

document.getElementById("noButton").addEventListener("click", function() {
    const container = document.querySelector(".container");
    const maxX = container.clientWidth - this.clientWidth - 20;
    const maxY = container.clientHeight - this.clientHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.position = "absolute"; // Ensures it moves freely
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

function displayMessage(message) {
    document.getElementById("valentineMessage").innerText = message;
}
