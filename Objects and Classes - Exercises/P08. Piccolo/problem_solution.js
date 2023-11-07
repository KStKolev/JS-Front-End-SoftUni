function printParkingCarNumbers(carArray) {
    const parkingLot = [];

    class Car {
        constructor(direction, carNumber) {
            this.direction = direction,
            this.carNumber = carNumber
        }
    }

    function findCars(carNumberToBeChecked) {
        const foundCar = parkingLot.find(car => car.carNumber === carNumberToBeChecked);
        return foundCar;
    }

    for (let index = 0; index < carArray.length; index++) {
        const splitCars = carArray[index].split(", ");
        const findCar = findCars(splitCars[1]);
        if (findCar === undefined) {
            parkingLot.push(new Car(splitCars[0], splitCars[1]));
        }
        else {
            findCar.direction = splitCars[0];
        }
    }

    let carsInParkingLot = 0;

    parkingLot.sort((a,b) => {
        if (a.carNumber > b.carNumber) {
            return 1;
        }
        else if (a.carNumber < b.carNumber) {
            return -1;
        } else {
            return 0;
        }
    }).forEach(car => {
        if (car.direction === "IN") {
            carsInParkingLot++;
            console.log(car.carNumber);
        }
    });

    if (carsInParkingLot === 0) {
        console.log("Parking Lot is Empty");
    }
}

printParkingCarNumbers(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);