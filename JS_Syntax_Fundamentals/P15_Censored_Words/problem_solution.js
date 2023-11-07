function replaceCensoredWord(text, censoredWord) {

    while(text.includes(censoredWord)) {
        text = text.replace(censoredWord, "*".repeat(censoredWord.length));
    }

    console.log(text);

}