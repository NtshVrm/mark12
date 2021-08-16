const angle1 = document.querySelector('#angle-one');
const angle2 = document.querySelector('#angle-two');
const angle3 = document.querySelector('#angle-three');
const side1 = document.querySelector('#side-one');
const side2 = document.querySelector('#side-two');
const side3 = document.querySelector('#side-three');
const output = document.querySelector('#output');
const outputContainer = document.querySelector('.result');
const angleContainer = document.querySelector('.angle-container');
const select = document.querySelector('#select');
const sidesContainer = document.querySelector('.sides-container');
const nextButton = document.querySelector('#next');
const checkButtonAngle = document.querySelector('#check-button1');
const checkButtonSide = document.querySelector('#check-button2');


checkButtonAngle.addEventListener('click', checkIfTriangle);
checkButtonSide.addEventListener('click', checkIfTriangle);
nextButton.addEventListener('click', display);
select.addEventListener('change', updateDisplay);

function updateDisplay() {
    angleContainer.style.display = 'none';
    sidesContainer.style.display = 'none';
    outputContainer.style.display = 'none';
}

function display() {
    (select.value === 'angles') ? angleContainer.style.display = 'flex' : sidesContainer.style.display = 'flex';
}

function checkIfTriangle() {
    display();
    if(select.value === 'angles') {
        if(Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180) {
            output.innerText = 'It is a Triangle!';
        } else {
            output.innerText = 'It is not a Triangle as the sum of angles entered is not 180 degrees.';
        }
    } else {
        
        if(Number(side1.value) + Number(side2.value) < Number(side3.value) || Number(side2.value) + Number(side3.value) < Number(side1.value) || Number(side1.value) + Number(side3.value) < Number(side2.value)) {
            output.innerText = 'It is not a triangle as the sum of two sides is less than the third side!';
        } else {
            output.innerText = 'It is a Triangle!';
        }
        
    }
    outputContainer.style.display = 'flex';
    
}

