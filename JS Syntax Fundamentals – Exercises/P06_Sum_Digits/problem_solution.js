function printSumOfDigitsInsideNumber(number) {

        let textNumber = `${number}`;
        let sumDigits = 0;
        for (let index = 0; index < textNumber.length; index++) {
            let parsedDigit = parseInt(textNumber[index]);
            sumDigits += parsedDigit;
        }
        console.log(sumDigits);

}