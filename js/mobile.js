let slideIndexIphone = 1;

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
    let i;
    let slides = document.querySelectorAll("#iphone .mySlides");
    if (n > slides.length) { slideIndexIphone = 1 }
    if (n < 1) { slideIndexIphone = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexIphone - 1].style.display = "block";
}


