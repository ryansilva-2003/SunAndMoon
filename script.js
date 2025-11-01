const iconsun = document.getElementById ('iconsun');
const iconmoon = document.getElementById ('iconmoon');
const icon = document.getElementById ('icon');

function isGalaxy (){
    return icon.src.indexOf ('galaxy') > -1
}

function sun () {
    if (!isGalaxy () ) {
        icon.src = './imagens/sun.png';
        document.body.classList.remove('dark-theme', 'universe-theme');
        document.body.classList.add('light-theme');
    }
}

function moon () {
    if (!isGalaxy () ) {
        icon.src = './imagens/moon.png';
        document.body.classList.remove('light-theme', 'universe-theme');
        document.body.classList.add('dark-theme');
    }
}

function galaxy () {
        icon.src = './imagens/galaxia.png';
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add('universe-theme');
}

iconsun.addEventListener( 'click', sun );
iconmoon.addEventListener( 'click', moon);
icon.addEventListener( 'dblclick', galaxy);