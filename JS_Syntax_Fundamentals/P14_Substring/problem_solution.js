function substringOperation(text, startIndex, indexCount) {
    let substringArray = text.substring(startIndex, startIndex + indexCount);
    console.log(substringArray);
}

substringOperation('ASentence', 1, 8);