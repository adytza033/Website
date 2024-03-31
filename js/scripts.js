menuToggler.addEventListener('click', ev => {
    menu.classList.toggle('open');
});

/* ENTERTAIMENT */
document.addEventListener('DOMContentLoaded', () => {
    const backgroundImg = document.getElementById('backgroundImg');
    const hexagonCount = 40; // Number of hexagons you want to create

    for (let i = 0; i < hexagonCount; i++) {
        const hexagon = document.createElement('div');
        hexagon.classList.add('hexagon');
        backgroundImg.appendChild(hexagon);

        // Apply random values for the CSS variables
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
        // This will provide a value between -50 and 50
        return Math.random() * 100 - 50;
    }
});
