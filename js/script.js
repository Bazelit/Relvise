const menu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".menu__icon");
const btnLines = document.querySelectorAll(".menu__icon span");
const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");
        body.classList.toggle("lock");
         btnLines.forEach((btnLine) => {
             btnLine.classList.toggle("white");
         });
    });
    menu.querySelectorAll(".menu__link").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            body.classList.remove("lock");
        });
    });
}

// ===========Smooth Scrolling=============

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute("href").substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});
