let fNumber = "";
let sNumber = "";
let operator = "";

const output = document.querySelector('#output');
const clearBtn = document.querySelector('#clear');
const negativeBtn = document.querySelector('#negative');
const decimalBtn = document.querySelector('#decimal');
const equalBtn = document.querySelector('#equal');
const percentBtn = document.querySelector('#percent');

const numBtns = document.querySelectorAll('#num-btns');
const operators = document.querySelectorAll('#functions');

numBtns.forEach(pressedNum => pressedNum.addEventListener('click', (e) => {
    getNumber(e.target.textContent);
}));

operators.forEach(pressedfunc => pressedfunc.addEventListener('click', (e) => {
    getOperator(e.target.textContent);
}));

window.addEventListener('keydown', (e) => {
    getKeyboard(e.key);
})

clearBtn.addEventListener('click', allClear);
decimalBtn.addEventListener('click', addDecimal);
percentBtn.addEventListener('click', addPercent);
negativeBtn.addEventListener('click', addNegative);

equalBtn.addEventListener('click', () => {
    if(fNumber != "" && sNumber != ""){
        operate();
    }
});

function getNumber(number){
    if(fNumber.length <= 12){
        fNumber += number;
        output.textContent = fNumber;
    }
}

function getKeyboard(e){
    console.log(e);
    if(e >= "0" && e <= "9"){
        getNumber(e);
    }
    else if (e === "Enter" || e === "="){
        operate();
    }
    else if (e === "+"){
        getOperator("+");
    }
    else if (e === "*"){
        getOperator("*");
    }
    else if (e === "-"){
        getOperator("-");
    }
    else if (e === "/"){
        getOperator("/");
    }
    else if (e === "."){
        addDecimal();
    }
    else if (e === "%"){
        addPercent();
    }
    else if (e === "Delete"){
        allClear();
    }
    else if ( e === "Backspace"){
        handleBackspace();
    }
}

function getOperator(op){
    operator = op;
    output.textContent = operator;
    sNumber = fNumber;
    fNumber = "";
}

function operate(){
    fNumber = Number(fNumber);
    sNumber = Number(sNumber);

    if(operator === "+"){
        fNumber += sNumber;
    }
    else if (operator === "-"){
        fNumber = sNumber - fNumber;
    }
    else if (operator === "*"){
        fNumber *= sNumber;
    }
    else if (operator === "/"){
        if(fNumber <= 0){
            output.textContent = "huh?";
            outputDisplay();
            return;
        }
        fNumber = sNumber / fNumber;
    }
    fNumber = fNumber.toString();
    outputDisplay();
}

function allClear (){
    fNumber = "";
    sNumber = "";
    operator = "";
    output.textContent = 0;
}

function addDecimal (){
    if(!fNumber.includes(".")){
        fNumber += ".";
        output.textContent = fNumber;
    }
}

function addPercent (){
    fNumber = (fNumber / 100);
    output.textContent = fNumber;
}

function addNegative (){
    fNumber = (fNumber * -1);
    output.textContent = fNumber;
}

function outputDisplay() {
    operator = "";
    if(fNumber.length <= 11){
        output.textContent = fNumber;
    }
    else {
        output.textContent = fNumber.slice(0,11) + "...";
    }
}
function handleBackspace(){
    fNumber = fNumber.slice(0, -1);
    if(fNumber === ""){
        fNumber = "0";
        sNumber = "";
        operator = "";
        output.textContent = fNumber;
    }
    output.textContent = fNumber;
}

