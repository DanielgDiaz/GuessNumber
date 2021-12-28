let randonNumber = Math.floor(Math.random()*100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Intentos anteriores: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randonNumber) {
        lastResult.textContent = 'Lo adivinaste!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }

    else if (guessCount === 10) {
        lastResult.textContent = 'Fin del juego!';
        setGameOver();
    }

    else {
        lastResult.textContent = 'Incorrecto!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randonNumber) {
            lowOrHi.textContent = 'Es un número mayor';
        }
        else if (userGuess > randonNumber) {
            lowOrHi.textContent = 'Es un número menor';
        }       
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar de nuevo';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randonNumber = Math.floor(Math.random() * 100) +1;
}