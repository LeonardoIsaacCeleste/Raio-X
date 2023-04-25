
const futureCarousel = document.querySelector('[future-carousel-wrapper]');
const futureArrows = document.querySelectorAll('[data-carousel-arrows]');
const futureCarouselDots = document.querySelectorAll('[future-data-dots]');

let futureSlideIndex = 0;

// function to add active slide attribute
function activatefutureSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[futureSlideIndex].setAttribute('data-active-slide', true);
}

// function to add active dots attribute
function activatefutureDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[futureSlideIndex].setAttribute('data-active-dot', true);
}

// Below function will add or remove disabled attribute to the arrows
function disablefutureArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = futureSlideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = futureSlideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}

// helper function to hide or show slides
function showfutureSlides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[future-carousel-item]');
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disablefutureArrows(slides, nextBtn, prevBtn)

    activatefutureSlide (slides);
    activatefutureDots(dots);
}

// function to navigate next or prev slide
function nextOrPrevSlidefuture (dir) {
    if (dir === 'future-next') {
        futureSlideIndex++;
        showfutureSlides(futureCarousel, futureCarouselDots);
    } else if (dir === 'future-prev') {
        futureSlideIndex--;
        showfutureSlides(futureCarousel, futureCarouselDots);
    }
}

// function to activate current clicked dot vs current slide
function currentfutureSlide(n) {
    futureSlideIndex = n - 1;
    showfutureSlides(futureCarousel, futureCarouselDots);
}

// function to handle arrows click event
function handleArrowfutureClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            nextOrPrevSlidefuture(arrow.dataset.dir);
        })
    });
}

// function to handle dots click event
function handleDotsfutureClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}

// handle all the click events
function handlefutureClickEvents() {
    handleDotsfutureClickEvent(futureCarouselDots);
    handleArrowfutureClickEvent(futureArrows);

    // We need to call this function here only if we need to disable the prev arrow on-load
    showfutureSlides(futureCarousel, futureCarouselDots);
}

handlefutureClickEvents();