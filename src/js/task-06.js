// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє йог
// о вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.




const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener('blur',validationInput);

function validationInput (){
    inputEL.classList.toggle("valid", inputEL.value.length === 6 );
inputEL.classList.toggle("invalid", inputEL.value.length < 6 || inputEL.value.length > 6 )
}

