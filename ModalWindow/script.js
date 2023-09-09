'use strict';

const btnmodalList = document.querySelectorAll('.show-modal');
console.log(btnmodalList);
const modal = document.querySelector('.modal');
const closemodal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
console.log(modal);

const openModalFn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnmodalList.length; i++) {
  btnmodalList[i].addEventListener('click', openModalFn);
}

const closeModalFn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closemodal.addEventListener('click', closeModalFn);

//to close the modal window on click of escape button
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    closeModalFn();
  }
