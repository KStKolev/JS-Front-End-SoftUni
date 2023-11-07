function printVacationPrice(numberOfCustomers, customerType, dayOfTheWeek) {

    let totalPrice = 0;

    switch (dayOfTheWeek) {
        case "Friday":
            if (customerType == "Students") {
                totalPrice += numberOfCustomers * 8.45;
                if (numberOfCustomers >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            }
            else if (customerType == "Business") {
                if (numberOfCustomers >= 100) {
                    numberOfCustomers -= 10;
                }
                totalPrice += numberOfCustomers * 10.90;
            }
            else {
                totalPrice += numberOfCustomers * 15;
                if (numberOfCustomers >= 10 && numberOfCustomers <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
        case "Saturday":
            if (customerType == "Students") {
                totalPrice += numberOfCustomers * 9.80;
                if (numberOfCustomers >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            }
            else if (customerType == "Business") {
                if (numberOfCustomers >= 100) {
                    numberOfCustomers -= 10;
                }
                totalPrice += numberOfCustomers * 15.60;
            }
            else {
                totalPrice += numberOfCustomers * 20;
                if (numberOfCustomers >= 10 && numberOfCustomers <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
        case "Sunday":
            if (customerType == "Students") {
                totalPrice += numberOfCustomers * 10.46;
                if (numberOfCustomers >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            }
            else if (customerType == "Business") {
                if (numberOfCustomers >= 100) {
                    numberOfCustomers -= 10;
                }
                totalPrice += numberOfCustomers * 16;
            }
            else {
                totalPrice += numberOfCustomers * 22.50;
                if (numberOfCustomers >= 10 && numberOfCustomers <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}