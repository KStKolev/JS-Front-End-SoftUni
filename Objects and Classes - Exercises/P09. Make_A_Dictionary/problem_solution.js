function makeDictionary(descrpitionArray) {
    const parsedDescription = descrpitionArray.map(element => JSON.parse(element));

    const descriptionObj = parsedDescription.reduce((acc, curr) => {
       const [term] = Object.entries(curr);
        acc[term[0]] = term[1];
        return acc;
    }, {});

    Object.keys(descriptionObj).sort((a,b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }).forEach(key => {
        console.log(`Term: ${key} => Definition: ${descriptionObj[key]}`);
    });
}

makeDictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ']);