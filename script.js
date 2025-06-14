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

let input = undefined;
let output = 0;

let firstNumber = undefined;
let secondNumber = undefined;
let op = undefined;
let answer = undefined;

function operator(num1, operand, num2) {
    if (operand === "+") return add(num1,num2);
    if (operand === "-") return subtract(num1,num2);
    if (operand === "*") return multiply(num1,num2);
    if (operand === "/") return divide(num1,num2);
    else return NaN;    
}

function addOperator(operand) {
    if (input !== undefined)
    {
        // We have part of equation
        if(firstNumber === undefined) {
            firstNumber = parseFloat(input);
            input = undefined;
            answer = undefined;
        } else {
            // We have second part and a new operator.
            equals()
        } 
    }
    
    //We have no input, but may have a previous answer
    if (answer !== undefined) {
        firstNumber = answer

    }    
    
    op = operand
}

function equals() {
    if(firstNumber !== undefined && op !== undefined && input !== undefined) {
        secondNumber = parseFloat(input);
        
        const tempAnswer = operator(firstNumber,op,secondNumber);
        
        clear();
        
        answer = tempAnswer;

        output = parseFloat(answer.toFixed(5));
        outputDisplay.textContent = output;
    }
}

function clear() {
    firstNumber = undefined;
    op = undefined;
    secondNumber = undefined;
    input = undefined;
    output = "0";
    outputDisplay.textContent = output;
}


function addDigit(digit) {
    if (input === undefined || input === "0") {
        input = digit;
    } else {
        input += digit;
    }

    output = input
    outputDisplay.textContent = output;
}

function addSeperator() {
    if(input !== undefined && !input.includes('.')) {
        input += '.';
        output = input
        outputDisplay.textContent = output;
    }
}

function removeLast() {
    if(input !== undefined && input.length > 0) {
        input = input.slice(0,-1);
        output = (input.length < 1) ? "0" : input;
        outputDisplay.textContent = output;
    }
}

const outputDisplay = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");
const separatorButton = document.querySelector(".separator-button");
const backButton = document.querySelector(".back-button");


digitButtons.forEach( 
    digitButton => digitButton.addEventListener("click",
        () => addDigit( digitButton.textContent)));

operatorButtons.forEach(button => button.addEventListener("click",() => addOperator(button.textContent)));

equalButton.addEventListener("click",equals);
clearButton.addEventListener("click",clear);
separatorButton.addEventListener("click",addSeperator);
backButton.addEventListener("click",removeLast);

window.addEventListener("keydown",function(e) {
    // console.log(displayNumber)
    switch(e.code) {
        case "Digit0":;
        case "Numpad0": addDigit("0");
            break;
        case "Digit1":;
        case "Numpad1": addDigit("1");
            break;
        case "Digit2":;
        case "Numpad2": addDigit("2");
            break;
        case "Digit3":;
        case "Numpad3": addDigit("3");
            break;
        case "Digit4":;
        case "Numpad4": addDigit("4");
            break;
        case "Digit5":;
        case "Numpad5": addDigit("5");
            break;
        case "Digit6":;
        case "Numpad6": addDigit("6");
            break;
        case "Digit7":;
        case "Numpad7": addDigit("7");
            break;
        case "Digit8":;
        case "Numpad8": addDigit("8");
            break;
        case "Digit9":;
        case "Numpad9": addDigit("9");
            break;
        case "NumpadEnter":
        case "Enter": equals();
            break;
        case "Backspace": removeLast();
            break;
        case "KeyC": clear();
            break;
        case "NumpadDecimal": separatorButton();
            break;
        case "NumpadAdd": addOperator("+")
            break;
        case "NumpadSubtract": addOperator("-")
            break;
        case "NumpadDivide": addOperator("/")
            break;
        case "NumpadMultiply": addOperator("*")
            break;
        default:
            console.log(e.code);
            break;
    }

});