function add(first, second) {
    return first + second;
}
function subtract(first, second) {
    return first - second;
}
function multiply(first, second) {
    return first * second;
}
function divide(first, second) {
    if (first == 0 || second == 0) {
        return "error - can't divide by zero";
    } else {
        num = first / second;
        return Math.round(num * 10) / 10;
    }
}

function operate(type, first = 0, second = 0) {
    switch(type) {
        case "add":
            return add(first, second);
        case "subtract":
            return subtract(first, second);
        case "multiply":
            return multiply(first, second);
        case "divide":
            return divide(first, second);
    }
}



function handleClick(e) {
    id = e.target.id;

    if (id == 'ac') {
        addingToFirst = true;
        firstNum = "";
        secondNum = "";
        calcOutput = "Ready";
        calcScreen.textContent = calcOutput;
        stage = 'ac'
        return;
    }

    if (id == 'posNeg') {
        if (stage == 'firstDigits') {
            if (firstNum > 0) {
                firstNum = firstNum - (firstNum * 2);
                calcOutput = firstNum;
                calcScreen.textContent = calcOutput;
            } else if (firstNum < 0) {
                firstNum = firstNum - (firstNum * 2);
                calcOutput = firstNum;
                calcScreen.textContent = calcOutput;
            }
        } else if (stage == 'secondDigits') {
            if (secondNum > 0) {
                secondNum = secondNum - (secondNum * 2);
                calcOutput = secondNum;
                calcScreen.textContent = calcOutput;
            } else if (secondNum < 0) {
                secondNum = secondNum - (secondNum * 2);
                calcOutput = secondNum;
                calcScreen.textContent = calcOutput;
            }
        }
        return;
    }


    if (stage == 'ac') {
        if (digits.includes(id)) {
            addDigit(id);
            calcOutput = firstNum;
            calcScreen.textContent = calcOutput;
            stage = 'firstDigits';
        }
        

    } else if (stage == 'firstDigits') {
        if (digits.includes(id)) {
            addDigit(id);
            calcOutput = firstNum;
            calcScreen.textContent = calcOutput;
        } else if (oper.includes(id)) {
            operChosen = id;
            calcOutput += ` ${showOper[id]}`
            calcScreen.textContent = calcOutput;
            lastButton = id;
            stage = 'firstOper';
            addingToFirst = false;
        } else if (id == 'backspace') {
            firstNum = `${firstNum.slice(0, (firstNum.length - 1))}`
            calcOutput = firstNum;
            calcScreen.textContent = calcOutput;
        }


    } else if (stage == 'firstOper') {
        if(digits.includes(id)){
            addDigit(id);
            calcOutput = secondNum;
            calcScreen.textContent = calcOutput;
            stage = 'secondDigit';
        } else if(oper.includes(id)){
            if(oper.includes(lastButton)) {
                calcOutput = `${calcOutput.slice(0, (calcOutput.length - 2))} ${showOper[id]}`
                operChosen = id;
                calcScreen.textContent = calcOutput;
                lastButton = id;
            }

        } else if (id == 'backspace') {
            operChosen = '';
            calcOutput = firstNum;
            calcScreen.textContent = calcOutput;
            stage = 'firstDigits';
            lastButton = id;
            addingToFirst = true;
        }


    } else if (stage == 'secondDigit') {

        if (digits.includes(id)) {
            addDigit(id);
            calcOutput = secondNum;
            calcScreen.textContent = calcOutput;
        } else if (oper.includes(id)) {
            firstNum = operate(operChosen, parseInt(firstNum), parseInt(secondNum));
            calcOutput = firstNum;
            calcScreen.textContent = calcOutput;
            secondNum = '';
            operChosen = id;
            
        } else if (id == 'backspace') {
            secondNum = `${secondNum.slice(0, (secondNum.length - 1))}`
            calcOutput = firstNum;
            calcScreen.textContent = calcOutput;
        } else if (id == 'equals' && secondNum != "") {
            calcOutput = operate(operChosen, parseInt(firstNum), parseInt(secondNum));
            calcScreen.textContent = calcOutput;
            addingToFirst = true;
            firstNum = "";
            secondNum = "";
            stage = 'ac';
        }

    }
    
}

const calcButtons = document.querySelectorAll("button");
const calcScreen = document.querySelector('#output');

// stages: ac, firstDigits, firstOper, secondDigits

const digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"]
const oper = ['add', 'multiply', 'divide', 'subtract']
const showOper = {
    add: '+',
    subtract: '-',
    divide: '÷',
    multiply: '×'
}
let display = "", operChosen = "", lastButton = "", calcOutput = "";
let firstNum = "", secondNum = "";
let stage = 'ac'
let addingToFirst = true;

calcButtons.forEach(btn => btn.addEventListener('click', handleClick));



function addDigit(num) {
    switch(String(num)) {
            case 'one':
            if (addingToFirst) {
                firstNum += '1'
            } else secondNum += '1'
            break;        
            case 'two':
                if (addingToFirst) {
                    firstNum += '2'
                } else secondNum += '2'
            break;        
            case 'three':
                if (addingToFirst) {
                    firstNum += '3'
                } else secondNum += '3'
            break;        
            case 'four':
                if (addingToFirst) {
                    firstNum += '4'
                } else secondNum += '4'
            break;        
            case 'five':
                if (addingToFirst) {
                    firstNum += '5'
                } else secondNum += '5'
            break;        
            case 'six':
                if (addingToFirst) {
                    firstNum += '6'
                } else secondNum += '6'
            break;        
            case 'seven':
                if (addingToFirst) {
                    firstNum += '7'
                } else secondNum += '7'
            break;        
            case 'eight':
                if (addingToFirst) {
                    firstNum += '8'
                } else secondNum += '8'
            break;        
            case 'nine':
                if (addingToFirst) {
                    firstNum += '9'
                } else secondNum += '9'
            break;        
            case 'zero':
                if (addingToFirst) {
                    if (firstNum != "") {
                        firstNum += '0'
                    }
                } else {
                    if (secondNum != "") {
                        secondNum += '0'
                    }
                }
            break;       
    }
    lastButton = num;
}