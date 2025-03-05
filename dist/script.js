const headerNav = document.querySelector(".header__nav");
const burgerBtn = document.querySelector(".burgerBtn");
burgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    burgerBtn.classList.toggle("open");
})

const closeBtn = document.querySelector(".header__nav__closeBtn i");
closeBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    burgerBtn.classList.toggle("open");
})

window.addEventListener('scroll', () => {
    var header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 100);
})