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


let slideIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);

    document.querySelector('.prev').addEventListener('click', () => {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        plusSlides(1);
    });
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
