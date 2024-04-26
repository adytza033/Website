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




document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchQuery = document.getElementById('search-query');

    searchButton.addEventListener('click', function () {
        const modelName = searchQuery.value.trim();
        if (modelName) {
            fetchModels(modelName);
        } else {
            console.error('Model name is empty');
        }
    });
});

function fetchModels(modelName) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    displayModels(response);
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            } else {
                console.error('API request failed:', xhr.status, xhr.statusText);
            }
        }
    };

    xhr.open('GET', `https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-models-by-brandname/${encodeURIComponent(modelName)}`);
    xhr.setRequestHeader('X-RapidAPI-Key', 'ac9bfb50f8msh55da9e5117f4944p128a52jsn4f9d79adf57b');
    xhr.setRequestHeader('X-RapidAPI-Host', 'mobile-phone-specs-database.p.rapidapi.com');
    xhr.send();
}

function displayModels(data) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    const list = document.createElement('ul');
    data.forEach(function (item) {
        const listItem = document.createElement('li');
        listItem.textContent = item.modelValue; // Use the appropriate property name from your API response
        list.appendChild(listItem);
    });

    resultsContainer.appendChild(list);
}
