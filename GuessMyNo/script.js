'use strict';
// document.querySelector("randomno").value = Math.random(1,20);
// const randomNo=document.querySelector("randomno").value;
// console.log(randomNo);

const secretNo = Math.trunc(Math.random() * 20) + 1;

console.log(document.querySelector('.randomno').textContent);
document.querySelector('.check').addEventListener('click', function (e) {
  const guess = document.querySelector('.guess').value;
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }

  if (Number(guess) == Number(secretNo)) {
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('.randomno').textContent = secretNo;
  }
  document.querySelector('.guess').value = '';
  e.preventDefault();
});
