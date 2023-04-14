'use strict';

const sizeDownBtn = document.querySelector('.font-size-down');
const sizeUpBtn = document.querySelector('.font-size-up');
const sizeDefaultBtn = document.querySelector('.font-default-size');

const mainText = document.getElementsByName('main-text')[0];


sizeDownBtn.addEventListener('click', function () {
    mainText.style.fontSize = '2rem';
});

sizeDefaultBtn.addEventListener('click', function () {
    mainText.style.fontSize = '4rem';
});

sizeUpBtn.addEventListener('click', function () {
    mainText.style.fontSize = '6rem';
});