const iconsun = document.getElementById ('iconsun');
const iconmoon = document.getElementById ('iconmoon');
const icon = document.getElementById ('icon');

function isSaturn (){
    return icon.src.indexOf ('saturn') > -1
}

function sun () {
    if (!isSaturn () ) {
        icon.src = './imagens/sun.png';
        document.body.classList.remove('dark-theme', 'universe-theme');
        document.body.classList.add('light-theme');
    }
}

function moon () {
    if (!isSaturn () ) {
        icon.src = './imagens/moon.png';
        document.body.classList.remove('light-theme', 'universe-theme');
        document.body.classList.add('dark-theme');
    }
}

function saturn () {
        icon.src = './imagens/saturn.png';
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add('universe-theme');
}

iconsun.addEventListener( 'click', sun );
iconmoon.addEventListener( 'click', moon);
icon.addEventListener( 'dblclick', saturn);