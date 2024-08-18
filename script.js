'use strict';
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const DisplayMessage = message => {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number! ';
    DisplayMessage('⛔ No Number!');
  } else if (guess === randomNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';

    document.querySelector('.number').textContent = randomNumber;
    // document.querySelector('.message').textContent = 'Congratulations ';
    // document.querySelector('body').style = 'green';
    DisplayMessage('Congratulations ');
  } else if (guess !== randomNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      // guess > randomNumber ? ' very heigh!' : 'very low!';
      DisplayMessage(guess > randomNumber ? ' very heigh!' : 'very low!');
    } else {
      //document.querySelector('.message').textContent = 'You lost the game!';
      DisplayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess < randomNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = ' very low! ';
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game! ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  console.log('we are her');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  DisplayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
