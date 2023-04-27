const boldnessCarousel = document.querySelector('[boldness-carousel-wrapper]');
const boldnessArrows = document.querySelectorAll('[data-boldness-carousel-arrows]');
const boldnessCarouselDots = document.querySelectorAll('[boldness-data-dots]');

const ethicsCarousel = document.querySelector('[ethics-carousel-wrapper]');
const ethicsArrows = document.querySelectorAll('[data-ethics-carousel-arrows]');
const ethicsCarouselDots = document.querySelectorAll('[ethics-data-dots]');

const futureCarousel = document.querySelector('[future-carousel-wrapper]');
const futureArrows = document.querySelectorAll('[data-future-carousel-arrows]');
const futureCarouselDots = document.querySelectorAll('[future-data-dots]');

const globalCarousel = document.querySelector('[global-carousel-wrapper]');
const globalArrows = document.querySelectorAll('[data-global-carousel-arrows]');
const globalCarouselDots = document.querySelectorAll('[global-data-dots]');

const pplCarousel = document.querySelector('[ppl-carousel-wrapper]');
const pplArrows = document.querySelectorAll('[data-ppl-carousel-arrows]');
const pplCarouselDots = document.querySelectorAll('[ppl-data-dots]');

const serveCarousel = document.querySelector('[serve-carousel-wrapper]');
const serveArrows = document.querySelectorAll('[data-serve-carousel-arrows]');
const serveCarouselDots = document.querySelectorAll('[serve-data-dots]');

const striveCarousel = document.querySelector('[strive-carousel-wrapper]');
const striveArrows = document.querySelectorAll('[data-strive-carousel-arrows]');
const striveCarouselDots = document.querySelectorAll('[strive-data-dots]');

let boldnessSlideIndex = 0;
let ethicsSlideIndex = 0;
let futureSlideIndex = 0;
let globalSlideIndex = 0;
let pplSlideIndex = 0;
let serveSlideIndex = 0;
let striveSlideIndex = 0;


// function to add active slide attribute
function activateSlide (slides, index) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[index].setAttribute('data-active-slide', true);
}

// function to add active dots attribute
function activateDots(dots,index) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[index].setAttribute('data-active-dot', true);
}

// Below function will add or remove disabled attribute to the arrows
function disableArrows(slides, nextBtn, prevBtn, index) {
    let nextBtnBooleanValue = index >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = index <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}

// helper function to hide or show slides
function showslides(carouselWrapper, dots, index, query) {
    const slides = carouselWrapper.querySelectorAll(query);
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableArrows(slides, nextBtn, prevBtn, index)

    activateSlide(slides, index);
    activateDots(dots, index);
}

// function to navigate next or prev slide
function nextOrPrevSlide (dir) {
    switch(dir) {
        case 'ethics-next':
            ethicsSlideIndex++;
            showslides(ethicsCarousel, ethicsCarouselDots, ethicsSlideIndex, '[ethics-carousel-item]');
            break;
        case 'boldness-next':
            boldnessSlideIndex++;
            showslides(boldnessCarousel, boldnessCarouselDots,boldnessSlideIndex, '[boldness-carousel-item]');
            break;
        case 'future-next':
            futureSlideIndex++;
            showslides(futureCarousel, futureCarouselDots, futureSlideIndex, '[future-carousel-item]');
            break;
        case 'global-next':
            globalSlideIndex++;
            showslides(globalCarousel, globalCarouselDots, globalSlideIndex, '[global-carousel-item]');
            break;
        case 'ppl-next':
            pplSlideIndex++;
            showslides(pplCarousel, pplCarouselDots, pplSlideIndex, '[ppl-carousel-item]');
            break;
        case 'serve-next':
            serveSlideIndex++;
            showslides(serveCarousel, serveCarouselDots, serveSlideIndex, '[serve-carousel-item]');
            break;
        case 'strive-next':
            striveSlideIndex++;
            showslides(striveCarousel, striveCarouselDots, striveSlideIndex, '[strive-carousel-item]');
            break;
        case 'global-prev':
            globalSlideIndex--;
            showslides(globalCarousel, globalCarouselDots, globalSlideIndex, '[global-carousel-item]');
            break;
        case 'ppl-prev':
            pplSlideIndex--;
            showslides(pplCarousel, pplCarouselDots,pplSlideIndex, '[ppl-carousel-item]');
            break;
        case 'serve-prev':
            serveSlideIndex--;
            showslides(serveCarousel, serveCarouselDots, serveSlideIndex, '[serve-carousel-item]');
            break;
        case 'strive-prev':
            striveSlideIndex--;
            showslides(striveCarousel, striveCarouselDots,striveSlideIndex, '[strive-carousel-item]');
            break;
        case 'boldness-prev':
            boldnessSlideIndex++;
            showslides(boldnessCarousel, boldnessCarouselDots, boldnessSlideIndex, '[boldness-carousel-item]');
            break;
        case 'ethics-prev':
            ethicsSlideIndex--;
            showslides(ethicsCarousel, ethicsCarouselDots,ethicsSlideIndex, '[ethics-carousel-item]');
            break;
    }
}

// function to activate current clicked dot vs current slide
function currentSlide(n, carousel, dots) {
    slideIndex = n - 1;
    showslides(carousel, dots);
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
function handleDotsClickEvent(arrows, carousel, dots) {
    arrows.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex),carousel, dots)
        })
    })
}

// handle all the click events
function handleClickEvents() {
    handleDotsClickEvent(ethicsCarouselDots);
    handleArrowClickEvent(ethicsArrows, ethicsCarousel, ethicsCarouselDots);
    showslides(ethicsCarousel, ethicsCarouselDots, ethicsSlideIndex, '[ethics-carousel-item]');

    handleDotsClickEvent(futureCarouselDots);
    handleArrowClickEvent(futureArrows, futureCarousel, futureCarouselDots);
    showslides(futureCarousel, futureCarouselDots, futureSlideIndex, '[future-carousel-item]');

    handleDotsClickEvent(boldnessCarouselDots);
    handleArrowClickEvent(boldnessArrows, boldnessCarousel, boldnessCarouselDots);
    showslides(boldnessCarousel, boldnessCarouselDots, boldnessSlideIndex, '[boldness-carousel-item]');

    handleDotsClickEvent(pplCarouselDots);
    handleArrowClickEvent(pplArrows, pplCarousel, pplCarouselDots);
    showslides(pplCarousel, pplCarouselDots, pplSlideIndex, '[ppl-carousel-item]');

    handleDotsClickEvent(globalCarouselDots);
    handleArrowClickEvent(globalArrows, globalCarousel, globalCarouselDots);
    showslides(globalCarousel, globalCarouselDots, globalSlideIndex, '[global-carousel-item]');

    handleDotsClickEvent(serveCarouselDots);
    handleArrowClickEvent(serveArrows, serveCarousel, serveCarouselDots);
    showslides(serveCarousel, serveCarouselDots, serveSlideIndex, '[serve-carousel-item]');

    handleDotsClickEvent(striveCarouselDots);
    handleArrowClickEvent(striveArrows, striveCarousel, striveCarouselDots);
    showslides(striveCarousel, striveCarouselDots, striveSlideIndex, '[strive-carousel-item]');
}

handleClickEvents();
