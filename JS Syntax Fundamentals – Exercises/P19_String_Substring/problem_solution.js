function subStringFind(word, text) {
    let array = text.split(" ");
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toLowerCase();
        if (array[index] == word) {
            console.log(word);
            return;
        }        
    }
    console.log(`${word} not found!`);
}