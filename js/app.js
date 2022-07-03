console.log("app.js is linked successfully.");
// Global Variables // 
const qwertyKeyboard = document.getElementById('qwerty');
const hiddenPhrase = document.getElementById('phrase');
let missed = 0; 
const startGameButton = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');

startGameButton.addEventListener('click', () => {
    overlay.style.display = 'none';
})