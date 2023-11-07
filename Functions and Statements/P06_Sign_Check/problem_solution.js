function printMultiplyNumbersResultSign(firstNumber, secondNumber, thirdNumber) {

    let count = 0;

    if (firstNumber < 0) {
        count++;
    }
    if (secondNumber < 0) {
        count++;
    }
    if (thirdNumber < 0) {
        count++;
    }

    if (count === 0 || count === 2) {
        console.log("Positive")
    }
    else {
        console.log("Negative");
    }
}