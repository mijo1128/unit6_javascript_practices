const randomNumber = Math.floor(Math.random() * 20) + 1;
const button = document.getElementsByClassName('btn check')[0];
const againButton = document.getElementsByClassName('btn again')[0]
let chances = 20;
let highScore = document.querySelector('highscore');
let guess = document.querySelector('.guess');
const background = document.getElementsByClassName('game');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    if (guess.value != '' && guess.value != randomNumber) {
        chances -= 1;
        if (chances == 0) {
            message.textContent = "YOU'RE LOSE";
        }
        
    } else if (guess.value == randomNumber) {
        background[0].style.backgroundColor = 'green';
    }
    console.log(chances)
    console.log(randomNumber)
    console.log(message.innerText)
});

againButton.addEventListener('click',() => {

    randomNumber = Math.floor(Math.random() * 20) + 1;
})
