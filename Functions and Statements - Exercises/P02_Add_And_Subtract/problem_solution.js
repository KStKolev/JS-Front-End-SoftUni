function sum(firstNumber, secondNumber, thirdNumber) {
    let result = firstNumber + secondNumber;
    function subtractSumNumbers(sumResult, subtractNumber) {
        return sumResult - subtractNumber;
    }
    return subtractSumNumbers(result, thirdNumber);
}

const subtractResult = sum(1,6,-3);
console.log(subtractResult);