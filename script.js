// declare global variables
let previousValue = ""
let currentValue = ""
let operator = ""



// declare variables 
let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')
let clearBtn = document.querySelector('.clear')

let number = document.querySelectorAll('.number')
let operators = document.querySelector('.operator')
let decimalBtn = document.querySelector('.decimal')
let equals = document.querySelector('.equals')

// create event listener for number clicks
number.forEach((number) => number.addEventListener('click', function(e){
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
    
