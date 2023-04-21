'use strict';

const showButton = document.getElementById('show-window');
const hiddenWindow = document.querySelector('.window');
const closeWindow = document.getElementById('close-window');
const hiddenOverlay = document.querySelector('.overlay')
console.log(hiddenWindow)

showButton.addEventListener('click', () => {
    hiddenWindow.classList.remove('hidden');
    hiddenOverlay.classList.remove('hidden');
});

closeWindow.addEventListener('click', () => {
    hiddenWindow.classList.add('hidden');
    hiddenOverlay.classList.add('hidden');
});
