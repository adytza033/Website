let slideIndexIphone = 1;
let colorRange = [1, 3];

document.addEventListener('DOMContentLoaded', () => {
    showSlidesIphone(slideIndexIphone);

    document.querySelector('#iphone .prev').addEventListener('click', () => {
        plusSlidesIphone(-1);
    });
    document.querySelector('#iphone .next').addEventListener('click', () => {
        plusSlidesIphone(1);
    });
});

function plusSlidesIphone(n) {
    showSlidesIphone(slideIndexIphone += n);
}

function showSlidesIphone(n) {
    let slides = document.querySelectorAll("#iphone .mySlides");
    if (n > colorRange[1]) { slideIndexIphone = colorRange[0]; }
    else if (n < colorRange[0]) { slideIndexIphone = colorRange[1]; }

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[slideIndexIphone - 1].style.display = "block";
}

function setColor(color) {
    let slides = document.querySelectorAll("#iphone .mySlides");
    let colorNameElement = document.querySelector("#color-name");

    let colorRanges = {
        'black': [1, 3],
        'blue': [4, 6],
        'natural': [7, 9],
        'white': [10, 12],
    };

    let colorTexts = {
        'black': 'Black Titanium',
        'blue': 'Blue Titanium',
        'natural': 'Natural Titanium',
        'white': 'White Titanium',
    };

    if (colorNameElement) {
        colorNameElement.textContent = `Colour: ${colorTexts[color]}`;
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    colorRange = colorRanges[color];

    slideIndexIphone = colorRange[0];

    for (let i = colorRange[0]; i <= colorRange[1]; i++) {
        slides[i - 1].style.display = "block";
    }

    showSlidesIphone(slideIndexIphone);
}


let slideIndexSamsung = 1;
let colorRangeSamsung = [1, 3];

document.addEventListener('DOMContentLoaded', () => {
    showSlidesSamsung(slideIndexSamsung);

    document.querySelector('#samsung .prev').addEventListener('click', () => {
        plusSlidesSamsung(-1);
    });
    document.querySelector('#samsung .next').addEventListener('click', () => {
        plusSlidesSamsung(1);
    });
});

function plusSlidesSamsung(n) {
    showSlidesSamsung(slideIndexSamsung += n);
}

function showSlidesSamsung(n) {
    let slides = document.querySelectorAll("#samsung .mySlides");
    if (n > colorRangeSamsung[1]) { slideIndexSamsung = colorRangeSamsung[0]; }
    else if (n < colorRangeSamsung[0]) { slideIndexSamsung = colorRangeSamsung[1]; }

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[slideIndexSamsung - 1].style.display = "block";
}

function setColorSamsung(color) {
    let slides = document.querySelectorAll("#samsung .mySlides");
    let colorNameElement = document.querySelector("#color-name-samsung");

    let colorRangesSamsung = {
        'black': [1, 3],
        'grey': [4, 6],
        'violet': [7, 9],
        'yellow': [10, 12],
    };

    let colorTextsSamsung = {
        'black': 'Black Titanium',
        'grey': 'Grey Titanium',
        'violet': 'Violet Titanium',
        'yellow': 'Yellow Titanium',
    };

    if (colorNameElement) {
        colorNameElement.textContent = `Colour: ${colorTextsSamsung[color]}`;
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    colorRangeSamsung = colorRangesSamsung[color];

    slideIndexSamsung = colorRangeSamsung[0];

    for (let i = colorRangeSamsung[0]; i <= colorRangeSamsung[1]; i++) {
        slides[i - 1].style.display = "block";
    }

    showSlidesSamsung(slideIndexSamsung);
}
