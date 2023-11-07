function printSmallestNumber(firstNumber, secondNumber, thirdNumber) {
    let minNumber = firstNumber;
    if (minNumber > secondNumber) {
        minNumber = secondNumber;
    }
    if (minNumber > thirdNumber) {
        minNumber = thirdNumber;
    }
    console.log(minNumber);
}