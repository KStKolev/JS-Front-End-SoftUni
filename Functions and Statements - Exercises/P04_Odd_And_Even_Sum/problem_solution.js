function printOddAndEvenSum(number) {
    const textNumber = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let index = 0; index < textNumber.length; index++) {
        let parsedNumber = Number.parseInt(textNumber[index]);
        if (parsedNumber % 2 == 0) {
            evenSum += parsedNumber;
        }
        else {
            oddSum += parsedNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}