function subtract() {
    const firstValue = document.querySelector("#firstNumber").value;
    const secondValue = document.querySelector("#secondNumber").value;
    const result = Number(firstValue) - Number(secondValue);
    document.querySelector("#result").textContent = result;
}