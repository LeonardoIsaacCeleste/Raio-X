const striveCarousel = document.querySelector('[strive-carousel-wrapper]');
const striveArrows = document.querySelectorAll('[data-carousel-arrows]');
const striveCarouselDots = document.querySelectorAll('[strive-data-dots]');

let striveSlideIndex = 0;

// function to add active slide attribute
function activatestriveSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[striveSlideIndex].setAttribute('data-active-slide', true);
}

// function to add active dots attribute
function activatestriveDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[striveSlideIndex].setAttribute('data-active-dot', true);
}

// Below function will add or remove disabled attribute to the arrows
function disablestriveArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = striveSlideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = striveSlideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}

// helper function to hide or show slides
function showstriveSlides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[strive-carousel-item]');
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disablestriveArrows(slides, nextBtn, prevBtn)

    activatestriveSlide (slides);
    activatestriveDots(dots);
}

// function to navigate next or prev slide
function nextOrPrevSlidestrive (dir) {
    if (dir === 'strive-next') {
        striveSlideIndex++;
        showstriveSlides(striveCarousel, striveCarouselDots);
    } else if (dir === 'strive-prev') {
        striveSlideIndex--;
        showstriveSlides(striveCarousel, striveCarouselDots);
    }
}

// function to activate current clicked dot vs current slide
function currentstriveSlide(n) {
    striveSlideIndex = n - 1;
    showstriveSlides(striveCarousel, striveCarouselDots);
}

// function to handle arrows click event
function handleArrowstriveClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            nextOrPrevSlidestrive(arrow.dataset.dir);
        })
    });
}

// function to handle dots click event
function handleDotsstriveClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}

// handle all the click events
function handlestriveClickEvents() {
    handleDotsstriveClickEvent(striveCarouselDots);
    handleArrowstriveClickEvent(striveArrows);

    // We need to call this function here only if we need to disable the prev arrow on-load
    showstriveSlides(striveCarousel, striveCarouselDots);
}

handlestriveClickEvents();