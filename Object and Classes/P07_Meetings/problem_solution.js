function printAppoinments(array) {
    const objectAppoinments = array.reduce((acc, curr) => {
        const [weekDay, personName] = curr.split(" ");
        if (acc.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        }
        else {
            console.log(`Scheduled for ${weekDay}`);
            acc[weekDay] = personName;
        }
        return acc;
    }, {})
    
    Object.entries(objectAppoinments).forEach(pair => {
        console.log(`${pair[0]} -> ${pair[1]}`);
    });
}

printAppoinments(['Monday Peter',
'Wednesday Bill', 'Monday Tim',
'Friday Tim']
);