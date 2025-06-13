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
let secondNumber = 0;
//let displayNumber = 0;

const outputDisplay = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit-button");
const operatorButtons = document.querySelectorAll(".operator-button");

function operator(num1, operand, num2) {
    if (operand === "+") return add(num1,num2);
    if (operand === "-") return subtract(num1,num2);
    if (operand === "*") return multiply(num1,num2);
    if (operand === "/") return divide(num1,num2);
    else return NaN;    
}

function addDigit(digit) {
    // Move digits over, the add new digit at end
    secondNumber *= 10;
    secondNumber += digit;
    outputDisplay.textContent = secondNumber;
}

function addOperator(operand) {
    if(op === undefined) {
        firstNumber = secondNumber;
        op = operand;
        secondNumber = 0;
    } else {
        firstNumber = operator(firstNumber,op,secondNumber);
        op = operand;
        secondNumber = 0;
        outputDisplay.textContent = firstNumber;
    }
}

//add eventlisteners to digit buttons
digitButtons.forEach( 
    digitButton => digitButton.addEventListener("click",
        () => addDigit( parseInt(digitButton.textContent))));

//add evnetlisteners to operator buttons.
// When clicking operator; firstNumber == secondNumber
operatorButtons.forEach(button => button.addEventListener("click",() => addOperator(button.textContent)));