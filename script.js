function addToResult(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function backspace() {
    var currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}
