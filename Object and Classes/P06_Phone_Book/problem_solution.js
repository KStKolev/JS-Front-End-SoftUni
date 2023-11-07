function personPhoneInformation(array) {
    const phoneObj = array.reduce((acc, curr) => {
        const [name, number] = curr.split(" ");
        acc[name] = number;
        
        return acc;
    }, {}) 

    Object.entries(phoneObj).forEach(pair => {
        console.log(`${pair[0]} -> ${pair[1]}`);
    });
}

personPhoneInformation(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);