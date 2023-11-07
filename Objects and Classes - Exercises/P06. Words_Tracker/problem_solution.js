function findWords(wordsArray) {
    const foundWordsArray = [];
    const words = wordsArray.shift().split(" ");

    class Word {
        constructor(name, occurences) {
            this.name = name,
            this.occurences = occurences
        }
    }

    for (let index = 0; index < words.length; index++) {
        foundWordsArray.push(new Word(words[index], 0));
    }

    function findWord(word) {
        const foundWord = foundWordsArray.find(w => w.name === word);
        return foundWord;
    }

    for (let index = 0; index < wordsArray.length; index++) {
        const foundWord = findWord(wordsArray[index]);
        if (foundWord !== undefined) {
            foundWord.occurences += 1;
        }
    }

    foundWordsArray.sort((b,a) => a.occurences - b.occurences).forEach(w => {
        console.log(`${w.name} - ${w.occurences}`);
    });
}

findWords([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    
    );