
// Перекючение Mobile-menu

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

//   Initialize Swiper services

var swiper = new Swiper(".services-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});

//   Initialize Swiper doctors

var swiper = new Swiper(".doctors-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});

//   Initialize Swiper review

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});