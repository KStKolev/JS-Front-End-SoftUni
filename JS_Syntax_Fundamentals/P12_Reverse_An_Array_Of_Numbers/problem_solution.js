function printArrayReverse(number, array) {
    let reversedArray = [];
    for (let index = 0; index < number; index++) {
        reversedArray.push(array[index]);
    }
    reversedArray.reverse();
    console.log(reversedArray.join(" "));
}