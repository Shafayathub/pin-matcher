function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    if (pin > 999) {
        document.getElementById('display-pin').value = pin;
    }
    else {
        return generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function typedPin(event) {
    const clickedNumber = event.target.innerText;
    const clikedValue = document.getElementById('typed-numbers');
    if (clickedNumber == 'C') {
        clikedValue.value = '';
    }
    else if (clickedNumber == '<') {
        console.log(clickedNumber);
    }
    else {
        const previousClickedValue = clikedValue.value;
        const newClickedValue = previousClickedValue + clickedNumber;
        clikedValue.value = parseInt(newClickedValue);
    }
})
function verifyPin() {
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const succesMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');
    if (generatedPin == typedPin) {
        succesMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'block';
        succesMessage.style.display = 'none';
    }
}