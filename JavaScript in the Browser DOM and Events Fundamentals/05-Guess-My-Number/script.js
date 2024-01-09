'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🏆 Correct Number';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 23;

*/

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost...';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost...';
      document.querySelector('.score').textContent = 0;
    }
  }
});
