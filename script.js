
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById('current-year');
currentYearElement.textContent = currentYear; document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.querySelector(".popup-overlay");
    const closeButton = document.querySelector(".close-btn");

    closeButton.addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });
});
