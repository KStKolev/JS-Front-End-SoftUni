function printSpeedRadar(speedNumber, drivingArea) {
    let status = "";
    let differenceSpeed = 0;
    switch (drivingArea) {
        case "motorway":
            if (speedNumber > 130) {
                differenceSpeed = speedNumber - 130;
                if (differenceSpeed <= 20) {
                    status = "speeding";
                }
                else if (differenceSpeed > 20 && differenceSpeed <= 40) {
                    status = "excessive speeding";
                }
                else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of 130 - ${status}`);
            }
            else {
                console.log(`Driving ${speedNumber} km/h in a 130 zone`);
            }
            break;
        case "interstate":
            if (speedNumber > 90) {
                differenceSpeed = speedNumber - 90;
                if (differenceSpeed <= 20) {
                    status = "speeding";
                }
                else if (differenceSpeed > 20 && differenceSpeed <= 40) {
                    status = "excessive speeding";
                }
                else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of 90 - ${status}`);
            }
            else {
                console.log(`Driving ${speedNumber} km/h in a 90 zone`);
            }
            break;
        case "city":
            if (speedNumber > 50) {
                differenceSpeed = speedNumber - 50;
                if (differenceSpeed <= 20) {
                    status = "speeding";
                }
                else if (differenceSpeed > 20 && differenceSpeed <= 40) {
                    status = "excessive speeding";
                }
                else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of 50 - ${status}`);
            }
            else {
                console.log(`Driving ${speedNumber} km/h in a 50 zone`);
            }
            break;
        case "residential":
            if (speedNumber > 20) {
                differenceSpeed = speedNumber - 20;
                if (differenceSpeed <= 20) {
                    status = "speeding";
                }
                else if (differenceSpeed > 20 && differenceSpeed <= 40) {
                    status = "excessive speeding";
                }
                else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of 20 - ${status}`);
            }
            else {
                console.log(`Driving ${speedNumber} km/h in a 20 zone`);
            }
            break;
    }
}