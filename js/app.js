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

const phrases = [
    'dont squat with your spurs',
    'gym tan laundry',
    'peanut butter and jelly',
    'chicken fried rice',
    'stay hydrated'
]

function getRandomPhraseAsArray(arr) {
    //selects a phrase from an array at random
    const randomNumber = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomNumber];
    return randomItem;
}

function addPhraseToDisplay(randomPhrase) {
    //loops through each character in the phrase and assigns each character to a new list item
    for (let i = 0; i < randomPhrase.length; i++) {
        const phraseCharacter = randomPhrase[i];
        const newListItem = document.createElement('li');
        newListItem.textContent = phraseCharacter;
        const characterList = document.querySelector('ul');
        characterList.append(newListItem);

        if (newListItem.textContent === ' ') {
            newListItem.className = 'space';
        } else {
            newListItem.className = 'letter';
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(guess) {
    //checks if given letter is present in the string and makes visible if there is a match
    const checkLetter = document.querySelectorAll('li');
    let match = null; 

    for (i = 0; i < checkLetter.length; i++) {
        const guessCheck = checkLetter[i];

        if (guess === guessCheck.textContent) {
            checkLetter[i].className = 'show';
            match = guessCheck.textContent;
        }
    }
    return match;
}

qwertyKeyboard.addEventListener('click', () => {
    const clickedButton = event.target;
    clickedButton.className = 'chosen';
    const letterFound = checkLetter(clickedButton.textContent);
    console.log(letterFound);

    if (letterFound === null) {
        missed = missed + 1; 
        const firstHeart = document.querySelector('ol li:first-child');
        firstHeart.remove();
        console.log(missed);
   }
   checkWin();
}) 

function checkWin() {
    const numberOfLetters = document.getElementsByClassName('letter').length;
    if (numberOfLetters === 0) {
        overlay.style.display = 'flex';
        overlay.className = 'win';
        document.querySelector('h2').textContent = 'you WIN!';
        startGameButton.style.display = 'none';
    } else if (missed === 5) {
        overlay.style.display = 'flex';
        overlay.className = 'lose';
        document.querySelector('h2').textContent = 'You LOSE!';
        startGameButton.style.display = 'none';
    }
}


