const serveCarousel = document.querySelector('[serve-carousel-wrapper]');
const serveArrows = document.querySelectorAll('[data-carousel-arrows]');
const serveCarouselDots = document.querySelectorAll('[serve-data-dots]');

let serveSlideIndex = 0;

// function to add active slide attribute
function activateserveSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[serveSlideIndex].setAttribute('data-active-slide', true);
}

// function to add active dots attribute
function activateserveDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[serveSlideIndex].setAttribute('data-active-dot', true);
}

// Below function will add or remove disabled attribute to the arrows
function disableserveArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = serveSlideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = serveSlideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}

// helper function to hide or show slides
function showserveSlides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[serve-carousel-item]');
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableserveArrows(slides, nextBtn, prevBtn)

    activateserveSlide (slides);
    activateserveDots(dots);
}

// function to navigate next or prev slide
function nextOrPrevSlideserve (dir) {
    if (dir === 'serve-next') {
        serveSlideIndex++;
        showserveSlides(serveCarousel, serveCarouselDots);
    } else if (dir === 'serve-prev') {
        serveSlideIndex--;
        showserveSlides(serveCarousel, serveCarouselDots);
    }
}

// function to activate current clicked dot vs current slide
function currentserveSlide(n) {
    serveSlideIndex = n - 1;
    showserveSlides(serveCarousel, serveCarouselDots);
}

// function to handle arrows click event
function handleArrowserveClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            nextOrPrevSlideserve(arrow.dataset.dir);
        })
    });
}

// function to handle dots click event
function handleDotsserveClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}

// handle all the click events
function handleserveClickEvents() {
    handleDotsserveClickEvent(serveCarouselDots);
    handleArrowserveClickEvent(serveArrows);

    // We need to call this function here only if we need to disable the prev arrow on-load
    showserveSlides(serveCarousel, serveCarouselDots);
}

handleserveClickEvents();