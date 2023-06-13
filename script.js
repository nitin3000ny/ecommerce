
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById('current-year');
currentYearElement.textContent = currentYear;
document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.querySelector(".popup-overlay");
    const closeButton = document.querySelector(".close-btn");

    closeButton.addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });
});
const hambutton = document.querySelector('#hamburger');
hambutton.addEventListener('click', () => {
    const menu = document.querySelector('#nav-links');
    menu.classList.add('active');

})
const closebutton = document.querySelector('#close-menu-btn');
closebutton.addEventListener('click', (e) => {
    e.preventDefault();
    const menu = document.querySelector('#nav-links');
    menu.classList.remove('active');

})
const proCard=document.querySelectorAll('.pro-card');
for(let i=0;i<proCard.length;i++){
    
proCard[i].addEventListener('click',()=>{
    window.open("sproduct.html")});
}