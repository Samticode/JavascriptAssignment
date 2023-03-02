//Input bar and submit button
const input = document.getElementById('input');
const submit = document.getElementById('submit');
//The different years
const info = document.getElementById('info');
const error = document.getElementById('nothing');
const pink = document.getElementById('pink');
const game = document.getElementById('game');
const future = document.getElementById('framtid');
//To get the current year
let currentYear = new Date().getFullYear();

//--Indicator to scroll down--
const indicator = document.getElementById('look');

//To show a years info based on the input
submit.addEventListener('click', () => {
    indicator.classList.remove('none');
if(input.value == 1966){
    info.classList.remove('none');
    info.classList.add('infoCSS');

    pink.classList.remove('pinkCSS');
    pink.classList.add('none');
    game.classList.remove('gameCSS');
    game.classList.add('none');
    future.classList.remove('futureCSS');
    future.classList.add('none');
    nothing.classList.remove('nothingCSS');
    nothing.classList.add('none');
}else if(input.value == 1973){
    pink.classList.remove('none');
    pink.classList.add('pinkCSS');

    info.classList.remove('infoCSS');
    info.classList.add('none');
    game.classList.remove('gameCSS');
    game.classList.add('none');
    future.classList.remove('futureCSS');
    future.classList.add('none');
    nothing.classList.remove('nothingCSS');
    nothing.classList.add('none');
}else if(input.value == 2006){
    game.classList.remove('none');
    game.classList.add('gameCSS');

    pink.classList.remove('pinkCSS');
    pink.classList.add('none');
    info.classList.remove('infoCSS');
    info.classList.add('none');
    future.classList.remove('futureCSS');
    future.classList.add('none');
    nothing.classList.remove('nothingCSS');
    nothing.classList.add('none');
}else if (input.value > currentYear){
    future.classList.remove('none');
    future.classList.add('futureCSS');

    pink.classList.remove('pinkCSS');
    pink.classList.add('none');
    info.classList.remove('infoCSS');
    info.classList.add('none');
    game.classList.remove('gameCSS');
    game.classList.add('none');
    nothing.classList.remove('nothingCSS');
    nothing.classList.add('none');
}else{
    nothing.classList.remove('none');
    nothing.classList.add('nothingCSS');

    pink.classList.remove('pinkCSS');
    pink.classList.add('none');
    future.classList.remove('futureCSS');
    future.classList.add('none');
    game.classList.remove('gameCSS');
    game.classList.add('none');
    info.classList.remove('infoCSS');
    info.classList.add('none');
}
});

//Make input blank on reload
window.addEventListener('load', () => {
    input.value = "";
});