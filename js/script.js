/* Parallax Scroll Effect 
Adapted via https://dev.to/ibrahima92/make-a-parallax-effect-with-10-lines-of-javascript-3hia */
window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector("header").style.transform = `translateY(${distance *0.5}px)`;
    document.querySelector(".coverpage-container").style.transform = `translateY(${distance * 0.3}px)`;
    setTimeout(() => {
        document.querySelector("section h3").classList.add("animateCover");
    }, 400);
});


/* Tablet & Mobile Navigation 
Adapted via https://www.youtube.com/watch?v=gXkqy0b4M5g */
function clickMenu() {
    const burger = document.querySelector(".menu-burger-icon");
    const navMenu = document.querySelector(".desktop-nav");
    
    burger.classList.toggle('toggleMenu');
    navMenu.classList.toggle("desktop-nav-toggle");
}


/* Slideshow 
Adapted via https://www.codingsnow.com/2021/01/image-slider-with-auto-play-manual.html */
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

