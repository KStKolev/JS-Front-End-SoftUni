function printPerfectNumber(number) {
    if (number < 0) {
        console.log("It's not so perfect.");
        return;
    }

    let perfectResult = 1;
    for (let index = 2; index <= number; index++) {
        if (number % index === 0) {
            perfectResult += index;
        }        
    }

    if (perfectResult / number === 2) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
}