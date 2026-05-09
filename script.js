// Welcome Message
console.log("Welcome to Sarumathi Portfolio Website");

/* =========================
   Resume Download Button
========================= */

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "C:\Users\Admin\OneDrive\Desktop\Saru_portfolio\Resume.pdf";
    link.download = "Sarumathi_Resume.pdf";
    link.click();
});


/* =========================
   Navbar Active Link
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


/* =========================
   Fade Animation on Scroll
========================= */

const fadeElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

});


/* =========================
   Initial Animation Style
========================= */

fadeElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 1s ease";

});


/* =========================
   Typing Effect
========================= */

const text = "Aspiring Software Engineer";

let index = 0;

const typingElement = document.querySelector(".home h3");

typingElement.innerHTML = "";

function typingEffect(){

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);

    }

}

typingEffect();