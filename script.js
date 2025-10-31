const iconsun = document.getElementById ( 'iconsun');
const iconmoon = document.getElementById ( 'iconmoon');

function sun () {
    icon.src = './imagens/sun.png';
}

function moon () {
    icon.src = './imagens/moon.png';
}

iconsun.addEventListener( 'click', sun );
iconmoon.addEventListener( 'click', moon);
