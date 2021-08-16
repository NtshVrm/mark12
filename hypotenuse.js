const base = document.querySelector('#base');
const height = document.querySelector('#height');
const button = document.querySelector('#calculate');
const result = document.querySelector('#result');

button.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    let temp = Math.pow(base.value,2) + Math.pow(height.value,2);
    let ans = Math.sqrt(temp)
    result.innerText = `The hypotenuse is ${ans}`;
}