function printCircleArea(number) {
    if(typeof(number) === "number") {
        let circleArea = (number ** 2) * Math.PI; 
        console.log(circleArea.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`);
    }
}