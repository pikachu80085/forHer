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

document.getElementById("yesButton").addEventListener("click", function() {
    displayMessage("Yes! You're my valentine! ❤️");
    createHearts();
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        let startX = Math.random() * window.innerWidth;
        let duration = Math.random() * 2 + 2; // 2 to 4 seconds
        let size = Math.random() * 20 + 10; // 10px to 30px

        heart.style.left = `${startX}px`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDuration = `${duration}s`;

        setTimeout(() => heart.remove(), duration * 1000);
    }
}

