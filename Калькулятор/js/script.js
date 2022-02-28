const numbers = document.querySelectorAll('[data-number]')
const operation = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]')
const remove = document.querySelector('[data-delete]')
const allClear = document.querySelector('[data-all-clear]')
const previousTextElement = document.querySelector('[data-previous]')
const currentTextElement = document.querySelector('[data-current]')

let current = ''
let previous = ''
let operand = undefined

function clear() {
    current = ''
    previous = ''
    operand = undefined
    updateDisplay()
}

function removeNumber() {
    current = current.toString().slice(0, -1);
    updateDisplay()
}

function appendNumber(number) {
    if (number === '.' && current.includes('.')) return
    current = current.toString() + number.toString()
    updateDisplay()
}

function chooseOperation(operationSign) {
    if (current === '') return
    if (previous !== '') { 
        calculate()
    }
    operand = operationSign
    previous = current
    current = ''
    updateDisplay()
}

function calculate() {
    let result
    const prev = parseFloat(previous)
    const curr = parseFloat(current)
    if (isNaN(prev) && isNaN(curr)) return
    switch (operand) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    current = result + ''
    operand = undefined
    previous = ''
    updateDisplay()
}

function displayNumber(number) {
    const stringNumber = number.toString()
    const integer = parseFloat(stringNumber.split('.')[0])
    const decimal = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integer)) {
        integerDisplay = ''
    } else {
        integerDisplay = integer.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (decimal != null) {
        return `${integerDisplay}.${decimal}`;
    } else {
        return integerDisplay
    }
}

function updateDisplay() {
    currentTextElement.innerText = displayNumber(current)
    if (operand !=  null) {
        previousTextElement.innerText = `${displayNumber(previous)} ${operand}`
    } else {
        previousTextElement.innerText = ''
    }
}

numbers.forEach(number => {
    number.addEventListener('click', function() {
        appendNumber(number.innerText)
    })
})

operation.forEach(operation => {
    operation.addEventListener('click', function() {
        chooseOperation(operation.innerText)
    })
})

equals.addEventListener('click', function() {
    calculate()
})

remove.addEventListener('click', function() {
    removeNumber();
})

allClear.addEventListener('click', function() {
    clear()
})

document.addEventListener('keydown', (event) => {
    if(event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '0' || event.key == '.') {
        appendNumber(event.key)
    }
    if (event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') {
        chooseOperation(event.key)
    }
    if (event.key == '=' || event.key == 'Enter') {
        calculate()
    }
    if (event.key == 'Backspace') {
        removeNumber()
    }
    if (event.key == 'c')
    clear()

})

document.addEventListener('keydown', (event) => {
    if (event.key == 'c') {
        let ac = document.getElementById('ac')
        ac.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'c') {
        let ac = document.getElementById('ac')
        ac.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'Backspace') {
        let del = document.getElementById('del')
        del.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'Backspace') {
        let del = document.getElementById('del')
        del.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '/') {
        let delit = document.getElementById('delit')
        delit.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '/') {
        let delit = document.getElementById('delit')
        delit.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '*') {
        let umno = document.getElementById('umno')
        umno.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '*') {
        let umno = document.getElementById('umno')
        umno.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '+') {
        let plus = document.getElementById('plus')
        plus.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '+') {
        let plus = document.getElementById('plus')
        plus.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '-') {
        let minus = document.getElementById('minus')
        minus.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '-') {
        let minus = document.getElementById('minus')
        minus.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '.') {
        let tochka = document.getElementById('tochka')
        tochka.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '.') {
        let tochka = document.getElementById('tochka')
        tochka.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        let ravno = document.getElementById('ravno')
        ravno.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        let ravno = document.getElementById('ravno')
        ravno.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '1') {
        let one = document.getElementById('one')
        one.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '1') {
        let one = document.getElementById('one')
        one.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '2') {
        let two = document.getElementById('two')
        two.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '2') {
        let two = document.getElementById('two')
        two.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '3') {
        let three = document.getElementById('three')
        three.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '3') {
        let three = document.getElementById('three')
        three.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '4') {
        let four = document.getElementById('four')
        four.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '4') {
        let four = document.getElementById('four')
        four.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '5') {
        let five = document.getElementById('five')
        five.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '5') {
        let five = document.getElementById('five')
        five.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '6') {
        let six = document.getElementById('six')
        six.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '6') {
        let six = document.getElementById('six')
        six.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '7') {
        let seven = document.getElementById('seven')
        seven.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '7') {
        let seven = document.getElementById('seven')
        seven.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '8') {
        let eight = document.getElementById('eight')
        eight.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '8') {
        let eight = document.getElementById('eight')
        eight.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '9') {
        let nine = document.getElementById('nine')
        nine.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '9') {
        let nine = document.getElementById('nine')
        nine.style.background = '#fd1d1d';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == '0') {
        let nol = document.getElementById('nol')
        nol.style.background = '#8a0303';
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == '0') {
        let nol = document.getElementById('nol')
        nol.style.background = '#fd1d1d';
    }
})