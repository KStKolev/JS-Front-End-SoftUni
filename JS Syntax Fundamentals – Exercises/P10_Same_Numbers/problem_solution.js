function checkSameDigitsInANumberAndPrintSum(number) {
    let text = `${number}`;
    let digitChecker = true;
    let sumDigits = 0;
    for (let index = 0; index < text.length; index++) {
        if (index + 1 == text.length) {
            sumDigits += parseInt(text[index])
            break;
        }
        if (digitChecker == true) {
            charTester = text[index];
            if (charTester != text[index + 1]) {
                digitChecker = false;
            }
        }
        sumDigits += parseInt(text[index]);
    }
    console.log(digitChecker);
    console.log(sumDigits);
}