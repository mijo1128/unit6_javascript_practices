'use strict';

const checkboxes = document.querySelectorAll("input[type='checkbox']");


for (let i = 0; i < checkboxes.length; i++) {
    let checkboxParent = checkboxes[i].parentElement;
    checkboxes[i].addEventListener('change', function() {
        if (this.checked) {
            checkboxParent.style.backgroundColor = 'black';
        } else {
            checkboxParent.style.backgroundColor = 'white';
        }
    });
};
