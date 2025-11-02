const iconsun = document.getElementById ('iconsun');
const iconmoon = document.getElementById ('iconmoon');
const icon = document.getElementById ('icon');
const planetView = document.getElementById('planetView');
const satelite = document.getElementById ('satelite');
const iconearth = document.getElementById ('iconearth');
const alien = document.getElementById ('alien');

function sun () {
        icon.src = './imagens/sun.png';
        document.body.classList.remove('dark-theme', 'universe-theme', 'terra-theme');
        document.body.classList.add('light-theme');

        satelite.hidden = true;
}

function moon () {
        icon.src = './imagens/moon.png';
        document.body.classList.remove('light-theme', 'universe-theme', 'terra-theme');
        document.body.classList.add('dark-theme');

        satelite.hidden = true;
}

function galaxy () {
        icon.src = './imagens/galaxy.png';
        document.body.classList.remove('light-theme', 'dark-theme', 'terra-theme');
        document.body.classList.add('universe-theme');

        satelite.hidden = true;
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
        document.body.classList.remove('light-theme', 'universe-theme', 'dark-theme');
        document.body.classList.add('terra-theme');

        satelite.hidden = false;
}

iconearth.addEventListener('click', earth);

satelite.addEventListener('click', () =>{
        if (document.body.classList.contains('terra-theme')){
        alien.removeAttribute('hidden');
        }
})