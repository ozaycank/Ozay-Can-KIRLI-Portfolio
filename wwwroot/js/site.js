// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", reveal);
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var extraInfo = document.getElementById('extraInfo');
    var seeMoreBtn = document.getElementById('seeMoreBtn');

    seeMoreBtn.addEventListener('click', function () {
        extraInfo.hidden = !extraInfo.hidden;
        seeMoreBtn.textContent = extraInfo.hidden ? 'See More' : 'See Less';
    });

    var seeAllBtn = document.getElementById('seeAllBtn');
    var cards = document.querySelectorAll('.card');
    seeAllBtn.addEventListener('click', function () {
        cards.forEach(function (card) {
            card.classList.add('active');
        });

        seeAllBtn.style.display = 'none';
    });
});
