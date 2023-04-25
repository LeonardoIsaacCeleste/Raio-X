const carousel = document.querySelector('[ethics-carousel-wrapper]');
const arrows = document.querySelectorAll('[data-carousel-arrows]');
const carouselDots = document.querySelectorAll('[ethics-data-dots]');
const slideNumber = document.querySelector('[ethics-slide-number-text]');

let slideIndex = 0;

// function to add active slide attribute
function activateSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[slideIndex].setAttribute('data-active-slide', true);
}

// function to add active dots attribute
function activateDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[slideIndex].setAttribute('data-active-dot', true);
}

// Below function will add or remove disabled attribute to the arrows
function disableArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = slideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = slideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}

// helper function to hide or show slides
function showslides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[ethics-carousel-item]');

    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableArrows(slides, nextBtn, prevBtn)

    activateSlide (slides);
    activateDots(dots);
}

// function to navigate next or prev slide
function nextOrPrevSlide (dir) {
    if (dir === 'ethics-next') {
        slideIndex++;
        showslides(carousel, carouselDots);
    } else if (dir === 'ethics-prev') {
        slideIndex--;
        showslides(carousel, carouselDots);
    }
}

// function to activate current clicked dot vs current slide
function currentSlide(n) {
    slideIndex = n - 1;
    showslides(carousel, carouselDots);
}

// function to handle arrows click event
function handleArrowClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            nextOrPrevSlide(arrow.dataset.dir);
        })
    });
}

// function to handle dots click event
function handleDotsClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}

// handle all the click events
function handleClickEvents() {
    handleDotsClickEvent(carouselDots);
    handleArrowClickEvent(arrows);

    // We need to call this function here only if we need to disable the prev arrow on-load
    showslides(carousel, carouselDots);
}

handleClickEvents();