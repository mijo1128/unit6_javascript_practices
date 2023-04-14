'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.window');
const showBtn = document.querySelector('#show-window');
const closeBtn = document.querySelector('#close-window');

showBtn.addEventListener('click', function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
});