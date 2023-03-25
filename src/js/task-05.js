
let input = document.querySelector('#name-input')
let spanEl = document.querySelector('#name-output')

input.oninput = function () {
    if (input.value === ' ') {
        spanEl.innerHTML = 'Anonymous';
    } else{
        spanEl.innerHTML = input.value;
    }}



  