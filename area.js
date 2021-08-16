const base = document.querySelector('#base');
const height = document.querySelector('#height');
const nextButton = document.querySelector('#next');
const calculateButton1 = document.querySelector('#calculate');
const calculateButton2= document.querySelector('#calculate-three');
const calculateButton3 = document.querySelector('#calculate-one');
const result = document.querySelector('#result');
const selectValue = document.querySelector('#select-input');
const side1 = document.querySelector('#side1');
const side2 = document.querySelector('#side2');
const side3 = document.querySelector('#side3');
const side = document.querySelector('#side');
const twoSidesContainer = document.querySelector('.two-sides-container');
const threeSidesContainer = document.querySelector('.three-sides-container');
const oneSideContainer = document.querySelector('.one-side-container');

calculateButton1.addEventListener('click', computeArea);
calculateButton2.addEventListener('click', computeArea);
calculateButton3.addEventListener('click', computeArea);
nextButton.addEventListener('click', display);
selectValue.addEventListener('change', updateDisplay);

function display() {
    if(selectValue.value === 'two-sides' ) {
        twoSidesContainer.style.display = 'flex';
    } else if(selectValue.value === 'three-sides' ) {
        threeSidesContainer.style.display = 'flex';
    } else {
        oneSideContainer.style.display = 'flex';
    }
}

function updateDisplay() {
    twoSidesContainer.style.display = 'none';
    oneSideContainer.style.display = 'none';
    threeSidesContainer.style.display = 'none';
    result.style.display = 'none';
}

function isTriangle() {
    if(Number(side1.value) + Number(side2.value) < Number(side3.value) || Number(side2.value) + Number(side3.value) < Number(side1.value) || Number(side1.value) + Number(side3.value) < Number(side2.value)) {
        return false;
    } 
    return true;
}

function computeArea() {
    if(selectValue.value === 'two-sides') {
        let area = Number(base.value) * Number(height.value) * 0.5;
        result.innerText = `The area is ${area}.`;
        result.style.display = 'flex';
    } else if (selectValue.value === 'three-sides') {
        if(isTriangle()) {
            console.log('enter')
            let s = (Number(side1.value) + Number(side2.value) + Number(side3.value)) / 2;
            let temp = s * (s - Number(side1.value)) * (s - Number(side2.value)) * (s - Number(side3.value))
            let area = Math.round(Math.sqrt(temp));
            result.innerText = `The area is ${area}`;
            result.style.display = 'flex';
        } else {
            result.innerText = 'It is not a triangle as the sum of two sides is less than the third side!';
            result.style.display = 'flex';
        }
        

    } else {
        let area = (1.732 * Number(side.value) ) / 4 ;
        area = Math.round(area);
        result.innerText = `The area is ${area}.`;
        result.style.display = 'flex';
    }
    
}