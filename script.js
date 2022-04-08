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

function operate(type, first, second) {
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

let display = "";
let calc = 0;
operationChosen = ""
lastWasOperator = false;
const screen = document.querySelector('#output')

document.addEventListener('click', (e) => {
    const btn = e.target.id;
    
    switch(btn) {

        case "one":
            
    }
}
    
})


// check if anything in display