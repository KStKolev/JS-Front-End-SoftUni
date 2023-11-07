function printLoadingPercentageBar(number) {
    let quotient = number / 10;
    let array = [];
    if (number !== 100) {
        for (let index = 0; index < quotient; index++) {
            array.push('%');
        }
        for (let index = 10 - quotient; index > 0; index--) {
            array.push('.');
        }
        console.log(`${number}% [${array.join('')}]`);
        console.log("Still loading...")
    }
    else {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}