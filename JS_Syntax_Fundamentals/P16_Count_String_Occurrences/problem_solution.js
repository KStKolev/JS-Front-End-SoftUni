function printWordOccurrences(text, word) {

    let textArray = text.split(" ");
    let count = 0;
    textArray.forEach(element => {
        if (element == word) {
            count++;
        }
    });

    console.log(count);

}