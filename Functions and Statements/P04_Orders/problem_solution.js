function printOrderPrice(product, productQuantity) {
    switch (product) {
        case "coffee":
            console.log((1.50 * productQuantity).toFixed(2));
            break;
        case "coke":
            console.log((1.40 * productQuantity).toFixed(2));
            break;
        case "water":
            console.log((1.00 * productQuantity).toFixed(2));
            break;
        case "snacks":
            console.log((2.00 * productQuantity).toFixed(2));
            break;
    }
}