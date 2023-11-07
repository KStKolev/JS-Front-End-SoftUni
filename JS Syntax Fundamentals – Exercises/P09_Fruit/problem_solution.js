function printFruitPrice(fruitType, fruitGramsWeight, fruitKilogramPrice) { 
    let fruitKilogramWeight = fruitGramsWeight / 1000;
    let fruitPrice = fruitKilogramWeight * fruitKilogramPrice;
    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${fruitKilogramWeight.toFixed(2)} kilograms ${fruitType}.`);
}