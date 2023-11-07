function printMatrix(number) {
    for (let index = 0; index < number; index++) {
        let array = [];
        for (let secondIndex = 0; secondIndex < number; secondIndex++) {
           array.push(number);
        }
        console.log(array.join(" "));
    }
}