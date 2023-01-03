// declare global variables
let previousValue = ""
let currentValue = ""
let operator = ""
let solution = ""



// declare variables 
let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')
let clearBtn = document.querySelector('.clear')

let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let decimalBtn = document.querySelector('.decimal')
let equals = document.querySelector('.equals')

// create event listener for number clicks
numbers.forEach((number) => number.addEventListener('click', function(e){
    // console.log(e.target.textContent)
    numberPressed = e.target.textContent
    numberToInteger = Math.floor(numberPressed)
    useNumber()
}))

// create function for numbers when clicked
function useNumber() {
    if (currentScreen.textContent == 0) {
        currentScreen.textContent = ""
    }
    
    if (currentScreen.textContent.length < 13){
        currentScreen.textContent += numberToInteger
    }
}

// create function for clear button
clearBtn.addEventListener('click', function(){
    currentScreen.textContent = 0
})

clearBtn.addEventListener('dblclick', function(){
    currentScreen.textContent = 0
    previousScreen.textContent = 0
})


// create function for decimal button
decimalBtn.addEventListener('click', function(e){
    console.log('clicked!')
    decimal = e.target.textContent
    if (currentScreen.textContent.length < 13){
        currentScreen.textContent += decimal
    }    
}) 
    
// define operations
function divide(previousValue, currentValue) {
    solution = (previousValue / currentValue)
    previousScreen.textContent = `${previousValue} / ${currentValue}`
    currentScreen.textContent = solution
    
}

function multiply(previousValue, currentValue) {
    solution = (previousValue * currentValue)
    previousScreen.textContent = `${previousValue} * ${currentValue}`
    currentScreen.textContent = solution
}

function subtract(previousValue, currentValue) {
    solution = (previousValue - currentValue)
    previousScreen.textContent = `${previousValue} - ${currentValue}`
    currentScreen.textContent = solution
}

function add(previousValue, currentValue) {
    solution = (previousValue + currentValue)
    previousScreen.textContent = `${previousValue} + ${currentValue}`
    currentScreen.textContent = solution
}

// create event listener for operation button clicks
operators.forEach((operator) => operator.addEventListener('click', function(e){
    if (previousScreen != 0) {
        currentValue = currentScreen.textContent
        console.log(currentValue)
    }

    // console.log(`${e.target.textContent} has been clicked`)
    operator = e.target.textContent
    previousValue = currentScreen.textContent
    previousScreen.textContent = previousValue
    currentScreen.textContent = 0
    if (operator == '/'){
        // divide(previousValue,currentValue)
        console.log('this works')
        desiredOperator = operator
    }

    else if (operator == 'x'){
        // divide(previousValue,currentValue)
        console.log('multiply opp')
        desiredOperator = operator
    }

    else if (operator == '-'){
        // divide(previousValue,currentValue)
        console.log('subtract opp')
        desiredOperator = operator
    }

    else if (operator == '+'){
        // divide(previousValue,currentValue)
        console.log('addition opp')
        desiredOperator = operator
    }

}))


// create evaluation function
function evaluate(previousValue,currentValue){
    if (desiredOperator == '/'){
        divide(previousValue,currentValue)
        console.log('this works now!')
    }

    else if(desiredOperator == 'x'){
        multiply(previousValue,currentValue)
    }

    else if(desiredOperator == '-'){
        subtract(previousValue, currentValue)
    }

    else if (desiredOperator == '+'){
        add(previousValue,currentValue)
    }
}


// create listener for equals button
equals.addEventListener('click', function(){
    previousValue = Math.floor(previousScreen.textContent)
    currentValue = Math.floor(currentScreen.textContent)
    console.log(previousValue)
    console.log(currentValue)
    evaluate(previousValue,currentValue)
    

})

// need to address if user keeps clicking operators and never 
// hits the equals sign b/w calculations