function printCityParameters({name, area, population, country, postCode}) {
    const city = {
        name,
        area,
        population,
        country,
        postCode,
    }
    Object.entries(city).forEach(pair => {
        console.log(`${pair[0]} -> ${pair[1]}`);
    });

    /*const pairsOfCity = Object.entries(city);
    for (const [key, value] of pairsOfCity) {
         console.log(`${key} -> ${value}`);
    }*/
}

printCityParameters({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   });