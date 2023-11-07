function printNumbersAndTheirSum(startNumber, endNumber) {
    let sumOfNumbers = 0;
    let numberArray = [];
    for (let index = startNumber; index <= endNumber; index++) {
        sumOfNumbers += index;
        numberArray.push(index);
    }
    console.log(numberArray.join(" "));
    console.log(`Sum: ${sumOfNumbers}`);
}