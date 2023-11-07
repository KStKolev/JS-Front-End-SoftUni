function printN_thElementFromArray(array, step) {
    let newArray = [];
    for (let index = 0; index < array.length; index+= step) {
        newArray.push(array[index]);
    }
    return newArray;
}