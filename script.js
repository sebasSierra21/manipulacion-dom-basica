const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result');

function btnOnClick () {
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.append(suma);
}

function eraseResult () {
    result.innerHTML = ' ';
}

btn.addEventListener('click', btnOnClick)
input1.addEventListener('click', eraseResult)

