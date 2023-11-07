function extract(content) {
    const elementText = document.querySelector(`#${content}`);
    const matchWords = /\([a-zA-z ]+\)/gm;
    let matchedWords = elementText.textContent.match(matchWords);
    return matchedWords.join("; ");
}