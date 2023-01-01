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
    console.log(e.target.textContent)
    numberPressed = e.target.textContent
    useNumber()
}))

// create function for numbers when clicked
function useNumber() {
    if (currentScreen.textContent == 0) {
        currentScreen.textContent = ""
    }
    
    if (currentScreen.textContent.length < 13){
        currentScreen.textContent += numberPressed 
    }
}

// create function for clear button
clearBtn.addEventListener('click', function(){
    currentScreen.textContent = 0
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
}

function multiply(previousValue, currentValue) {
    solution = (previousValue * currentValue)
}

function subtract(previousValue, currentValue) {
    solution = (previousValue - currentValue)
}

function add(previousValue, currentValue) {
    solution = (previousValue + currentValue)
}

// create event listener for operation button clicks
operators.forEach((operator) => operator.addEventListener('click', function(e){
    console.log('clicked!')
    // console.log(e.target.textContent)
}))