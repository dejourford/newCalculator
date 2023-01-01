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
let decimal = document.querySelector('.decimal')
let equals = document.querySelector('.equals')

number.forEach((number) => number.addEventListener('click', function(e){
    console.log(e.target.textContent)
    numberPressed = e.target.textContent
    useNumber()
}))

function useNumber() {
    if (currentScreen.textContent == 0) {
        currentScreen.textContent = ""
    }
    
    if (currentScreen.textContent.length < 13){
        currentScreen.textContent += numberPressed 
    }
}

clearBtn.addEventListener('click', function(){
    currentScreen.textContent = 0
})