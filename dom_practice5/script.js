'use strict';

const colorBtns = document.querySelectorAll('.button-color')

const emphasizedWord = document.querySelector('.emphasized-word')

for (let i = 0; i < colorBtns.length; i++) {
    if (colorBtns[i].textContent === 'Blue') {
        colorBtns[i].addEventListener('click', function () {
            emphasizedWord.style.color = 'blue';
        });
    } else if (colorBtns[i].textContent === 'Red') {
        colorBtns[i].addEventListener('click', function () {
            emphasizedWord.style.color = 'red';
        });

    } else if (colorBtns[i].textContent === 'Green') {
        colorBtns[i].addEventListener('click', function () {
            emphasizedWord.style.color = 'green';
        });

    } else if (colorBtns[i].textContent === 'Yellow') {
        colorBtns[i].addEventListener('click', function () {
            emphasizedWord.style.color = 'yellow';
        });

    } else if (colorBtns[i].textContent === 'Black') {
        colorBtns[i].addEventListener('click', function () {
            emphasizedWord.style.color = 'black';
        });

    };
}