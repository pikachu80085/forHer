document.getElementById("yesButton").addEventListener("click", function() {
    this.classList.add("large");
    document.getElementById("noButton").classList.add("small");
    displayMessage("Yes! You're my valentine!");
});

document.getElementById("noButton").addEventListener("click", function() {
    const buttonWidth = this.clientWidth;
    const buttonHeight = this.clientHeight;
    const maxX = document.querySelector('.container').clientWidth - buttonWidth; // Adjusted to use the container width
    const maxY = document.querySelector('.container').clientHeight - buttonHeight; // Adjusted to use the container height

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

function displayMessage(message) {
    document.getElementById("valentineMessage").innerText = message;
}
