function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function backDisplay(value) {
    document.getElementById('display').value -= value;
}

function backDisplay() {
    let inputValue = display.value;
    if (inputValue.length > 0) {
        inputValue = inputValue.slice(0, -1);
        display.value = inputValue;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';

}

function Percentage() {
    let currentValue = document.getElementById('display').value;
    if (currentValue !== "") {
        currentValue = parseFloat(currentValue);
        currentValue = currentValue / 100;
        document.getElementById('display').value = currentValue;
    }
}



function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}