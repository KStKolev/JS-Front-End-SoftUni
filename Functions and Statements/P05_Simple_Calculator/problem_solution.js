const calculator = {
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    sum: (x, y) => x + y,
    subtract: (x, y) => x - y
}

const calculateOperations = (firstNumber, secondNumber, operator) =>
calculator[operator](firstNumber, secondNumber);