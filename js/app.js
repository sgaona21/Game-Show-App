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


const testGuess = 'a';
checkLetter(testGuess);


