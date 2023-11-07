function checkPalindromeNumbers(numberArray) {

    for (let index = 0; index < numberArray.length; index++) {

        let textNumber = numberArray[index].toString();
        let firstArray = [];
        let secondArray = [];
        for (let digitIndex = 0; digitIndex < textNumber.length; digitIndex++) {
            firstArray.push(textNumber[digitIndex]);
        }
        for (let digitIndex = textNumber.length - 1; digitIndex >= 0; digitIndex--) {
            secondArray.push(textNumber[digitIndex]);
        }

        if (firstArray.every((value, index) => value === secondArray[index])) {
            console.log("true")
        }
        else {
            console.log("false");
        }
    }
}