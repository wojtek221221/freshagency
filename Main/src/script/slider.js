document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;
    const itemsToShow = 3;
    const itemWidth = sliderItems[0].clientWidth;
    const totalItems = sliderItems.length;

    function moveNext() {
        if (currentIndex < totalItems - itemsToShow) {
            currentIndex++;
            updateSliderPosition();
        }
    }

    function movePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    }

    function updateSliderPosition() {
        const offset = -(itemWidth * currentIndex);
        sliderWrapper.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', moveNext);
    prevButton.addEventListener('click', movePrev);

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    sliderWrapper.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('mousemove', drag);

    function startDrag(event) {
        isDragging = true;
        startPos = event.clientX;
        prevTranslate = currentTranslate;
    }

    function endDrag() {
        isDragging = false;
        if (currentTranslate < prevTranslate && currentIndex < totalItems - itemsToShow) {
            moveNext();
        } else if (currentTranslate > prevTranslate && currentIndex > 0) {
            movePrev();
        }
    }

    function drag(event) {
        if (isDragging) {
            const currentPosition = event.clientX;
            currentTranslate = prevTranslate + (currentPosition - startPos);
            sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
        }
    }
});
