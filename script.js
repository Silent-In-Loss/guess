let randomNumber = Math.floor(Math.random() * 100) + 1
const guessInput = document.querySelector('#guessInput')
const submitBtn = document.querySelector('#submitBtn')
const result = document.querySelector('#result')

submitBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value)

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.innerText = 'Enter a number from 1 to 100 '
        
    } else if(userGuess === randomNumber) {
        result.innerText = 'Congratulations! You guessed it🎆🎉'
        setTimeout(() => {
            randomNumber = Math.floor(Math.random() * 100) + 1
            result.innerText = 'Number is refreshed. Guess again!'
        }, 3000);
    } else if(userGuess < randomNumber) {
        result.innerText = 'The number guessed is higher📈'
    } else {
        result.innerText = 'The number guessed is less📉'
    }
})