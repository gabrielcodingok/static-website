const text = "Welcome to Gabriel Coding";
let index = 0;
const speed = 100; // Typing speed in milliseconds

function typeEffect() {
    if (index < text.length) {
        document.getElementById("welcomeText").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

// Start the typing effect after the page loads
window.onload = function() {
    setTimeout(typeEffect, 500);
};
