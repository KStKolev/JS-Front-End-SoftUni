function getTown(array) {
    const townObjArray = [];
    for (let index = 0; index < array.length; index++) {
        const townProperties = array[index].split(" | ");
        const townObj = {
            town: townProperties[0],
            latitude: parseFloat(townProperties[1]).toFixed(2),
            longitude: parseFloat(townProperties[2]).toFixed(2)
        };
        townObjArray.push(townObj);
    }
    townObjArray.forEach(town => {
        console.log(town);
    });
}

getTown(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);