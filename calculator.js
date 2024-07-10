const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.buttons')
const chars = ['×', '÷', '+', '-', '=', '.']
let output = ""

function calculate (param) {
    if (param === '=' && output !== '') {
        if (!chars.includes(param) && /^\d*\.?\d*$/.test(output) && output !== "") {
            return;
        } else if (output.includes('×') || output.includes('÷')) {
            output = eval(output.replace('×', '*').replace('÷', '/')).toString();
        } else if (!chars.includes(output[output.length - 1])) {
            output = eval(output).toString();
        }
    } else if (param === 'AC') {
        output = ""
    } else if (param === 'DEL') {
        output = output.toString().slice(0, -1)
    } else {
        if (chars.includes(param) && output === "") return;
        output += param
    }

    display.value = output
};

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        calculate(e.target.dataset.value)
    })
})