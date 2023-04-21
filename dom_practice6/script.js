'use-strict';
const backgroundColorBtn = document.querySelector('#backgroundColorPicker');
const bubbleColorBtn = document.querySelector('#bubblesColorPicker');
const bubbles = document.getElementsByClassName('bubbles')
const backgroundArea = document.getElementsByClassName('area')[0]

backgroundColorBtn.addEventListener('change', () => {
    backgroundArea.style.backgroundColor = backgroundColorBtn.value
});

bubbleColorBtn.addEventListener('change', () => {
    for (const bubble of bubbles) {
        console.log(bubble)
        bubble.style.backgroundColor = bubbleColorBtn.value;
    }
});










