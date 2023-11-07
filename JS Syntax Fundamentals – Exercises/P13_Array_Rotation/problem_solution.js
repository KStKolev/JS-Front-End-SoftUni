function arrayRotation(array, timesToRotate) {
    for (let index = 0; index < timesToRotate; index++) {
       let removedElement = array.shift(array[0]);
       array.push(removedElement);
    }
    console.log(array.join(" "));
}