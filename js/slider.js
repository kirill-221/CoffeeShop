function initSlider() {
    const slidesToShow = document.clientWidth > 1300 ? 1 : 2;
    const slidesToScroll = 1;
    const gap = 40;

    let position = 0;

    const slider = document.querySelector('.slider');
    const slidesContainer = document.querySelector('.slider__slides');
    const slides = document.querySelectorAll('.slider__slide');
    const buttonPrev = document.querySelector('.button__type--prev');
    const buttonNext = document.querySelector('.button__type--next');
    const scrolledSlides = document.querySelector('.js-scrolled-slides');
    const allSlides = document.querySelectorAll('.js-all-slides');
    // const activeLine = document.querySelector('.slider__active');
    // const allLine = document.querySelector('.slider__line');

    const slideWidth =
        (slider.clientWidth - (slidesToShow - 1) * gap) / slidesToShow;
    const slidesCount = slides.length;

    slides.forEach((slide) => {
        slide.style.minWidth = `${slideWidth}px`;
        slide.style.marginRight = `${gap}px`;
    });

    const setPosition = () => {
        slidesContainer.style.transform = `translateX(${position}px)`;
    };

    const checkButtons = () => {
        buttonPrev.disabled = position === 0;
        buttonNext.disabled =
            position <= -(slidesCount - slidesToShow) * slideWidth;
    };
    checkButtons();

    const movePosition = (slideWidth + gap) * slidesToScroll;

    buttonPrev.addEventListener('click', () => {
        const unscrolledSlidesCount = Math.abs(position) / (slideWidth + gap);
        position +=
            unscrolledSlidesCount >= slidesToScroll
                ? movePosition
                : unscrolledSlidesCount * (slideWidth + gap);

        setPosition();
        checkButtons();
        console.log('prev');
        scrolledSlides.textContent = unscrolledSlidesCount + 1;
    });

    buttonNext.addEventListener('click', () => {
        const unscrolledSlidesCount =
            slidesCount -
            (Math.abs(position) + slidesToShow * (slideWidth + gap)) /
                (slideWidth + gap);
        position -=
            unscrolledSlidesCount >= slidesToScroll
                ? movePosition
                : unscrolledSlidesCount * (slideWidth + gap);

        setPosition();
        checkButtons();
        console.log('next');
        const allSlides = slides.length;
        scrolledSlides.textContent = allSlides - unscrolledSlidesCount + 1;
    });
}

initSlider();
