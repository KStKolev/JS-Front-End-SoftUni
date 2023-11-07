function printProducts(currentStockProducts, orderedDeliveryProducts) {
    const productObj = {};
    const stockObj = getProducts(currentStockProducts, productObj);
    const orderedStock = getProducts(orderedDeliveryProducts, stockObj);

    for (const product in orderedStock) {
        console.log(`${product} -> ${orderedStock[product]}`);
    }

    function getProducts(array, object) {
        while(array.length !== 0) {
            const [name, quantity] = [array.shift(), array.shift()];
            if (!object.hasOwnProperty(name)) {
                object[name] = Number(quantity);
            } else {
                object[name] += Number(quantity);
            }
        }

        return object;
    }
}

printProducts([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    );