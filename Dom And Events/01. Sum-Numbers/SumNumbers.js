function calc() {
    const firstInputValue = document.getElementById("num1").value;
    const secondInputValue = document.getElementById("num2").value;
    
    const inputSum = document.getElementById("sum");
    inputSum.value = Number(firstInputValue) + Number(secondInputValue);
}
