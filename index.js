var display = document.getElementById('display')
var operator = ['equal','add','subtract','multiply','divide','decimal']
var saveNumber = document.getElementById('savedisplay')
var currentOperator = document.getElementById('displayoperator')
currentOperator.innerText = 'add'

function updateDisplay(num){
    if(display.textContent[0] === '0' && num !== operator[1] && num !== operator[2] && num !== operator[3] && num !== operator[4]){
        display.innerText = num
    }else if(num !== operator[1] && num !== operator[2] && num !== operator[3] && num !== operator[4] && num !== operator[0] && num !== operator[5]){
        display.innerText += num
    }
    else{
        switch(num){
            case operator[0] : {
                console.log(`=`)
                let previousValue = parseFloat(saveNumber.innerText)
                let currentValue = parseFloat(display.innerText)
                switch(currentOperator.innerText){
                    case operator[1]:{
                        let newValue = previousValue + currentValue;
                        saveNumber.innerText = 0
                        display.innerText = newValue
                        currentOperator.innerText = operator[1]
                    }
                    break;
                    case operator[2]:{
                        let newValue = previousValue - currentValue;
                        saveNumber.innerText = 0
                        display.innerText = newValue
                        currentOperator.innerText = operator[1]
                    }
                    break;
                    case operator[3]:{
                        let newValue = previousValue * currentValue;
                        saveNumber.innerText = 0
                        display.innerText = newValue
                        currentOperator.innerText = operator[1]
                    }
                    break;
                    case operator[4]:{
                        let newValue = previousValue / currentValue;
                        saveNumber.innerText = 0
                        display.innerText = newValue
                        currentOperator.innerText = operator[1]
                    }
                    break;
                }
            }
            break;
            case operator[1] : {
                if(currentOperator.innerText !== operated[3] && currentOperator !== operated[4] && display.innerText !== '0' && display.innerHTML[0] !== '+' && display.innerHTML[0] !== '-'){
                    saveNumber.innerText = operated(saveNumber.innerText,display.innerText,currentOperator.innerHTML);
                    currentOperator.innerText = num
                    display.innerText = 0
                }
                else{
                    if(display.innerText === '0'){
                        display.innerText = (num === 'add') ? "+" : '-'
                    }else if(display.innerText[0] === '-' || display.innerText[0] === '+' ){
                        currentOperator.innerText = num
                        display.innerText = '0'
                    }
                }
            }
            break;
            case operator[2] : {
                if(currentOperator.innerText !== operated[3] && currentOperator !== operated[4] && display.innerText !== '0' && display.innerHTML[0] !== '+' && display.innerHTML[0] !== '-'){
                    saveNumber.innerText = operated(saveNumber.innerText,display.innerText,currentOperator.innerHTML);
                    currentOperator.innerText = num
                    display.innerText = 0
                }
                else{
                    if(display.innerText === '0'){
                        display.innerText = (num === 'add') ? "+" : '-'
                    }else if(display.innerText[0] === '-' || display.innerText[0] === '+'){
                        currentOperator.innerText = num
                        display.innerText = '0'
                    }
                }
            }
            break;
            case operator[3] : {
                saveNumber.innerText = operated(saveNumber.innerText,display.innerText,currentOperator.innerHTML);
                currentOperator.innerText = num
                display.innerText = 0
            }
            break;
            case operator[4] : {
                saveNumber.innerText = operated(saveNumber.innerText,display.innerText,currentOperator.innerHTML);
                currentOperator.innerText = num
                display.innerText = 0
            }
            break;
            case operator[5] : {
                if(!display.innerText.includes('.'))
                    display.innerText += '.'
            }
            break;
            default : console.log(`Operator not found`)
            break;
        }
    }
}


function operated(previouseNumber,currentNumber,ope){
    switch(ope){
        case operator[1]:{
            let newNumber = parseFloat(previouseNumber)+parseFloat(currentNumber)
            return newNumber;
        }
        break;
        case operator[2]:{
            let newNumber = parseFloat(previouseNumber)-parseFloat(currentNumber);
            return newNumber
        }
        break;
        case operator[3]:{
            let newNumber = parseFloat(previouseNumber)*parseFloat(currentNumber)
            return newNumber
        }
        break;
        case operator[4]:{
            let newNumber = parseFloat(previouseNumber)/parseFloat(currentNumber)
            return newNumber
        }
        break;
        default : console.log(`Something wrong in Operator`)
        break;
    }
}

function updateClear(){
    display.innerText = '0'
    saveNumber.innerText = '0'
    currentOperator.innerText = 'add'
}


