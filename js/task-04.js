
const button = {
    sub: document.querySelector('button[data-action="decrement"]'),
    add: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector('#value')
}

let counterValue = 0;
 


const onClickSub = () => {
    counterValue -=1;
    button.span.textContent = counterValue;
}
button.sub.addEventListener('click', onClickSub)


const onClickAdd = () => {
    counterValue +=1;
    button.span.textContent = counterValue;
}

button.add.addEventListener('click', onClickAdd)




