'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let txtMessage = document.querySelector('.message');
let score = 20;
let bodyColor = document.querySelector('body');
let highScore = 0;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const displayMessage = function (message) {
  txtMessage.textContent = message;
};

checkBtn.addEventListener('click', () => {
  const inputVal = parseInt(document.querySelector('.guess').value);

  if (!inputVal) {
    displayMessage('No Message');
  } else if (inputVal === number) {
    displayMessage('Correct Answer');
    bodyColor.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').innerHTML = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (inputVal !== number) {
    if (score > 1) {
      displayMessage(
        inputVal > number ? 'The Number is too high' : 'The Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  displayMessage('start guessing...');
  bodyColor.style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
