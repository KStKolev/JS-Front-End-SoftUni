function numberOperations(textNumber, firstOperation, secondOperation, thirdOperation, forthOperation, fifthOperation) {
    let parsedNumber = parseInt(textNumber);
    let operationsArray = [firstOperation, secondOperation, thirdOperation, forthOperation, fifthOperation]
    for (let index = 0; index < operationsArray.length; index++) {
        if (operationsArray[index] == "chop") {
            parsedNumber /= 2;
        }
        else if (operationsArray[index] == "dice") {
            parsedNumber = Math.sqrt(parsedNumber);
        }
        else if (operationsArray[index] == "spice") {
            parsedNumber += 1;
        }
        else if (operationsArray[index] == "bake") {
            parsedNumber *= 3;
        }
        else {
            parsedNumber -= parsedNumber * 0.20;
        }
        console.log(parsedNumber);
    }
}