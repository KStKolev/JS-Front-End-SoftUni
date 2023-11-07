function personAddress(array) {
    const addressObj = array.reduce((acc, curr) => {
        const [name, address] = curr.split(":");
        acc[name] = address;

        return acc;
    }, {})

    Object.entries(addressObj)
    .sort()
    .forEach(pair => {
        console.log(`${pair[0]} -> ${pair[1]}`);
    })
}

personAddress(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);