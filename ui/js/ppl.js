const pplCarousel = document.querySelector('[ppl-carousel-wrapper]');
const pplArrows = document.querySelectorAll('[data-carousel-arrows]');
const pplCarouselDots = document.querySelectorAll('[ppl-data-dots]');

let pplSlideIndex = 0;

// function to add active slide attribute
function activatePplSlide (slides) {
    console.log(pplSlideIndex)
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[pplSlideIndex].setAttribute('data-active-slide', true);
}

// function to add active dots attribute
function activatePplDots(dots) {
    console.log(pplSlideIndex)
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[pplSlideIndex].setAttribute('data-active-dot', true);
}

// Below function will add or remove disabled attribute to the arrows
function disablePplArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = pplSlideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = pplSlideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}

// helper function to hide or show slides
function showPplSlides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[ppl-carousel-item]');
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disablePplArrows(slides, nextBtn, prevBtn)

    activatePplSlide (slides);
    activatePplDots(dots);
}

// function to navigate next or prev slide
function nextOrPrevSlidePpl (dir) {
    console.log(dir,pplCarousel, pplCarouselDots)
    if (dir === 'ppl-next') {
        pplSlideIndex++;
        showPplSlides(pplCarousel, pplCarouselDots);
    } else if (dir === 'ppl-prev') {
        pplSlideIndex--;
        showPplSlides(pplCarousel, pplCarouselDots);
    }
}

// function to activate current clicked dot vs current slide
function currentPplSlide(n) {
    pplSlideIndex = n - 1;
    showPplSlides(pplCarousel, pplCarouselDots);
}

// function to handle arrows click event
function handleArrowPplClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            nextOrPrevSlidePpl(arrow.dataset.dir);
        })
    });
}

// function to handle dots click event
function handleDotsPplClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}

// handle all the click events
function handlePplClickEvents() {
    handleDotsPplClickEvent(pplCarouselDots);
    handleArrowPplClickEvent(pplArrows);

    // We need to call this function here only if we need to disable the prev arrow on-load
    showPplSlides(pplCarousel, pplCarouselDots);
}

handlePplClickEvents();