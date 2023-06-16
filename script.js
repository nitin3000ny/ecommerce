
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById('current-year');
currentYearElement.textContent = currentYear;
document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.querySelector(".popup-overlay");
    const closeButton = document.querySelector(".close-btn");
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            popupOverlay.style.display = "none";
        });
    }
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

const proCard = document.querySelectorAll('.pro-card');


for (let i = 0; i < proCard.length; i++) {
    proCard[i].addEventListener('click', () => {
        window.open("sproduct.html");
    }
    );
}

let main = document.getElementById('main-pic');
const small = document.querySelectorAll(".small-imgs2");

small.forEach((small) => {
    small.addEventListener('click', () => {
        main.src = small.src;
    });
});

//  main.src = `${proCardimg[1].src}`;
// console.log(proCardimg[0].src);

 // Get the video
 const video = document.getElementById("myVideo");

 // Get the button
 const btn = document.getElementById("myBtn");

 // Pause and play the video, and change the button text
 function myFunction() {
     if (video.paused) {
         video.play();
         btn.innerHTML = "Pause";
     } else {
         video.pause();
         btn.innerHTML = "Play";
     }
 }