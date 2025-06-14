function add(a,b) {
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if(b === 0) {
        return NaN;
    }
    return a/b;
}

let firstNumber = undefined;
let op = undefined;
let secondNumber = undefined;
let displayNumber = "";
let answer = undefined;

const outputDisplay = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");
const seperatorButton = document.querySelector(".seperator-button")

function operator(num1, operand, num2) {
    if (operand === "+") return add(num1,num2);
    if (operand === "-") return subtract(num1,num2);
    if (operand === "*") return multiply(num1,num2);
    if (operand === "/") return divide(num1,num2);
    else return NaN;    
}

function addDigit(digit) {
    if( answer !== undefined) {
        answer = undefined;
        displayNumber = digit;
    } else if (displayNumber === "0")  {
        displayNumber = digit;        
    } else {
        displayNumber += digit;
    }    
    outputDisplay.textContent = displayNumber;
}

function addOperator(operand) {
    if(firstNumber === undefined) {
        firstNumber = parseFloat(displayNumber);
        displayNumber = "";
    } 
    
    if(displayNumber === "" || op === undefined) {
        op = operand;
    } 
    else {
        secondNumber = parseFloat(displayNumber);
        firstNumber = operator(firstNumber,op,secondNumber);
        op = operand;
        secondNumber  = undefined;

        outputDisplay.textContent = firstNumber;
        displayNumber = ""
    }    
}

function equals() {
    if (firstNumber === undefined || op === undefined || displayNumber === "") return;
    
    secondNumber = parseFloat(displayNumber);
    answer = operator(firstNumber,op,secondNumber);
    clear();

    displayNumber = answer
    outputDisplay.textContent = displayNumber;
}

function clear() {
    firstNumber = undefined;
    op = undefined;
    secondNumber = undefined;
    displayNumber = "0";
    outputDisplay.textContent = displayNumber;
}

function addSeperator() {
    if (!displayNumber.includes('.')) {
        displayNumber += '.'
        outputDisplay.textContent = displayNumber;
    }

}

digitButtons.forEach( 
    digitButton => digitButton.addEventListener("click",
        () => addDigit( digitButton.textContent)));

operatorButtons.forEach(button => button.addEventListener("click",() => addOperator(button.textContent)));

equalButton.addEventListener("click",equals);
clearButton.addEventListener("click",clear);
seperatorButton.addEventListener("click",addSeperator);