
// AOS 
AOS.init({ once: true });

// Menu
const btnMenu = document.getElementById('btn-menu');
const navbar = document.getElementById('navbar');

btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('aberto');
});

// CountUp.JS
const opcoes = {
    duration: 5,             // segundos
    separator: '.',          // 5000 vira 5.000
    enableScrollSpy: true,   // só começa quando aparece na tela
    scrollSpyOnce: true      // anima uma vez só
};

document.querySelectorAll('.contador').forEach((elemento) => {
    new countUp.CountUp(elemento, Number(elemento.dataset.alvo), opcoes);
});

// Swiper JS
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.1,        // no celular, o próximo banner aparece na ponta
    spaceBetween: 20,
    autoplay: { delay: 5000, pauseOnMouseEnter: true },
    pagination: { el: '.swiper-pagination', clickable: true }
});
