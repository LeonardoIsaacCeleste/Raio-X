
const globalCarousel = document.querySelector('[global-carousel-wrapper]');
const globalArrows = document.querySelectorAll('[data-carousel-arrows]');
const globalCarouselDots = document.querySelectorAll('[global-data-dots]');

let globalSlideIndex = 0;

// function to add active slide attribute
function activateglobalSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[globalSlideIndex].setAttribute('data-active-slide', true);
}

// function to add active dots attribute
function activateglobalDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[globalSlideIndex].setAttribute('data-active-dot', true);
}

// Below function will add or remove disabled attribute to the arrows
function disableglobalArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = globalSlideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = globalSlideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}

// helper function to hide or show slides
function showglobalSlides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[global-carousel-item]');
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableglobalArrows(slides, nextBtn, prevBtn)

    activateglobalSlide (slides);
    activateglobalDots(dots);
}

// function to navigate next or prev slide
function nextOrPrevSlideglobal (dir) {
    if (dir === 'global-next') {
        globalSlideIndex++;
        showglobalSlides(globalCarousel, globalCarouselDots);
    } else if (dir === 'global-prev') {
        globalSlideIndex--;
        showglobalSlides(globalCarousel, globalCarouselDots);
    }
}

// function to activate current clicked dot vs current slide
function currentglobalSlide(n) {
    globalSlideIndex = n - 1;
    showglobalSlides(globalCarousel, globalCarouselDots);
}

// function to handle arrows click event
function handleArrowglobalClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            nextOrPrevSlideglobal(arrow.dataset.dir);
        })
    });
}

// function to handle dots click event
function handleDotsglobalClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}

// handle all the click events
function handleglobalClickEvents() {
    handleDotsglobalClickEvent(globalCarouselDots);
    handleArrowglobalClickEvent(globalArrows);

    // We need to call this function here only if we need to disable the prev arrow on-load
    showglobalSlides(globalCarousel, globalCarouselDots);
}

handleglobalClickEvents();