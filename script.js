function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        const result = document.getElementById('result');
        result.value = eval(result.value.replace(/÷/g, '/').replace(/×/g, '*'));
    } catch (error) {
        alert('Invalid input');
    }
}