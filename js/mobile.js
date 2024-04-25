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
    console.log('Color selected:', color);
    let slides = document.querySelectorAll("#iphone .mySlides");

    let colorRanges = {
        'black': [1, 3],
        'blue': [4, 6],
        'natural': [7, 9],
        'white': [10, 12],
    };

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
