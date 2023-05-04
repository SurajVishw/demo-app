'use strict';

let modalOne = document.querySelectorAll('.show-modal');
let modalBox = document.querySelector('.modal');
let modalOverlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close-modal');

const modalClass = function () {
  modalBox.classList.add('hidden');
  modalOverlay.classList.add('hidden');
};

Array.from(modalOne).forEach(button => {
  button.addEventListener('click', () => {
    modalBox.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  modalClass();
});

modalOverlay.addEventListener('click', () => {
  modalClass();
});
