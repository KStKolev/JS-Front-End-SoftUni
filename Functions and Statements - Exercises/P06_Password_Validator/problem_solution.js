function passwordValidation(password) {
    let validatorNotification = []; 
    if (password.length < 6 || password.length > 10) {
        validatorNotification.push("Password must be between 6 and 10 characters");
    }
    if (!password.match(/^[A-Za-z|\d]*$/g)) {
       validatorNotification.push("Password must consist only of letters and digits"); 
    }
    if (!password.match(/\d{2,}/g)) {
        validatorNotification.push("Password must have at least 2 digits");
    }

    if (validatorNotification.length == 0) {
        console.log("Password is valid");
    }
    else {
        for (let index = 0; index < validatorNotification.length; index++) {
            console.log(validatorNotification[index])
        }
    }
}