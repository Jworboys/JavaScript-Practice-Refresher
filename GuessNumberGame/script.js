'use strict';

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value); 
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // No input
    if(!guess) {
        displayMessage('No number!!');
    } 

    // Player wins the game
    else if (guess === secretNumber)
    {
        displayMessage('Correct Number!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(highscore < score)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 


    else if (guess !== secretNumber)
    {
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too high!!' : 'Too low!'); 
            score--;
            document.querySelector('.score').textContent = score; 
        }
        else
        {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0; 
        }
    }

});



document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score; 
    document.querySelector('.guess').value = '';
});