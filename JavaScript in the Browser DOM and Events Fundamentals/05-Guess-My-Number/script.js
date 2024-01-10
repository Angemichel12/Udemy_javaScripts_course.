'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🏆 Correct Number';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 23;

*/
// create random number for user to guess.
const currentRandomNumber = Math.trunc(Math.random() * 20) + 1;
//change text content of number class to random number

let score = 20;

// create event handler with function to check entered number
document.querySelector('.check').addEventListener('click', function () {
  // Get guess user input.
  const guess = Number(document.querySelector('.guess').value);
  // When no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number.';

    // when user input equal to rondom number
  } else if (guess === currentRandomNumber) {
    document.querySelector('.message').textContent =
      'Congratulation, You win...🏆';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = currentRandomNumber;
  }

  // When number is high or low
  else {
    const decision = guess > currentRandomNumber ? 'To High' : 'To Low';
    document.querySelector('.message').textContent = decision;
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose....';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});
