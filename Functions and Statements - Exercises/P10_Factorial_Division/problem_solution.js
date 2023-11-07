function printDividedFactorials(firstNumber, secondNumber) {
    let firstFactorialNumber = 1;
    let secondFactorialNumber = 1;
    for (let index = 2; index <= firstNumber; index++) {
        firstFactorialNumber *= index;
    }
    for (let index = 2; index <= secondNumber; index++) {
        secondFactorialNumber *= index;
    }
    console.log((firstFactorialNumber/secondFactorialNumber).toFixed(2));
}

/*
function factorial(number) 
{ 
  if (number === 0) {
    return 1;
  }
  return number * factorial(number-1);
}

const printDividedFactorials = (firstNumber, secondNumber) => 
console.log((factorial(firstNumber)/factorial(secondNumber)).toFixed(2));
*/