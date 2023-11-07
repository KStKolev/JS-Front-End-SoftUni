function revealWords(words, text) {
    array = words.split(', ');
    textSplit = text.split(' ');
    for (let index = 0; index < textSplit.length; index++) {
        if (textSplit[index].startsWith('*')) {
            let lengthOfWord = textSplit[index].length;
            for (let secondindex = 0; secondindex < array.length; secondindex++) {
                if (array[secondindex].length == lengthOfWord) {
                    textSplit[index] = array[secondindex];
                }
            }
        }        
    }
    console.log(textSplit.join(" "));
}