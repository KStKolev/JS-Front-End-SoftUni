function getEmployeePersonalNumber(array) {
    const employeeArray = [];

    for (let index = 0; index < array.length; index++) {
        const employeeObj = {
            name: array[index],
            number: array[index].length
        };
        employeeArray.push(employeeObj);
    }

    employeeArray.forEach(obj => {
        console.log(`Name: ${obj['name']} -- Personal Number: ${obj['number']}`);
    });
}

getEmployeePersonalNumber([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);