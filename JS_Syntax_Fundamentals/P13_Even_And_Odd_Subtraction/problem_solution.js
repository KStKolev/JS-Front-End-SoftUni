function subractOddAndEvenSumArrayElements(array) {

    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            evenSum += array[index];
        }
        else {
            oddSum += array[index];
        }
    }

    console.log(evenSum - oddSum);

}