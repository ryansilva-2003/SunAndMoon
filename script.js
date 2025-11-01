const iconsun = document.getElementById ('iconsun');
const iconmoon = document.getElementById ('iconmoon');
const icon = document.getElementById ('icon');
const planetView = document.getElementById('planetView');

const iconearth = document.getElementById ('iconearth');
const iconmars = document.getElementById ('iconmars');
const iconneptune = document.getElementById ('iconneptune');
const iconvenus = document.getElementById ('iconvenus');
const iconmercury = document.getElementById ('iconmercury');
const iconsaturn = document.getElementById ('iconsaturn');
const iconuranus = document.getElementById ('iconuranus');
const iconjupiter = document.getElementById ('iconjupiter');

function sun () {
        icon.src = './imagens/sun.png';
        document.body.classList.remove('dark-theme', 'universe-theme', 'planet-theme', 'terra-theme');
        document.body.classList.add('light-theme');
}

function moon () {
        icon.src = './imagens/moon.png';
        document.body.classList.remove('light-theme', 'universe-theme', 'planet-theme', 'terra-theme');
        document.body.classList.add('dark-theme');
}

function galaxy () {
        icon.src = './imagens/galaxy.png';
        document.body.classList.remove('light-theme', 'dark-theme', 'planet-theme', 'terra-theme');
        document.body.classList.add('universe-theme');
}

iconsun.addEventListener( 'click', sun );
iconmoon.addEventListener( 'click', moon);
icon.addEventListener( 'dblclick', galaxy);
icon.addEventListener('click', () => {
    if (document.body.classList.contains('universe-theme')) {
    planetView.removeAttribute('hidden');
    }
});

function earth () {
        icon.src = './imagens/earth.png';
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme', 'planet-theme');
        document.body.classList.add('terra-theme');
}

function mars () {
        icon.src = './imagens/mars.png';
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme', 'terra-theme');
        document.body.classList.add('planet-theme');
}

function neptune () {
        icon.src = './imagens/aa';
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme');
        document.body.classList.add('planet-theme');
}

function venus () {
        icon.src = './imagens/aa';
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme');
        document.body.classList.add('planet-theme');
}

function mercury () {
        icon.src = './imagens/aa';
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme');
        document.body.classList.add('planet-theme');
}

function saturn () {
        icon.src = './imagens/aa';
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme');
        document.body.classList.add('planet-theme');
}

function uranus () {
        icon.src = './imagens/aa';
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme');
        document.body.classList.add('planet-theme');
}

function jupiter () {
        icon.src = './imagens/jupiter.png';
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme');
        document.body.classList.add('planet-theme');
}

iconearth.addEventListener('click', earth);
iconmars.addEventListener('click', mars);
iconneptune.addEventListener('click', neptune);
iconvenus.addEventListener('click', venus);
iconmercury.addEventListener('click', mercury);
iconsaturn.addEventListener('click', saturn);
iconuranus.addEventListener('click', uranus);
iconjupiter.addEventListener('click', jupiter);