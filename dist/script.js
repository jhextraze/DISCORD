const headerNav = document.querySelector(".header-nav");
const burgerBtn = document.querySelector(".burger-btn-real");
burgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    burgerBtn.classList.toggle("open");
});