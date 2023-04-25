
const boldnessCarousel = document.querySelector('[boldness-carousel-wrapper]');
const boldnessArrows = document.querySelectorAll('[data-carousel-arrows]');
const boldnessCarouselDots = document.querySelectorAll('[boldness-data-dots]');

let boldnessSlideIndex = 0;

// function to add active slide attribute
function activateboldnessSlide (slides) {
    slides.forEach(slide => {
        slide.removeAttribute('data-active-slide');
    });
    slides[boldnessSlideIndex].setAttribute('data-active-slide', true);
}

// function to add active dots attribute
function activateboldnessDots(dots) {
    dots.forEach(dot => {
        dot.removeAttribute('data-active-dot')
    })
    dots[boldnessSlideIndex].setAttribute('data-active-dot', true);
}

// Below function will add or remove disabled attribute to the arrows
function disableboldnessArrows(slides, nextBtn, prevBtn) {
    let nextBtnBooleanValue = boldnessSlideIndex >= slides.length - 1 ? true : false;
    let prevBtnBooleanValue = boldnessSlideIndex <= 0 ? true : false;
    nextBtnBooleanValue ? nextBtn.setAttribute('disabled', 'true') : nextBtn.removeAttribute('disabled');
    prevBtnBooleanValue ? prevBtn.setAttribute('disabled', 'true') : prevBtn.removeAttribute('disabled');
}

// helper function to hide or show slides
function showboldnessSlides(carouselWrapper, dots) {
    const slides = carouselWrapper.querySelectorAll('[boldness-carousel-item]');
    const nextBtn = carouselWrapper.querySelector('.next');
    const prevBtn = carouselWrapper.querySelector('.prev');
    disableboldnessArrows(slides, nextBtn, prevBtn)

    activateboldnessSlide (slides);
    activateboldnessDots(dots);
}

// function to navigate next or prev slide
function nextOrPrevSlideboldness (dir) {
    if (dir === 'boldness-next') {
        boldnessSlideIndex++;
        showboldnessSlides(boldnessCarousel, boldnessCarouselDots);
    } else if (dir === 'boldness-prev') {
        boldnessSlideIndex--;
        showboldnessSlides(boldnessCarousel, boldnessCarouselDots);
    }
}

// function to activate current clicked dot vs current slide
function currentboldnessSlide(n) {
    boldnessSlideIndex = n - 1;
    showboldnessSlides(boldnessCarousel, boldnessCarouselDots);
}

// function to handle arrows click event
function handleArrowboldnessClickEvent(arrowBtn) {
    arrowBtn.forEach(arrow => {
        arrow.addEventListener('click', () => {
            nextOrPrevSlideboldness(arrow.dataset.dir);
        })
    });
}

// function to handle dots click event
function handleDotsboldnessClickEvent(dots) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide(parseInt(dot.dataset.dotsIndex))
        })
    })
}

// handle all the click events
function handleboldnessClickEvents() {
    handleDotsboldnessClickEvent(boldnessCarouselDots);
    handleArrowboldnessClickEvent(boldnessArrows);

    // We need to call this function here only if we need to disable the prev arrow on-load
    showboldnessSlides(boldnessCarousel, boldnessCarouselDots);
}

handleboldnessClickEvents();