menuToggler.addEventListener('click', ev => {
    menu.classList.toggle('open');
});

/* ENTERTAIMENT */
document.addEventListener('DOMContentLoaded', () => {
    const backgroundImg = document.getElementById('backgroundImg');
    const hexagonCount = 30;

    for (let i = 0; i < hexagonCount; i++) {
        const hexagon = document.createElement('div');
        hexagon.classList.add('hexagon');
        backgroundImg.appendChild(hexagon);

        hexagon.style.setProperty('--x0', randomValue() + 'vw');
        hexagon.style.setProperty('--y0', randomValue() + 'vh');
        hexagon.style.setProperty('--x25', randomValue() + 'vw');
        hexagon.style.setProperty('--y25', randomValue() + 'vh');
        hexagon.style.setProperty('--x50', randomValue() + 'vw');
        hexagon.style.setProperty('--y50', randomValue() + 'vh');
        hexagon.style.setProperty('--x75', randomValue() + 'vw');
        hexagon.style.setProperty('--y75', randomValue() + 'vh');
    }

    function randomValue() {
        return Math.random() * 100 - 50;
    }
});


let slideIndexApple = 1;
let slideIndexMoonwalkers = 1;

document.addEventListener('DOMContentLoaded', () => {
    showSlidesApple(slideIndexApple);
    showSlidesMoonwalkers(slideIndexMoonwalkers);

    document.querySelector('#apple-vision-pro .prev').addEventListener('click', () => {
        plusSlidesApple(-1);
    });
    document.querySelector('#apple-vision-pro .next').addEventListener('click', () => {
        plusSlidesApple(1);
    });

    document.querySelector('#moonwalkers .prev').addEventListener('click', () => {
        plusSlidesMoonwalkers(-1);
    });
    document.querySelector('#moonwalkers .next').addEventListener('click', () => {
        plusSlidesMoonwalkers(1);
    });
});

function plusSlidesApple(n) {
    showSlidesApple(slideIndexApple += n);
}

function plusSlidesMoonwalkers(n) {
    showSlidesMoonwalkers(slideIndexMoonwalkers += n);
}

function showSlidesApple(n) {
    let i;
    let slides = document.querySelectorAll("#apple-vision-pro .mySlides");
    if (n > slides.length) { slideIndexApple = 1 }
    if (n < 1) { slideIndexApple = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexApple - 1].style.display = "block";
}

function showSlidesMoonwalkers(n) {
    let i;
    let slides = document.querySelectorAll("#moonwalkers .mySlides");
    if (n > slides.length) { slideIndexMoonwalkers = 1 }
    if (n < 1) { slideIndexMoonwalkers = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexMoonwalkers - 1].style.display = "block";
}
