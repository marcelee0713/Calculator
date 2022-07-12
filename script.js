let fNumber = "";
let sNumber = "";
let operator = "";

const output = document.querySelector('#output');
const clearBtn = document.querySelector('#clear');
const negativeBtn = document.querySelector('#negative');
const decimalBtn = document.querySelector('#decimal');
const equalBtn = document.querySelector('#equal')

const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const subtractBtn = document.querySelector('#subtract');
const additionBtn = document.querySelector('#addition');

const numBtns = document.querySelectorAll('#num-btns');

numBtns.forEach(pressedNum => pressedNum.addEventListener('click', displayPressedOutput));
divideBtn.addEventListener('click', displayPressedOutput);
multiplyBtn.addEventListener('click', displayPressedOutput);
subtractBtn.addEventListener('click', displayPressedOutput);
additionBtn.addEventListener('click', displayPressedOutput);

/*
numBtns.forEach(pressedNum => pressedNum.addEventListener('click', getNumber));
divideBtn.addEventListener('click', getOperator);
multiplyBtn.addEventListener('click', getOperator);
subtractBtn.addEventListener('click', getOperator);
additionBtn.addEventListener('click', getOperator);
*/

clearBtn.addEventListener('click', allClear);


function displayPressedOutput(e){
    let pressedInput = e.target.textContent;
    output.textContent = pressedInput;
}

function operate(num1, num2, operator){
    let result = 0;
    if(operator === "+"){
        result = num1 + num2;
    }
    else if (operator === "-"){
        result = num1 - num2;
    }
    else if (operator === "*"){
        result = num1 * num2;
    }
    else if (operator === "/"){
        result = num1 / num2;
    }
    output.textContent= result;
    return result;
}

function allClear (){
    fNumber = 0;
    sNumber = 0;
    operator = "";
    output.textContent = 0;
}

