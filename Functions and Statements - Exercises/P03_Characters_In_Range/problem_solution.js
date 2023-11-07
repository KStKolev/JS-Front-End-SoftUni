function printASCIICharacters(firstChar, secondChar) {
    let charArray = [];
    const firstNumber = firstChar.charCodeAt(0);
    const secondNumber = secondChar.charCodeAt(0);
    if (firstNumber > secondNumber) {
        for (let index = secondNumber + 1; index < firstNumber; index++) {
            charArray.push(String.fromCharCode(index));
        }
    }
    else {
        for (let index = firstNumber + 1; index < secondNumber; index++) {
            charArray.push(String.fromCharCode(index));
        }
    }
    console.log(charArray.join(' '));
}