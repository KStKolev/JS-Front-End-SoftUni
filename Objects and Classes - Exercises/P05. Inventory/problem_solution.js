function getHeroInformation(heroCharacteristics) {
    const heroPropertiesArray = [];

    class Hero {
        constructor(name, level, items) {
            this.name = name,
            this.level = level,
            this.items = items
        }
    }

    for (let index = 0; index < heroCharacteristics.length; index++) {
        const characteristicsSplit = heroCharacteristics[index].split(" / ");
        const heroName = characteristicsSplit[0];
        const heroLevel = Number(characteristicsSplit[1]);
        const itemsInfo = characteristicsSplit.slice(2, characteristicsSplit.length);
        heroPropertiesArray.push(new Hero(heroName, heroLevel, itemsInfo));
    }

    heroPropertiesArray
    .sort((a,b) => a.level - b.level)
    .forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

getHeroInformation([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);