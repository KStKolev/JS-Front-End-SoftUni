function cityTaxes(name, population, treasury) {
    const city =  {
        name,
        population,
        treasury,
        taxRate:10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += (this.population * percentage) / 100;
        },
        applyRecession(percentage) {
            this.treasury -= (this.treasury * percentage) / 100;
        }
    }
    return city;
}

const city = cityTaxes('Sofia', 2000000, 1000000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

