// ====== Helper Functions ======

// Cek kalau ada save data
function hasSaveData() {
    return localStorage.getItem("gameProgress") !== null;
}

// Update Continue button state
function updateContinueButton() {
    const continueBtn = document.getElementById("continueBtn");
    if (!hasSaveData()) {
        continueBtn.disabled = true;
        continueBtn.style.opacity = 0.5;
        continueBtn.style.cursor = "not-allowed";
    } else {
        continueBtn.disabled = false;
        continueBtn.style.opacity = 1;
        continueBtn.style.cursor = "pointer";
    }
}

// ====== Button Events ======

// New Game
document.getElementById("newGameBtn").addEventListener("click", () => {
    if (hasSaveData()) {
        if (!confirm("This will restart your game. Are you sure?")) return;
    }
    localStorage.setItem("gameProgress", "level1"); // reset progress
    updateContinueButton();
    alert("New Game started! (Level 1)");
    // Nanti redirect ke Level 1 atau game canvas
});

// Continue
document.getElementById("continueBtn").addEventListener("click", () => {
    if (!hasSaveData()) {
        alert("No saved game found. Start a New Game first!");
        return;
    }
    const progress = localStorage.getItem("gameProgress");
    alert("Continue game at: " + progress);
    // Nanti redirect ke level sesuai progress
});

// Credits
document.getElementById("creditsBtn").addEventListener("click", () => {
    window.location.href = "credits.html";
});

// ====== Initialize ======
window.addEventListener("load", () => {
    updateContinueButton();
});
