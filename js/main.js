let menuButton = document.querySelector('.navbar-menu');
menuButton.addEventListener('click', () => {
    console.log('Клик по кнопке меню');
    document
        .querySelector('.navbar-mobile')
        .classList.toggle('navbar-mobile--visible');
});
AOS.init();
