const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionSection = document.getElementById("question-section");
const successSection = document.getElementById("success-section");

let yesScale = 1; // Initial scale of the Yes button

noBtn.addEventListener("mouseover", () => {
    // 1. Make the No button jump away
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Make the Yes button bigger and more tempting
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // Optional: Change the text of the No button to be funny/apologetic
    const phrases = ["Are you sure?", "Really?", "Think again!", "Pwease?", "I'm sorry!"];
    noBtn.innerText = phrases[Math.floor(Math.random() * phrases.length)];
});

yesBtn.addEventListener("click", () => {
    questionSection.classList.add("hidden");
    successSection.classList.remove("hidden");
});
